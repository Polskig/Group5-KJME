### DOOR-LIGHT PROTOTYPING ###

This digital prototyping was made with http://johnny-five.io/.

A Javascript robotics and IoT platform that is incredible and easy to use with great documentation.

#INSTALL#

To Install Johnny five you need to:

Have an arduino board 
(specifics here: https://github.com/rwaldron/johnny-five/wiki/Getting-Started)

Write commands in terminal:

# IF MAC #

Have Node.js Installed and also Xcode.

# IF WINDOWS #

Have Node.js installed
Make sure to install python with 
npm --add-python-to-path install --global --production windows-build-tools.

If the requirements above are met, you simply type:
npm install -g node-gyp
Into the selected file


and most importantly:
npm install johnny-five


### THE ARDUINO BOARD ###

Firmata is a required library that should be pre-installed but sometimes it isn't. This isn't a part of the installation process for the project itself to work but could also NOT work due to this.

Check your board by going to Arduino.cc > Libraries > Firmata.
Upload the Firmata code to your board through the online editor.

### HELLO, WORLD!  Installation for Johnny five ###

After installing this great thing, the magic happens in the selected file you've put your code in, meaning:

If you've installed the required modules in the correct file (npm install) (first level) and in public (npm install johnny-five), the demo should be ready to go.

The code for this project is written in app.js. In terminal, please navigate to the public folder.

 Make sure the board is plugged into your host machine. Now, in your terminal, type or paste the following:

 node app.js

 You'll get feedback through the terminal, and on the webpage you should be able to try it with some cross device websocketin'!.
