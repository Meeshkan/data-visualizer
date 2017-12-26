import fs from 'fs';
import path from 'path';
import _ from 'lodash';

export default function loadInfo() {
  return new Promise((resolve) => {
    const walkSync = dir => _.flattenDeep((fs.statSync(dir).isDirectory() ? fs.readdirSync(dir).map(fi => walkSync(path.join(dir, fi))) : [dir && dir.substring(0,9) === 'meeshkan/' ? dir : null]).filter(fi => fi !== null));
    const res = walkSync('.');
    resolve({
      message: `Length of walk sync: ${res.length}`,
      time: Date.now()
    });
  });
}
