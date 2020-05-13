# PortainerApi.ResourceControl

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resourceID** | **String** | Docker resource identifier on which access control will be applied. In the case of a resource control applied to a stack, use the stack name as identifier | [optional] 
**type** | **String** | Type of Docker resource. Valid values are: container, volume service, secret, config or stack | [optional] 
**_public** | **Boolean** | Permit access to the associated resource to any user | [optional] 
**users** | **[Number]** | List of user identifiers with access to the associated resource | [optional] 
**teams** | **[Number]** | List of team identifiers with access to the associated resource | [optional] 
**subResourceIDs** | **[String]** | List of Docker resources that will inherit this access control | [optional] 


