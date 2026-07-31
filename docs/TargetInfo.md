# TargetInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**server** | **string** | *server* |[optional]|
**cms** | **string** | *content management system* |[optional]|
**platform_type** | **string[]** | *platform type* |[optional]|
**ip_address** | **string** | *IP address of the `target`* |[optional]|
**country** | **string** | *country code that the `target` domain is determined to belong to* |[optional]|
**is_ip** | **boolean** | *indicates if the `target` is IP*. if `true`, the domain, subdomain or webpage functions as an IP address and does not have a domain name |[optional]|
**target_spam_score** | **number** | *spam score of the `target`*. if the `target` is a domain/subdomain, this fields indicates the average spam score of all pages of that domain/subdomain;. learn more about how the metric is calculated on [this help center page](https://dataforseo.com/help-center/what-is-spam-score-and-how-is-it-calculated) |[optional]|