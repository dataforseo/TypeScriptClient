# BacklinksTimeseriesNewLostSummaryLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**target** | **string** | *`target` from a POST array* |[optional]|
**date_from** | **string** | *starting date of the time range*. in the UTC format: “yyyy-mm-dd”. example:. `2019-01-01` |[optional]|
**date_to** | **string** | *ending date of the time range*. in the UTC format: `'yyyy-mm-dd'`. example:. `'2019-01-15'` |[optional]|
**group_range** | **string** | *`group_range` from the POST array* |[optional]|
**items_count** | **number** | *the number of results returned in the `items` array* |[optional]|
**items** | **BacklinksTimeseriesNewLostSummaryLiveItem[]** | *contains relevant backlinks and referring domains data* |[optional]|