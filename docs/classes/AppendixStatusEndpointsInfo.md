[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / AppendixStatusEndpointsInfo

# Class: AppendixStatusEndpointsInfo

## Implements

- [`IAppendixStatusEndpointsInfo`](../interfaces/IAppendixStatusEndpointsInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppendixStatusEndpointsInfo()

> **new AppendixStatusEndpointsInfo**(`data`?): [`AppendixStatusEndpointsInfo`](AppendixStatusEndpointsInfo.md)

#### Parameters

• **data?**: [`IAppendixStatusEndpointsInfo`](../interfaces/IAppendixStatusEndpointsInfo.md)

#### Returns

[`AppendixStatusEndpointsInfo`](AppendixStatusEndpointsInfo.md)

#### Defined in

main.ts:228897

## Properties

### endpoint?

> `optional` **endpoint**: `string`

name of the endpoint
the list of possible endpoints:
task_get
task_post
live
postback/pingback

#### Implementation of

[`IAppendixStatusEndpointsInfo`](../interfaces/IAppendixStatusEndpointsInfo.md).[`endpoint`](../interfaces/IAppendixStatusEndpointsInfo.md#endpoint)

#### Defined in

main.ts:228883

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

#### Implementation of

[`IAppendixStatusEndpointsInfo`](../interfaces/IAppendixStatusEndpointsInfo.md).[`status`](../interfaces/IAppendixStatusEndpointsInfo.md#status)

#### Defined in

main.ts:228893

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:228906

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:228924

***

### fromJS()

> `static` **fromJS**(`data`): [`AppendixStatusEndpointsInfo`](AppendixStatusEndpointsInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppendixStatusEndpointsInfo`](AppendixStatusEndpointsInfo.md)

#### Defined in

main.ts:228917
