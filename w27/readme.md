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