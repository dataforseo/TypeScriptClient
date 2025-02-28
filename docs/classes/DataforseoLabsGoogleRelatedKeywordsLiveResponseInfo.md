[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo

# Class: DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo

Defined in: main.ts:94279

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo()

> **new DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md)

Defined in: main.ts:94285

#### Parameters

##### data?

[`IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo`](DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md)[]

Defined in: main.ts:94281

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:94289

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

Defined in: main.ts:94311

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md)

Defined in: main.ts:94304

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
