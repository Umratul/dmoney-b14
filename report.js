const newman = require('newman');
require('dotenv').config();

newman.run({
    // collection:`https://api.postman.com/collections/42848126-4077aaa4-56f1-4520-842b-4f3a909acd17?access_key=${process.env.access_key}`,
    collection:require('./collection/dmoney-user-api-collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: "./Reports/report.html",
        }
    }
}, function (err) {
    if (err) {throw err; }
    console.log('collection run complete!');
});