# PortainerApi.TeamMembershipsApi

All URIs are relative to *http://portainer.domain/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamMembershipCreate**](TeamMembershipsApi.md#teamMembershipCreate) | **POST** /team_memberships | Create a new team membership
[**teamMembershipDelete**](TeamMembershipsApi.md#teamMembershipDelete) | **DELETE** /team_memberships/{id} | Remove a team membership
[**teamMembershipList**](TeamMembershipsApi.md#teamMembershipList) | **GET** /team_memberships | List team memberships
[**teamMembershipUpdate**](TeamMembershipsApi.md#teamMembershipUpdate) | **PUT** /team_memberships/{id} | Update a team membership


<a name="teamMembershipCreate"></a>
# **teamMembershipCreate**
> TeamMembership teamMembershipCreate(body)

Create a new team membership

Create a new team memberships. Access is only available to administrators leaders of the associated team. **Access policy**: restricted 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.TeamMembershipsApi();

var body = new PortainerApi.TeamMembershipCreateRequest(); // TeamMembershipCreateRequest | Team membership details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamMembershipCreate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TeamMembershipCreateRequest**](TeamMembershipCreateRequest.md)| Team membership details | 

### Return type

[**TeamMembership**](TeamMembership.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamMembershipDelete"></a>
# **teamMembershipDelete**
> teamMembershipDelete(id)

Remove a team membership

Remove a team membership. Access is only available to administrators leaders of the associated team. **Access policy**: restricted 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.TeamMembershipsApi();

var id = 56; // Number | TeamMembership identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.teamMembershipDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| TeamMembership identifier | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="teamMembershipList"></a>
# **teamMembershipList**
> TeamMembershipListResponse teamMembershipList()

List team memberships

List team memberships. Access is only available to administrators and team leaders. **Access policy**: restricted 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.TeamMembershipsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamMembershipList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TeamMembershipListResponse**](TeamMembershipListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="teamMembershipUpdate"></a>
# **teamMembershipUpdate**
> TeamMembership teamMembershipUpdate(id, body)

Update a team membership

Update a team membership. Access is only available to administrators leaders of the associated team. **Access policy**: restricted 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.TeamMembershipsApi();

var id = 56; // Number | Team membership identifier

var body = new PortainerApi.TeamMembershipUpdateRequest(); // TeamMembershipUpdateRequest | Team membership details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamMembershipUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Team membership identifier | 
 **body** | [**TeamMembershipUpdateRequest**](TeamMembershipUpdateRequest.md)| Team membership details | 

### Return type

[**TeamMembership**](TeamMembership.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

