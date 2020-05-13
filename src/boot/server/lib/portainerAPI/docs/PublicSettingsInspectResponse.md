# PortainerApi.PublicSettingsInspectResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logoURL** | **String** | URL to a logo that will be displayed on the login page as well as on top of the sidebar. Will use default Portainer logo when value is empty string | [optional] 
**displayExternalContributors** | **Boolean** | Whether to display or not external templates contributions as sub-menus in the UI. | [optional] 
**authenticationMethod** | **Number** | Active authentication method for the Portainer instance. Valid values are: 1 for managed or 2 for LDAP. | [optional] 
**allowBindMountsForRegularUsers** | **Boolean** | Whether non-administrator should be able to use bind mounts when creating containers | [optional] 
**allowPrivilegedModeForRegularUsers** | **Boolean** | Whether non-administrator should be able to use privileged mode when creating containers | [optional] 


