[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IAppendixStatusEndpointsInfo

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

[main.ts:212743](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212743)

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

[main.ts:212753](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212753)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")