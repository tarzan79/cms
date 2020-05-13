# PortainerApi.DockerhubApi

All URIs are relative to *http://portainer.domain/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dockerHubInspect**](DockerhubApi.md#dockerHubInspect) | **GET** /dockerhub | Retrieve DockerHub information
[**dockerHubUpdate**](DockerhubApi.md#dockerHubUpdate) | **PUT** /dockerhub | Update DockerHub information


<a name="dockerHubInspect"></a>
# **dockerHubInspect**
> DockerHubSubset dockerHubInspect()

Retrieve DockerHub information

Use this endpoint to retrieve the information used to connect to the DockerHub **Access policy**: authenticated 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.DockerhubApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dockerHubInspect(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DockerHubSubset**](DockerHubSubset.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dockerHubUpdate"></a>
# **dockerHubUpdate**
> DockerHub dockerHubUpdate(body)

Update DockerHub information

Use this endpoint to update the information used to connect to the DockerHub **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.DockerhubApi();

var body = new PortainerApi.DockerHubUpdateRequest(); // DockerHubUpdateRequest | DockerHub information


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dockerHubUpdate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DockerHubUpdateRequest**](DockerHubUpdateRequest.md)| DockerHub information | 

### Return type

[**DockerHub**](DockerHub.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

