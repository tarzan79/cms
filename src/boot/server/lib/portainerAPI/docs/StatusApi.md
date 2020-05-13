# PortainerApi.StatusApi

All URIs are relative to *http://portainer.domain/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**statusInspect**](StatusApi.md#statusInspect) | **GET** /status | Check Portainer status


<a name="statusInspect"></a>
# **statusInspect**
> Status statusInspect()

Check Portainer status

Retrieve Portainer status. **Access policy**: public 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.StatusApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.statusInspect(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

