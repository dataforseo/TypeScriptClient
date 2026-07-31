# AppendixStatusEndpointsInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**endpoint** | **string** | *name of the endpoint*. the list of possible endpoints:. `task_get`. `task_post`. `live`. `postback/pingback` |[optional]|
**status** | **string** | *current status*. you can find all information about your API statuses for the last 60 days [here](https://status.dataforseo.com/). the list of possible current statuses:. `major_outage`. `partial_outage`. `long_response_time`. `long_execution_time`. `webhook_delay`. `send_delay` |[optional]|