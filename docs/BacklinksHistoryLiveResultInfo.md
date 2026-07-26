# BacklinksHistoryLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**target** | **string** | *`target` from the POST array* |[optional]|
**date_from** | **string** | *starting date of the time range*. in the UTC format: “yyyy-mm-dd”. example:. `2019-01-01` |[optional]|
**date_to** | **string** | *ending date of the time range*. in the UTC format: `'yyyy-mm-dd'`. example:. `'2019-01-15'` |[optional]|
**items_count** | **number** | *the number of results returned in the `items` array* |[optional]|
**items** | **BacklinksHistoryLiveItem[]** | *contains historical backlink data for the specified domain*. the data is provided month-by-month;. the metrics are aggregated according to the backlinks the specified domain had on the first day of each given month |[optional]|