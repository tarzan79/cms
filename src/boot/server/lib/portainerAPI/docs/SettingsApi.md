# PortainerApi.SettingsApi

All URIs are relative to *http://portainer.domain/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**publicSettingsInspect**](SettingsApi.md#publicSettingsInspect) | **GET** /settings/public | Retrieve Portainer public settings
[**settingsInspect**](SettingsApi.md#settingsInspect) | **GET** /settings | Retrieve Portainer settings
[**settingsLDAPCheck**](SettingsApi.md#settingsLDAPCheck) | **PUT** /settings/authentication/checkLDAP | Test LDAP connectivity
[**settingsUpdate**](SettingsApi.md#settingsUpdate) | **PUT** /settings | Update Portainer settings


<a name="publicSettingsInspect"></a>
# **publicSettingsInspect**
> PublicSettingsInspectResponse publicSettingsInspect()

Retrieve Portainer public settings

Retrieve public settings. Returns a small set of settings that are not reserved to administrators only. **Access policy**: public 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.SettingsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.publicSettingsInspect(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PublicSettingsInspectResponse**](PublicSettingsInspectResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="settingsInspect"></a>
# **settingsInspect**
> Settings settingsInspect()

Retrieve Portainer settings

Retrieve Portainer settings. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.SettingsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.settingsInspect(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Settings**](Settings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="settingsLDAPCheck"></a>
# **settingsLDAPCheck**
> settingsLDAPCheck(body)

Test LDAP connectivity

Test LDAP connectivity using LDAP details. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.SettingsApi();

var body = new PortainerApi.SettingsLDAPCheckRequest(); // SettingsLDAPCheckRequest | LDAP settings


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.settingsLDAPCheck(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SettingsLDAPCheckRequest**](SettingsLDAPCheckRequest.md)| LDAP settings | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="settingsUpdate"></a>
# **settingsUpdate**
> Settings settingsUpdate(body)

Update Portainer settings

Update Portainer settings. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.SettingsApi();

var body = new PortainerApi.SettingsUpdateRequest(); // SettingsUpdateRequest | New settings


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.settingsUpdate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SettingsUpdateRequest**](SettingsUpdateRequest.md)| New settings | 

### Return type

[**Settings**](Settings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

