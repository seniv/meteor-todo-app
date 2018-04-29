import { Meteor } from 'meteor/meteor';
import '../imports/api/tasks.js';
import { ServiceConfiguration } from 'meteor/service-configuration';

ServiceConfiguration.configurations.upsert(
  { service: 'facebook' },
  {
    $set: {
      loginStyle: "popup",
      appId: "2042860885929314", // See table below for correct property name!
      secret: "3cbf5dbfcf40b90a44fe84fb9f69273e"
    }
  }
);

Meteor.startup(() => {
  // code to run on server at startup
});
