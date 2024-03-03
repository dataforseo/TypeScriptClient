[Documentation](../README.md) / [Exports](../modules.md) / IAppendixStatusEndpointsInfo

# Interface: IAppendixStatusEndpointsInfo

## Implemented by

- [`AppendixStatusEndpointsInfo`](../classes/AppendixStatusEndpointsInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [endpoint](IAppendixStatusEndpointsInfo.md#endpoint)
- [status](IAppendixStatusEndpointsInfo.md#status)

## Properties

### endpoint

• `Optional` **endpoint**: `string`

name of the endpoint
the list of possible endpoints:
task_get
task_post
live
postback/pingback

#### Defined in

main.ts:212863

___

### status

• `Optional` **status**: `string`

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

main.ts:212873
