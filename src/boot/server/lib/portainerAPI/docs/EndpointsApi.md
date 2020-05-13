# PortainerApi.EndpointsApi

All URIs are relative to *http://portainer.domain/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**endpointAccessUpdate**](EndpointsApi.md#endpointAccessUpdate) | **PUT** /endpoints/{id}/access | Manage accesses to an endpoint
[**endpointCreate**](EndpointsApi.md#endpointCreate) | **POST** /endpoints | Create a new endpoint
[**endpointDelete**](EndpointsApi.md#endpointDelete) | **DELETE** /endpoints/{id} | Remove an endpoint
[**endpointInspect**](EndpointsApi.md#endpointInspect) | **GET** /endpoints/{id} | Inspect an endpoint
[**endpointList**](EndpointsApi.md#endpointList) | **GET** /endpoints | List endpoints
[**endpointUpdate**](EndpointsApi.md#endpointUpdate) | **PUT** /endpoints/{id} | Update an endpoint


<a name="endpointAccessUpdate"></a>
# **endpointAccessUpdate**
> Endpoint endpointAccessUpdate(id, body)

Manage accesses to an endpoint

Manage user and team accesses to an endpoint. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.EndpointsApi();

var id = 56; // Number | Endpoint identifier

var body = new PortainerApi.EndpointAccessUpdateRequest(); // EndpointAccessUpdateRequest | Authorizations details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointAccessUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Endpoint identifier | 
 **body** | [**EndpointAccessUpdateRequest**](EndpointAccessUpdateRequest.md)| Authorizations details | 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="endpointCreate"></a>
# **endpointCreate**
> Endpoint endpointCreate(name, endpointType, opts)

Create a new endpoint

Create a new endpoint that will be used to manage a Docker environment. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.EndpointsApi();

var name = "name_example"; // String | Name that will be used to identify this endpoint (example: my-endpoint)

var endpointType = 56; // Number | Environment type. Value must be one of: 1 (Docker environment), 2 (Agent environment) or 3 (Azure environment)

var opts = { 
  'URL': "URL_example", // String | URL or IP address of a Docker host (example: docker.mydomain.tld:2375). Defaults to local if not specified (Linux: /var/run/docker.sock, Windows: //./pipe/docker_engine)
  'publicURL': "publicURL_example", // String | URL or IP address where exposed containers will be reachable. Defaults to URL if not specified (example: docker.mydomain.tld:2375)
  'groupID': "groupID_example", // String | Endpoint group identifier. If not specified will default to 1 (unassigned).
  'TLS': "TLS_example", // String | Require TLS to connect against this endpoint (example: true)
  'tLSSkipVerify': "tLSSkipVerify_example", // String | Skip server verification when using TLS
  'tLSCACertFile': "/path/to/file.txt", // File | TLS CA certificate file
  'tLSCertFile': "/path/to/file.txt", // File | TLS client certificate file
  'tLSKeyFile': "/path/to/file.txt", // File | TLS client key file
  'azureApplicationID': "azureApplicationID_example", // String | Azure application ID. Required if endpoint type is set to 3
  'azureTenantID': "azureTenantID_example", // String | Azure tenant ID. Required if endpoint type is set to 3
  'azureAuthenticationKey': "azureAuthenticationKey_example" // String | Azure authentication key. Required if endpoint type is set to 3
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointCreate(name, endpointType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name that will be used to identify this endpoint (example: my-endpoint) | 
 **endpointType** | **Number**| Environment type. Value must be one of: 1 (Docker environment), 2 (Agent environment) or 3 (Azure environment) | 
 **URL** | **String**| URL or IP address of a Docker host (example: docker.mydomain.tld:2375). Defaults to local if not specified (Linux: /var/run/docker.sock, Windows: //./pipe/docker_engine) | [optional] 
 **publicURL** | **String**| URL or IP address where exposed containers will be reachable. Defaults to URL if not specified (example: docker.mydomain.tld:2375) | [optional] 
 **groupID** | **String**| Endpoint group identifier. If not specified will default to 1 (unassigned). | [optional] 
 **TLS** | **String**| Require TLS to connect against this endpoint (example: true) | [optional] 
 **tLSSkipVerify** | **String**| Skip server verification when using TLS | [optional] 
 **tLSCACertFile** | **File**| TLS CA certificate file | [optional] 
 **tLSCertFile** | **File**| TLS client certificate file | [optional] 
 **tLSKeyFile** | **File**| TLS client key file | [optional] 
 **azureApplicationID** | **String**| Azure application ID. Required if endpoint type is set to 3 | [optional] 
 **azureTenantID** | **String**| Azure tenant ID. Required if endpoint type is set to 3 | [optional] 
 **azureAuthenticationKey** | **String**| Azure authentication key. Required if endpoint type is set to 3 | [optional] 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="endpointDelete"></a>
# **endpointDelete**
> endpointDelete(id)

Remove an endpoint

Remove an endpoint. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.EndpointsApi();

var id = 56; // Number | Endpoint identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.endpointDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Endpoint identifier | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="endpointInspect"></a>
# **endpointInspect**
> Endpoint endpointInspect(id)

Inspect an endpoint

Retrieve details abount an endpoint. **Access policy**: restricted 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.EndpointsApi();

var id = 56; // Number | Endpoint identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Endpoint identifier | 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="endpointList"></a>
# **endpointList**
> EndpointListResponse endpointList()

List endpoints

List all endpoints based on the current user authorizations. Will return all endpoints if using an administrator account otherwise it will only return authorized endpoints. **Access policy**: restricted 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.EndpointsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**EndpointListResponse**](EndpointListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="endpointUpdate"></a>
# **endpointUpdate**
> endpointUpdate(id, body)

Update an endpoint

Update an endpoint. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.EndpointsApi();

var id = 56; // Number | Endpoint identifier

var body = new PortainerApi.EndpointUpdateRequest(); // EndpointUpdateRequest | Endpoint details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.endpointUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Endpoint identifier | 
 **body** | [**EndpointUpdateRequest**](EndpointUpdateRequest.md)| Endpoint details | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

