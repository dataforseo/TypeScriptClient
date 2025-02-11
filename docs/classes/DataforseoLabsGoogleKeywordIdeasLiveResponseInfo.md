[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordIdeasLiveResponseInfo

# Class: DataforseoLabsGoogleKeywordIdeasLiveResponseInfo

Defined in: main.ts:95435

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleKeywordIdeasLiveResponseInfo()

> **new DataforseoLabsGoogleKeywordIdeasLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md)

Defined in: main.ts:95441

#### Parameters

##### data?

[`IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleKeywordIdeasLiveTaskInfo`](DataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md)[]

Defined in: main.ts:95437

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:95445

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:95467

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md)

Defined in: main.ts:95460

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
