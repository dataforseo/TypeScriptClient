[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleRelevantPagesLiveResponseInfo

# Class: DataforseoLabsGoogleRelevantPagesLiveResponseInfo

Defined in: main.ts:105035

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleRelevantPagesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleRelevantPagesLiveResponseInfo()

> **new DataforseoLabsGoogleRelevantPagesLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleRelevantPagesLiveResponseInfo`](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md)

Defined in: main.ts:105041

#### Parameters

##### data?

[`IDataforseoLabsGoogleRelevantPagesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleRelevantPagesLiveResponseInfo`](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleRelevantPagesLiveTaskInfo`](DataforseoLabsGoogleRelevantPagesLiveTaskInfo.md)[]

Defined in: main.ts:105037

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:105045

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

Defined in: main.ts:105067

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleRelevantPagesLiveResponseInfo`](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md)

Defined in: main.ts:105060

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleRelevantPagesLiveResponseInfo`](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
