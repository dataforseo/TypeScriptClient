[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleImagesTaskGetHtmlResponseInfo

# Class: SerpGoogleImagesTaskGetHtmlResponseInfo

Defined in: main.ts:51475

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleImagesTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleImagesTaskGetHtmlResponseInfo()

> **new SerpGoogleImagesTaskGetHtmlResponseInfo**(`data`?): [`SerpGoogleImagesTaskGetHtmlResponseInfo`](SerpGoogleImagesTaskGetHtmlResponseInfo.md)

Defined in: main.ts:51481

#### Parameters

##### data?

[`ISerpGoogleImagesTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md)

#### Returns

[`SerpGoogleImagesTaskGetHtmlResponseInfo`](SerpGoogleImagesTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md).[`cost`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleImagesTaskGetHtmlTaskInfo`](SerpGoogleImagesTaskGetHtmlTaskInfo.md)[]

Defined in: main.ts:51477

array of tasks

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md).[`time`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md).[`version`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:51485

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

Defined in: main.ts:51507

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleImagesTaskGetHtmlResponseInfo`](SerpGoogleImagesTaskGetHtmlResponseInfo.md)

Defined in: main.ts:51500

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleImagesTaskGetHtmlResponseInfo`](SerpGoogleImagesTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
