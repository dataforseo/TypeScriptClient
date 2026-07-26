# BaseOnPageResourceItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**resource_type** | **string** | type of the returned resource = ‘html’ |[optional]|
**status_code** | **number** | general status code. you can find the full list of the response codes here. Note: we strongly recommend designing a necessary system for handling related exceptional or error conditions |[optional]|
**location** | **string** | location header. indicates the URL to redirect a page to |[optional]|
**url** | **string** | page URL |[optional]|
**resource_errors** | **OnPageResourceIssueInfo** | resource errors and warnings |[optional]|
**size** | **number** | resource size. indicates the size of a given page measured in bytes |[optional]|
**encoded_size** | **number** | page size after encoding. indicates the size of the encoded page measured in bytes |[optional]|
**total_transfer_size** | **number** | compressed page size. indicates the compressed size of a given page |[optional]|
**fetch_time** | **string** | date and time when a resource was fetched. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. 2019-11-15 12:57:46 +00:00 |[optional]|
**cache_control** | **CacheControl** | instructions for caching |[optional]|
**checks** | **{ [key: string]: boolean; }** | website checks. on-page check-ups related to the page |[optional]|
**content_encoding** | **string** | type of encoding |[optional]|
**media_type** | **string** | types of media used to display a page |[optional]|
**server** | **string** | server version |[optional]|
**last_modified** | **LastModified** | contains data on changes related to the resource. if there is no data, the value will be null |[optional]|