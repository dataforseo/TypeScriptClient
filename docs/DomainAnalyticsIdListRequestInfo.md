# DomainAnalyticsIdListRequestInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**datetime_from** | **string** | *start time for filtering results*. **required field**. if `include_metadata` is set to `true`, maximum value: a month from current datetime;. if `include_metadata` is set to `false`, maximum value: six months from current datetime;. must be specified in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00'. example:. `2023-01-15 12:57:46 +00:00` |[optional]|
**datetime_to** | **string** | *finish time for filtering results*. **required field**. maximum value: current datetime;. must be specified in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00'. example:. `2023-01-31 13:57:46 +00:00` |[optional]|
**limit** | **number** | *the maximum number of returned task IDs*. optional field. default value: `1000`. maximum value: `1000` |[optional]|
**offset** | **number** | *offset in the results array of returned task IDs*. optional field. default value: `0`. if you specify the `10` value, the first ten tasks in the results array will be omitted |[optional]|
**sort** | **string** | *sorting by task execution time*. optional field. possible values: `'asc'`, `'desc'`. default value: `'asc'` |[optional]|
**include_metadata** | **boolean** | *include task metadata in the respond*. optional field. default value: `false` |[optional]|