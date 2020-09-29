/*global QUnit, window, sinon */

sap.ui.define([
	"sap/f/CalendarInCard",
	"sap/ui/unified/DateTypeRange"
], function(CalendarInCard, DateTypeRange) {
	"use strict";

	QUnit.module("Interaction", {
		beforeEach: function () {
			this.oCal = new CalendarInCard("PC", {
				selectedDates: [ new DateTypeRange({
					startDate: new Date(2019, 8, 2)
				})]
			}).placeAt("qunit-fixture");
			sap.ui.getCore().applyChanges();
		},
		afterEach: function () {
			this.oCal.destroy();
		}
	});

	QUnit.test("Initialization of pickers", function(assert) {
		var oCalendar = this.oCal,
			oMonthPicker = oCalendar._getMonthPicker(),
			oYearPicker = oCalendar._getYearPicker(),
			oYearRangePicker = oCalendar._getYearRangePicker(),
			oPickerBtn = oCalendar._oPickerBtn;

		// Act
		oCalendar._handlePickerButtonPress();
		sap.ui.getCore().applyChanges();

		// Assert
		assert.ok(oMonthPicker.getDomRef(), "MonthPicker is visible after triggering navigation");
		assert.equal(oPickerBtn.getText(), "2019", "picker text is correct");

		// Act
		oCalendar._handlePickerButtonPress();
		sap.ui.getCore().applyChanges();
		// Assert
		assert.notOk(oMonthPicker.getDomRef(), "MonthPicker is not visible after triggering navigation");
		assert.ok(oYearPicker.getDomRef(), "YearPicker is visible after triggering navigation");
		assert.equal(oPickerBtn.getText(), "2009 - 2028", "picker text is correct");

		// Act
		oCalendar._handlePickerButtonPress();
		sap.ui.getCore().applyChanges();
		// Assert
		assert.notOk(oMonthPicker.getDomRef(), "MonthPicker is not visible after triggering navigation");
		assert.notOk(oYearPicker.getDomRef(), "YearPicker is not visible after triggering navigation");
		assert.ok(oYearRangePicker.getDomRef(), "YearRangePicker is visible after triggering navigation");
		assert.notOk(oPickerBtn.getVisible(), "picker button is not visible");
	});

	QUnit.test("Selecting a date from the pickers", function(assert) {
		var oCalendar = this.oCal,
			oMonthPicker = oCalendar._getMonthPicker(),
			oYearPicker = oCalendar._getYearPicker(),
			oYearRangePicker = oCalendar._getYearRangePicker(),
			oPickerBtn = oCalendar._oPickerBtn;

		// Arrange
		// initialization of pickers
		oCalendar._handlePickerButtonPress();
		sap.ui.getCore().applyChanges();
		oCalendar._handlePickerButtonPress();
		sap.ui.getCore().applyChanges();
		oCalendar._handlePickerButtonPress();
		sap.ui.getCore().applyChanges();

		// Act
		oYearRangePicker.setYear(1999);
		sap.ui.getCore().applyChanges();
		oYearRangePicker.fireSelect();
		sap.ui.getCore().applyChanges();
		// Assert
		assert.notOk(oMonthPicker.getDomRef(), "MonthPicker is not visible after selecting year range");
		assert.ok(oYearPicker.getDomRef(), "YearPicker is visible after selecting year range");
		assert.notOk(oYearRangePicker.getDomRef(), "YearRangePicker is not visible after selecting year range");
		assert.equal(oCalendar.getSelectedDates()[0].getStartDate().getFullYear(), 2009, "year set correct");
		assert.ok(oPickerBtn.getVisible(), "picker button is visible");
		assert.equal(oPickerBtn.getText(), "1999 - 2018", "picker text is correct");

		// Act
		oYearPicker.setYear(2018);
		sap.ui.getCore().applyChanges();
		oYearPicker.fireSelect();
		sap.ui.getCore().applyChanges();
		// Assert
		assert.ok(oMonthPicker.getDomRef(),"MonthPicker is visible after selecting year");
		assert.notOk(oYearPicker.getDomRef(), "YearPicker is not visible after selecting year");
		assert.notOk(oYearRangePicker.getDomRef(), "YearRangePicker is not visible after selecting year");
		assert.equal(oCalendar.getSelectedDates()[0].getStartDate().getFullYear(), 2018, "year set correct");
		assert.equal(oPickerBtn.getText(), "2018", "picker text is correct");

		// Act
		oMonthPicker.setMonth(10);
		sap.ui.getCore().applyChanges();
		oMonthPicker.fireSelect();
		sap.ui.getCore().applyChanges();
		// Assert
		assert.notOk(oMonthPicker.getDomRef(), "MonthPicker is not visible after selecting month");
		assert.notOk(oYearPicker.getDomRef(), "YearPicker is not visible after selecting month");
		assert.notOk(oYearRangePicker.getDomRef(), "none", "YearRangePicker is not visible after selecting month");
		assert.equal(oCalendar.getSelectedDates()[0].getStartDate().getMonth(), 10, "month set correct");
	});

	QUnit.test("Navigating in the pickers", function(assert) {
		var oCalendar = this.oCal,
			oYearPicker = oCalendar._getYearPicker(),
			oYearRangePicker = oCalendar._getYearRangePicker();

		// Act
		oCalendar._handlePickerButtonPress();
		sap.ui.getCore().applyChanges();
		oCalendar._handleNext();
		sap.ui.getCore().applyChanges();
		// Assert
		assert.equal(oCalendar.getStartDate().getTime(), new Date(2020, 8, 1).getTime(), "startDate set correct");

		// Act
		oCalendar._handlePrevious();
		sap.ui.getCore().applyChanges();
		// Assert
		assert.equal(oCalendar.getStartDate().getTime(), new Date(2019, 8, 1).getTime(), "startDate set correct");

		// Act
		oCalendar._handlePickerButtonPress();
		sap.ui.getCore().applyChanges();
		oCalendar._handleNext();
		sap.ui.getCore().applyChanges();
		// Assert
		assert.equal(oYearPicker.getFirstRenderedDate().getFullYear(), 2029, "year set correct");

		// Act
		oCalendar._handlePrevious();
		sap.ui.getCore().applyChanges();
		// Assert
		assert.equal(oYearPicker.getFirstRenderedDate().getFullYear(), 2009, "year set correct");

		// Act
		oCalendar._handlePickerButtonPress();
		sap.ui.getCore().applyChanges();
		oCalendar._handleNext();
		sap.ui.getCore().applyChanges();
		// Assert
		assert.equal(oYearRangePicker.getFirstRenderedDate().getFullYear(), 2109, "year range set correct");

		// Act
		oCalendar._handlePickerButtonPress();
		sap.ui.getCore().applyChanges();
		oCalendar._handlePrevious();
		sap.ui.getCore().applyChanges();
		// Assert
		assert.equal(oYearRangePicker.getFirstRenderedDate().getFullYear(), 1929, "year range set correct");
	});

	QUnit.test("Today button", function(assert) {
		var oFakeNow = new Date(2020, 0, 1),
			oOldDate = new Date(2019, 11, 1),
			clock = sinon.useFakeTimers(oFakeNow.getTime()),
			oCalendar = this.oCal,
			oMonthPicker = oCalendar._getMonthPicker(),
			oYearPicker = oCalendar._getYearPicker(),
			oYearRangePicker = oCalendar._getYearRangePicker();

		// Act
		oCalendar._handleTodayPress();
		sap.ui.getCore().applyChanges();
		// Assert
		assert.equal(oCalendar.getSelectedDates()[0].getStartDate().getTime(), oFakeNow.getTime(), "startDate set correct");

		// Arrange
		oCalendar.getSelectedDates()[0].setStartDate(oOldDate);
		sap.ui.getCore().applyChanges();
		// Act
		oCalendar._handlePickerButtonPress();
		sap.ui.getCore().applyChanges();
		oCalendar._handleTodayPress();
		sap.ui.getCore().applyChanges();
		// Assert
		assert.equal(oMonthPicker.getMonth(), 0, "month set correct");

		// Arrange
		oCalendar.getSelectedDates()[0].setStartDate(oOldDate);
		// Act
		oCalendar._handlePickerButtonPress();
		sap.ui.getCore().applyChanges();
		oCalendar._handleTodayPress();
		sap.ui.getCore().applyChanges();
		// Assert
		assert.equal(oYearPicker.getYear(), 2020, "year set correct");

		// Arrange
		oCalendar.getSelectedDates()[0].setStartDate(oOldDate);
		// Act
		oCalendar._handlePickerButtonPress();
		sap.ui.getCore().applyChanges();
		oCalendar._handleTodayPress();
		sap.ui.getCore().applyChanges();
		// Assert
		assert.equal(oYearRangePicker.getYear(), 2010, "year range set correct");

		// Cleanup
		clock.restore();
	});

});