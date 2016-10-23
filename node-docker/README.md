#Before you need:

##Installing Docker:

$> curl -fsSL https://get.docker.com/ | sh
After installing Docker:

A user needs to be added to the docker group.

$> sudo usermod -aG docker
The docker daemon needs to be started3

$> sudo service docker start
You can set the daemon to start at boot

$> sudo chkconfig docker on
You can verify the docker service is running

$> service docker status
And one last final check

#Creating a image

##For to build the image:
$> docker build -t my_node_app .

#Running you app

##For run the image use this command
$> docker run my_node_app

##For get ip from container
$> docker ps
$> docker inspect --format '{{ .NetworkSettings.IPAddress }}'

#Testing API
$> curl -X GET 172.17.0.2:9010/app
