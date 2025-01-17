[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppendixStatusEndpointsInfo

# Interface: IAppendixStatusEndpointsInfo

Defined in: main.ts:239484

## Indexable

\[`key`: `string`\]: `any`

## Properties

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:239491

name of the endpoint
the list of possible endpoints:
task_get
task_post
live
postback/pingback

***

### status?

> `optional` **status**: `string`

Defined in: main.ts:239501

current status
you can find all information about the statuses of our endpoints for the last 60 days here
the list of possible current statuses:
major_outage
partial_outage
long_response_time
long_execution_time
webhook_delay
send_delay
