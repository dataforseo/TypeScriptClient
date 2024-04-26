**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo

# Class: KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo(data)

> **new KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo**(`data`?): [`KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:127535

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md).[`cost`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23157

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23150

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23153

***

### tasks?

> **`optional`** **tasks**: [`KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo`](KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#tasks)

#### Source

main.ts:127531

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23159

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23161

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md).[`time`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23155

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md).[`version`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23147

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Source

main.ts:127539

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Source

main.ts:127561

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:127554
