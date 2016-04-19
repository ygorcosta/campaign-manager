/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Tabs.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Tabs.
 * @public
 */

goog.module('Tabs.incrementaldom');

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


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('ul', null, null,
      'class', 'campaign-manager-tabs nav nav-tabs');
    var tabList34 = opt_data.tabs;
    var tabListLen34 = tabList34.length;
    for (var tabIndex34 = 0; tabIndex34 < tabListLen34; tabIndex34++) {
      var tabData34 = tabList34[tabIndex34];
      ie_open('li', null, null,
          'class', opt_data.selectedIndex == tabIndex34 ? 'active' : '');
        ie_open('a', null, null,
            'href', tabData34.href);
          itext((goog.asserts.assert((tabData34.name) != null), tabData34.name));
        ie_close('a');
      ie_close('li');
    }
  ie_close('ul');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Tabs.render';
}

exports.render.params = ["tabs","selectedIndex"];
exports.render.types = {"tabs":"any","selectedIndex":"any"};
templates = exports;
return exports;

});

class Tabs extends Component {}
Soy.register(Tabs, templates);
export default templates;
export { Tabs, templates };
/* jshint ignore:end */
