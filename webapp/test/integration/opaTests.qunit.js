sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'hab/zvaadfvk00004/test/integration/FirstJourney',
		'hab/zvaadfvk00004/test/integration/pages/CustomerMessageList',
		'hab/zvaadfvk00004/test/integration/pages/CustomerMessageObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomerMessageList, CustomerMessageObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('hab/zvaadfvk00004') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomerMessageList: CustomerMessageList,
					onTheCustomerMessageObjectPage: CustomerMessageObjectPage
                }
            },
            opaJourney.run
        );
    }
);