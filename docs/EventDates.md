# EventDates

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**start_datetime** | **string** | *date and time when the event starts*. if time zone is specified in the event, value will be returned in the UTC format:. 'yyyy-mm-ddThh-mm-ss+00:00'. example:. `2019-11-15T12:57:46+00:00`. if time zone is not specified in the event, unspecified local time will be returned in the following format:. 'yyyy-mm-ddThh-mm-ss' . example:. `2019-11-15T12:57:46` |[optional]|
**end_datetime** | **string** | *date and time when the event ends*. if time zone is specified in the event, value will be returned in the UTC format:. 'yyyy-mm-ddThh-mm-ss+00:00'. example:. `2019-11-15T12:57:46+00:00`. if time zone is not specified in the event, unspecified local time will be returned in the following format:. 'yyyy-mm-ddThh-mm-ss' . example:. `2019-11-15T12:57:46` |[optional]|
**displayed_dates** | **string** | *date or date range as it is displayed in SERP* |[optional]|