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