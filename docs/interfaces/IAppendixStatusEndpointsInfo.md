[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IAppendixStatusEndpointsInfo

# Interface: IAppendixStatusEndpointsInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### endpoint?

> `optional` **endpoint**: `string`

name of the endpoint
the list of possible endpoints:
task_get
task_post
live
postback/pingback

#### Defined in

main.ts:228943

***

### status?

> `optional` **status**: `string`

current status
you can find all information about the statuses of our endpoints for the last 60 days here
the list of possible current statuses:
major_outage
partial_outage
long_response_time
long_execution_time
webhook_delay
send_delay

#### Defined in

main.ts:228953
