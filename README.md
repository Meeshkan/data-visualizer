# Meeshkan Data Visualizer

## About

You've done some Machine Learning on the Meeshkan network, now let's see the results!

* First, run your job on Meeshkan and download the resulting Python script.
* Then, clone this repo from github.
* Create a directory in the root of this project called "meeshkan" and place your Python script in that directory.
* Run the python script to download your results, i.e. `python whatever-my-file-name-is.py`.
* As the results are downloading, just run `npm install && npm build && npm run start` and navigate to localhost:8080 in your favorite browser.  You'll see your Machine Learning results come to life!  You can refresh the results as the download continues to see the chart update in realtime.

Currently, this only plots the loss of your model over time (hopefully it is going down, which means you're learning).  In the near future, we plan to add other parameters such as accuracy.

Mad props to Erik Rasmussen for his well-documented `react-redux-universal-hot-example`, which served as a basis for this visualizer.

