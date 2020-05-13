# PortainerApi.StackCreateRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the stack | 
**swarmID** | **String** | Swarm cluster identifier. Required when creating a Swarm stack (type 1). | [optional] 
**stackFileContent** | **String** | Content of the Stack file. Required when using the &#39;string&#39; deployment method. | [optional] 
**repositoryURL** | **String** | URL of a Git repository hosting the Stack file. Required when using the &#39;repository&#39; deployment method. | [optional] 
**repositoryReferenceName** | **String** | Reference name of a Git repository hosting the Stack file. Used in &#39;repository&#39; deployment method. | [optional] 
**composeFilePathInRepository** | **String** | Path to the Stack file inside the Git repository. Will default to &#39;docker-compose.yml&#39; if not specified. | [optional] 
**repositoryAuthentication** | **Boolean** | Use basic authentication to clone the Git repository. | [optional] 
**repositoryUsername** | **String** | Username used in basic authentication. Required when RepositoryAuthentication is true. | [optional] 
**repositoryPassword** | **String** | Password used in basic authentication. Required when RepositoryAuthentication is true. | [optional] 
**env** | [**[StackEnv]**](StackEnv.md) | A list of environment variables used during stack deployment | [optional] 


