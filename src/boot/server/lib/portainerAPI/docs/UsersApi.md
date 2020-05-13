# PortainerApi.UsersApi

All URIs are relative to *http://portainer.domain/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userAdminCheck**](UsersApi.md#userAdminCheck) | **GET** /users/admin/check | Check administrator account existence
[**userAdminInit**](UsersApi.md#userAdminInit) | **POST** /users/admin/init | Initialize administrator account
[**userCreate**](UsersApi.md#userCreate) | **POST** /users | Create a new user
[**userDelete**](UsersApi.md#userDelete) | **DELETE** /users/{id} | Remove a user
[**userInspect**](UsersApi.md#userInspect) | **GET** /users/{id} | Inspect a user
[**userList**](UsersApi.md#userList) | **GET** /users | List users
[**userMembershipsInspect**](UsersApi.md#userMembershipsInspect) | **GET** /users/{id}/memberships | Inspect a user memberships
[**userPasswordCheck**](UsersApi.md#userPasswordCheck) | **POST** /users/{id}/passwd | Check password validity for a user
[**userUpdate**](UsersApi.md#userUpdate) | **PUT** /users/{id} | Update a user


<a name="userAdminCheck"></a>
# **userAdminCheck**
> userAdminCheck()

Check administrator account existence

Check if an administrator account exists in the database. **Access policy**: public 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userAdminCheck(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userAdminInit"></a>
# **userAdminInit**
> User userAdminInit(body)

Initialize administrator account

Initialize the &#39;admin&#39; user account. **Access policy**: public 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.UsersApi();

var body = new PortainerApi.UserAdminInitRequest(); // UserAdminInitRequest | User details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userAdminInit(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserAdminInitRequest**](UserAdminInitRequest.md)| User details | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userCreate"></a>
# **userCreate**
> UserSubset userCreate(body)

Create a new user

Create a new Portainer user. Only team leaders and administrators can create users. Only administrators can create an administrator user account. **Access policy**: restricted 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.UsersApi();

var body = new PortainerApi.UserCreateRequest(); // UserCreateRequest | User details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userCreate(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserCreateRequest**](UserCreateRequest.md)| User details | 

### Return type

[**UserSubset**](UserSubset.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userDelete"></a>
# **userDelete**
> userDelete(id)

Remove a user

Remove a user. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.UsersApi();

var id = 56; // Number | User identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| User identifier | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="userInspect"></a>
# **userInspect**
> User userInspect(id)

Inspect a user

Retrieve details about a user. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.UsersApi();

var id = 56; // Number | User identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| User identifier | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userList"></a>
# **userList**
> UserListResponse userList()

List users

List Portainer users. Non-administrator users will only be able to list other non-administrator user accounts. **Access policy**: restricted 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserListResponse**](UserListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userMembershipsInspect"></a>
# **userMembershipsInspect**
> UserMembershipsResponse userMembershipsInspect(id)

Inspect a user memberships

Inspect a user memberships. **Access policy**: authenticated 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.UsersApi();

var id = 56; // Number | User identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userMembershipsInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| User identifier | 

### Return type

[**UserMembershipsResponse**](UserMembershipsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userPasswordCheck"></a>
# **userPasswordCheck**
> UserPasswordCheckResponse userPasswordCheck(id, body)

Check password validity for a user

Check if the submitted password is valid for the specified user. **Access policy**: authenticated 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.UsersApi();

var id = 56; // Number | User identifier

var body = new PortainerApi.UserPasswordCheckRequest(); // UserPasswordCheckRequest | User details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userPasswordCheck(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| User identifier | 
 **body** | [**UserPasswordCheckRequest**](UserPasswordCheckRequest.md)| User details | 

### Return type

[**UserPasswordCheckResponse**](UserPasswordCheckResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userUpdate"></a>
# **userUpdate**
> User userUpdate(id, body)

Update a user

Update user details. A regular user account can only update his details. **Access policy**: authenticated 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.UsersApi();

var id = 56; // Number | User identifier

var body = new PortainerApi.UserUpdateRequest(); // UserUpdateRequest | User details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userUpdate(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| User identifier | 
 **body** | [**UserUpdateRequest**](UserUpdateRequest.md)| User details | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

