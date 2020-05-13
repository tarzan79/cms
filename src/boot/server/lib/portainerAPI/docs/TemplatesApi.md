# PortainerApi.TemplatesApi

All URIs are relative to *http://portainer.domain/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**templateCreate**](TemplatesApi.md#templateCreate) | **POST** /templates | Create a new template
[**templateDelete**](TemplatesApi.md#templateDelete) | **DELETE** /templates/{id} | Remove a template
[**templateInspect**](TemplatesApi.md#templateInspect) | **GET** /templates/{id} | Inspect a template
[**templateList**](TemplatesApi.md#templateList) | **GET** /templates | List available templates
[**templateUpdate**](TemplatesApi.md#templateUpdate) | **PUT** /templates/{id} | Update a template


<a name="templateCreate"></a>
# **templateCreate**
> Template templateCreate(body)

Create a new template

Create a new template. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.TemplatesApi();

var body = new PortainerApi.TemplateCreateRequest(); // TemplateCreateRequest | Template details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.templateCreate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TemplateCreateRequest**](TemplateCreateRequest.md)| Template details | 

### Return type

[**Template**](Template.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="templateDelete"></a>
# **templateDelete**
> templateDelete(id)

Remove a template

Remove a template. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.TemplatesApi();

var id = 56; // Number | Template identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.templateDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Template identifier | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="templateInspect"></a>
# **templateInspect**
> Template templateInspect(id)

Inspect a template

Retrieve details about a template. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.TemplatesApi();

var id = 56; // Number | Template identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.templateInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Template identifier | 

### Return type

[**Template**](Template.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="templateList"></a>
# **templateList**
> TemplateListResponse templateList()

List available templates

List available templates. Administrator templates will not be listed for non-administrator users. **Access policy**: restricted 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.TemplatesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.templateList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TemplateListResponse**](TemplateListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="templateUpdate"></a>
# **templateUpdate**
> templateUpdate(id, body)

Update a template

Update a template. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.TemplatesApi();

var id = 56; // Number | Template identifier

var body = new PortainerApi.TemplateUpdateRequest(); // TemplateUpdateRequest | Template details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.templateUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Template identifier | 
 **body** | [**TemplateUpdateRequest**](TemplateUpdateRequest.md)| Template details | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

