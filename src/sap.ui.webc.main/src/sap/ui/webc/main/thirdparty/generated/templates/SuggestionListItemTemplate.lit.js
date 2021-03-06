sap.ui.define(['sap/ui/webc/common/thirdparty/base/renderer/ifDefined', 'sap/ui/webc/common/thirdparty/base/renderer/LitRenderer'], function (ifDefined, litRender) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

	var ifDefined__default = /*#__PURE__*/_interopDefaultLegacy(ifDefined);

	const block0 = (context) => { return litRender.html`<li tabindex="${ifDefined__default(context.tabIndex)}" class="${litRender.classMap(context.classes.main)}" dir="${ifDefined__default(context.effectiveDir)}" @focusin="${context._onfocusin}" @focusout="${context._onfocusout}" @keyup="${context._onkeyup}" @keydown="${context._onkeydown}" @mouseup="${context._onmouseup}" @mousedown="${context._onmousedown}" @touchstart="${context._ontouchstart}" @touchend="${context._ontouchend}" @click="${context._onclick}" aria-selected="${ifDefined__default(context.ariaSelected)}" role="${ifDefined__default(context._accInfo.role)}" aria-expanded="${ifDefined__default(context._accInfo.ariaExpanded)}" aria-level="${ifDefined__default(context._accInfo.ariaLevel)}" aria-posinset="${ifDefined__default(context._accInfo.posinset)}" aria-setsize="${ifDefined__default(context._accInfo.setsize)}" aria-labelledby="${ifDefined__default(context._id)}-invisibleText ${ifDefined__default(context._id)}-content" aria-disabled="${ifDefined__default(context.ariaDisabled)}" style="list-style-type: none;">${ context.placeSelectionElementBefore ? block1(context) : undefined }<div id="${ifDefined__default(context._id)}-content" class="ui5-li-content">${ context.displayImage ? block5(context) : undefined }${ context.displayIconBegin ? block6(context) : undefined }<div class="ui5-li-text-wrapper">${ context.hasTitle ? block7() : undefined }${ context.hasDescription ? block8(context) : undefined }${ !context.typeActive ? block12(context) : undefined }</div>${ !context.hasDescription ? block13(context) : undefined }</div>${ context.displayIconEnd ? block15(context) : undefined }${ context.typeDetail ? block16(context) : undefined }${ context.placeSelectionElementAfter ? block17(context) : undefined }<span id="${ifDefined__default(context._id)}-invisibleText" class="ui5-hidden-text">${ifDefined__default(context._accInfo.listItemAriaLabel)}${ifDefined__default(context.accessibleName)}</span></li> `; };
	const block1 = (context) => { return litRender.html`${ context.modeSingleSelect ? block2(context) : undefined }${ context.modeMultiSelect ? block3(context) : undefined }${ context.modeDelete ? block4(context) : undefined }`; };
	const block2 = (context) => { return litRender.html`<ui5-radiobutton ?disabled="${context.isInactive}" tabindex="-1" id="${ifDefined__default(context._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?selected="${context.selected}" @click="${context.onSingleSelectionComponentPress}"></ui5-radiobutton>`; };
	const block3 = (context) => { return litRender.html`<ui5-checkbox ?disabled="${context.isInactive}" tabindex="-1" id="${ifDefined__default(context._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${context.selected}" aria-label="${ifDefined__default(context._accInfo.ariaLabel)}" @click="${context.onMultiSelectionComponentPress}"></ui5-checkbox>`; };
	const block4 = (context) => { return litRender.html`<div class="ui5-li-deletebtn"><ui5-button tabindex="-1" data-sap-no-tab-ref id="${ifDefined__default(context._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${context.disableDeleteButton}" @click="${context.onDelete}" title="${ifDefined__default(context.deleteText)}"></ui5-button></div>`; };
	const block5 = (context) => { return litRender.html`<ui5-avatar image="${ifDefined__default(context.image)}" image-fit-type="Contain" shape="Square" class="ui5-li-img"></ui5-avatar>`; };
	const block6 = (context) => { return litRender.html`<ui5-icon part="icon" name="${ifDefined__default(context.icon)}" class="ui5-li-icon"></ui5-icon>`; };
	const block7 = (context) => { return litRender.html`<span part="title" class="ui5-li-title"><slot></slot></span>`; };
	const block8 = (context) => { return litRender.html`<div class="ui5-li-description-info-wrapper"><span part="description" class="ui5-li-desc">${ context.richDescription.length ? block9() : block10(context) }</span>${ context.info ? block11(context) : undefined }</div>`; };
	const block9 = (context) => { return litRender.html`<slot name="richDescription"></slot>`; };
	const block10 = (context) => { return litRender.html`${ifDefined__default(context.description)}`; };
	const block11 = (context) => { return litRender.html`<span part="info" class="ui5-li-additional-text">${ifDefined__default(context.info)}</span>`; };
	const block12 = (context) => { return litRender.html`<span class="ui5-hidden-text">${ifDefined__default(context.type)}</span>`; };
	const block13 = (context) => { return litRender.html`${ context.info ? block14(context) : undefined }`; };
	const block14 = (context) => { return litRender.html`<span part="info" class="ui5-li-additional-text">${ifDefined__default(context.info)}</span>`; };
	const block15 = (context) => { return litRender.html`<ui5-icon part="icon" name="${ifDefined__default(context.icon)}" class="ui5-li-icon"></ui5-icon>`; };
	const block16 = (context) => { return litRender.html`<div class="ui5-li-detailbtn"><ui5-button design="Transparent" icon="edit" @click="${context.onDetailClick}"></ui5-button></div>`; };
	const block17 = (context) => { return litRender.html`${ context.modeSingleSelect ? block18(context) : undefined }${ context.modeMultiSelect ? block19(context) : undefined }${ context.modeDelete ? block20(context) : undefined }`; };
	const block18 = (context) => { return litRender.html`<ui5-radiobutton ?disabled="${context.isInactive}" tabindex="-1" id="${ifDefined__default(context._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?selected="${context.selected}" @click="${context.onSingleSelectionComponentPress}"></ui5-radiobutton>`; };
	const block19 = (context) => { return litRender.html`<ui5-checkbox ?disabled="${context.isInactive}" tabindex="-1" id="${ifDefined__default(context._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${context.selected}" aria-label="${ifDefined__default(context._accInfo.ariaLabel)}" @click="${context.onMultiSelectionComponentPress}"></ui5-checkbox>`; };
	const block20 = (context) => { return litRender.html`<div class="ui5-li-deletebtn"><ui5-button tabindex="-1" data-sap-no-tab-ref id="${ifDefined__default(context._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${context.disableDeleteButton}" @click="${context.onDelete}" title="${ifDefined__default(context.deleteText)}"></ui5-button></div>`; };
	const main = (context, tags, suffix) => {
		litRender.setTags(tags);
		litRender.setSuffix(suffix);
		return block0(context);
	};

	return main;

});
