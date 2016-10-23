var require = meteorInstall({"client":{"template.main.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/template.main.js                                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.body.addContent((function() {                                                                               // 2
  var view = this;                                                                                                   // 3
  return HTML.Raw('<div id="render-target"></div>');                                                                 // 4
}));                                                                                                                 // 5
Meteor.startup(Template.body.renderToDocument);                                                                      // 6
                                                                                                                     // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["react","meteor/meteor","react-dom","../imports/ui/App.jsx","../imports/ui/About.jsx","../imports/ui/Dashboard.jsx","../imports/ui/Site.jsx",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/main.js                                                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var React;module.import('react',{"default":function(v){React=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var render;module.import('react-dom',{"render":function(v){render=v}});var App;module.import('../imports/ui/App.jsx',{"default":function(v){App=v}});var About;module.import('../imports/ui/About.jsx',{"default":function(v){About=v}});var Dashboard;module.import('../imports/ui/Dashboard.jsx',{"default":function(v){Dashboard=v}});var Site;module.import('../imports/ui/Site.jsx',{"default":function(v){Site=v}});
                                                                                                                     // 2
                                                                                                                     // 3
                                                                                                                     //
                                                                                                                     // 5
                                                                                                                     //
                                                                                                                     // 7
                                                                                                                     // 8
                                                                                                                     // 9
                                                                                                                     //
Meteor.startup(function () {                                                                                         // 11
  render(React.createElement(App, null), document.getElementById('render-target'));                                  // 12
});                                                                                                                  // 13
                                                                                                                     //
FlowRouter.route('/', {                                                                                              // 15
  name: 'about',                                                                                                     // 16
  action: function () {                                                                                              // 17
    function action() {                                                                                              // 15
      ReactLayout.render(App, { routeTarget: React.createElement(About, null) });                                    // 18
    }                                                                                                                // 19
                                                                                                                     //
    return action;                                                                                                   // 15
  }()                                                                                                                // 15
});                                                                                                                  // 15
                                                                                                                     //
FlowRouter.route('/derekfeehrer', {                                                                                  // 22
  name: 'site',                                                                                                      // 23
  action: function () {                                                                                              // 24
    function action() {                                                                                              // 22
      ReactLayout.render(App, { routeTarget: React.createElement(Site, null) });                                     // 25
    }                                                                                                                // 26
                                                                                                                     //
    return action;                                                                                                   // 22
  }()                                                                                                                // 22
});                                                                                                                  // 22
                                                                                                                     //
