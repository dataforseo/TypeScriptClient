[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpSeznamOrganicTaskGetHtmlResponseInfo

# Class: SerpSeznamOrganicTaskGetHtmlResponseInfo

Defined in: main.ts:84283

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpSeznamOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamOrganicTaskGetHtmlResponseInfo()

> **new SerpSeznamOrganicTaskGetHtmlResponseInfo**(`data`?): [`SerpSeznamOrganicTaskGetHtmlResponseInfo`](SerpSeznamOrganicTaskGetHtmlResponseInfo.md)

Defined in: main.ts:84289

#### Parameters

##### data?

[`ISerpSeznamOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md)

#### Returns

[`SerpSeznamOrganicTaskGetHtmlResponseInfo`](SerpSeznamOrganicTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md).[`cost`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md).[`status_code`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md).[`status_message`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpSeznamOrganicTaskGetHtmlTaskInfo`](SerpSeznamOrganicTaskGetHtmlTaskInfo.md)[]

Defined in: main.ts:84285

array of tasks

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md).[`tasks`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md).[`tasks_count`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md).[`tasks_error`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md).[`time`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md).[`version`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:84293

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

Defined in: main.ts:84315

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpSeznamOrganicTaskGetHtmlResponseInfo`](SerpSeznamOrganicTaskGetHtmlResponseInfo.md)

Defined in: main.ts:84308

#### Parameters

##### data

`any`

#### Returns

[`SerpSeznamOrganicTaskGetHtmlResponseInfo`](SerpSeznamOrganicTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
