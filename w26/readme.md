Monitoring is about observing a system in real-time to make sure it’s healthy, performing well, and available.
grabbing all metrics on a website

prometheus - time-series database used to monitor , creates graphs for numerical values
poll a bunch of stats and store on its side, visualise these stats on prometheus ui
runs on  a single machine, not distributed in nature
and grafana


types of metrics :-
counter - calculating the number of requests
gauge
histogram

| Metric Type | Behavior                           | Examples                                       |
| ----------- | ---------------------------------- | ---------------------------------------------- |
| **Counter** | Increases only (resets on restart) | Requests served, errors, tasks completed       |
| **Gauge**   | Increases and decreases            | CPU %, memory usage, queue length, temperature |

tgere can be more than 1 active requests