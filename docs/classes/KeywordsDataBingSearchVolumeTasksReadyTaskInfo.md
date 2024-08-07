**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeTasksReadyTaskInfo

# Class: KeywordsDataBingSearchVolumeTasksReadyTaskInfo

## Extends

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

## Implements

- [`IKeywordsDataBingSearchVolumeTasksReadyTaskInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeTasksReadyTaskInfo(data)

> **new KeywordsDataBingSearchVolumeTasksReadyTaskInfo**(`data`?): [`KeywordsDataBingSearchVolumeTasksReadyTaskInfo`](KeywordsDataBingSearchVolumeTasksReadyTaskInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingSearchVolumeTasksReadyTaskInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeTasksReadyTaskInfo`](KeywordsDataBingSearchVolumeTasksReadyTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`constructor`](BaseResponseTaskInfo.md#constructors)

#### Source

main.ts:131962

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingSearchVolumeTasksReadyTaskInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md).[`cost`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#cost)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`cost`](BaseResponseTaskInfo.md#cost)

#### Source

main.ts:23741

***

### data?

> **`optional`** **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

 \[`key`: `string`\]: `any`

#### Implementation of

[`IKeywordsDataBingSearchVolumeTasksReadyTaskInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md).[`data`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#data)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`data`](BaseResponseTaskInfo.md#data)

#### Source

main.ts:23747

***

### id?

> **`optional`** **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[`IKeywordsDataBingSearchVolumeTasksReadyTaskInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md).[`id`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#id)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`id`](BaseResponseTaskInfo.md#id)

#### Source

main.ts:23730

***

### path?

> **`optional`** **path**: `string`[]

URL path

#### Implementation of

[`IKeywordsDataBingSearchVolumeTasksReadyTaskInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md).[`path`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#path)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`path`](BaseResponseTaskInfo.md#path)

#### Source

main.ts:23745

***

### result?

> **`optional`** **result**: [`KeywordsDataBingSearchVolumeTasksReadyResultInfo`](KeywordsDataBingSearchVolumeTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[`IKeywordsDataBingSearchVolumeTasksReadyTaskInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md).[`result`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#result)

#### Source

main.ts:131958

***

### result\_count?

> **`optional`** **result\_count**: `number`

number of elements in the result array

#### Implementation of

[`IKeywordsDataBingSearchVolumeTasksReadyTaskInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md).[`result_count`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#result_count)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`result_count`](BaseResponseTaskInfo.md#result_count)

#### Source

main.ts:23743

***

### status\_code?

> **`optional`** **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingSearchVolumeTasksReadyTaskInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md).[`status_code`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#status_code)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`status_code`](BaseResponseTaskInfo.md#status_code)

#### Source

main.ts:23734

***

### status\_message?

> **`optional`** **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingSearchVolumeTasksReadyTaskInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md).[`status_message`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#status_message)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`status_message`](BaseResponseTaskInfo.md#status_message)

#### Source

main.ts:23737

***

### time?

> **`optional`** **time**: `string`

execution time, seconds

#### Implementation of

[`IKeywordsDataBingSearchVolumeTasksReadyTaskInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md).[`time`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyTaskInfo.md#time)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`time`](BaseResponseTaskInfo.md#time)

#### Source

main.ts:23739

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`init`](BaseResponseTaskInfo.md#init)

#### Source

main.ts:131966

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`toJSON`](BaseResponseTaskInfo.md#tojson)

#### Source

main.ts:131988

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataBingSearchVolumeTasksReadyTaskInfo`](KeywordsDataBingSearchVolumeTasksReadyTaskInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingSearchVolumeTasksReadyTaskInfo`](KeywordsDataBingSearchVolumeTasksReadyTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`fromJS`](BaseResponseTaskInfo.md#fromjs)

#### Source

main.ts:131981
