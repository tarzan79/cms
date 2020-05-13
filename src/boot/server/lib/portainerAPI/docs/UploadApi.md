# PortainerApi.UploadApi

All URIs are relative to *http://portainer.domain/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**uploadTLS**](UploadApi.md#uploadTLS) | **POST** /upload/tls/{certificate} | Upload TLS files


<a name="uploadTLS"></a>
# **uploadTLS**
> uploadTLS(certificate, folder, opts)

Upload TLS files

Use this endpoint to upload TLS files. **Access policy**: administrator 

### Example
```javascript
var PortainerApi = require('portainer_api');

var apiInstance = new PortainerApi.UploadApi();

var certificate = "certificate_example"; // String | TLS file type. Valid values are 'ca', 'cert' or 'key'.

var folder = "folder_example"; // String | Folder where the TLS file will be stored. Will be created if not existing.

var opts = { 
  'file': "/path/to/file.txt" // File | The file to upload.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.uploadTLS(certificate, folder, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate** | **String**| TLS file type. Valid values are &#39;ca&#39;, &#39;cert&#39; or &#39;key&#39;. | 
 **folder** | **String**| Folder where the TLS file will be stored. Will be created if not existing. | 
 **file** | **File**| The file to upload. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

