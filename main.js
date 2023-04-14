const request = require('request');
const sound = require("sound-play");

const chalk = require("chalk");

const success = chalk.green;
const fail = chalk.red;


// URL to refresh
const url = 'http://live-server.darkanddarker.net:30000/dc/helloWorld';

// Function to make a request to the URL and check for JSON data
const refreshAndCheck = () => {
    request(url, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        try {
          const data = JSON.parse(body);
          // Play notification
          console.log(success("[SUCCESS] Dark and Darker Playtest #5 Online!"));
          sound.play('C://sound.mp3');
        } catch (e) {
          console.error(e);
        }
      } else {
        console.log(fail("[FAIL] Dark and Darker Playtest #5 is still offline."));
      }
    });
  };
  


// Refresh and check every 5 Minutes
setInterval(refreshAndCheck, 300000);