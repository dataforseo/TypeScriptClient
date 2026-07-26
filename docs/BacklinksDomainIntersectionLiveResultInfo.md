# BacklinksDomainIntersectionLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**targets** | **{ [key: string]: string; }** | *target domains, subdomains or webpages in a POST array* |[optional]|
**total_count** | **number** | *total amount of results relevant to your request* |[optional]|
**items_count** | **number** | *the number of results returned in the `items` array* |[optional]|
**items** | **BacklinksDomainIntersectionLiveItem[]** | *contains domain that link to all `targets` from the POST array* |[optional]|