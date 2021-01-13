Live site: https://yoga.solmazmohadjer.com/
REST endpoint for teacher: https://yoga.solmazmohadjer.com/node/solmaz
Repository: https://github.com/smohadjer/yoga.solmazmohadjer.com

Content folder is deployed via a github hook to live server after every commit.

##Requirements:
PHP 5.6.28
nodejs

## Running Website on localhost
- $ git clone repository
- $ npm install
- $ bower install
- $ gulp serve

## Building Website on localhost
- $ gulp build

## Running Rest API
- Rest api is run via a node script that listens to a specified port. The script should be run using pm2 with autostart on live server so that restarting server does not break the api. If pm2 is not installed on live server ssh as root and run: npm install pm2 -g
- Once pm2 is installed cd into api folder and run: pm2 start server.js and then run pm2 autostart
- Now you need to update your virtual host settings for Apache so that requests to /node are forwarded via a reverse proxy to the port on localhost that nodejs script is listening on it. See this gist for instructions: https://gist.github.com/smohadjer/3f36be26ec719a7c93a452293085d062

## First time deployment to live server
- Add a domain in plesk with correct username for new Website
- $ gulp build and then copy built files from dist folder to Website's root folder via ftp
- ssh username@83.169.4.180
- cd /var/www/vhosts/solmazmohadjer.com/app
- $ git init
- $ npm install chokidar moment handlebars
- if there is no .ssh folder in user's home directory run $ ssh-keygen to create ssh files and then
copy user's public ssh key to bitbucket repo and also run ssh -T git@bitbucket.org to add bitbucket's publick ssh key to your known_hosts in .ssh folder
- To generate nodejsPath.php on server go to /var/www/vhosts/solmazmohadjer.com/yoga.solmazmohadjer.com and run: ./app/nodejsPath.sh  (./<fileName> runs a shell script). If you get a "Keine Berechtigung" error, then it could that nodejsPath.sh is not executable. In that case run: chmod +x nodejsPath.sh to make it executable.

##Updating live site
- Content folder is deployed automatically via webhook that is invoked by commits.
- Development resources are updated manually via sftp from dist folder after running gulp build.

##Find out which port to use for running nodejs server
1. SSH to server and run "iptables -L -n" to find out which ports are not blocked by firewall.
2. Run "netstat -lntp" to see which tcp ports have something listening on them.
3. Any port that is not blocked by firewall and has nothing listening on it can be used for running nodejs server.

##Tips for developer
- To find out which user is running php, create a php file with content <?php echo exec('whoami'); ?> and open it in browser. You can create the fie in terminal using this command:
$ echo '<?php echo exec('whoami'); ?>' > whoami.php
- If you can't access Website in browser, check site logs in Plesk. It can be that .htaccess is missing or the site folder doesn't have executive permission. Use $ chmod 755 folderName to set folder permission to drwxr-xr-x.
- Use $ ps -ef to see list of the currently running processes on server. Find the process you are looking for, and look at the 2nd column (process id or pid). Then use: kill <pid> to kill the process.
