[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooOrganicTaskGetHtmlResponseInfo

# Class: SerpYahooOrganicTaskGetHtmlResponseInfo

Defined in: main.ts:76751

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYahooOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicTaskGetHtmlResponseInfo()

> **new SerpYahooOrganicTaskGetHtmlResponseInfo**(`data`?): [`SerpYahooOrganicTaskGetHtmlResponseInfo`](SerpYahooOrganicTaskGetHtmlResponseInfo.md)

Defined in: main.ts:76757

#### Parameters

##### data?

[`ISerpYahooOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md)

#### Returns

[`SerpYahooOrganicTaskGetHtmlResponseInfo`](SerpYahooOrganicTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpYahooOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md).[`cost`](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpYahooOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md).[`status_code`](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpYahooOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md).[`status_message`](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpYahooOrganicTaskGetHtmlTaskInfo`](SerpYahooOrganicTaskGetHtmlTaskInfo.md)[]

Defined in: main.ts:76753

array of tasks

#### Implementation of

[`ISerpYahooOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md).[`tasks`](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpYahooOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md).[`tasks_count`](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYahooOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md).[`tasks_error`](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpYahooOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md).[`time`](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpYahooOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md).[`version`](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:76761

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

Defined in: main.ts:76783

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooOrganicTaskGetHtmlResponseInfo`](SerpYahooOrganicTaskGetHtmlResponseInfo.md)

Defined in: main.ts:76776

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooOrganicTaskGetHtmlResponseInfo`](SerpYahooOrganicTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
