[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleImagesTaskPostResponseInfo

# Class: SerpGoogleImagesTaskPostResponseInfo

Defined in: main.ts:50266

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleImagesTaskPostResponseInfo`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleImagesTaskPostResponseInfo()

> **new SerpGoogleImagesTaskPostResponseInfo**(`data`?): [`SerpGoogleImagesTaskPostResponseInfo`](SerpGoogleImagesTaskPostResponseInfo.md)

Defined in: main.ts:50272

#### Parameters

##### data?

[`ISerpGoogleImagesTaskPostResponseInfo`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md)

#### Returns

[`SerpGoogleImagesTaskPostResponseInfo`](SerpGoogleImagesTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleImagesTaskPostResponseInfo`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md).[`cost`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleImagesTaskPostResponseInfo`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleImagesTaskPostResponseInfo`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleImagesTaskPostTaskInfo`](SerpGoogleImagesTaskPostTaskInfo.md)[]

Defined in: main.ts:50268

array of tasks

#### Implementation of

[`ISerpGoogleImagesTaskPostResponseInfo`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleImagesTaskPostResponseInfo`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleImagesTaskPostResponseInfo`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleImagesTaskPostResponseInfo`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md).[`time`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleImagesTaskPostResponseInfo`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md).[`version`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:50276

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

Defined in: main.ts:50298

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleImagesTaskPostResponseInfo`](SerpGoogleImagesTaskPostResponseInfo.md)

Defined in: main.ts:50291

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleImagesTaskPostResponseInfo`](SerpGoogleImagesTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
