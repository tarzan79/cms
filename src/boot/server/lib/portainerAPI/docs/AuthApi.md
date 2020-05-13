 # PortainerApi.AuthApi

All URIs are relative to *http://portainer.domain/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticateUser**](AuthApi.md#authenticateUser) | **POST** /auth | Authenticate a user


<a name="authenticateUser"></a>
# **authenticateUser**
> AuthenticateUserResponse authenticateUser(body)

Authenticate a user

Use this endpoint to authenticate against Portainer using a username and password. **Access policy**: public 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.AuthApi();

var body = new PortainerApi.AuthenticateUserRequest(); // AuthenticateUserRequest | Credentials used for authentication


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authenticateUser(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AuthenticateUserRequest**](AuthenticateUserRequest.md)| Credentials used for authentication | 

### Return type

[**AuthenticateUserResponse**](AuthenticateUserResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

