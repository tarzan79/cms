# PortainerApi.EndpointSubset

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Endpoint identifier | [optional] 
**name** | **String** | Endpoint name | [optional] 
**type** | **Number** | Endpoint environment type. 1 for a Docker environment, 2 for an agent on Docker environment, 3 for an Azure environment. | [optional] 
**URL** | **String** | URL or IP address of the Docker host associated to this endpoint | [optional] 
**publicURL** | **String** | URL or IP address where exposed containers will be reachable | [optional] 
**groupID** | **Number** | Endpoint group identifier | [optional] 
**authorizedUsers** | **[Number]** | List of user identifiers authorized to connect to this endpoint | [optional] 
**authorizedTeams** | **[Number]** | List of team identifiers authorized to connect to this endpoint | [optional] 
**tLSConfig** | [**TLSConfiguration**](TLSConfiguration.md) |  | [optional] 


