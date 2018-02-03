# angular-stickynote
Simple applicaton to store small notes.

This project is developed using angular5 and cordova.

You can check deployed app here `https://play.google.com/store/apps/details?id=io.loksa.myquicknotes`.

## Setup

To setup this application locally, you'll have to clone the repository and install all the required libraries and plugins.

__NOTICE__: make sure you have the latest [Angular Cli](https://github.com/angular/angular-cli) and [Cordova CLI](https://cordova.apache.org/#getstarted) installed.

`npm install -g @angular/cli`
`npm install -g ionic cordova`

Angular Setup:

- `git clone https://github.com/lokeshdaiya/angular-stickynote`
- `cd angular-stickynote`
- `npm install`

Cordova Setup:
- `cd app`
- `cordova platform add`

Cordova app has dependecy on [SpeechRecognitionPlugin](https://github.com/macdonst/SpeechRecognitionPlugin) so make sure its added.

After successfully executing these commands, your application is all ready to be built and deployed to the platform of your choice.

Build:
- `npm run build:prod`
- `cordova build android`

