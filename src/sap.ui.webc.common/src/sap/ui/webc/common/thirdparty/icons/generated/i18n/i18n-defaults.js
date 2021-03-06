sap.ui.define(['exports'], function (exports) { 'use strict';

	const ICON_ACTION_SETTINGS = {key: "ICON_ACTION_SETTINGS", defaultText: "Settings"};const ICON_ACTIVATE = {key: "ICON_ACTIVATE", defaultText: "Activate"};const ICON_ADD = {key: "ICON_ADD", defaultText: "Add"};const ICON_ADD_CONTACT = {key: "ICON_ADD_CONTACT", defaultText: "Add Contact"};const ICON_ADD_FILTER = {key: "ICON_ADD_FILTER", defaultText: "Add Filter"};const ICON_ADD_PHOTO = {key: "ICON_ADD_PHOTO", defaultText: "Add Photo"};const ICON_BACK_TO_TOP = {key: "ICON_BACK_TO_TOP", defaultText: "Back to Top"};const ICON_COLLAPSE = {key: "ICON_COLLAPSE", defaultText: "Collapse"};const ICON_COLLAPSE_GROUP = {key: "ICON_COLLAPSE_GROUP", defaultText: "Collapse Group"};const ICON_CROP = {key: "ICON_CROP", defaultText: "Crop"};const ICON_DECLINE = {key: "ICON_DECLINE", defaultText: "Decline"};const ICON_DELETE = {key: "ICON_DELETE", defaultText: "Delete"};const ICON_DISPLAY = {key: "ICON_DISPLAY", defaultText: "Display"};const ICON_DOWN = {key: "ICON_DOWN", defaultText: "Down"};const ICON_DOWNLOAD = {key: "ICON_DOWNLOAD", defaultText: "Download"};const ICON_DRILL_DOWN = {key: "ICON_DRILL_DOWN", defaultText: "Drill Down"};const ICON_DRILL_UP = {key: "ICON_DRILL_UP", defaultText: "Drill Up"};const ICON_ERROR = {key: "ICON_ERROR", defaultText: "Error"};const ICON_EXIT_FULL_SCREEN = {key: "ICON_EXIT_FULL_SCREEN", defaultText: "Exit Full Screen"};const ICON_EXPAND = {key: "ICON_EXPAND", defaultText: "Expand"};const ICON_EXPAND_GROUP = {key: "ICON_EXPAND_GROUP", defaultText: "Expand Group"};const ICON_FILTER = {key: "ICON_FILTER", defaultText: "Filter"};const ICON_FLAG = {key: "ICON_FLAG", defaultText: "Flag"};const ICON_FORWARD = {key: "ICON_FORWARD", defaultText: "Forward"};const ICON_FULL_SCREEN = {key: "ICON_FULL_SCREEN", defaultText: "Enter Full Screen"};const ICON_GENERATE_SHORTCUT = {key: "ICON_GENERATE_SHORTCUT", defaultText: "Create Shortcut"};const ICON_GROUP_2 = {key: "ICON_GROUP_2", defaultText: "Group"};const ICON_HIDE = {key: "ICON_HIDE", defaultText: "Hide"};const ICON_IPAD = {key: "ICON_IPAD", defaultText: "Tablet"};const ICON_IPHONE = {key: "ICON_IPHONE", defaultText: "Phone"};const ICON_LAPTOP = {key: "ICON_LAPTOP", defaultText: "Laptop"};const ICON_MESSAGE_ERROR = {key: "ICON_MESSAGE_ERROR", defaultText: "Error"};const ICON_MESSAGE_INFORMATION = {key: "ICON_MESSAGE_INFORMATION", defaultText: "Information"};const ICON_MESSAGE_SUCCESS = {key: "ICON_MESSAGE_SUCCESS", defaultText: "Successful"};const ICON_MESSAGE_WARNING = {key: "ICON_MESSAGE_WARNING", defaultText: "Warning"};const ICON_MOVE = {key: "ICON_MOVE", defaultText: "Move"};const ICON_MULTI_SELECT = {key: "ICON_MULTI_SELECT", defaultText: "Multi Select"};const ICON_NAV_BACK = {key: "ICON_NAV_BACK", defaultText: "Navigate Back"};const ICON_OVERFLOW = {key: "ICON_OVERFLOW", defaultText: "More"};const ICON_REDO = {key: "ICON_REDO", defaultText: "Redo"};const ICON_REFRESH = {key: "ICON_REFRESH", defaultText: "Refresh"};const ICON_RESIZE = {key: "ICON_RESIZE", defaultText: "Resize"};const ICON_RESIZE_HORIZONTAL = {key: "ICON_RESIZE_HORIZONTAL", defaultText: "Resize Horizontally"};const ICON_RESIZE_VERTICAL = {key: "ICON_RESIZE_VERTICAL", defaultText: "Resize Vertically"};const ICON_RESPONSE = {key: "ICON_RESPONSE", defaultText: "Reply"};const ICON_SAVE = {key: "ICON_SAVE", defaultText: "Save"};const ICON_SEARCH = {key: "ICON_SEARCH", defaultText: "Search"};const ICON_SETTINGS = {key: "ICON_SETTINGS", defaultText: "Settings"};const ICON_SHOW = {key: "ICON_SHOW", defaultText: "Show"};const ICON_SORT = {key: "ICON_SORT", defaultText: "Sort"};const ICON_SORT_ASCENDING = {key: "ICON_SORT_ASCENDING", defaultText: "Sort Ascending"};const ICON_SORT_DESCENDING = {key: "ICON_SORT_DESCENDING", defaultText: "Sort Descending"};const ICON_SYNCHRONIZE = {key: "ICON_SYNCHRONIZE", defaultText: "Synchronize"};const ICON_UNDO = {key: "ICON_UNDO", defaultText: "Undo"};const ICON_UP = {key: "ICON_UP", defaultText: "Up"};const ICON_UPLOAD = {key: "ICON_UPLOAD", defaultText: "Upload"};const ICON_ZOOM_IN = {key: "ICON_ZOOM_IN", defaultText: "Zoom In"};const ICON_ZOOM_OUT = {key: "ICON_ZOOM_OUT", defaultText: "Zoom Out"};

	exports.ICON_ACTION_SETTINGS = ICON_ACTION_SETTINGS;
	exports.ICON_ACTIVATE = ICON_ACTIVATE;
	exports.ICON_ADD = ICON_ADD;
	exports.ICON_ADD_CONTACT = ICON_ADD_CONTACT;
	exports.ICON_ADD_FILTER = ICON_ADD_FILTER;
	exports.ICON_ADD_PHOTO = ICON_ADD_PHOTO;
	exports.ICON_BACK_TO_TOP = ICON_BACK_TO_TOP;
	exports.ICON_COLLAPSE = ICON_COLLAPSE;
	exports.ICON_COLLAPSE_GROUP = ICON_COLLAPSE_GROUP;
	exports.ICON_CROP = ICON_CROP;
	exports.ICON_DECLINE = ICON_DECLINE;
	exports.ICON_DELETE = ICON_DELETE;
	exports.ICON_DISPLAY = ICON_DISPLAY;
	exports.ICON_DOWN = ICON_DOWN;
	exports.ICON_DOWNLOAD = ICON_DOWNLOAD;
	exports.ICON_DRILL_DOWN = ICON_DRILL_DOWN;
	exports.ICON_DRILL_UP = ICON_DRILL_UP;
	exports.ICON_ERROR = ICON_ERROR;
	exports.ICON_EXIT_FULL_SCREEN = ICON_EXIT_FULL_SCREEN;
	exports.ICON_EXPAND = ICON_EXPAND;
	exports.ICON_EXPAND_GROUP = ICON_EXPAND_GROUP;
	exports.ICON_FILTER = ICON_FILTER;
	exports.ICON_FLAG = ICON_FLAG;
	exports.ICON_FORWARD = ICON_FORWARD;
	exports.ICON_FULL_SCREEN = ICON_FULL_SCREEN;
	exports.ICON_GENERATE_SHORTCUT = ICON_GENERATE_SHORTCUT;
	exports.ICON_GROUP_2 = ICON_GROUP_2;
	exports.ICON_HIDE = ICON_HIDE;
	exports.ICON_IPAD = ICON_IPAD;
	exports.ICON_IPHONE = ICON_IPHONE;
	exports.ICON_LAPTOP = ICON_LAPTOP;
	exports.ICON_MESSAGE_ERROR = ICON_MESSAGE_ERROR;
	exports.ICON_MESSAGE_INFORMATION = ICON_MESSAGE_INFORMATION;
	exports.ICON_MESSAGE_SUCCESS = ICON_MESSAGE_SUCCESS;
	exports.ICON_MESSAGE_WARNING = ICON_MESSAGE_WARNING;
	exports.ICON_MOVE = ICON_MOVE;
	exports.ICON_MULTI_SELECT = ICON_MULTI_SELECT;
	exports.ICON_NAV_BACK = ICON_NAV_BACK;
	exports.ICON_OVERFLOW = ICON_OVERFLOW;
	exports.ICON_REDO = ICON_REDO;
	exports.ICON_REFRESH = ICON_REFRESH;
	exports.ICON_RESIZE = ICON_RESIZE;
	exports.ICON_RESIZE_HORIZONTAL = ICON_RESIZE_HORIZONTAL;
	exports.ICON_RESIZE_VERTICAL = ICON_RESIZE_VERTICAL;
	exports.ICON_RESPONSE = ICON_RESPONSE;
	exports.ICON_SAVE = ICON_SAVE;
	exports.ICON_SEARCH = ICON_SEARCH;
	exports.ICON_SETTINGS = ICON_SETTINGS;
	exports.ICON_SHOW = ICON_SHOW;
	exports.ICON_SORT = ICON_SORT;
	exports.ICON_SORT_ASCENDING = ICON_SORT_ASCENDING;
	exports.ICON_SORT_DESCENDING = ICON_SORT_DESCENDING;
	exports.ICON_SYNCHRONIZE = ICON_SYNCHRONIZE;
	exports.ICON_UNDO = ICON_UNDO;
	exports.ICON_UP = ICON_UP;
	exports.ICON_UPLOAD = ICON_UPLOAD;
	exports.ICON_ZOOM_IN = ICON_ZOOM_IN;
	exports.ICON_ZOOM_OUT = ICON_ZOOM_OUT;

	Object.defineProperty(exports, '__esModule', { value: true });

});
