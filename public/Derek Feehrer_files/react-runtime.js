//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var _ = Package.underscore._;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var React, ReactDOM;

var require = meteorInstall({"node_modules":{"meteor":{"react-runtime":{"react-runtime.js":["meteor/meteor","meteor/underscore","meteor/tmeasday:check-npm-versions","react","react-dom","react-addons-transition-group","react-addons-css-transition-group","react-addons-linked-state-mixin","react-addons-create-fragment","react-addons-update","react-addons-pure-render-mixin","react-addons-test-utils","react-addons-perf","react-dom/server",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////
//                                                                       //
// packages/react-runtime/react-runtime.js                               //
//                                                                       //
///////////////////////////////////////////////////////////////////////////
                                                                         //
module.export({React:function(){return React},ReactDOM:function(){return ReactDOM},ReactDOMServer:function(){return ReactDOMServer}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var _;module.import('meteor/underscore',{"_":function(v){_=v}});var checkNpmVersions;module.import('meteor/tmeasday:check-npm-versions',{"checkNpmVersions":function(v){checkNpmVersions=v}});
                                                                         // 2
                                                                         //
var requiredPackages = {                                                 // 4
  react: '0.14.x',                                                       // 5
  'react-dom': '0.14.x',                                                 // 6
  'react-addons-transition-group': '0.14.x',                             // 7
  'react-addons-css-transition-group': '0.14.x',                         // 8
  'react-addons-linked-state-mixin': '0.14.x',                           // 9
  'react-addons-create-fragment': '0.14.x',                              // 10
  'react-addons-update': '0.14.x',                                       // 11
  'react-addons-pure-render-mixin': '0.14.x'                             // 12
};                                                                       // 4
                                                                         //
if (Meteor.isDevelopment) {                                              // 15
  _.extend(requiredPackages, {                                           // 16
    'react-addons-test-utils': '0.14.x',                                 // 17
    'react-addons-perf': '0.14.x'                                        // 18
  });                                                                    // 16
}                                                                        // 20
                                                                         //
                                                                         // 22
checkNpmVersions(requiredPackages);                                      // 23
                                                                         //
var React = require('react');                                            // 25
var ReactDOM = require('react-dom');                                     // 26
                                                                         //
React.addons = {                                                         // 28
  TransitionGroup: require('react-addons-transition-group'),             // 29
  CSSTransitionGroup: require('react-addons-css-transition-group'),      // 30
  LinkedStateMixin: require('react-addons-linked-state-mixin'),          // 31
  createFragment: require('react-addons-create-fragment'),               // 32
  update: require('react-addons-update'),                                // 33
  PureRenderMixin: require('react-addons-pure-render-mixin')             // 34
};                                                                       // 28
                                                                         //
if (Meteor.isDevelopment) {                                              // 37
  React.addons.TestUtils = require('react-addons-test-utils');           // 38
  React.addons.Perf = require('react-addons-perf');                      // 39
}                                                                        // 40
                                                                         //
var ReactDOMServer = void 0;                                             // 42
if (Meteor.isServer) {                                                   // 43
  module.runModuleSetters(ReactDOMServer = require('react-dom/server'));
}                                                                        // 45
                                                                         //
                                                                         // 47
///////////////////////////////////////////////////////////////////////////

}]}}}},{"extensions":[".js",".json",".jsx"]});
var exports = require("./node_modules/meteor/react-runtime/react-runtime.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['react-runtime'] = exports, {
  React: React,
  ReactDOM: ReactDOM
});

})();
