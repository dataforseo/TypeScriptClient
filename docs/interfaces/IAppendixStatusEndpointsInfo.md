**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAppendixStatusEndpointsInfo

# Interface: IAppendixStatusEndpointsInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### endpoint?

> **`optional`** **endpoint**: `string`

name of the endpoint
the list of possible endpoints:
task_get
task_post
live
postback/pingback

#### Source

main.ts:220564

***

### status?

> **`optional`** **status**: `string`

current status
you can find all information about the statuses of our endpoints for the last 60 days here
the list of possible current statuses:
major_outage
partial_outage
long_response_time
long_execution_time
webhook_delay
send_delay

#### Source

main.ts:220574