FlowRouter.route('/derekfeehrer/dashboard', {                                                                        // 30
  name: 'dashboard',                                                                                                 // 31
  action: function () {                                                                                              // 32
    function action() {                                                                                              // 30
      ReactLayout.render(App, { routeTarget: React.createElement(Dashboard, null) });                                // 33
    }                                                                                                                // 34
                                                                                                                     //
    return action;                                                                                                   // 30
  }()                                                                                                                // 30
});                                                                                                                  // 30
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"main.jsx":["react","meteor/meteor","react-dom","../imports/startup/accounts-config.js","../imports/ui/App.jsx",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/main.jsx                                                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var React;module.import('react',{"default":function(v){React=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var render;module.import('react-dom',{"render":function(v){render=v}});module.import('../imports/startup/accounts-config.js');var App;module.import('../imports/ui/App.jsx',{"default":function(v){App=v}});
                                                                                                                     // 2
                                                                                                                     // 3
                                                                                                                     //
                                                                                                                     // 5
                                                                                                                     // 6
                                                                                                                     //
Meteor.startup(function () {                                                                                         // 8
  render(React.createElement(App, null), document.getElementById('render-target'));                                  // 9
});                                                                                                                  // 10
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"imports":{"api":{"campaigns.js":["meteor/meteor","meteor/mongo","meteor/check",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/campaigns.js                                                                                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({Tasks:function(){return Tasks},Settings:function(){return Settings},Addresses:function(){return Addresses},Sites:function(){return Sites}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});
                                                                                                                     // 2
                                                                                                                     // 3
                                                                                                                     //
var Tasks = new Mongo.Collection('tasks');                                                                           // 5
                                                                                                                     //
var Settings = new Mongo.Collection('settings');                                                                     // 8
var Addresses = new Mongo.Collection('addresses');                                                                   // 9
var Sites = new Mongo.Collection('sites');                                                                           // 10
                                                                                                                     //
if (Meteor.isServer) {                                                                                               // 14
  // This code only runs on the server                                                                               //
  // Only publish tasks that are public or belong to the current user                                                //
  Meteor.publish('settings', function () {                                                                           // 17
    function settingsPublication() {                                                                                 // 17
      return Settings.find({ userId: this.userId });                                                                 // 18
    }                                                                                                                // 19
                                                                                                                     //
    return settingsPublication;                                                                                      // 17
  }());                                                                                                              // 17
                                                                                                                     //
  Meteor.publish('sites', function () {                                                                              // 22
    function sitesPublication(fullname) {                                                                            // 22
      return Sites.find({ fullname: fullname });                                                                     // 23
    }                                                                                                                // 24
                                                                                                                     //
    return sitesPublication;                                                                                         // 22
  }());                                                                                                              // 22
}                                                                                                                    // 25
                                                                                                                     //
Meteor.methods({                                                                                                     // 27
  'campaigns.insert': function () {                                                                                  // 29
    function campaignsInsert(name, cover) {                                                                          // 27
      if (Meteor.isServer) {                                                                                         // 30
        check(name, String);                                                                                         // 31
        check(cover, String);                                                                                        // 32
                                                                                                                     //
        // Make sure the user is logged in before inserting a task                                                   //
        if (!this.userId) {                                                                                          // 36
          throw new Meteor.Error('not-authorized');                                                                  // 37
        }                                                                                                            // 38
                                                                                                                     //
        var newCampaign = {                                                                                          // 40
          id: Random.id(6),                                                                                          // 41
          userId: this.userId,                                                                                       // 42
          name: name,                                                                                                // 43
          cover: cover,                                                                                              // 44
          timestamp: new Date(),                                                                                     // 45
          hits: 0                                                                                                    // 46
        };                                                                                                           // 40
                                                                                                                     //
        Settings.update({ userId: this.userId }, { $push: { campaigns: newCampaign } }, { upsert: true });           // 49
      }                                                                                                              // 50
    }                                                                                                                // 51
                                                                                                                     //
    return campaignsInsert;                                                                                          // 27
  }(),                                                                                                               // 27
  'campaigns.delete': function () {                                                                                  // 53
    function campaignsDelete(id) {                                                                                   // 27
                                                                                                                     //
      // Make sure the user is logged in before inserting a task                                                     //
      if (!this.userId) {                                                                                            // 57
        throw new Meteor.Error('not-authorized');                                                                    // 58
      }                                                                                                              // 59
                                                                                                                     //
      Settings.update({ userId: this.userId }, { $pull: { campaigns: { id: id } } });                                // 61
    }                                                                                                                // 62
                                                                                                                     //
    return campaignsDelete;                                                                                          // 27
  }(),                                                                                                               // 27
  'campaigns.checkIP': function () {                                                                                 // 64
    function campaignsCheckIP(id) {                                                                                  // 27
      if (Meteor.isServer) {                                                                                         // 65
        // Make sure the user is logged in before inserting a task                                                   //
                                                                                                                     //
        clientIP = this.connection.clientAddress;                                                                    // 68
        console.log("client IP: " + clientIP);                                                                       // 69
        this.unblock();                                                                                              // 70
        try {                                                                                                        // 71
          var result = HTTP.call('GET', "http://ip-api.com/json/131.107.0.89", {});                                  // 72
          var org = result.data.org;                                                                                 // 73
          //return true;                                                                                             //
          //console.log("org: " + org );                                                                             //
          var activeCampaigns = Settings.findOne({}).campaigns;                                                      // 76
          for (var _iterator = activeCampaigns, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;                                                                                                // 77
                                                                                                                     //
            if (_isArray) {                                                                                          // 77
              if (_i >= _iterator.length) break;                                                                     // 77
              _ref = _iterator[_i++];                                                                                // 77
            } else {                                                                                                 // 77
              _i = _iterator.next();                                                                                 // 77
              if (_i.done) break;                                                                                    // 77
              _ref = _i.value;                                                                                       // 77
            }                                                                                                        // 77
                                                                                                                     //
            var campaign = _ref;                                                                                     // 77
                                                                                                                     //
            console.log("trying to match : " + campaign.name + " with : " + org);                                    // 78
                                                                                                                     //
            //console.log("org: " + org);                                                                            //
                                                                                                                     //
            if (org.toUpperCase().includes(campaign.name.toUpperCase())) {                                           // 82
              console.log("contains");                                                                               // 83
              //console.log( org );                                                                                  //
              console.log("passing this to client: " + campaign.name.replace(/\s+/g, ''));                           // 85
              return campaign.name.replace(/\s+/g, '');                                                              // 86
            } else {                                                                                                 // 87
              //console.log("doesn't contain");                                                                      //
              //console.log(org);                                                                                    //
            }                                                                                                        // 91
          }                                                                                                          // 93
          return "/";                                                                                                // 94
        } catch (e) {                                                                                                // 96
          // Got a network error, time-out or HTTP error in the 400 or 500 range.                                    //
          return "/";                                                                                                // 98
        }                                                                                                            // 99
        /*                                                                                                           //
        HTTP.call( 'GET', "http://ip-api.com/json/", {}, function( error, response ) {                               //
          if ( error ) {                                                                                             //
            console.log( error );                                                                                    //
          } else {                                                                                                   //
            var org = response.data.org;                                                                             //
            if(org){                                                                                                 //
              //Addresses.insert({IP: clientIP, org: org});                                                          //
              //Addresses.insert{}                                                                                   //
            }else{                                                                                                   //
              //Addresses.insert({IP: clientIP, org: ""});                                                           //
            }                                                                                                        //
            */                                                                                                       //
                                                                                                                     //
        // return null;                                                                                              //
        //console.log(response);                                                                                     //
                                                                                                                     //
        //}                                                                                                          //
        //});                                                                                                        //
      }                                                                                                              // 121
    }                                                                                                                // 122
                                                                                                                     //
    return campaignsCheckIP;                                                                                         // 27
  }()                                                                                                                // 27
});                                                                                                                  // 27
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"startup":{"accounts-config.js":["meteor/accounts-base",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/startup/accounts-config.js                                                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});                             // 1
                                                                                                                     //
Accounts.ui.config({                                                                                                 // 3
  passwordSignupFields: 'USERNAME_ONLY'                                                                              // 4
});                                                                                                                  // 3
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"ui":{"About.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/meteor","classnames","./Nav.jsx",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/About.jsx                                                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var classnames;module.import('classnames',{"default":function(v){classnames=v}});var Nav;module.import('./Nav.jsx',{"default":function(v){Nav=v}});
                                                                                                                     //
                                                                                                                     //
                                                                                                                     // 1
                                                                                                                     // 2
                                                                                                                     // 3
                                                                                                                     // 4
                                                                                                                     //
var About = function (_Component) {                                                                                  //
  _inherits(About, _Component);                                                                                      //
                                                                                                                     //
  function About() {                                                                                                 //
    _classCallCheck(this, About);                                                                                    //
                                                                                                                     //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                      //
  }                                                                                                                  //
                                                                                                                     //
  About.prototype.render = function () {                                                                             //
    function render() {                                                                                              //
      // Give tasks a different className when they are checked off,                                                 //
      // so that we can style them nicely in CSS                                                                     //
                                                                                                                     //
      return React.createElement(                                                                                    // 13
        'div',                                                                                                       // 14
        { className: 'container-fullwidth' },                                                                        // 14
        React.createElement(                                                                                         // 15
          'div',                                                                                                     // 15
          { className: 'main-jumbo about-jumbo' },                                                                   // 15
          React.createElement(Nav, null),                                                                            // 16
          React.createElement('img', { height: '200px', className: 'big-logo', src: 'hire-hydrant.png' }),           // 17
          React.createElement(                                                                                       // 18
            'h3',                                                                                                    // 18
            null,                                                                                                    // 18
            'Engineer. Entrepreneur. Etc.'                                                                           // 18
          ),                                                                                                         // 18
          React.createElement(                                                                                       // 20
            'p',                                                                                                     // 20
            null,                                                                                                    // 20
            React.createElement(                                                                                     // 20
              'a',                                                                                                   // 20
              { className: 'btn btn-primary btn-lg', href: '#', role: 'button' },                                    // 20
              'Learn more'                                                                                           // 20
            )                                                                                                        // 20
          )                                                                                                          // 20
        ),                                                                                                           // 15
        React.createElement(                                                                                         // 22
          'div',                                                                                                     // 22
          { className: 'row' },                                                                                      // 22
          React.createElement(                                                                                       // 23
            'div',                                                                                                   // 23
            { className: 'col-sm-4 about-col' },                                                                     // 23
            React.createElement('i', { className: 'fa fa-laptop fa-5x' }),                                           // 24
            React.createElement(                                                                                     // 25
              'h3',                                                                                                  // 25
              null,                                                                                                  // 25
              'Your professional website. Start to finish in under 10 clicks.'                                       // 25
            )                                                                                                        // 25
          ),                                                                                                         // 23
          React.createElement(                                                                                       // 28
            'div',                                                                                                   // 28
            { className: 'col-sm-4 about-col' },                                                                     // 28
            React.createElement('i', { className: 'fa fa-crosshairs fa-5x' }),                                       // 29
            React.createElement(                                                                                     // 30
              'h3',                                                                                                  // 30
              null,                                                                                                  // 30
              'Uses discrete IP geolocation to automatically redirect recruiters to a personalized space where you can market yourself directly to them.'
            )                                                                                                        // 30
          ),                                                                                                         // 28
          React.createElement(                                                                                       // 33
            'div',                                                                                                   // 33
            { className: 'col-sm-4 about-col' },                                                                     // 33
            React.createElement('i', { className: 'fa fa-black-tie fa-5x' }),                                        // 34
            React.createElement(                                                                                     // 35
              'h3',                                                                                                  // 35
              null,                                                                                                  // 35
              'Market yourself. Increase your online presence. Increase your odds of landing your dream job by 30%.'
            )                                                                                                        // 35
          )                                                                                                          // 33
        )                                                                                                            // 22
      );                                                                                                             // 14
    }                                                                                                                // 41
                                                                                                                     //
    return render;                                                                                                   //
  }();                                                                                                               //
                                                                                                                     //
  return About;                                                                                                      //
}(Component);                                                                                                        //
                                                                                                                     //
module.export("default",exports.default=(About));                                                                    //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"AccountsUIWrapper.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/templating","meteor/blaze",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/AccountsUIWrapper.jsx                                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});var Blaze;module.import('meteor/blaze',{"Blaze":function(v){Blaze=v}});
                                                                                                                     //
                                                                                                                     //
                                                                                                                     // 1
                                                                                                                     // 2
                                                                                                                     // 3
                                                                                                                     // 4
                                                                                                                     //
var AccountsUIWrapper = function (_Component) {                                                                      //
  _inherits(AccountsUIWrapper, _Component);                                                                          //
                                                                                                                     //
  function AccountsUIWrapper() {                                                                                     //
    _classCallCheck(this, AccountsUIWrapper);                                                                        //
                                                                                                                     //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                      //
  }                                                                                                                  //
                                                                                                                     //
  AccountsUIWrapper.prototype.componentDidMount = function () {                                                      //
    function componentDidMount() {                                                                                   //
      // Use Meteor Blaze to render login buttons                                                                    //
      this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));                    // 9
    }                                                                                                                // 11
                                                                                                                     //
    return componentDidMount;                                                                                        //
  }();                                                                                                               //
                                                                                                                     //
  AccountsUIWrapper.prototype.componentWillUnmount = function () {                                                   //
    function componentWillUnmount() {                                                                                //
      // Clean up Blaze view                                                                                         //
      Blaze.remove(this.view);                                                                                       // 14
    }                                                                                                                // 15
                                                                                                                     //
    return componentWillUnmount;                                                                                     //
  }();                                                                                                               //
                                                                                                                     //
  AccountsUIWrapper.prototype.render = function () {                                                                 //
    function render() {                                                                                              //
      // Just render a placeholder container that will be filled in                                                  //
      return React.createElement('span', { ref: 'container' });                                                      // 18
    }                                                                                                                // 19
                                                                                                                     //
    return render;                                                                                                   //
  }();                                                                                                               //
                                                                                                                     //
  return AccountsUIWrapper;                                                                                          //
}(Component);                                                                                                        //
                                                                                                                     //
module.export("default",exports.default=(AccountsUIWrapper));                                                        //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"App.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/meteor","meteor/react-meteor-data","../api/campaigns.js","./Nav.jsx","./About.jsx","./Dashboard.jsx","./CoverLetter.jsx","./Campaign.jsx","./Site.jsx","./BlankCampaign.jsx","./AccountsUIWrapper.jsx",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/App.jsx                                                                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var createContainer;module.import('meteor/react-meteor-data',{"createContainer":function(v){createContainer=v}});var Sites;module.import('../api/campaigns.js',{"Sites":function(v){Sites=v}});var Settings;module.import('../api/campaigns.js',{"Settings":function(v){Settings=v}});var Nav;module.import('./Nav.jsx',{"default":function(v){Nav=v}});var About;module.import('./About.jsx',{"default":function(v){About=v}});var Dashboard;module.import('./Dashboard.jsx',{"default":function(v){Dashboard=v}});var CoverLetter;module.import('./CoverLetter.jsx',{"default":function(v){CoverLetter=v}});var Campaign;module.import('./Campaign.jsx',{"default":function(v){Campaign=v}});var Site;module.import('./Site.jsx',{"default":function(v){Site=v}});var BlankCampaign;module.import('./BlankCampaign.jsx',{"default":function(v){BlankCampaign=v}});var AccountsUIWrapper;module.import('./AccountsUIWrapper.jsx',{"default":function(v){AccountsUIWrapper=v}});
                                                                                                                     //
                                                                                                                     //
                                                                                                                     //
                                                                                                                     // 2
                                                                                                                     // 3
                                                                                                                     // 4
                                                                                                                     // 5
                                                                                                                     //
                                                                                                                     // 7
                                                                                                                     // 8
                                                                                                                     //
                                                                                                                     // 10
                                                                                                                     // 11
                                                                                                                     // 12
                                                                                                                     // 13
                                                                                                                     // 14
                                                                                                                     // 15
                                                                                                                     // 16
                                                                                                                     // 17
                                                                                                                     //
// App component - represents the whole app                                                                          //
                                                                                                                     //
var App = function (_Component) {                                                                                    //
  _inherits(App, _Component);                                                                                        //
                                                                                                                     //
  function App(props) {                                                                                              // 21
    _classCallCheck(this, App);                                                                                      // 21
                                                                                                                     //
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));                                      // 21
                                                                                                                     //
    _this.state = {};                                                                                                // 24
    return _this;                                                                                                    // 21
  }                                                                                                                  // 26
                                                                                                                     //
  App.prototype.componentWillMount = function () {                                                                   //
    function componentWillMount() {                                                                                  //
      if (!Meteor.userId()) {                                                                                        // 29
        var organization = Meteor.call('campaigns.checkIP', function (err, data) {                                   // 30
          if (err) console.log(err);                                                                                 // 31
                                                                                                                     //
          console.log("Data: ");                                                                                     // 34
          console.log(data);                                                                                         // 35
          if (data) {                                                                                                // 36
            console.log("Data: ");                                                                                   // 37
            console.log(data);                                                                                       // 38
            Session.set('organization', data);                                                                       // 39
            console.log("Session var: " + Session.get('organization'));                                              // 40
                                                                                                                     //
            if (data == "/") {                                                                                       // 42
              FlowRouter.go("/derekfeehrer");                                                                        // 43
            } else {                                                                                                 // 44
              FlowRouter.route('/derekfeehrer/' + Session.get('organization'), {                                     // 45
                name: Session.get('organization'),                                                                   // 46
                action: function () {                                                                                // 47
                  function action() {                                                                                // 45
                    ReactLayout.render(App, { routeTarget: React.createElement(Site, null) });                       // 48
                  }                                                                                                  // 49
                                                                                                                     //
                  return action;                                                                                     // 45
                }()                                                                                                  // 45
              });                                                                                                    // 45
              FlowRouter.go("/derekfeehrer/" + Session.get('organization'));                                         // 51
            }                                                                                                        // 52
          }                                                                                                          // 53
        });                                                                                                          // 55
      }                                                                                                              // 56
    }                                                                                                                // 59
                                                                                                                     //
    return componentWillMount;                                                                                       //
  }();                                                                                                               //
                                                                                                                     //
  App.prototype.render = function () {                                                                               //
    function render() {                                                                                              //
      return React.createElement(                                                                                    // 62
        'div',                                                                                                       // 63
        null,                                                                                                        // 63
        this.props.routeTarget                                                                                       // 65
      );                                                                                                             // 63
    }                                                                                                                // 69
                                                                                                                     //
    return render;                                                                                                   //
  }();                                                                                                               //
                                                                                                                     //
  return App;                                                                                                        //
}(Component);                                                                                                        //
/*                                                                                                                   //
App.propTypes = {                                                                                                    //
  settings: PropTypes.object.isRequired                                                                              //
};*/                                                                                                                 //
                                                                                                                     //
module.export("default",exports.default=(createContainer(function () {                                               // 76
  //Meteor.subscribe('settings');                                                                                    //
  return {};                                                                                                         // 78
}, App)));                                                                                                           // 81
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"BlankCampaign.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/meteor","classnames","react-dom",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/BlankCampaign.jsx                                                                                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var classnames;module.import('classnames',{"default":function(v){classnames=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});
                                                                                                                     //
                                                                                                                     //
                                                                                                                     // 1
                                                                                                                     // 2
                                                                                                                     // 3
                                                                                                                     // 4
                                                                                                                     //
//import { Tasks } from '../api/tasks.js';                                                                           //
                                                                                                                     //
// Task component - represents a single todo item                                                                    //
                                                                                                                     //
var BlankCampaign = function (_Component) {                                                                          //
  _inherits(BlankCampaign, _Component);                                                                              //
                                                                                                                     //
  function BlankCampaign() {                                                                                         //
    _classCallCheck(this, BlankCampaign);                                                                            //
                                                                                                                     //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                      //
  }                                                                                                                  //
                                                                                                                     //
  BlankCampaign.prototype.handleSubmit = function () {                                                               //
    function handleSubmit(event) {                                                                                   //
      event.preventDefault();                                                                                        // 13
      var name = ReactDOM.findDOMNode(this.refs.nameInput).value.trim();                                             // 14
      var cover = ReactDOM.findDOMNode(this.refs.coverInput).value.trim();                                           // 15
                                                                                                                     //
      Meteor.call('campaigns.insert', name, cover);                                                                  // 17
                                                                                                                     //
      // Clear form                                                                                                  //
      ReactDOM.findDOMNode(this.refs.nameInput).value = '';                                                          // 20
      ReactDOM.findDOMNode(this.refs.coverInput).value = '';                                                         // 21
    }                                                                                                                // 23
                                                                                                                     //
    return handleSubmit;                                                                                             //
  }();                                                                                                               //
                                                                                                                     //
  BlankCampaign.prototype.render = function () {                                                                     //
    function render() {                                                                                              //
      // Give tasks a different className when they are checked off,                                                 //
      // so that we can style them nicely in CSS                                                                     //
                                                                                                                     //
      return React.createElement(                                                                                    // 29
        'li',                                                                                                        // 30
        null,                                                                                                        // 30
        React.createElement(                                                                                         // 32
          'div',                                                                                                     // 32
          { className: 'panel panel-default campaign-panel blank-campaign-panel' },                                  // 32
          React.createElement(                                                                                       // 33
            'div',                                                                                                   // 33
            { className: 'panel-body' },                                                                             // 33
            React.createElement(                                                                                     // 34
              'form',                                                                                                // 34
              { id: 'campaign-form', onSubmit: this.handleSubmit.bind(this) },                                       // 34
              React.createElement(                                                                                   // 35
                'div',                                                                                               // 35
                { className: 'form-group' },                                                                         // 35
                React.createElement(                                                                                 // 36
                  'label',                                                                                           // 36
                  { 'for': 'nameInput' },                                                                            // 36
                  'Company '                                                                                         // 36
                ),                                                                                                   // 36
                React.createElement('input', {                                                                       // 37
                  type: 'text',                                                                                      // 38
                  className: 'form-control',                                                                         // 39
                  ref: 'nameInput',                                                                                  // 40
                  placeholder: 'Company Name'                                                                        // 41
                })                                                                                                   // 37
              ),                                                                                                     // 35
              React.createElement(                                                                                   // 45
                'div',                                                                                               // 45
                { className: 'form-group' },                                                                         // 45
                React.createElement('textarea', {                                                                    // 46
                  type: 'text',                                                                                      // 47
                  className: 'form-control',                                                                         // 48
                  ref: 'coverInput',                                                                                 // 49
                  placeholder: 'Enter cover letter here.'                                                            // 50
                })                                                                                                   // 46
              )                                                                                                      // 45
            ),                                                                                                       // 34
            React.createElement(                                                                                     // 54
              'button',                                                                                              // 54
              { className: 'btn btn-default', type: 'submit', form: 'campaign-form', value: 'Submit' },              // 54
              'Add'                                                                                                  // 54
            )                                                                                                        // 54
          )                                                                                                          // 33
        )                                                                                                            // 32
      );                                                                                                             // 30
    }                                                                                                                // 60
                                                                                                                     //
    return render;                                                                                                   //
  }();                                                                                                               //
                                                                                                                     //
  return BlankCampaign;                                                                                              //
}(Component);                                                                                                        //
                                                                                                                     //
module.export("default",exports.default=(BlankCampaign));                                                            //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Campaign.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/meteor","classnames",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/Campaign.jsx                                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var classnames;module.import('classnames',{"default":function(v){classnames=v}});
                                                                                                                     //
                                                                                                                     //
                                                                                                                     // 1
                                                                                                                     // 2
                                                                                                                     // 3
                                                                                                                     //
//import { Tasks } from '../api/tasks.js';                                                                           //
                                                                                                                     //
// Task component - represents a single todo item                                                                    //
                                                                                                                     //
var Campaign = function (_Component) {                                                                               //
  _inherits(Campaign, _Component);                                                                                   //
                                                                                                                     //
  function Campaign() {                                                                                              //
    _classCallCheck(this, Campaign);                                                                                 //
                                                                                                                     //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                      //
  }                                                                                                                  //
                                                                                                                     //
  Campaign.prototype.deleteThisCampaign = function () {                                                              //
    function deleteThisCampaign() {                                                                                  //
      Meteor.call('campaigns.delete', this.props.campaign.id);                                                       // 11
    }                                                                                                                // 12
                                                                                                                     //
    return deleteThisCampaign;                                                                                       //
  }();                                                                                                               //
                                                                                                                     //
  Campaign.prototype.render = function () {                                                                          //
    function render() {                                                                                              //
      // Give tasks a different className when they are checked off,                                                 //
      // so that we can style them nicely in CSS                                                                     //
                                                                                                                     //
      return React.createElement(                                                                                    // 18
        'li',                                                                                                        // 19
        null,                                                                                                        // 19
        React.createElement(                                                                                         // 21
          'div',                                                                                                     // 21
          { className: 'panel panel-default campaign-panel' },                                                       // 21
          React.createElement(                                                                                       // 22
            'div',                                                                                                   // 22
            { className: 'panel-body' },                                                                             // 22
            React.createElement(                                                                                     // 23
              'h1',                                                                                                  // 23
              null,                                                                                                  // 23
              this.props.campaign.name                                                                               // 23
            ),                                                                                                       // 23
            React.createElement(                                                                                     // 24
              'p',                                                                                                   // 24
              null,                                                                                                  // 24
              this.props.campaign.cover                                                                              // 24
            ),                                                                                                       // 24
            React.createElement(                                                                                     // 25
              'button',                                                                                              // 25
              { className: 'delete btn btn-default', onClick: this.deleteThisCampaign.bind(this) },                  // 25
              'Delete'                                                                                               // 25
            )                                                                                                        // 25
          )                                                                                                          // 22
        )                                                                                                            // 21
      );                                                                                                             // 19
    }                                                                                                                // 33
                                                                                                                     //
    return render;                                                                                                   //
  }();                                                                                                               //
                                                                                                                     //
  return Campaign;                                                                                                   //
}(Component);                                                                                                        //
                                                                                                                     //
module.export("default",exports.default=(Campaign));                                                                 //
                                                                                                                     //
                                                                                                                     //
Campaign.propTypes = {                                                                                               // 36
  // This component gets the task to display through a React prop.                                                   //
  // We can use propTypes to indicate it is required                                                                 //
  campaign: PropTypes.object.isRequired                                                                              // 39
};                                                                                                                   // 36
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"CoverLetter.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/meteor","classnames",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/CoverLetter.jsx                                                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var classnames;module.import('classnames',{"default":function(v){classnames=v}});
                                                                                                                     //
                                                                                                                     //
                                                                                                                     // 1
                                                                                                                     // 2
                                                                                                                     // 3
                                                                                                                     //
var CoverLetter = function (_Component) {                                                                            //
  _inherits(CoverLetter, _Component);                                                                                //
                                                                                                                     //
  function CoverLetter() {                                                                                           //
    _classCallCheck(this, CoverLetter);                                                                              //
                                                                                                                     //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                      //
  }                                                                                                                  //
                                                                                                                     //
  CoverLetter.prototype.render = function () {                                                                       //
    function render() {                                                                                              //
      // Give tasks a different className when they are checked off,                                                 //
      // so that we can style them nicely in CSS                                                                     //
                                                                                                                     //
      return React.createElement(                                                                                    // 12
        'div',                                                                                                       // 13
        { className: 'panel panel-default cover-panel' },                                                            // 13
        React.createElement(                                                                                         // 14
          'div',                                                                                                     // 14
          { className: 'panel-body' },                                                                               // 14
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        )                                                                                                            // 14
      );                                                                                                             // 13
    }                                                                                                                // 20
                                                                                                                     //
    return render;                                                                                                   //
  }();                                                                                                               //
                                                                                                                     //
  return CoverLetter;                                                                                                //
}(Component);                                                                                                        //
                                                                                                                     //
module.export("default",exports.default=(CoverLetter));                                                              //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Dashboard.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/meteor","meteor/react-meteor-data","../api/campaigns.js","./Nav.jsx","./About.jsx","./CoverLetter.jsx","./Campaign.jsx","./BlankCampaign.jsx","./AccountsUIWrapper.jsx",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/Dashboard.jsx                                                                                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var createContainer;module.import('meteor/react-meteor-data',{"createContainer":function(v){createContainer=v}});var Settings;module.import('../api/campaigns.js',{"Settings":function(v){Settings=v}});var Nav;module.import('./Nav.jsx',{"default":function(v){Nav=v}});var About;module.import('./About.jsx',{"default":function(v){About=v}});var CoverLetter;module.import('./CoverLetter.jsx',{"default":function(v){CoverLetter=v}});var Campaign;module.import('./Campaign.jsx',{"default":function(v){Campaign=v}});var BlankCampaign;module.import('./BlankCampaign.jsx',{"default":function(v){BlankCampaign=v}});var AccountsUIWrapper;module.import('./AccountsUIWrapper.jsx',{"default":function(v){AccountsUIWrapper=v}});
                                                                                                                     //
                                                                                                                     //
                                                                                                                     //
                                                                                                                     // 2
                                                                                                                     // 3
                                                                                                                     // 4
                                                                                                                     // 5
                                                                                                                     //
                                                                                                                     // 7
                                                                                                                     //
                                                                                                                     // 9
                                                                                                                     // 10
                                                                                                                     // 11
                                                                                                                     // 12
                                                                                                                     // 13
                                                                                                                     // 14
                                                                                                                     //
// App component - represents the whole app                                                                          //
                                                                                                                     //
var Dashboard = function (_Component) {                                                                              //
  _inherits(Dashboard, _Component);                                                                                  //
                                                                                                                     //
  function Dashboard(props) {                                                                                        // 18
    _classCallCheck(this, Dashboard);                                                                                // 18
                                                                                                                     //
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));                                      // 18
                                                                                                                     //
    _this.state = {};                                                                                                // 21
    return _this;                                                                                                    // 18
  }                                                                                                                  // 23
                                                                                                                     //
  Dashboard.prototype.handleSubmit = function () {                                                                   //
    function handleSubmit(event) {                                                                                   //
      event.preventDefault();                                                                                        // 27
                                                                                                                     //
      // Find the text field via the React ref                                                                       //
      var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();                                             // 30
                                                                                                                     //
      Meteor.call('tasks.insert', text);                                                                             // 32
                                                                                                                     //
      // Clear form                                                                                                  //
      ReactDOM.findDOMNode(this.refs.textInput).value = '';                                                          // 35
    }                                                                                                                // 36
                                                                                                                     //
    return handleSubmit;                                                                                             //
  }();                                                                                                               //
                                                                                                                     //
  Dashboard.prototype.renderCampaigns = function () {                                                                //
    function renderCampaigns() {                                                                                     //
      console.log(this.props.settings);                                                                              // 39
      if (this.props.settings[0]) {                                                                                  // 40
        return this.props.settings[0].campaigns.map(function (campaign) {                                            // 41
                                                                                                                     //
          return React.createElement(Campaign, {                                                                     // 43
            key: campaign.id,                                                                                        // 45
            campaign: campaign                                                                                       // 46
          });                                                                                                        // 44
        });                                                                                                          // 49
      } else {                                                                                                       // 50
        return null;                                                                                                 // 51
      }                                                                                                              // 52
    }                                                                                                                // 53
                                                                                                                     //
    return renderCampaigns;                                                                                          //
  }();                                                                                                               //
                                                                                                                     //
  Dashboard.prototype.render = function () {                                                                         //
    function render() {                                                                                              //
      return React.createElement(                                                                                    // 56
        'div',                                                                                                       // 57
        { className: 'container-fullwidth' },                                                                        // 57
        React.createElement(Nav, null),                                                                              // 59
        React.createElement(                                                                                         // 61
          'div',                                                                                                     // 61
          { className: 'row campaign-holder' },                                                                      // 61
          React.createElement(                                                                                       // 62
            'div',                                                                                                   // 62
            { className: 'col-sm-12' },                                                                              // 62
            React.createElement(                                                                                     // 63
              'h3',                                                                                                  // 63
              null,                                                                                                  // 63
              'Add New Campaigns'                                                                                    // 63
            ),                                                                                                       // 63
            React.createElement(BlankCampaign, null)                                                                 // 64
          )                                                                                                          // 62
        ),                                                                                                           // 61
        React.createElement(                                                                                         // 67
          'h3',                                                                                                      // 67
          null,                                                                                                      // 67
          'Existing Campaigns'                                                                                       // 67
        ),                                                                                                           // 67
        React.createElement(                                                                                         // 68
          'ul',                                                                                                      // 68
          null,                                                                                                      // 68
          this.renderCampaigns()                                                                                     // 69
        )                                                                                                            // 68
      );                                                                                                             // 57
    }                                                                                                                // 73
                                                                                                                     //
    return render;                                                                                                   //
  }();                                                                                                               //
                                                                                                                     //
  return Dashboard;                                                                                                  //
}(Component);                                                                                                        //
                                                                                                                     //
Dashboard.propTypes = {                                                                                              // 76
  settings: PropTypes.array.isRequired                                                                               // 77
};                                                                                                                   // 76
                                                                                                                     //
module.export("default",exports.default=(createContainer(function () {                                               // 80
  Meteor.subscribe('settings');                                                                                      // 81
  return {                                                                                                           // 82
    settings: Settings.find({}).fetch()                                                                              // 83
  };                                                                                                                 // 82
}, Dashboard)));                                                                                                     // 85
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Nav.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/meteor","classnames","./AccountsUIWrapper.jsx",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/Nav.jsx                                                                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var classnames;module.import('classnames',{"default":function(v){classnames=v}});var AccountsUIWrapper;module.import('./AccountsUIWrapper.jsx',{"default":function(v){AccountsUIWrapper=v}});
                                                                                                                     //
                                                                                                                     //
                                                                                                                     // 1
                                                                                                                     // 2
                                                                                                                     // 3
                                                                                                                     // 4
                                                                                                                     //
var Nav = function (_Component) {                                                                                    //
  _inherits(Nav, _Component);                                                                                        //
                                                                                                                     //
  function Nav() {                                                                                                   //
    _classCallCheck(this, Nav);                                                                                      //
                                                                                                                     //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                      //
  }                                                                                                                  //
                                                                                                                     //
  Nav.prototype.render = function () {                                                                               //
    function render() {                                                                                              //
      // Give tasks a different className when they are checked off,                                                 //
      // so that we can style them nicely in CSS                                                                     //
                                                                                                                     //
      return React.createElement(                                                                                    // 13
        'nav',                                                                                                       // 14
        { className: 'navbar navbar-default' },                                                                      // 14
        React.createElement(                                                                                         // 15
          'div',                                                                                                     // 15
          { className: 'container-fluid' },                                                                          // 15
          React.createElement(                                                                                       // 16
            'div',                                                                                                   // 16
            { className: 'navbar-header' },                                                                          // 16
            React.createElement(                                                                                     // 17
              'button',                                                                                              // 17
              { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '#myNavbar' },
              React.createElement('span', { className: 'icon-bar' }),                                                // 18
              React.createElement('span', { className: 'icon-bar' }),                                                // 19
              React.createElement('span', { className: 'icon-bar' })                                                 // 20
            ),                                                                                                       // 17
            React.createElement(                                                                                     // 22
              'a',                                                                                                   // 22
              { className: 'navbar-brand', id: 'logo', href: '#' },                                                  // 22
              'Home'                                                                                                 // 22
            )                                                                                                        // 22
          ),                                                                                                         // 16
          React.createElement(                                                                                       // 24
            'div',                                                                                                   // 24
            { className: 'collapse navbar-collapse', id: 'myNavbar' },                                               // 24
            React.createElement(                                                                                     // 25
              'ul',                                                                                                  // 25
              { className: 'nav navbar-nav' },                                                                       // 25
              React.createElement(                                                                                   // 26
                'li',                                                                                                // 26
                null,                                                                                                // 26
                React.createElement(AccountsUIWrapper, null)                                                         // 26
              )                                                                                                      // 26
            )                                                                                                        // 25
          )                                                                                                          // 24
        )                                                                                                            // 15
      );                                                                                                             // 14
    }                                                                                                                // 32
                                                                                                                     //
    return render;                                                                                                   //
  }();                                                                                                               //
                                                                                                                     //
  return Nav;                                                                                                        //
}(Component);                                                                                                        //
                                                                                                                     //
module.export("default",exports.default=(Nav));                                                                      //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Site.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/meteor","meteor/react-meteor-data","../api/campaigns.js","./Nav.jsx","./App.jsx","./About.jsx","./CoverLetter.jsx","./Campaign.jsx","./BlankCampaign.jsx","./AccountsUIWrapper.jsx",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/Site.jsx                                                                                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var createContainer;module.import('meteor/react-meteor-data',{"createContainer":function(v){createContainer=v}});var Sites;module.import('../api/campaigns.js',{"Sites":function(v){Sites=v}});var Nav;module.import('./Nav.jsx',{"default":function(v){Nav=v}});var App;module.import('./App.jsx',{"default":function(v){App=v}});var About;module.import('./About.jsx',{"default":function(v){About=v}});var CoverLetter;module.import('./CoverLetter.jsx',{"default":function(v){CoverLetter=v}});var Campaign;module.import('./Campaign.jsx',{"default":function(v){Campaign=v}});var BlankCampaign;module.import('./BlankCampaign.jsx',{"default":function(v){BlankCampaign=v}});var AccountsUIWrapper;module.import('./AccountsUIWrapper.jsx',{"default":function(v){AccountsUIWrapper=v}});
                                                                                                                     //
                                                                                                                     //
                                                                                                                     //
                                                                                                                     // 2
                                                                                                                     // 3
                                                                                                                     // 4
                                                                                                                     // 5
                                                                                                                     //
                                                                                                                     // 7
                                                                                                                     //
                                                                                                                     // 9
                                                                                                                     // 10
                                                                                                                     // 11
                                                                                                                     // 12
                                                                                                                     // 13
                                                                                                                     // 14
                                                                                                                     // 15
                                                                                                                     //
// App component - represents the whole app                                                                          //
                                                                                                                     //
var Site = function (_Component) {                                                                                   //
  _inherits(Site, _Component);                                                                                       //
                                                                                                                     //
  function Site(props) {                                                                                             // 20
    _classCallCheck(this, Site);                                                                                     // 20
                                                                                                                     //
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));                                      // 20
                                                                                                                     //
    _this.state = {};                                                                                                // 23
    return _this;                                                                                                    // 20
  }                                                                                                                  // 25
                                                                                                                     //
  Site.prototype.handleSubmit = function () {                                                                        //
    function handleSubmit(event) {                                                                                   //
      event.preventDefault();                                                                                        // 28
                                                                                                                     //
      // Find the text field via the React ref                                                                       //
      var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();                                             // 31
                                                                                                                     //
      Meteor.call('tasks.insert', text);                                                                             // 33
                                                                                                                     //
      // Clear form                                                                                                  //
      ReactDOM.findDOMNode(this.refs.textInput).value = '';                                                          // 36
    }                                                                                                                // 37
                                                                                                                     //
    return handleSubmit;                                                                                             //
  }();                                                                                                               //
                                                                                                                     //
  Site.prototype.render = function () {                                                                              //
    function render() {                                                                                              //
                                                                                                                     //
      return React.createElement(                                                                                    // 41
        'div',                                                                                                       // 42
        { className: 'container-fullwidth' },                                                                        // 42
        React.createElement(                                                                                         // 44
          'div',                                                                                                     // 44
          { className: 'main-jumbo personal-jumbo' },                                                                // 44
          React.createElement(Nav, null),                                                                            // 45
          React.createElement(                                                                                       // 46
            'h1',                                                                                                    // 46
            null,                                                                                                    // 46
            'Derek Feehrer'                                                                                          // 46
          ),                                                                                                         // 46
          React.createElement(                                                                                       // 47
            'h3',                                                                                                    // 47
            null,                                                                                                    // 47
            'Engineer. Entrepreneur. Etc.'                                                                           // 47
          ),                                                                                                         // 47
          React.createElement(                                                                                       // 48
            'p',                                                                                                     // 48
            null,                                                                                                    // 48
            React.createElement(                                                                                     // 48
              'a',                                                                                                   // 48
              { className: 'btn btn-primary btn-lg', href: '#', role: 'button' },                                    // 48
              'Learn more'                                                                                           // 48
            )                                                                                                        // 48
          )                                                                                                          // 48
        )                                                                                                            // 44
      );                                                                                                             // 42
    }                                                                                                                // 52
                                                                                                                     //
    return render;                                                                                                   //
  }();                                                                                                               //
                                                                                                                     //
  return Site;                                                                                                       //
}(Component);                                                                                                        //
/*                                                                                                                   //
Site.propTypes = {                                                                                                   //
  sites: PropTypes.array.isRequired,                                                                                 //
};                                                                                                                   //
                                                                                                                     //
export default createContainer(() => {                                                                               //
  Meteor.subscribe('sites');                                                                                         //
  return {                                                                                                           //
    sites: Sites.find({}).fetch()                                                                                    //
  };                                                                                                                 //
}, Site);*/                                                                                                          //
                                                                                                                     //
                                                                                                                     //
module.export("default",exports.default=(Site));                                                                     //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}},{"extensions":[".js",".json",".html",".jsx",".css"]});
require("./client/template.main.js");
require("./client/main.js");
require("./client/main.jsx");