Live site: http://yoga.solmazmohadjer.com/
Repository: https://github.com/smohadjer/yoga.solmazmohadjer.com

##Requirements:
PHP 5.6.28
nodejs
- - -

## Running Website on localhost
- $ git clone repository
- $ npm install
- $ bower install
- $ gulp serve

## Building Website on localhost
- $ gulp build

## Running api on localhost
- CD to app folder in terminal (/Users/sm/Documents/solmaz/yoga.solmazmohadjer.com/app)
- Run: node api/server
- In browser go to http://localhost:12443/node/solmaz to see next class for teacher solmaz

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
- Content resources (all files inside content folder) will be deployed automatically via webhook that triggers whenever repo receives a push. Deployment script taken from: https://github.com/markomarkovic/simple-php-git-deploy
- Development resources are updated manually via ftp from dist folder after every new build.
- - -

##Find out which port to use for running nodejs server
1. SSH to server and run "iptables -L -n" to find out which ports are not blocked by firewall.
2. Run "netstat -lntp" to see which tcp ports have something listening on them.
3. Any port that is not blocked by firewall and has nothing listening on it can be used for running nodejs server.

You have 3 options for running app/api/server.js on remote server:
1. Use nohup command base on: https://unix.stackexchange.com/questions/479/keep-ssh-sessions-running-after-disconnection
- ssh to server and cd to /var/www/vhosts/solmazmohadjer.com/yoga.solmazmohadjer.com/app/
- run: nohup node api/server &
- Now exit ssh and open http://yoga.solmazmohadjer.com:12443/node/solmaz in browser to see if rest is working.
2. Use linux screen to run a nodejs script on server during ssh session so that it doesn't stop running after ssh session is closed. For how to use screen: https://www.rackaid.com/blog/linux-screen-tutorial-and-how-to/
3. Install and use forever
- To install: npm install -g forever
- Then cd to app folder and run: forever start -w api/server.js (this will watch server.js for changes and will restart it if it stops running)

##Tips for developer
- To find out which user is running php, create a php file with content <?php echo exec('whoami'); ?> and open it in browser. You can create the fie in terminal using this command:
$ echo '<?php echo exec('whoami'); ?>' > whoami.php
- If you can't access Website in browser, check site logs in Plesk. It can be that .htaccess is missing or the site folder doesn't have executive permission. Use $ chmod 755 folderName to set folder permission to drwxr-xr-x.
- Use $ ps -ef to see list of the currently running processes on server. Find the process you are looking for, and look at the 2nd column. 2nd column is process id or pid. Then do kill <pid> to kill that particular process.

- - -

##Tips for content editor
- When adding a new session to schedule.json, add the "class-id" of new session to "active-classes” property at the top of the json. If id of a session is not set in this property we consider that session to be inactive and hence won’t show it on homepage.
- When creating a class page for a new session, use the "class-id" of session for name of class page. For example if class-id is "hatha-at-yogaraum", then class page should be named "hatha-at-yogaraum.html".
