# PortainerApi.ResourceControlsApi

All URIs are relative to *http://portainer.domain/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resourceControlCreate**](ResourceControlsApi.md#resourceControlCreate) | **POST** /resource_controls | Create a new resource control
[**resourceControlDelete**](ResourceControlsApi.md#resourceControlDelete) | **DELETE** /resource_controls/{id} | Remove a resource control
[**resourceControlUpdate**](ResourceControlsApi.md#resourceControlUpdate) | **PUT** /resource_controls/{id} | Update a resource control


<a name="resourceControlCreate"></a>
# **resourceControlCreate**
> ResourceControl resourceControlCreate(body)

Create a new resource control

Create a new resource control to restrict access to a Docker resource. **Access policy**: restricted 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.ResourceControlsApi();

var body = new PortainerApi.ResourceControlCreateRequest(); // ResourceControlCreateRequest | Resource control details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.resourceControlCreate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ResourceControlCreateRequest**](ResourceControlCreateRequest.md)| Resource control details | 

### Return type

[**ResourceControl**](ResourceControl.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resourceControlDelete"></a>
# **resourceControlDelete**
> resourceControlDelete(id)

Remove a resource control

Remove a resource control. **Access policy**: restricted 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.ResourceControlsApi();

var id = 56; // Number | Resource control identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.resourceControlDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Resource control identifier | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="resourceControlUpdate"></a>
# **resourceControlUpdate**
> ResourceControl resourceControlUpdate(id, body)

Update a resource control

Update a resource control. **Access policy**: restricted 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.ResourceControlsApi();

var id = 56; // Number | Resource control identifier

var body = new PortainerApi.ResourceControlUpdateRequest(); // ResourceControlUpdateRequest | Resource control details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.resourceControlUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Resource control identifier | 
 **body** | [**ResourceControlUpdateRequest**](ResourceControlUpdateRequest.md)| Resource control details | 

### Return type

[**ResourceControl**](ResourceControl.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

