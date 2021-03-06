/* global QUnit*/

sap.ui.define([
	"sap/ui/thirdparty/jquery",
	"sap/ui/fl/changeHandler/Base",
	"sap/ui/fl/Change",
	"sap/ui/fl/changeHandler/JsControlTreeModifier",
	"sap/ui/thirdparty/sinon-4"
],
function(
	jQuery,
	Base,
	Change,
	JsControlTreeModifier,
	sinon
) {
	"use strict";

	var sandbox = sinon.sandbox.create();

	QUnit.module("sap.ui.fl.changeHandler.Base", {
		beforeEach: function () {
			this.oBaseHandler = Base;
		},
		afterEach: function () {
		}
	}, function () {
		QUnit.test("setTextInChange", function (assert) {
			var oChange = {
				selector: {
					id: "QUnit.testkey"
				}
			};
			this.oBaseHandler.setTextInChange(oChange, "fieldLabel", "new field label", "XFLD");
			assert.ok(oChange.texts.fieldLabel);
			assert.equal(oChange.texts.fieldLabel.value, "new field label");
			assert.equal(oChange.texts.fieldLabel.type, "XFLD");
		});
	});

	QUnit.module("sap.ui.fl.changeHandler.Base.instantiateFragment on JSControlTreeModifier", {
		before: function () {
			//predefine some modules
			var mPreloadedModules = {};
			this.sFragmentMultiplePath = "sap/somePath/toSomewhereFragmentMultiple";
			mPreloadedModules[this.sFragmentMultiplePath] = '<core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core">' +
				'<Button xmlns="sap.m" id="button1" text="Hello World"></Button>' +
				'<Button xmlns="sap.m" id="button2" text="Hello World"></Button>' +
				'<Button xmlns="sap.m" id="button3" text="Hello World"></Button>' +
				'</core:FragmentDefinition>';
			this.sFragmentInvalidPath = "sap/somePath/toSomewhereFragmentInvalid";
			mPreloadedModules[this.sFragmentInvalidPath] = "invalidFragment";
			this.sNonExistingPath = "sap/somePath/toSomewhereNonExisting";
			sap.ui.require.preload(mPreloadedModules);
		},
		beforeEach: function () {
			var oChangeJson = {
				projectId: "projectId"
			};

			this.oChange = new Change(oChangeJson);


			this.mPropertyBag = {
				modifier: JsControlTreeModifier,
				view: {
					getController: function () {
					},
					getId: function () {
					}
				}
			};
		},
		afterEach: function () {
		}
	}, function () {
		QUnit.test("When applying the change on a js control tree without a fragment", function(assert) {
			assert.throws(
				function() {Base.instantiateFragment(this.oChange, this.mPropertyBag);},
				Error,
				"then apply change throws an error"
			);
		});

		QUnit.test("When applying the change on a js control tree with an invalid fragment", function(assert) {
			this.oChange.setModuleName(this.sFragmentInvalidPath);
			assert.throws(
				function() {Base.instantiateFragment(this.oChange, this.mPropertyBag);},
				Error,
				"then apply change throws an error"
			);
		});

		QUnit.test("When applying the change on a js control tree with an invalid fragment", function(assert) {
			this.oChange.setModuleName(this.sFragmentInvalidPath);
			assert.throws(
				function() {Base.instantiateFragment(this.oChange, this.mPropertyBag);},
				Error,
				"then apply change throws an error"
			);
		});

		QUnit.test("When applying the change with a not found module", function(assert) {
			this.oChange.setModuleName(this.sNonExistingPath);
			assert.throws(
				function() {Base.instantiateFragment(this.oChange, this.mPropertyBag);},
				function(err) {
					var sErrorMessage = "Error: resource sap/somePath/toSomewhereNonExisting could not be loaded from";
					return err.toString().indexOf(sErrorMessage) === 0;
				},
				"then apply change throws an error"
			);
		});

		QUnit.test("When applying the change on a js control tree with multiple root elements", function(assert) {
			this.oChange.setModuleName(this.sFragmentMultiplePath);
			var aItems = Base.instantiateFragment(this.oChange, this.mPropertyBag);

			assert.equal(aItems.length, 3, "after the change there are 4 items in the hbox");
			assert.equal(aItems[0].getId(), "projectId.button1", "then the first button in the fragment has the correct index and ID");
			assert.equal(aItems[1].getId(), "projectId.button2", "then the second button in the fragment has the correct index and ID");
			assert.equal(aItems[2].getId(), "projectId.button3", "then the third button in the fragment has the correct index and ID");
			aItems.forEach(function (oItem) { oItem.destroy(); });
		});

		QUnit.test("When applying the change on a js control tree with multiple root elements and extension point with fragmentId", function(assert) {
			this.oChange.setModuleName(this.sFragmentMultiplePath);
			this.oChange.setExtensionPointInfo({ fragmentId: "EPFRAGMENTID" });
			var aItems = Base.instantiateFragment(this.oChange, this.mPropertyBag);
			assert.equal(aItems.length, 3, "after the change there are 4 items in the hbox");
			assert.equal(aItems[0].getId(), "projectId.EPFRAGMENTID.button1", "then the first button in the fragment has the correct index and ID");
			assert.equal(aItems[1].getId(), "projectId.EPFRAGMENTID.button2", "then the second button in the fragment has the correct index and ID");
			assert.equal(aItems[2].getId(), "projectId.EPFRAGMENTID.button3", "then the third button in the fragment has the correct index and ID");
			aItems.forEach(function (oItem) { oItem.destroy(); });
		});
	});

	QUnit.module("sap.ui.fl.changeHandler.Base.instantiateFragment namespace check", {
		before: function () {
			//predefine some modules
			var mPreloadedModules = {};
			this.sFragmentMultiplePath = "sap/somePath/toSomewhereFragment";
			mPreloadedModules[this.sFragmentMultiplePath] = '<core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core"></core:FragmentDefinition>';
			sap.ui.require.preload(mPreloadedModules);
		},
		beforeEach: function () {
			var oChangeJson = {
				projectId: "projectId"
			};
			this.oChange = new Change(oChangeJson);
			this.oInstantiateFragmentStub = sandbox.stub();
			this.mPropertyBag = {
				modifier: { instantiateFragment: this.oInstantiateFragmentStub },
				view: "<view></view>",
				viewId: "componentId--viewId"
			};
		},
		afterEach: function () {
			sandbox.restore();
			this.oChange.destroy();
		}
	}, function () {
		QUnit.test("When applying the change on a xml control tree with viewId and without prefix", function(assert) {
			this.oChange.setProjectId(undefined);
			this.oChange.setModuleName(this.sFragmentMultiplePath);
			this.mPropertyBag.viewId = undefined;
			Base.instantiateFragment(this.oChange, this.mPropertyBag);
			assert.strictEqual(this.oInstantiateFragmentStub.firstCall.args[1], "", "then the namespace is prepared properly");
		});

		QUnit.test("When applying the change on a xml control tree with viewId and without projectId & fragmentId available as prefix", function(assert) {
			this.oChange.setProjectId(undefined);
			this.oChange.setModuleName(this.sFragmentMultiplePath);
			Base.instantiateFragment(this.oChange, this.mPropertyBag);
			assert.strictEqual(this.oInstantiateFragmentStub.firstCall.args[1], "componentId--viewId--", "then the namespace is prepared properly");
		});

		QUnit.test("When applying the change on a xml control tree with viewId & fragmentId and without projectId available as prefix", function(assert) {
			this.oChange.setProjectId(undefined);
			this.oChange.setModuleName(this.sFragmentMultiplePath);
			this.oChange.setExtensionPointInfo({ fragmentId: "fragmentId" });
			Base.instantiateFragment(this.oChange, this.mPropertyBag);
			assert.strictEqual(this.oInstantiateFragmentStub.firstCall.args[1], "componentId--viewId--fragmentId", "then the namespace is prepared properly");
		});

		QUnit.test("When applying the change on a xml control tree with viewId is available as prefix", function(assert) {
			this.oChange.setModuleName(this.sFragmentMultiplePath);
			Base.instantiateFragment(this.oChange, this.mPropertyBag);
			assert.strictEqual(this.oInstantiateFragmentStub.firstCall.args[1], "componentId--viewId--projectId", "then the namespace is prepared properly");
		});

		QUnit.test("When applying the change on a xml control tree with viewId and fragmentId are available as prefixes", function(assert) {
			this.oChange.setModuleName(this.sFragmentMultiplePath);
			this.oChange.setExtensionPointInfo({ fragmentId: "fragmentId" });
			Base.instantiateFragment(this.oChange, this.mPropertyBag);
			assert.strictEqual(this.oInstantiateFragmentStub.firstCall.args[1], "componentId--viewId--projectId.fragmentId", "then the namespace is prepared properly");
		});
	});

	QUnit.done(function() {
		jQuery("#qunit-fixture").hide();
	});
});
