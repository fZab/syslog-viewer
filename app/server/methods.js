/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'server\method_name': function () {
    // server method logic
  },
  'clearLogs': function() {
  	Logs.remove({});
  }
});
