**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppendixStatusResultInfo

# Class: AppendixStatusResultInfo

## Implements

- [`IAppendixStatusResultInfo`](../interfaces/IAppendixStatusResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppendixStatusResultInfo(data)

> **new AppendixStatusResultInfo**(`data`?): [`AppendixStatusResultInfo`](AppendixStatusResultInfo.md)

#### Parameters

• **data?**: [`IAppendixStatusResultInfo`](../interfaces/IAppendixStatusResultInfo.md)

#### Returns

[`AppendixStatusResultInfo`](AppendixStatusResultInfo.md)

#### Source

main.ts:219466

## Properties

### api?

> **`optional`** **api**: `string`

name of the API
the list of APIs:
serp
keywords_data
appendix
dataforseo_labs
domain_analytics
merchant
on_page
business_data
backlinks
app_data
content_analysis
content_generation

#### Implementation of

[`IAppendixStatusResultInfo`](../interfaces/IAppendixStatusResultInfo.md).[`api`](../interfaces/IAppendixStatusResultInfo.md#api)

#### Source

main.ts:219450

***

### endpoints?

> **`optional`** **endpoints**: [`AppendixStatusEndpointsInfo`](AppendixStatusEndpointsInfo.md)[]

array of objects that contain status information for API endpoints

#### Implementation of

[`IAppendixStatusResultInfo`](../interfaces/IAppendixStatusResultInfo.md).[`endpoints`](../interfaces/IAppendixStatusResultInfo.md#endpoints)

#### Source

main.ts:219462

***

### status?

> **`optional`** **status**: `string`

current status
you can find all information about your API statuses for the last 60 days here
the list of possible current statuses:
major_outage
partial_outage
long_response_time
long_execution_time
webhook_delay
send_delay

#### Implementation of

[`IAppendixStatusResultInfo`](../interfaces/IAppendixStatusResultInfo.md).[`status`](../interfaces/IAppendixStatusResultInfo.md#status)

#### Source

main.ts:219460

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:219475

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:219498

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppendixStatusResultInfo`](AppendixStatusResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppendixStatusResultInfo`](AppendixStatusResultInfo.md)

#### Source

main.ts:219491
