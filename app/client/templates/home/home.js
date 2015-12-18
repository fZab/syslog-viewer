var options = {
  keepHistory: 1000 * 60 * 5,
  localSearch: true
};
var fields = ['host', 'message'];

LogSearch = new SearchSource('logs', fields, options);

/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
		logs : function() {
			return Logs.find();
		},
		getLogs: function() {
	    return LogSearch.getData({
	      transform: function(matchText, regExp) {
	        return matchText.replace(regExp, "<b>$&</b>")
	      },
	      sort: {isoScore: -1}
	    });
	  },
	  
	  isLoading: function() {
	    return LogSearch.getStatus().loading;
	  }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.rendered = function () {
	//LogSearch.search('');
};

Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
	
});

Template.Home.onDestroyed(function () {
});
