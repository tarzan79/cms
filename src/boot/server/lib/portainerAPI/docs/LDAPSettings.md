# PortainerApi.LDAPSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**readerDN** | **String** | Account that will be used to search for users | [optional] 
**password** | **String** | Password of the account that will be used to search users | [optional] 
**URL** | **String** | URL or IP address of the LDAP server | [optional] 
**tLSConfig** | [**TLSConfiguration**](TLSConfiguration.md) |  | [optional] 
**startTLS** | **Boolean** | Whether LDAP connection should use StartTLS | [optional] 
**searchSettings** | [**[LDAPSearchSettings]**](LDAPSearchSettings.md) |  | [optional] 
**groupSearchSettings** | [**[LDAPGroupSearchSettings]**](LDAPGroupSearchSettings.md) |  | [optional] 
**autoCreateUsers** | **Boolean** | Automatically provision users and assign them to matching LDAP group names | [optional] 


