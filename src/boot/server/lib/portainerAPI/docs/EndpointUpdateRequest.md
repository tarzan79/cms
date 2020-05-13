# PortainerApi.EndpointUpdateRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name that will be used to identify this endpoint | [optional] 
**URL** | **String** | URL or IP address of a Docker host | [optional] 
**publicURL** | **String** | URL or IP address where exposed containers will be reachable. Defaults to URL if not specified | [optional] 
**groupID** | **Number** | Group identifier | [optional] 
**TLS** | **Boolean** | Require TLS to connect against this endpoint | [optional] 
**tLSSkipVerify** | **Boolean** | Skip server verification when using TLS | [optional] 
**tLSSkipClientVerify** | **Boolean** | Skip client verification when using TLS | [optional] 
**applicationID** | **String** | Azure application ID | [optional] 
**tenantID** | **String** | Azure tenant ID | [optional] 
**authenticationKey** | **String** | Azure authentication key | [optional] 


