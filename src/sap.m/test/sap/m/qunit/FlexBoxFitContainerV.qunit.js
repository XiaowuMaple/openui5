/*global QUnit */
sap.ui.define([
	"sap/ui/qunit/utils/createAndAppendDiv",
	"sap/m/VBox",
	"sap/ui/core/HTML",
	"sap/m/FlexItemData",
	"sap/m/HBox",
	"sap/ui/dom/includeStylesheet"
], function (
	createAndAppendDiv,
	VBox,
	HTML,
	FlexItemData,
	HBox,
	includeStylesheet
) {
	"use strict";

	createAndAppendDiv("content").classList.add("fitContainerV");

	var outervboxWidth = 400,
		outervboxHeight = 600,
		hboxWidth = outervboxWidth,
		hboxHeight = outervboxHeight * ( 5 / 15 ),
		innervboxWidth = outervboxWidth * ( 3 / 8 ),
		innervboxHeight = outervboxHeight * ( 5 / 15 ),
		item1Width = outervboxWidth,
		item1Height = outervboxHeight * ( 2 / 15 ),
		item2Width = outervboxWidth,
		item2Height = outervboxHeight * ( 3 / 15 ),
		item3Width = outervboxWidth * ( 5 / 8 ),
		item3Height = outervboxHeight * ( 5 / 15 ),
		item4Width = outervboxWidth * ( 3 / 8 ),
		item4Height = outervboxHeight * ( 5 / 15 ) / 2,
		item5Width = outervboxWidth * ( 3 / 8 ),
		item5Height = outervboxHeight * ( 5 / 15 ) / 2,
		item6Width = outervboxWidth,
		item6Height = outervboxHeight * ( 5 / 15 );

	var oOuterVBox = new VBox("outerVBox", {
		items: [
			new HTML("panel1", {
				content: "<div></div>",
				layoutData: new FlexItemData({ growFactor: 2, id: "item1" })
			}),
			new HTML("panel2", {
				content: "<div></div>",
				layoutData: new FlexItemData({ growFactor: 3, id: "item2" })
			}),
			new HBox("hbox", {
				items: [
					new HTML("panel3", {
						content: "<div></div>",
						layoutData: new FlexItemData({ growFactor: 5, id: "item3" })
					}),
					new VBox("innerVBox", {
						items: [
							new HTML("panel4", {
								content: "<div></div>",
								layoutData: new FlexItemData({ growFactor: 1, id: "item4" })
							}),
							new HTML("panel5", {
								content: "<div></div>",
								layoutData: new FlexItemData({ growFactor: 1, id: "item5" })
							})
						],
						fitContainer: true,
						alignItems: "Stretch",
						layoutData: new FlexItemData({ growFactor: 3 })
					})
				],
				fitContainer: true,
				layoutData: new FlexItemData({ growFactor: 5 })
			}),
			new HTML("panel6", {
				content:"<div></div>",
				layoutData: new FlexItemData({ growFactor: 5, id: "item6" })
			})
		],
		fitContainer: true,
		alignItems: "Stretch"
	});

	oOuterVBox.placeAt("content");

	QUnit.test("Flex Boxes rendered", function(assert) {
		assert.ok(document.getElementById("outerVBox"), "Outer VBox should be rendered");
		assert.ok(document.getElementById("item1"), "Item 1 should be rendered");
		assert.ok(document.getElementById("item2"), "Item 2 should be rendered");
		assert.ok(document.getElementById("hbox"), "HBox should be rendered");
		assert.ok(document.getElementById("item3"), "Item 3 should be rendered");
		assert.ok(document.getElementById("innerVBox"), "Inner VBox should be rendered");
		assert.ok(document.getElementById("item4"), "Item 4 should be rendered");
		assert.ok(document.getElementById("item5"), "Item 5 should be rendered");
		assert.ok(document.getElementById("item6"), "Item 6 should be rendered");
	});

	QUnit.test("Width and height correct", function(assert) {
		assert.equal(document.getElementById("outerVBox").offsetWidth, outervboxWidth, "Outer VBox should have the correct width");
		assert.equal(document.getElementById("outerVBox").offsetHeight, outervboxHeight, "Outer VBox should have the correct height");
		assert.equal(document.getElementById("hbox").offsetWidth, hboxWidth, "HBox should have the correct width");
		assert.equal(document.getElementById("hbox").offsetHeight, hboxHeight, "HBox should have the correct height");
		assert.equal(document.getElementById("innerVBox").offsetWidth, innervboxWidth, "Inner VBox should have the correct width");
		assert.equal(document.getElementById("innerVBox").offsetHeight, innervboxHeight, "Inner VBox should have the correct height");
		assert.equal(document.getElementById("item1").offsetWidth, item1Width, "Item 1 should have the correct width");
		assert.equal(document.getElementById("item1").offsetHeight, item1Height, "Item 1 should have the correct height");
		assert.equal(document.getElementById("item2").offsetWidth, item2Width, "Item 2 should have the correct width");
		assert.equal(document.getElementById("item2").offsetHeight, item2Height, "Item 2 should have the correct height");
		assert.equal(document.getElementById("item3").offsetWidth, item3Width, "Item 3 should have the correct width");
		assert.equal(document.getElementById("item3").offsetHeight, item3Height, "Item 3 should have the correct height");
		assert.equal(document.getElementById("item4").offsetWidth, item4Width, "Item 4 should have the correct width");
		assert.equal(document.getElementById("item4").offsetHeight, item4Height, "Item 4 should have the correct height");
		assert.equal(document.getElementById("item5").offsetWidth, item5Width, "Item 5 should have the correct width");
		assert.equal(document.getElementById("item5").offsetHeight, item5Height, "Item 5 should have the correct height");
		assert.equal(document.getElementById("item6").offsetWidth, item6Width, "Item 6 should have the correct width");
		assert.equal(document.getElementById("item6").offsetHeight, item6Height, "Item 6 should have the correct height");
	});

	// include stylesheet and return promise, test starter will wait for it
	return includeStylesheet({
		url: sap.ui.require.toUrl("test-resources/sap/m/qunit/FlexBoxFit.css")
	});
});