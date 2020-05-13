# PortainerApi.TagsApi

All URIs are relative to *http://portainer.domain/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tagCreate**](TagsApi.md#tagCreate) | **POST** /tags | Create a new tag
[**tagDelete**](TagsApi.md#tagDelete) | **DELETE** /tags/{id} | Remove a tag
[**tagList**](TagsApi.md#tagList) | **GET** /tags | List tags


<a name="tagCreate"></a>
# **tagCreate**
> Tag tagCreate(body)

Create a new tag

Create a new tag. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.TagsApi();

var body = new PortainerApi.TagCreateRequest(); // TagCreateRequest | Tag details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tagCreate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TagCreateRequest**](TagCreateRequest.md)| Tag details | 

### Return type

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tagDelete"></a>
# **tagDelete**
> tagDelete(id)

Remove a tag

Remove a tag. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.TagsApi();

var id = 56; // Number | Tag identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.tagDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Tag identifier | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="tagList"></a>
# **tagList**
> TagListResponse tagList()

List tags

List tags. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.TagsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tagList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TagListResponse**](TagListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

