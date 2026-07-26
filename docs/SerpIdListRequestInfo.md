# SerpIdListRequestInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**datetime_from** | **string** | start time for filtering results. required field. if include_metadata is set to true, minimum start value: a month from current datetime;. if include_metadata is set to false, minimum start value: six months from current datetime;. maximum start value: current datetime;. must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;. example:. 2023-01-15 12:57:46 +00:00 |[optional]|
**datetime_to** | **string** | finish time for filtering results. required field. if include_metadata is set to true, minimum finish value: a month from current datetime;. if include_metadata is set to false, minimum finish value: six months from current datetime;. maximum finish value: current datetime;. Note: datetime_to must be greater than datetime_from;. must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;. example:. 2023-01-31 13:57:46 +00:00 |[optional]|
**limit** | **number** | the maximum number of returned task IDs. optional field. default value: 1000. maximum value: 1000. minimum value: 1 |[optional]|
**offset** | **number** | offset in the results array of returned task IDs. optional field. if you specify the 10 value, the first ten tasks in the results array will be omitted;. minimum and default value: 0;. maximum value: 100M (100 million) |[optional]|
**sort** | **string** | sorting by task execution time. optional field. possible values: 'asc', 'desc'. default value: 'asc' |[optional]|
**include_metadata** | **boolean** | include task metadata in the response. optional field. if set to true, the metadata object containing parameters specified in the POST request will be provided in the response;. default value: false |[optional]|