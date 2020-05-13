/**
 * Portainer API
 * Portainer API is an HTTP API served by Portainer. It is used by the Portainer UI and everything you can do with the UI can be done using the HTTP API. Examples are available at https://gist.github.com/deviantony/77026d402366b4b43fa5918d41bc42f8 You can find out more about Portainer at [http://portainer.io](http://portainer.io) and get some support on [Slack](http://portainer.io/slack/).  # Authentication  Most of the API endpoints require to be authenticated as well as some level of authorization to be used. Portainer API uses JSON Web Token to manage authentication and thus requires you to provide a token in the **Authorization** header of each request with the **Bearer** authentication mechanism.  Example: ``` Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOjEsImV4cCI6MTQ5OTM3NjE1NH0.NJ6vE8FY1WG6jsRQzfMqeatJ4vh2TWAeeYfDhP71YEE ```  # Security  Each API endpoint has an associated access policy, it is documented in the description of each endpoint.  Different access policies are available: * Public access * Authenticated access * Restricted access * Administrator access  ### Public access  No authentication is required to access the endpoints with this access policy.  ### Authenticated access  Authentication is required to access the endpoints with this access policy.  ### Restricted access  Authentication is required to access the endpoints with this access policy. Extra-checks might be added to ensure access to the resource is granted. Returned data might also be filtered.  ### Administrator access  Authentication as well as an administrator role are required to access the endpoints with this access policy.  # Execute Docker requests  Portainer **DO NOT** expose specific endpoints to manage your Docker resources (create a container, remove a volume, etc...).  Instead, it acts as a reverse-proxy to the Docker HTTP API. This means that you can execute Docker requests **via** the Portainer HTTP API.  To do so, you can use the `/endpoints/{id}/docker` Portainer API endpoint (which is not documented below due to Swagger limitations). This endpoint has a restricted access policy so you still need to be authenticated to be able to query this endpoint. Any query on this endpoint will be proxied to the Docker API of the associated endpoint (requests and responses objects are the same as documented in the Docker API).  **NOTE**: You can find more information on how to query the Docker API in the [Docker official documentation](https://docs.docker.com/engine/api/v1.30/) as well as in [this Portainer example](https://gist.github.com/deviantony/77026d402366b4b43fa5918d41bc42f8). 
 *
 * OpenAPI spec version: 1.19.2
 * Contact: info@portainer.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/StackEnv'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StackEnv'));
  } else {
    // Browser globals (root is window)
    if (!root.PortainerApi) {
      root.PortainerApi = {};
    }
    root.PortainerApi.StackUpdateRequest = factory(root.PortainerApi.ApiClient, root.PortainerApi.StackEnv);
  }
}(this, function(ApiClient, StackEnv) {
  'use strict';




  /**
   * The StackUpdateRequest model module.
   * @module model/StackUpdateRequest
   * @version 1.19.2
   */

  /**
   * Constructs a new <code>StackUpdateRequest</code>.
   * @alias module:model/StackUpdateRequest
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>StackUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StackUpdateRequest} obj Optional instance to populate.
   * @return {module:model/StackUpdateRequest} The populated <code>StackUpdateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('StackFileContent')) {
        obj['StackFileContent'] = ApiClient.convertToType(data['StackFileContent'], 'String');
      }
      if (data.hasOwnProperty('Env')) {
        obj['Env'] = ApiClient.convertToType(data['Env'], [StackEnv]);
      }
      if (data.hasOwnProperty('Prune')) {
        obj['Prune'] = ApiClient.convertToType(data['Prune'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * New content of the Stack file.
   * @member {String} StackFileContent
   */
  exports.prototype['StackFileContent'] = undefined;
  /**
   * A list of environment variables used during stack deployment
   * @member {Array.<module:model/StackEnv>} Env
   */
  exports.prototype['Env'] = undefined;
  /**
   * Prune services that are no longer referenced
   * @member {Boolean} Prune
   */
  exports.prototype['Prune'] = undefined;



  return exports;
}));


