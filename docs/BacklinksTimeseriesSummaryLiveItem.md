# BacklinksTimeseriesSummaryLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**date** | **string** | *date and time when the data for the target was stored*. in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00'. example:. `2019-11-15 12:57:46 +00:00` |[optional]|
**rank** | **number** | *`target` rank for the given `date`*. learn more about the metric and how it is calculated in [this help center article](https://dataforseo.com/help-center/what_is_rank_in_backlinks_api) |[optional]|
**backlinks** | **number** | *number of backlinks for the given `date`* |[optional]|
**backlinks_nofollow** | **number** | *number of nofollow backlinks for the given `date`* |[optional]|
**referring_pages** | **number** | *number of pages pointing to `target` for the given `date`* |[optional]|
**referring_pages_nofollow** | **number** | *number of referring pages pointing at least one nofollow link to the `target` for the given `date`* |[optional]|
**referring_domains** | **number** | *number of referring domains for the given `date`*. referring domains include subdomains that are counted as separate domains for this metric |[optional]|
**referring_domains_nofollow** | **number** | *number of domains pointing at least one nofollow link to the `target` for the given `date`* |[optional]|
**referring_main_domains** | **number** | *number of referring main domains for the given `date`* |[optional]|
**referring_main_domains_nofollow** | **number** | *number of main domains pointing at least one nofollow link to the `target` for the given `date`* |[optional]|
**referring_ips** | **number** | *number of referring IP addresses for the given `date`*. number of IP addresses pointing to this page |[optional]|
**referring_subnets** | **number** | *number of referring subnetworks for the given `date`* |[optional]|