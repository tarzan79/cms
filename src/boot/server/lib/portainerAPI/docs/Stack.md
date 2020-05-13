# PortainerApi.Stack

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Stack identifier | [optional] 
**name** | **String** | Stack name | [optional] 
**type** | **Number** | Stack type. 1 for a Swarm stack, 2 for a Compose stack | [optional] 
**endpointID** | **Number** | Endpoint identifier. Reference the endpoint that will be used for deployment  | [optional] 
**entryPoint** | **String** | Path to the Stack file | [optional] 
**swarmID** | **String** | Cluster identifier of the Swarm cluster where the stack is deployed | [optional] 
**projectPath** | **String** | Path on disk to the repository hosting the Stack file | [optional] 
**env** | [**[StackEnv]**](StackEnv.md) | A list of environment variables used during stack deployment | [optional] 


