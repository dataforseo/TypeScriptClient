# BacklinksDomainPagesLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**main_domain** | **string** | main website domain<br>main website domain does not include subdomains |[optional]|
**domain** | **string** | domain<br>domain where the page was found |[optional]|
**tld** | **string** | top-level domain<br>top-level domain in the DNS root zone |[optional]|
**page** | **string** | page URL<br>relevant page URL |[optional]|
**ip** | **string** | Internet Protocol address |[optional]|
**first_visited** | **string** | date and time of the first page visit<br>date and time when our crawler visited this page for the first time<br>in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”<br>example:<br>2017-01-24 13:20:59 +00:00 |[optional]|
**prev_visited** | **string** | previous to the most recent date when our crawler visited the page<br>in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”<br>example:<br>2017-01-24 13:20:59 +00:00 |[optional]|
**fetch_time** | **string** | most recent date and time when our crawler visited the page<br>in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”<br>example:<br>2017-01-24 13:20:59 +00:00 |[optional]|
**status_code** | **number** | general status code<br>you can find the full list of the response codes here<br>Note: we strongly recommend designing a necessary system for handling related exceptional or error conditions |[optional]|
**location** | **string** | location header<br>indicates the URL to redirect a page to if exists |[optional]|
**size** | **number** | indicates the page size, in bytes |[optional]|
**encoded_size** | **number** | page size after encoding<br>indicates the size of the encoded page, in bytes |[optional]|
**content_encoding** | **string** | type of encoding |[optional]|
**media_type** | **string** | types of media used to display a page |[optional]|
**server** | **string** | server version |[optional]|
**meta** | **BacklinksPageMeta** | page meta data |[optional]|
**page_summary** | **PageSummary** | contains backlink data for this page |[optional]|