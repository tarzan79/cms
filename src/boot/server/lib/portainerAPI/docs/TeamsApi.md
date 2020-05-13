# PortainerApi.TeamsApi

All URIs are relative to *http://portainer.domain/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamCreate**](TeamsApi.md#teamCreate) | **POST** /teams | Create a new team
[**teamDelete**](TeamsApi.md#teamDelete) | **DELETE** /teams/{id} | Remove a team
[**teamInspect**](TeamsApi.md#teamInspect) | **GET** /teams/{id} | Inspect a team
[**teamList**](TeamsApi.md#teamList) | **GET** /teams | List teams
[**teamMembershipsInspect**](TeamsApi.md#teamMembershipsInspect) | **GET** /teams/{id}/memberships | Inspect a team memberships
[**teamUpdate**](TeamsApi.md#teamUpdate) | **PUT** /teams/{id} | Update a team


<a name="teamCreate"></a>
# **teamCreate**
> Team teamCreate(body)

Create a new team

Create a new team. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.TeamsApi();

var body = new PortainerApi.TeamCreateRequest(); // TeamCreateRequest | Team details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamCreate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TeamCreateRequest**](TeamCreateRequest.md)| Team details | 

### Return type

[**Team**](Team.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamDelete"></a>
# **teamDelete**
> teamDelete(id)

Remove a team

Remove a team. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.TeamsApi();

var id = 56; // Number | Team identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.teamDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Team identifier | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="teamInspect"></a>
# **teamInspect**
> Team teamInspect(id)

Inspect a team

Retrieve details about a team. Access is only available for administrator and leaders of that team. **Access policy**: restricted 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.TeamsApi();

var id = 56; // Number | Team identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Team identifier | 

### Return type

[**Team**](Team.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="teamList"></a>
# **teamList**
> TeamListResponse teamList()

List teams

List teams. For non-administrator users, will only list the teams they are member of. **Access policy**: restricted 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.TeamsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TeamListResponse**](TeamListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="teamMembershipsInspect"></a>
# **teamMembershipsInspect**
> TeamMembershipsResponse teamMembershipsInspect(id)

Inspect a team memberships

Inspect a team memberships. Access is only available for administrator and leaders of that team. **Access policy**: restricted 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.TeamsApi();

var id = 56; // Number | Team identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamMembershipsInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Team identifier | 

### Return type

[**TeamMembershipsResponse**](TeamMembershipsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="teamUpdate"></a>
# **teamUpdate**
> teamUpdate(id, body)

Update a team

Update a team. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.TeamsApi();

var id = 56; // Number | Team identifier

var body = new PortainerApi.TeamUpdateRequest(); // TeamUpdateRequest | Team details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.teamUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Team identifier | 
 **body** | [**TeamUpdateRequest**](TeamUpdateRequest.md)| Team details | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

