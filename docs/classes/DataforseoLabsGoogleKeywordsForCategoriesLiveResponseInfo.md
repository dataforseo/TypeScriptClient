[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo

# Class: DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo

Defined in: main.ts:98761

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo()

> **new DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md)

Defined in: main.ts:98767

#### Parameters

##### data?

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md)[]

Defined in: main.ts:98763

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:98771

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

Defined in: main.ts:98793

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md)

Defined in: main.ts:98786

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
