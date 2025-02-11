[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppendixStatusEndpointsInfo

# Class: AppendixStatusEndpointsInfo

Defined in: main.ts:239852

## Implements

- [`IAppendixStatusEndpointsInfo`](../interfaces/IAppendixStatusEndpointsInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppendixStatusEndpointsInfo()

> **new AppendixStatusEndpointsInfo**(`data`?): [`AppendixStatusEndpointsInfo`](AppendixStatusEndpointsInfo.md)

Defined in: main.ts:239873

#### Parameters

##### data?

[`IAppendixStatusEndpointsInfo`](../interfaces/IAppendixStatusEndpointsInfo.md)

#### Returns

[`AppendixStatusEndpointsInfo`](AppendixStatusEndpointsInfo.md)

## Properties

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:239859

name of the endpoint
the list of possible endpoints:
task_get
task_post
live
postback/pingback

#### Implementation of

[`IAppendixStatusEndpointsInfo`](../interfaces/IAppendixStatusEndpointsInfo.md).[`endpoint`](../interfaces/IAppendixStatusEndpointsInfo.md#endpoint)

***

### status?

> `optional` **status**: `string`

Defined in: main.ts:239869

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

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:239882

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:239900

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppendixStatusEndpointsInfo`](AppendixStatusEndpointsInfo.md)

Defined in: main.ts:239893

#### Parameters

##### data

`any`

#### Returns

[`AppendixStatusEndpointsInfo`](AppendixStatusEndpointsInfo.md)
