import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const hack = (arr, v) => {
  const lo = _.max(arr.filter(x => x[0] <= v), x => x[0]) || arr[0]
  const hi = _.min(arr.filter(x => x[0] > v), x => x[0]) || _.last(arr);
  if (lo[0] === hi[0]) {
    return lo;
  }
  const m = (hi[1] - lo[1]) / (hi[0] - lo[0])
  const b = hi[1] - (hi[0] * m);
  return [v, m * v + b];
}

export default function loadInfo() {
  return new Promise((resolve) => {
    const walkSync = dir => _.flattenDeep((fs.statSync(dir).isDirectory() ?
    fs.readdirSync(dir).map(fi => walkSync(path.join(dir, fi))) : [
      dir && dir.substring(0,9) === 'meeshkan/' && _.last(_.last(dir.split('/')).split('.')) === 'json' ?
      dir :
      null
    ]).filter(fi => fi !== null));
    // hardcodes STEP for now
    const STEP = 0.01
    const res =   _.fromPairs(_.toPairs(
          _.groupBy(
            walkSync('.')
            .map(fi => [
              fi.split('/')
              .slice(0,-1)
              .join('/'),
              JSON.parse(
                fs.readFileSync(fi).toString())]),
            _.first)).map(x => [
            x[0],
            x[1]
            .map(y => y[1])
            .sort((a,b) => (a.epoch * 10000 + a.offset / 10000) - (b.epoch * 10000 + b.offset / 10000))]).map(arrr =>
              [
                arrr[0],
                _.range(0,arrr[1].map(x=>x.epoch).reduce((a,b) => a < b ? b : a, 0) + 1, STEP) .map(val =>
                hack(arrr[1].map(obj => Object.assign(
                  {},
                  obj,
                  {offset: obj.offset / (arrr[1][1].offset * arrr[1].filter(j => j.epoch === 0).length)})).map(obj => ([obj.epoch + obj.offset, obj.result[0]])),
                  val)).map(x => x[1])
              ]
            ));
    resolve({
      data: res
    });
  });
}
