# feathers-sms

> Use SMS with Plivo from the web

## About

This project uses [Feathers](http://feathersjs.com) and [Plivo](http://plivo.com). Feathers is an open source web framework for building modern real-time applications. Plivo is a voice and messaging platform enables businesses to create and deliver better customer experiences.

## Getting Started



1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install the dependencies

    ```
    cd path/to/feathers-sms
    npm install
    ```
3. Setting id and secret keys can be done in the `/src/messages/messages.class.js` file directly by replacing the three values shown below. 

    ````js
    let client = new plivo.Client(process.env.PLIVO_ID, process.env.PLIVO_SECRET);
    let plivoNumber = process.env.PLIVO_NUM;
    ````
Exporting the values before starting the app is also an option:
`export PLIVO_ID=xxxxxxxxxx`

4. Start the app

    ```
    npm start
    ```

    Go to http://localhost:3030 to try the application.
    

## Testing

Simply run `npm test` and all the tests in the `test/` directory will be run. Quick note on testing: The tests will use the same port that is used when running the server locally. You'll need to stop the local running version or you'll see some failing tests.

## Real Time Messages and Message Storage

This application is built with websockets to create a realtime system. Open a second browser window or even an incognito browser to see messages appear across sessions. 

A hosted version of this system can be seen here:

https://sms-sandbox.aaronmontana.com/

Since it is leveraging account environment variables tied to my personal Pilvo account - only my personal cell phone is registered for recieve messages. Contact me for that number or to have your number added.

## Help

If you have any questions  - please reach out to me at aaronmontana@gmail.com
