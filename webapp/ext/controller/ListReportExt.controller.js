sap.ui.define([], function () {
	return sap.ui.controller("hab.zvaadfvk00004.ext.controller.ListReportExt", {
		
		onInit: function () {},
		
		onAfterRendering: function () {
			this.newFilterDate();
		},

		newFilterDate: function () {
			var listReport = this.getView().byId("fe::ListReport");

			if (new Date().getHours() > 19) {
				var today = new Date();
				today.setDate(new Date().getDate()+1);
				var todayFormat = today.toDateString().split(" ")[1] + " " + today.toDateString().split(" ")[2] + ", " + today.toDateString().split(" ")[3];
			} else {
				var today = new Date();
				var todayFormat = today.toDateString().split(" ")[1] + " " + today.toDateString().split(" ")[2] + ", " + today.toDateString().split(" ")[3];
			}

			//init default value
			listReport.getContent().getController().getExtensionAPI().setFilterValues("ValidFrom", "FROM", todayFormat);
			listReport.getContent().getController().getExtensionAPI().setFilterValues("ValidTo", "TO", todayFormat);
		}

	});
});

/*
newFilterDate: function () {
	var listReport = this.getView().byId("fe::ListReport");
	var listReportFilter = this.getView().byId("fe::FilterBar::CustomerMessage");
	var validFromFilter = this.getView().byId("fe::FilterBar::CustomerMessage::FilterField::ValidFrom");
	var validToFilter = this.getView().byId("fe::FilterBar::CustomerMessage::FilterField::ValidTo");

	if (new Date().getHours() > 19) {
		var today = new Date();
		today.setDate(new Date().getDate()+1);
		var todayFormat = today.toDateString().split(" ")[1] + " " + today.toDateString().split(" ")[2] + ", " + today.toDateString().split(" ")[3];
		//var oFilter = new sap.ui.model.Filter("ValidFrom", sap.ui.model.FilterOperator.Contains, today);
		//var oFilter = new sap.ui.model.Filter("ValidTo", sap.ui.model.FilterOperator.Contains, today);
	} else {
		var today = new Date();
		var todayFormat = today.toDateString().split(" ")[1] + " " + today.toDateString().split(" ")[2] + ", " + today.toDateString().split(" ")[3];
		//var oFilter = new sap.ui.model.Filter("ValidFrom", sap.ui.model.FilterOperator.Contains, today);
		//var oFilter = new sap.ui.model.Filter("ValidTo", sap.ui.model.FilterOperator.Contains, today);
	}
	
	validFromFilter.setContent(new sap.m.DatePicker({ value: todayFormat, width: "100%"}));
	validToFilter.setContent(new sap.m.DatePicker({ value: todayFormat, width: "100%"}));

	//init default value
	var formatDateForFilterFrom = validFromFilter.getContent().getDateValue().toLocaleDateString().split("/")[2] + "-" + validFromFilter.getContent().getDateValue().toLocaleDateString().split("/")[1] + "-" + validFromFilter.getContent().getDateValue().toLocaleDateString().split("/")[0];
	var formatDateForFilterTo = validToFilter.getContent().getDateValue().toLocaleDateString().split("/")[2] + "-" + validToFilter.getContent().getDateValue().toLocaleDateString().split("/")[1] + "-" + validToFilter.getContent().getDateValue().toLocaleDateString().split("/")[0];
	
	listReport.getContent().getController().getExtensionAPI().setFilterValues("ValidFrom", "GE", formatDateForFilterFrom);
	listReport.getContent().getController().getExtensionAPI().setFilterValues("ValidTo", "LE", formatDateForFilterTo);

	validFromFilter.attachChange(function (evn) {
		if (validFromFilter.getContent().getDateValue() != null) {
			var formatDateForFilter = validFromFilter.getContent().getDateValue().toLocaleDateString().split("/")[2] + "-" + validFromFilter.getContent().getDateValue().toLocaleDateString().split("/")[1] + "-" + validFromFilter.getContent().getDateValue().toLocaleDateString().split("/")[0];
			//listReport.getContent().getContent()._oTable.getBinding("items").filter((new sap.ui.model.Filter("ValidFrom", sap.ui.model.FilterOperator.GE, formatDateForFilter)));
			listReport.getContent().getController().getExtensionAPI().setFilterValues("ValidFrom", "GE", formatDateForFilter);
		}
	}.bind(this));

	validToFilter.attachChange(function (evn) {
		if (validToFilter.getContent().getDateValue() != null) {
			var formatDateForFilter = validToFilter.getContent().getDateValue().toLocaleDateString().split("/")[2] + "-" + validToFilter.getContent().getDateValue().toLocaleDateString().split("/")[1] + "-" + validToFilter.getContent().getDateValue().toLocaleDateString().split("/")[0];
			//listReport.getContent().getContent()._oTable.getBinding("items").filter((new sap.ui.model.Filter("ValidTo", sap.ui.model.FilterOperator.LE, formatDateForFilter)));
			listReport.getContent().getController().getExtensionAPI().setFilterValues("ValidTo", "LE", formatDateForFilter);
		}
	}.bind(this));

	listReportFilter.attachSearch(function (evn) {
	}.bind(this));
}
*/