# KCDC15 - Introduction to Ember.js - The Code

Below you will find the default readme that get's added in via Ember-CLI.  Read through the instructions to get the project up and running.  

Once you have the project running, you will notice when viewing pages that the cross origin calls to kcdc.info's services are being blocked. (No 'Access-Control-Allow-Origin' header is present on the requested resource.) I am going on assumption that KCDC won't mind the small amount of traffic from your local box to test this example out, since the amount of users actively testing it would be small. If they tell me it's not cool, I will adjust accordingly in this repo.

In order to bypass this, you can simply startup chrome from the command line with some security features removed to get it working: 

  `open -a Google\ Chrome\ Canary --args --disable-web-security -–allow-file-access-from-files`

I would recommend using a different install of Chrome, rather then your daily driver.  If you forget that you started up your normal Chrome browser with those options, you could visit some site that could introduce some problems to your computer.  I use the Chrome Canary build for this.

NOTE: If someone would like to submit a pull request that uses Express inside the build to proxy out those calls, please do.  

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

