/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from App.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace App.
 * @public
 */

goog.module('App.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;

var $templateAlias1 = Soy.getTemplate('Dashboard.incrementaldom', 'render');

var $templateAlias2 = Soy.getTemplate('ManageCampaigns.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  ie_open('div', null, null,
      'class', 'campaign-manager container-fluid');
    switch ((goog.isObject($$temp = opt_data.page)) ? $$temp.toString() : $$temp) {
      case 0:
        $templateAlias1({baseUrl: opt_data.baseUrl, campaigns: opt_data.campaigns, key: 'dashboard', page: opt_data.page}, null, opt_ijData);
        break;
      case 1:
        $templateAlias2({key: 'manage-campaigns', page: opt_data.page}, null, opt_ijData);
        break;
    }
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'App.render';
}

exports.render.params = ["baseUrl","campaigns","page"];
exports.render.types = {"baseUrl":"any","campaigns":"any","page":"any"};
templates = exports;
return exports;

});

class App extends Component {}
Soy.register(App, templates);
export default templates;
export { App, templates };
/* jshint ignore:end */
