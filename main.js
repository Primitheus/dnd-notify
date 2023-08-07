const request = require('request');
const sound = require("sound-play");

const chalk = require("chalk");

const success = chalk.green;
const time = chalk.magenta;
const fail = chalk.red;


// URL to refresh
const url = 'http://darkanddarker.com/';


// Function to make a request to the URL and check for JSON data
async function refreshAndCheck() {

    let date = new Date();

    request(url, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        try {
          const data = JSON.parse(body);
          // Play notification
          console.log(time('[' + date.toLocaleTimeString() + ']'), success('Dark and Darker Playtest #5 Online!'));
          sound.play('C://sound.mp3');
        } catch (e) {
          console.error(e);
        }
      } else {
        console.log(time('[' + date.toLocaleTimeString() + ']'), fail("Dark and Darker Playtest #5 is still offline."));
      }
    });
  };
  

// Refresh in milliseconds (5 minutes).
refreshAndCheck();
setInterval(refreshAndCheck, 300000);
