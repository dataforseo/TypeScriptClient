# BacklinksDomainPagesLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**main_domain** | **string** | *main website domain*. main website domain does not include subdomains |[optional]|
**domain** | **string** | *domain*. domain where the page was found |[optional]|
**tld** | **string** | *top-level domain*. top-level domain in the [DNS root zone](https://www.iana.org/domains/root/db) |[optional]|
**page** | **string** | *page URL*. relevant page URL |[optional]|
**ip** | **string** | *Internet Protocol address* |[optional]|
**first_visited** | **string** | *date and time of the first page visit*. date and time when our crawler visited this page for the first time. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2017-01-24 13:20:59 +00:00` |[optional]|
**prev_visited** | **string** | *previous to the most recent date when our crawler visited the page*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2017-01-24 13:20:59 +00:00` |[optional]|
**fetch_time** | **string** | *most recent date and time when our crawler visited the page*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2017-01-24 13:20:59 +00:00` |[optional]|
**status_code** | **number** | *general status code*. you can find the full list of the response codes [here](/v3/appendix/errors). **Note:** we strongly recommend designing a necessary system for handling related exceptional or error conditions |[optional]|
**location** | **string** | *location header*. indicates the URL to redirect a page to if exists |[optional]|
**size** | **number** | *indicates the page size, in bytes* |[optional]|
**encoded_size** | **number** | *page size after encoding*. indicates the size of the encoded page, in bytes |[optional]|
**content_encoding** | **string** | *type of encoding* |[optional]|
**media_type** | **string** | *types of media used to display a page* |[optional]|
**server** | **string** | *server version* |[optional]|
**meta** | **BacklinksPageMeta** | *page meta data* |[optional]|
**page_summary** | **PageSummary** | *contains backlink data for this page* |[optional]|