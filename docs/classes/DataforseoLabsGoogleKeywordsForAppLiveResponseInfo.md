[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordsForAppLiveResponseInfo

# Class: DataforseoLabsGoogleKeywordsForAppLiveResponseInfo

Defined in: main.ts:122049

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleKeywordsForAppLiveResponseInfo()

> **new DataforseoLabsGoogleKeywordsForAppLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md)

Defined in: main.ts:122055

#### Parameters

##### data?

[`IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleKeywordsForAppLiveTaskInfo`](DataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md)[]

Defined in: main.ts:122051

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:122059

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

Defined in: main.ts:122081

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md)

Defined in: main.ts:122074

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
