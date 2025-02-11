[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpNaverOrganicTaskGetHtmlResponseInfo

# Class: SerpNaverOrganicTaskGetHtmlResponseInfo

Defined in: main.ts:82149

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpNaverOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpNaverOrganicTaskGetHtmlResponseInfo()

> **new SerpNaverOrganicTaskGetHtmlResponseInfo**(`data`?): [`SerpNaverOrganicTaskGetHtmlResponseInfo`](SerpNaverOrganicTaskGetHtmlResponseInfo.md)

Defined in: main.ts:82155

#### Parameters

##### data?

[`ISerpNaverOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md)

#### Returns

[`SerpNaverOrganicTaskGetHtmlResponseInfo`](SerpNaverOrganicTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md).[`cost`](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md).[`status_code`](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md).[`status_message`](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpNaverOrganicTaskGetHtmlTaskInfo`](SerpNaverOrganicTaskGetHtmlTaskInfo.md)[]

Defined in: main.ts:82151

array of tasks

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md).[`tasks`](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md).[`tasks_count`](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md).[`tasks_error`](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md).[`time`](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md).[`version`](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:82159

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

Defined in: main.ts:82181

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpNaverOrganicTaskGetHtmlResponseInfo`](SerpNaverOrganicTaskGetHtmlResponseInfo.md)

Defined in: main.ts:82174

#### Parameters

##### data

`any`

#### Returns

[`SerpNaverOrganicTaskGetHtmlResponseInfo`](SerpNaverOrganicTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
