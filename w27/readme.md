#w27 - KUBERNETES (primarily used to deploy apps, introduced by google)

Kubernetes is an open-source platform for automating the deployment, scaling, and management of containerized applications. It organizes containers into logical units for easy management and discovery, and provides features like load balancing, self-healing, automated rollouts and rollbacks, and service discovery. Kubernetes is widely used for orchestrating containers in cloud-native environments.
it is a cloud native technology
**container orchestration  

before k8s:
1) load-balancer and auto scaling backend ec2 machines
2) react apps through cdn
3) directly hitting server no load-balancer


container is execution unit in docker
in k8s, u start pod(abstraction) inside which u run multiple containers

cluster has nodes(every machine is known as node - master node and worker node) it has pods which has multiple containers which runs images pulled from dockerhub

worker is ec2 instance

master node has 1) api server(here u send requests, expose http server) 2) kube-scheduler(finds the node) 3)etcd(distributed key-value store, similar to redis) 4) kube-controller-manager(runs bunch of smaller controllers)

worker node has 1)container runtime 2)kubelet(process which runs on ebvery worker node hits api server if there is something needed to run) 3) kube-proxy

developer decides how many containers run inisde 1 pod

containers within a pod share same ip address

**REPLICA

A replica just means a copy of a Pod.

For example, if you say replicas: 3 in a Deployment/ReplicaSet spec, it means:

“Run 3 identical copies (replicas) of this Pod.”

So replica = instance of a Pod.

**REPLICASET
A ReplicaSet in Kubernetes ensures that a specified number of Pod replicas are running at any given time.

If a Pod crashes or gets deleted → ReplicaSet creates a new one.

If there are too many Pods → ReplicaSet kills the extra ones.

It’s like a controller that maintains Pod count.

we can start pods in master node but isnt advisable

benefits of running many containers in same pod:
lot of times we have applications trying to talk to each other 

**DEPLOYMENT

A Deployment in Kubernetes is a higher-level abstraction that manages Pods (the smallest deployable unit) and ensures your application is running reliably.

It allows you to:

Deploy applications declaratively (define the desired state in YAML/JSON).

Scale applications up or down (increase/decrease number of replicas).

Perform rolling updates (update the app without downtime).

Rollback to a previous version if something goes wrong.


autoscaling grp auto scale ur servers
k8s is container is container orchestration

replica=5, means they get distributed across various nodes v


**Downsides of services

1) if u have mutiple applications, u need multiple services

controller manager runs bunch of controllers 

ingress(api obj that manages external access to the service in a cluster typically http, provides load balancing) controller


**Namespaces 
A Namespace in Kubernetes is like a virtual cluster inside a physical cluster.

It lets you logically group and isolate Kubernetes resources (Pods, Services, Deployments, etc.) within the same cluster

kubectl get pods 


23/08
kubernetes architecture:-

kuberntes cluster inside then nodes inside pods are containers(similar to docker container) 


**ConfigMap-
A ConfigMap is a Kubernetes object used to store configuration data (like environment variables, config files, command-line arguments) separately from your container images.

👉 This follows the 12-factor app principle: keep config separate from code.

So instead of baking config into your Docker image (which makes it hard to change), you can keep it in a ConfigMap, and inject it into Pods at runtime.



19/09
horizontal pod autoscaler
automatically inc no. of pods(replica no has been hardcoded till now) if demand increase, npt inc size of pod 

What it does:
HPA automatically adjusts the number of Pods in a Deployment, StatefulSet, or ReplicaSet based on observed metrics (like CPU or memory usage, or even custom metrics).

Example scenario:
If your web app is under heavy traffic and CPU usage per pod goes above a threshold (say 80%), HPA will create more pods to handle the load.
When traffic reduces, it scales down pods to save resources.

How it works:

Monitors metrics from the Kubernetes Metrics API.

Compares current value with desired target.

Decides whether to scale up/down the number of pods.

example hpa
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: webapp-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: webapp
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 80
autoscaling is bad if u have spikey workloads

node autoscaling
