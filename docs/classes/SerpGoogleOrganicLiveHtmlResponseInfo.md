[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleOrganicLiveHtmlResponseInfo

# Class: SerpGoogleOrganicLiveHtmlResponseInfo

Defined in: main.ts:40472

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleOrganicLiveHtmlResponseInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicLiveHtmlResponseInfo()

> **new SerpGoogleOrganicLiveHtmlResponseInfo**(`data`?): [`SerpGoogleOrganicLiveHtmlResponseInfo`](SerpGoogleOrganicLiveHtmlResponseInfo.md)

Defined in: main.ts:40478

#### Parameters

##### data?

[`ISerpGoogleOrganicLiveHtmlResponseInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md)

#### Returns

[`SerpGoogleOrganicLiveHtmlResponseInfo`](SerpGoogleOrganicLiveHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResponseInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md).[`cost`](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResponseInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResponseInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleOrganicLiveHtmlTaskInfo`](SerpGoogleOrganicLiveHtmlTaskInfo.md)[]

Defined in: main.ts:40474

array of tasks

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResponseInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResponseInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResponseInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResponseInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md).[`time`](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResponseInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md).[`version`](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:40482

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

Defined in: main.ts:40504

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleOrganicLiveHtmlResponseInfo`](SerpGoogleOrganicLiveHtmlResponseInfo.md)

Defined in: main.ts:40497

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleOrganicLiveHtmlResponseInfo`](SerpGoogleOrganicLiveHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
