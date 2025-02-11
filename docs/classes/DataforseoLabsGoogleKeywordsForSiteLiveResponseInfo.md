[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo

# Class: DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo

Defined in: main.ts:93637

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo()

> **new DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo`](DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md)

Defined in: main.ts:93643

#### Parameters

##### data?

[`IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo`](DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo`](DataforseoLabsGoogleKeywordsForSiteLiveTaskInfo.md)[]

Defined in: main.ts:93639

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:93647

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

Defined in: main.ts:93669

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo`](DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md)

Defined in: main.ts:93662

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo`](DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
