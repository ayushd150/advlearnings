Monitoring is about observing a system in real-time to make sure it’s healthy, performing well, and available.
grabbing all metrics on a website

prometheus - time-series database used to monitor , creates graphs for numerical values
poll a bunch of stats and store on its side, visualise these stats on prometheus ui
runs on  a single machine, not distributed in nature
and grafana


types of metrics :-
counter - calculating the number of requests, always increases(no. of req per s , no of exceptions)
gauge - it goes both up and down(no. of memory usage, cpu usage)
histogram(cumulative- we dont create range buckets) - let you store data in various buckets in cumulative fashion, we care abt which bucket a specific http_response_time lie in , we dont care about the information loss

| Metric Type | Behavior                           | Examples                                       |
| ----------- | ---------------------------------- | ---------------------------------------------- |
| **Counter** | Increases only (resets on restart) | Requests served, errors, tasks completed       |
| **Gauge**   | Increases and decreases            | CPU %, memory usage, queue length, temperature |

tgere can be more than 1 active requests

Why not just use Gauge for everything?

Because semantically they’re different types of measurements:

Accuracy & intent

A Gauge doesn’t enforce monotonicity—your code could mistakenly decrease it even when it shouldn’t.

A Counter makes it explicit: “this metric should only increase.” Monitoring systems can catch misuse.

Aggregation & queries

When aggregating across multiple instances, Counters make sense for totals ("how many requests overall").

Gauges make sense for states ("what’s the average memory usage right now").

Rate calculations

Prometheus, for example, has functions like rate(http_requests_total[5m]) that only work properly with Counters.

Gauges don’t work for this since they don’t store cumulative info.