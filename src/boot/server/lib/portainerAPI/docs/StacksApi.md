# PortainerApi.StacksApi

All URIs are relative to *http://portainer.domain/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stackCreate**](StacksApi.md#stackCreate) | **POST** /stacks | Deploy a new stack
[**stackDelete**](StacksApi.md#stackDelete) | **DELETE** /stacks/{id} | Remove a stack
[**stackFileInspect**](StacksApi.md#stackFileInspect) | **GET** /stacks/{id}/file | Retrieve the content of the Stack file for the specified stack
[**stackInspect**](StacksApi.md#stackInspect) | **GET** /stacks/{id} | Inspect a stack
[**stackList**](StacksApi.md#stackList) | **GET** /stacks | List stacks
[**stackMigrate**](StacksApi.md#stackMigrate) | **POST** /stacks/{id}/migrate | Migrate a stack to another endpoint
[**stackUpdate**](StacksApi.md#stackUpdate) | **PUT** /stacks/{id} | Update a stack


<a name="stackCreate"></a>
# **stackCreate**
> Stack stackCreate(type, method, endpointId, opts)

Deploy a new stack

Deploy a new stack into a Docker environment specified via the endpoint identifier. **Access policy**: restricted 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.StacksApi();

var type = 56; // Number | Stack deployment type. Possible values: 1 (Swarm stack) or 2 (Compose stack).

var method = "method_example"; // String | Stack deployment method. Possible values: file, string or repository.

var endpointId = 56; // Number | Identifier of the endpoint that will be used to deploy the stack.

var opts = { 
  'body': new PortainerApi.StackCreateRequest(), // StackCreateRequest | Stack details. Required when method equals string or repository.
  'name': "name_example", // String | Name of the stack. Required when method equals file.
  'endpointID': "endpointID_example", // String | Endpoint identifier used to deploy the stack. Required when method equals file.
  'swarmID': "swarmID_example", // String | Swarm cluster identifier. Required when method equals file and type equals 1.
  'file': "/path/to/file.txt", // File | Stack file. Required when method equals file.
  'env': "env_example" // String | Environment variables passed during deployment, represented as a JSON array [{'name': 'name', 'value': 'value'}]. Optional, used when method equals file and type equals 1.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackCreate(type, method, endpointId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **Number**| Stack deployment type. Possible values: 1 (Swarm stack) or 2 (Compose stack). | 
 **method** | **String**| Stack deployment method. Possible values: file, string or repository. | 
 **endpointId** | **Number**| Identifier of the endpoint that will be used to deploy the stack. | 
 **body** | [**StackCreateRequest**](StackCreateRequest.md)| Stack details. Required when method equals string or repository. | [optional] 
 **name** | **String**| Name of the stack. Required when method equals file. | [optional] 
 **endpointID** | **String**| Endpoint identifier used to deploy the stack. Required when method equals file. | [optional] 
 **swarmID** | **String**| Swarm cluster identifier. Required when method equals file and type equals 1. | [optional] 
 **file** | **File**| Stack file. Required when method equals file. | [optional] 
 **env** | **String**| Environment variables passed during deployment, represented as a JSON array [{&#39;name&#39;: &#39;name&#39;, &#39;value&#39;: &#39;value&#39;}]. Optional, used when method equals file and type equals 1. | [optional] 

### Return type

[**Stack**](Stack.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="stackDelete"></a>
# **stackDelete**
> stackDelete(id, opts)

Remove a stack

Remove a stack. **Access policy**: restricted 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.StacksApi();

var id = 56; // Number | Stack identifier

var opts = { 
  'external': true, // Boolean | Set to true to delete an external stack. Only external Swarm stacks are supported.
  'endpointId': "endpointId_example" // String | Endpoint identifier used to remove an external stack (required when external is set to true)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.stackDelete(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Stack identifier | 
 **external** | **Boolean**| Set to true to delete an external stack. Only external Swarm stacks are supported. | [optional] 
 **endpointId** | **String**| Endpoint identifier used to remove an external stack (required when external is set to true) | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="stackFileInspect"></a>
# **stackFileInspect**
> StackFileInspectResponse stackFileInspect(id)

Retrieve the content of the Stack file for the specified stack

Get Stack file content. **Access policy**: restricted 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.StacksApi();

var id = 56; // Number | Stack identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackFileInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Stack identifier | 

### Return type

[**StackFileInspectResponse**](StackFileInspectResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="stackInspect"></a>
# **stackInspect**
> Stack stackInspect(id)

Inspect a stack

Retrieve details about a stack. **Access policy**: restricted 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.StacksApi();

var id = 56; // Number | Stack identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Stack identifier | 

### Return type

[**Stack**](Stack.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="stackList"></a>
# **stackList**
> StackListResponse stackList(opts)

List stacks

List all stacks based on the current user authorizations. Will return all stacks if using an administrator account otherwise it will only return the list of stacks the user have access to. **Access policy**: restricted 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.StacksApi();

var opts = { 
  'filters': "filters_example" // String | Filters to process on the stack list. Encoded as JSON (a map[string]string). For example, {\"SwarmID\": \"jpofkc0i9uo9wtx1zesuk649w\"} will only return stacks that are part of the specified Swarm cluster. Available filters: EndpointID, SwarmID. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **String**| Filters to process on the stack list. Encoded as JSON (a map[string]string). For example, {\&quot;SwarmID\&quot;: \&quot;jpofkc0i9uo9wtx1zesuk649w\&quot;} will only return stacks that are part of the specified Swarm cluster. Available filters: EndpointID, SwarmID.  | [optional] 

### Return type

[**StackListResponse**](StackListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="stackMigrate"></a>
# **stackMigrate**
> Stack stackMigrate(id, opts)

Migrate a stack to another endpoint

Migrate a stack from an endpoint to another endpoint. It will re-create the stack inside the target endpoint before removing the original stack. **Access policy**: restricted 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.StacksApi();

var id = 56; // Number | Stack identifier

var opts = { 
  'endpointId': 56, // Number | Stacks created before version 1.18.0 might not have an associated endpoint identifier. Use this optional parameter to set the endpoint identifier used by the stack.
  'body': new PortainerApi.StackMigrateRequest() // StackMigrateRequest | Stack migration details.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackMigrate(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Stack identifier | 
 **endpointId** | **Number**| Stacks created before version 1.18.0 might not have an associated endpoint identifier. Use this optional parameter to set the endpoint identifier used by the stack. | [optional] 
 **body** | [**StackMigrateRequest**](StackMigrateRequest.md)| Stack migration details. | [optional] 

### Return type

[**Stack**](Stack.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="stackUpdate"></a>
# **stackUpdate**
> Stack stackUpdate(id, body, opts)

Update a stack

Update a stack. **Access policy**: restricted 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.StacksApi();

var id = 56; // Number | Stack identifier

var body = new PortainerApi.StackUpdateRequest(); // StackUpdateRequest | Stack details

var opts = { 
  'endpointId': 56 // Number | Stacks created before version 1.18.0 might not have an associated endpoint identifier. Use this optional parameter to set the endpoint identifier used by the stack.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stackUpdate(id, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Stack identifier | 
 **body** | [**StackUpdateRequest**](StackUpdateRequest.md)| Stack details | 
 **endpointId** | **Number**| Stacks created before version 1.18.0 might not have an associated endpoint identifier. Use this optional parameter to set the endpoint identifier used by the stack. | [optional] 

### Return type

[**Stack**](Stack.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

