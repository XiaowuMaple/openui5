/*!
 * ${copyright}
 */

// Provides class sap.ui.unified.calendar.CustomYearPicker
sap.ui.define([
	"sap/ui/core/Renderer",
	"sap/ui/unified/Calendar",
	"sap/ui/unified/CalendarRenderer",
	"sap/ui/unified/calendar/CalendarDate",
	"sap/ui/unified/calendar/Header",
	"sap/ui/unified/DateRange"
],
	function(
		Renderer,
		Calendar,
		CalendarRenderer,
		CalendarDate,
		Header,
		DateRange
	) {
	"use strict";

	var CustomYearPickerRenderer = Renderer.extend(CalendarRenderer);
	CustomYearPickerRenderer.apiVersion = 2;

	var CustomYearPicker = Calendar.extend("sap.ui.unified.internal.CustomYearPicker", {
		metadata: {
			library: "sap.ui.unified"
		},
		renderer: CustomYearPickerRenderer
	});

	/*
	 * Possible values for the "_currentPicker" aggregation: yearPicker.
	 */

	CustomYearPicker.prototype.init = function(){
		Calendar.prototype.init.apply(this, arguments);
		this.setProperty("_currentPicker", "yearPicker");
		this._bNamesLengthChecked = true;
	};

	CustomYearPicker.prototype.onBeforeRendering = function () {
		var oFirstCYPSelDate = this.getSelectedDates()[0],
			oFocusedCalDate = new CalendarDate(this._getFocusedDate()),
			oYearPicker = this._getYearPicker(),
			oCYPSelCalDate;

		oFocusedCalDate.setMonth(0, 1);

		if (oFirstCYPSelDate.getStartDate()) {
			oCYPSelCalDate = CalendarDate.fromLocalJSDate(oFirstCYPSelDate.getStartDate());
			oCYPSelCalDate.setMonth(0, 1);

			if (oFocusedCalDate.isSame(oCYPSelCalDate)) {
				oYearPicker.setDate(oFirstCYPSelDate.getStartDate());
			}
		} else {
			oYearPicker.setProperty("_middleDate", this._getFocusedDate());
		}

		Calendar.prototype.onBeforeRendering.call(this, arguments);
	};

	CustomYearPicker.prototype.exit = function(){
		Calendar.prototype.exit.apply(this, arguments);
		if (this._fnYPDelegate) {
			this.getAggregation("yearPicker").removeDelegate(this._fnYPDelegate);
		}
	};

	CustomYearPicker.prototype._initializeHeader = function() {
		var oHeader = new Header(this.getId() + "--Head", {
			visibleButton1: false
		});

		oHeader.attachEvent("pressPrevious", this._handlePrevious, this);
		oHeader.attachEvent("pressNext", this._handleNext, this);
		oHeader.attachEvent("pressButton2", this._handleButton2, this);

		this._afterHeaderRenderAdjustCSS = this._createOnAfterRenderingDelegate(oHeader);

		oHeader.addDelegate(this._afterHeaderRenderAdjustCSS);

		this.setAggregation("header",oHeader);
	};

	CustomYearPicker.prototype._closePickers = function(){
		this.setProperty("_currentPicker", "yearPicker");

		this._togglePrevNexYearPicker();
	};

	CustomYearPicker.prototype._selectYear = function () {
		var oDateRange = this.getSelectedDates()[0],
			oYearPicker = this._getYearPicker();

		if (!oDateRange) {
			oDateRange = new DateRange();
		}

		if (!oYearPicker.getIntervalSelection()) {
			oDateRange.setStartDate(this._getYearPicker().getDate());
			this.addSelectedDate(oDateRange);
		}

		this.fireSelect();
	};

	CustomYearPicker.prototype.onsapescape = function(oEvent) {
		this.fireCancel();
	};

	return CustomYearPicker;

});

