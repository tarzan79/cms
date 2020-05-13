# PortainerApi.EndpointGroupsApi

All URIs are relative to *http://portainer.domain/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**endpointGroupAccessUpdate**](EndpointGroupsApi.md#endpointGroupAccessUpdate) | **PUT** /endpoint_groups/{id}/access | Manage accesses to an endpoint group
[**endpointGroupCreate**](EndpointGroupsApi.md#endpointGroupCreate) | **POST** /endpoint_groups | Create a new endpoint
[**endpointGroupDelete**](EndpointGroupsApi.md#endpointGroupDelete) | **DELETE** /endpoint_groups/{id} | Remove an endpoint group
[**endpointGroupInspect**](EndpointGroupsApi.md#endpointGroupInspect) | **GET** /endpoint_groups/{id} | Inspect an endpoint group
[**endpointGroupList**](EndpointGroupsApi.md#endpointGroupList) | **GET** /endpoint_groups | List endpoint groups
[**endpointGroupUpdate**](EndpointGroupsApi.md#endpointGroupUpdate) | **PUT** /endpoint_groups/{id} | Update an endpoint group


<a name="endpointGroupAccessUpdate"></a>
# **endpointGroupAccessUpdate**
> EndpointGroup endpointGroupAccessUpdate(id, body)

Manage accesses to an endpoint group

Manage user and team accesses to an endpoint group. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.EndpointGroupsApi();

var id = 56; // Number | EndpointGroup identifier

var body = new PortainerApi.EndpointGroupAccessUpdateRequest(); // EndpointGroupAccessUpdateRequest | Authorizations details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointGroupAccessUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EndpointGroup identifier | 
 **body** | [**EndpointGroupAccessUpdateRequest**](EndpointGroupAccessUpdateRequest.md)| Authorizations details | 

### Return type

[**EndpointGroup**](EndpointGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="endpointGroupCreate"></a>
# **endpointGroupCreate**
> EndpointGroup endpointGroupCreate(body)

Create a new endpoint

Create a new endpoint group. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.EndpointGroupsApi();

var body = new PortainerApi.EndpointGroupCreateRequest(); // EndpointGroupCreateRequest | Registry details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointGroupCreate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EndpointGroupCreateRequest**](EndpointGroupCreateRequest.md)| Registry details | 

### Return type

[**EndpointGroup**](EndpointGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="endpointGroupDelete"></a>
# **endpointGroupDelete**
> endpointGroupDelete(id)

Remove an endpoint group

Remove an endpoint group. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.EndpointGroupsApi();

var id = 56; // Number | EndpointGroup identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.endpointGroupDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EndpointGroup identifier | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="endpointGroupInspect"></a>
# **endpointGroupInspect**
> EndpointGroup endpointGroupInspect(id)

Inspect an endpoint group

Retrieve details abount an endpoint group. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.EndpointGroupsApi();

var id = 56; // Number | Endpoint group identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointGroupInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Endpoint group identifier | 

### Return type

[**EndpointGroup**](EndpointGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="endpointGroupList"></a>
# **endpointGroupList**
> EndpointGroupListResponse endpointGroupList()

List endpoint groups

List all endpoint groups based on the current user authorizations. Will return all endpoint groups if using an administrator account otherwise it will only return authorized endpoint groups. **Access policy**: restricted 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.EndpointGroupsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointGroupList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**EndpointGroupListResponse**](EndpointGroupListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="endpointGroupUpdate"></a>
# **endpointGroupUpdate**
> EndpointGroup endpointGroupUpdate(id, body)

Update an endpoint group

Update an endpoint group. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.EndpointGroupsApi();

var id = 56; // Number | EndpointGroup identifier

var body = new PortainerApi.EndpointGroupUpdateRequest(); // EndpointGroupUpdateRequest | EndpointGroup details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endpointGroupUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| EndpointGroup identifier | 
 **body** | [**EndpointGroupUpdateRequest**](EndpointGroupUpdateRequest.md)| EndpointGroup details | 

### Return type

[**EndpointGroup**](EndpointGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

