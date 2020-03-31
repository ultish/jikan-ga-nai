'use strict';



;define("jikan-ga-nai/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});

;define("jikan-ga-nai/app", ["exports", "ember-resolver", "ember-load-initializers", "jikan-ga-nai/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});

;define("jikan-ga-nai/application/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Application extends Ember.Controller {
    constructor() {
      super(...arguments);
    }

  } // DO NOT DELETE: this is how TypeScript knows how to look up your controllers.


  _exports.default = Application;
});

;define("jikan-ga-nai/application/route", ["exports", "ember-apollo-client", "jikan-ga-nai/gql/queries/messages.graphql"], function (_exports, _emberApolloClient, _messages) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let Application = (_class = (_temp = class Application extends Ember.Route.extend({// anything which *must* be merged to prototype here\
  }) {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "apollo", _descriptor, this);
    }

    model() {
      // watchQuery behaves like a live array i think. But not a subscription,
      // theres another function for that.
      return this.get("apollo").watchQuery({
        query: _messages.default
      },
      /**
       * this is the resultsKey param.
       * It defines where in the payload you want to fetch resutls from.
       * eg our payload looks like:
       * data {
       *    messages: {
       *       edges: [
       *          ...
       *       ]
       *       pageIno: {
       *          ...
       *       }
       *    }
       * }
       *
       * so you can say "messages" to get everything, or "messages.edges"
       * to only get the actual message content
       */
      "messages");
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "apollo", [_emberApolloClient.queryManager], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = Application;
});

;define("jikan-ga-nai/application/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "RmWLZ3Ja",
    "block": "{\"symbols\":[\"msg\"],\"statements\":[[1,1,0,0,\"Messages:\\n\"],[9,\"ul\",true],[10],[1,1,0,0,\"\\n\"],[5,[27,[26,1,\"BlockHead\"],[]],[[31,0,0,[27,[26,0,\"CallHead\"],[]],[[31,0,0,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"model\",\"edges\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"    \"],[9,\"li\",true],[10],[1,1,0,0,\"\\n      \"],[1,0,0,0,[27,[24,1],[\"text\"]]],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[1]}]]],[11]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "jikan-ga-nai/application/template.hbs"
    }
  });

  _exports.default = _default;
});

;define("jikan-ga-nai/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});

;define("jikan-ga-nai/config/environment.d", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = config;
  /**
   * Type declarations for
   *    import config from './config/environment'
   *
   * For now these need to be managed by the developer
   * since different ember addons can materialize new entries.
   */

  _exports.default = _default;
});

;define("jikan-ga-nai/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});

;define("jikan-ga-nai/gql/queries/messages.graphql", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const doc = {
    "kind": "Document",
    "definitions": [{
      "kind": "OperationDefinition",
      "operation": "query",
      "name": {
        "kind": "Name",
        "value": "messages"
      },
      "variableDefinitions": [{
        "kind": "VariableDefinition",
        "variable": {
          "kind": "Variable",
          "name": {
            "kind": "Name",
            "value": "cursor"
          }
        },
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "String"
          }
        },
        "directives": []
      }, {
        "kind": "VariableDefinition",
        "variable": {
          "kind": "Variable",
          "name": {
            "kind": "Name",
            "value": "limit"
          }
        },
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Int"
          }
        },
        "directives": []
      }],
      "directives": [],
      "selectionSet": {
        "kind": "SelectionSet",
        "selections": [{
          "kind": "Field",
          "name": {
            "kind": "Name",
            "value": "messages"
          },
          "arguments": [{
            "kind": "Argument",
            "name": {
              "kind": "Name",
              "value": "cursor"
            },
            "value": {
              "kind": "Variable",
              "name": {
                "kind": "Name",
                "value": "cursor"
              }
            }
          }, {
            "kind": "Argument",
            "name": {
              "kind": "Name",
              "value": "limit"
            },
            "value": {
              "kind": "Variable",
              "name": {
                "kind": "Name",
                "value": "limit"
              }
            }
          }],
          "directives": [],
          "selectionSet": {
            "kind": "SelectionSet",
            "selections": [{
              "kind": "Field",
              "name": {
                "kind": "Name",
                "value": "edges"
              },
              "arguments": [],
              "directives": [],
              "selectionSet": {
                "kind": "SelectionSet",
                "selections": [{
                  "kind": "Field",
                  "name": {
                    "kind": "Name",
                    "value": "text"
                  },
                  "arguments": [],
                  "directives": []
                }]
              }
            }, {
              "kind": "Field",
              "name": {
                "kind": "Name",
                "value": "pageInfo"
              },
              "arguments": [],
              "directives": [],
              "selectionSet": {
                "kind": "SelectionSet",
                "selections": [{
                  "kind": "Field",
                  "name": {
                    "kind": "Name",
                    "value": "endCursor"
                  },
                  "arguments": [],
                  "directives": []
                }, {
                  "kind": "Field",
                  "name": {
                    "kind": "Name",
                    "value": "hasNextPage"
                  },
                  "arguments": [],
                  "directives": []
                }]
              }
            }]
          }
        }]
      }
    }],
    "loc": {
      "start": 0,
      "end": 182
    }
  };
  var _default = doc;
  _exports.default = _default;
});

;define("jikan-ga-nai/helpers/app-version", ["exports", "jikan-ga-nai/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});

;define("jikan-ga-nai/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});

;define("jikan-ga-nai/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});

;define("jikan-ga-nai/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "jikan-ga-nai/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});

;define("jikan-ga-nai/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});

;define("jikan-ga-nai/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});

;define("jikan-ga-nai/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});

;define("jikan-ga-nai/initializers/export-application-global", ["exports", "jikan-ga-nai/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});

;define("jikan-ga-nai/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});

;define("jikan-ga-nai/router", ["exports", "jikan-ga-nai/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {});
});

;define("jikan-ga-nai/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});

;define("jikan-ga-nai/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});

;define("jikan-ga-nai/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});

;define("jikan-ga-nai/services/apollo", ["exports", "ember-apollo-client/services/apollo"], function (_exports, _apollo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _apollo.default;
    }
  });
});

;define("jikan-ga-nai/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});

;define("jikan-ga-nai/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});

;define("jikan-ga-nai/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});

;define("jikan-ga-nai/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});

;define("jikan-ga-nai/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});

;

;define('jikan-ga-nai/config/environment', [], function() {
  var prefix = 'jikan-ga-nai';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("jikan-ga-nai/app")["default"].create({"name":"jikan-ga-nai","version":"0.0.0+5ad84bca"});
          }
        
//# sourceMappingURL=jikan-ga-nai.map
