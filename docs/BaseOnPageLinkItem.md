# BaseOnPageLinkItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**domain_from** | **string** | *referring domain*. the link was found on this domain |[optional]|
**domain_to** | **string** | *referenced domain*. the link is pointing to this domain |[optional]|
**page_from** | **string** | *referring page*. relative URL of the page on which the link was found |[optional]|
**page_to** | **string** | *referenced page*. relative URL of the page to which the link is pointing |[optional]|
**link_from** | **string** | *referring page*. absolute URL of the page on which the link was found |[optional]|
**link_to** | **string** | *referenced page*. absolute URL of the page to which the link is pointing |[optional]|
**dofollow** | **boolean** | *indicates whether the link is dofollow*. if the value is `true`, the link doesn't have a `rel='nofollow'` attribute |[optional]|
**page_from_scheme** | **string** | *[url scheme](https://en.wikipedia.org/wiki/List_of_URI_schemes) of the referring page* |[optional]|
**page_to_scheme** | **string** | *[url scheme](https://en.wikipedia.org/wiki/List_of_URI_schemes) of the referenced page* |[optional]|
**direction** | **string** | *direction of the link*. possible values: `internal`, `external` |[optional]|
**is_broken** | **boolean** | *link is broken*. indicates whether a link is directing to a broken page or resource |[optional]|
**is_link_relation_conflict** | **boolean** | *indicates that the link may have a conflict with another link*. if `true`, at least one link pointing to `link_to` has a `rel='nofollow'` attribute **and** at least one is dofollow |[optional]|
**page_to_status_code** | **number** | *status code of the referenced page*. status code of the page to which the link is pointing |[optional]|