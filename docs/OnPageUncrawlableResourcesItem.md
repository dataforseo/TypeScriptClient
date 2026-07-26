# OnPageUncrawlableResourcesItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**url** | **string** | *URL of the uncrawlable resource* |[optional]|
**reason** | **string** | *reason the resource is uncrawlable*. can take the following values: `content_type_inconsistency` |[optional]|
**status_code** | **number** | *general status code*. you can find the full list of the response codes [here](/v3/appendix/errors). **Note:** we strongly recommend designing a necessary system for handling related exceptional or error conditions |[optional]|
**fetch_time** | **string** | *date and time when the resource was fetched*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2026-03-09 18:20:32 +00:00` |[optional]|
**meta** | **UncrawlableResourcesMeta** | *metadata of the uncrawlable resource* |[optional]|