# DomainAnalyticsWhoisOverviewLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**domain** | **string** | *domain name* |[optional]|
**created_datetime** | **string** | *date and time of registration*. date and time (in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601)) when the domain was first registered . example: . `'1997-03-29 03:00:00 +00:00'` |[optional]|
**changed_datetime** | **string** | *date and time when the domain entry was changed*. date and time (in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601)) when the domain entry was last modified. example: . `'2021-01-14 08:36:28 +00:00'` |[optional]|
**expiration_datetime** | **string** | *date and time when the domain will expire*. date and time (in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601)) when the domain is due to expire . example: . `'2022-11-26 17:21:23 +00:00'` |[optional]|
**updated_datetime** | **string** | *date and time when the domain was updated*. date and time (in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601)) when the domain was last updated . example: . `'2021-01-29 13:59:38 +00:00'` |[optional]|
**first_seen** | **string** | *date and time when our crawler found the domain for the first time*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example: . `'2019-11-15 12:57:46 +00:00'` |[optional]|
**epp_status_codes** | **string[]** | *extensive provisioning protocol status codes*. the status of a domain name registration [as defined by ICANN](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en) |[optional]|
**tld** | **string** | *top-level domain*. top-level domain in the [DNS root zone](https://www.iana.org/domains/root/db) |[optional]|
**registered** | **boolean** | *domain registration status*. if `false`, the domain name registration has expired. **Note: expired domains will remain in the database for only a short period of time** |[optional]|
**registrar** | **string** | *domain registrar*. if `null`, the domain registrar is unknown. example:. `NameCheap, Inc.` |[optional]|
**metrics** | **MetricsBundleInfo** | *ranking data relevant to the specified domain* |[optional]|
**backlinks_info** | **BacklinksInfo** | *backlink data for the returned domain* |[optional]|