# BacklinksBulkReferringDomainsLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**target** | **string** | domain, subdomain or webpage from a POST array |[optional]|
**referring_domains** | **number** | number of referring domains pointing to the target. note that we calculate main domains (root domains, like example.com) and their subdomains (e.g. blog.example.com) separately for this metric |[optional]|
**referring_domains_nofollow** | **number** | number of domains pointing at least one nofollow link to the target |[optional]|
**referring_main_domains** | **number** | number of referring main domains pointing to the target. the number of primary (root) domains referring to your target |[optional]|
**referring_main_domains_nofollow** | **number** | number of main domains pointing at least one nofollow link to the target |[optional]|