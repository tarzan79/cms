# PortainerApi.Template

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Template identifier | [optional] 
**type** | **Number** | Template type. Valid values are: 1 (container), 2 (Swarm stack) or 3 (Compose stack) | [optional] 
**title** | **String** | Title of the template | [optional] 
**description** | **String** | Description of the template | [optional] 
**administratorOnly** | **Boolean** | Whether the template should be available to administrators only | [optional] 
**image** | **String** | Image associated to a container template. Mandatory for a container template | [optional] 
**repository** | [**TemplateRepository**](TemplateRepository.md) |  | [optional] 
**name** | **String** | Default name for the stack/container to be used on deployment | [optional] 
**logo** | **String** | URL of the template&#39;s logo | [optional] 
**env** | [**[TemplateEnv]**](TemplateEnv.md) | A list of environment variables used during the template deployment | [optional] 
**note** | **String** | A note that will be displayed in the UI. Supports HTML content | [optional] 
**platform** | **String** | Platform associated to the template. Valid values are: &#39;linux&#39;, &#39;windows&#39; or leave empty for multi-platform | [optional] 
**categories** | **[String]** | A list of categories associated to the template | [optional] 
**registry** | **String** | The URL of a registry associated to the image for a container template | [optional] 
**command** | **String** | The command that will be executed in a container template | [optional] 
**network** | **String** | Name of a network that will be used on container deployment if it exists inside the environment | [optional] 
**volumes** | [**[TemplateVolume]**](TemplateVolume.md) | A list of volumes used during the container template deployment | [optional] 
**ports** | **[String]** | A list of ports exposed by the container | [optional] 
**labels** | [**[Pair]**](Pair.md) | Container labels | [optional] 
**privileged** | **Boolean** | Whether the container should be started in privileged mode | [optional] 
**interactive** | **Boolean** | Whether the container should be started in interactive mode (-i -t equivalent on the CLI) | [optional] 
**restartPolicy** | **String** | Container restart policy | [optional] 
**hostname** | **String** | Container hostname | [optional] 


