[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo

# Class: DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo

Defined in: main.ts:98225

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo()

> **new DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md)

Defined in: main.ts:98231

#### Parameters

##### data?

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleCategoriesForKeywordsLiveTaskInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveTaskInfo.md)[]

Defined in: main.ts:98227

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:98235

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

Defined in: main.ts:98257

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md)

Defined in: main.ts:98250

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
