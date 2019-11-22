# Toppel - Online RPG Manager
## Description
Toppel is an ongoing project to build a web application used to supplement RPGs.  It incorporates container technology and modern web frameworks to allow advanced robust UI/UX and easy portability.  Ultimately it should be able to be easily deployable to Heroku or AWS.

## Build Directions
### Dependencies
The project is built using Docker which simplifies the host dependency requirements.  You'll want to install Docker using the preferred method for your operating system.  Here are some examples:

#### Linux:
##### APT (Ubuntu, Debian, Elementary, Deepin, etc)
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu <codename> stable"
sudo apt install docker-ce docker-compose
```
**__NOTE:__** Replace `<codename>` with your OS codename(xenial, bionic, etc)
##### YUM (Pre 8 CENTOS and RHEL)
```
sudo yum-utils device-mapper-persistent-data lvm2 epel-release
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install docker-ce docker-compose
```
##### DNF (8+ CENTOS and RHEL, FEDORA)
```
sudo dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo
sudo dnf install docker-ce docker-compose
```
##### PACMAN (Arch, Manjaro)
```
sudo pacman -Sy docker docker-compose
```
You will probably want to **add your user to the docker group** to avoid having to use sudo for everything.  You can do that by using the command `sudo usermod -aG docker $(whoami)`

**__NOTE:__** You will have to log out and log back in to process the user group change on your account.

### Host Configuration

#### Enable Docker
```
sudo systemctl enable docker
sudo systemctl start docker
```
#### Clone Repository
```
git clone https://gitlab.com/jardon/toppel.git /path/to/desired/destination
```
**__NOTE:__** You can omit the path if you want to clone it to the current directory

### Run Instance
```
cd /path/to/cloned/repo
docker-compose up -d
```
**__NOTE:__** You can omit the `-d` flag if you do not want to run detached.

## Rebuilding Project
```
docker stop $(docker ps -a -q)
docker system prune -af
docker-compose up
```
