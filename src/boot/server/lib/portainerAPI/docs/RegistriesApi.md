# PortainerApi.RegistriesApi

All URIs are relative to *http://portainer.domain/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**registryAccessUpdate**](RegistriesApi.md#registryAccessUpdate) | **PUT** /registries/{id}/access | Manage accesses to a registry
[**registryCreate**](RegistriesApi.md#registryCreate) | **POST** /registries | Create a new registry
[**registryDelete**](RegistriesApi.md#registryDelete) | **DELETE** /registries/{id} | Remove a registry
[**registryInspect**](RegistriesApi.md#registryInspect) | **GET** /registries/{id} | Inspect a registry
[**registryList**](RegistriesApi.md#registryList) | **GET** /registries | List registries
[**registryUpdate**](RegistriesApi.md#registryUpdate) | **PUT** /registries/{id} | Update a registry


<a name="registryAccessUpdate"></a>
# **registryAccessUpdate**
> Registry registryAccessUpdate(id, body)

Manage accesses to a registry

Manage user and team accesses to a registry. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.RegistriesApi();

var id = 56; // Number | Registry identifier

var body = new PortainerApi.RegistryAccessUpdateRequest(); // RegistryAccessUpdateRequest | Authorizations details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registryAccessUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Registry identifier | 
 **body** | [**RegistryAccessUpdateRequest**](RegistryAccessUpdateRequest.md)| Authorizations details | 

### Return type

[**Registry**](Registry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registryCreate"></a>
# **registryCreate**
> Registry registryCreate(body)

Create a new registry

Create a new registry. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.RegistriesApi();

var body = new PortainerApi.RegistryCreateRequest(); // RegistryCreateRequest | Registry details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registryCreate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RegistryCreateRequest**](RegistryCreateRequest.md)| Registry details | 

### Return type

[**Registry**](Registry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registryDelete"></a>
# **registryDelete**
> registryDelete(id)

Remove a registry

Remove a registry. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.RegistriesApi();

var id = 56; // Number | Registry identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.registryDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Registry identifier | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="registryInspect"></a>
# **registryInspect**
> Registry registryInspect(id)

Inspect a registry

Retrieve details about a registry. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.RegistriesApi();

var id = 56; // Number | Registry identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registryInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Registry identifier | 

### Return type

[**Registry**](Registry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="registryList"></a>
# **registryList**
> RegistryListResponse registryList()

List registries

List all registries based on the current user authorizations. Will return all registries if using an administrator account otherwise it will only return authorized registries. **Access policy**: restricted 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.RegistriesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registryList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RegistryListResponse**](RegistryListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="registryUpdate"></a>
# **registryUpdate**
> Registry registryUpdate(id, body)

Update a registry

Update a registry. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.RegistriesApi();

var id = 56; // Number | Registry identifier

var body = new PortainerApi.RegistryUpdateRequest(); // RegistryUpdateRequest | Registry details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registryUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Registry identifier | 
 **body** | [**RegistryUpdateRequest**](RegistryUpdateRequest.md)| Registry details | 

### Return type

[**Registry**](Registry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

