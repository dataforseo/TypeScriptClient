[**Documentation**](../README.md)

***

[Documentation](../README.md) / DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo

# Class: DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo

Defined in: main.ts:88503

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo()

> **new DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo**(`data`?): [`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md)

Defined in: main.ts:88509

#### Parameters

##### data?

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md)

#### Returns

[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md).[`cost`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md).[`status_code`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md).[`status_message`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md)[]

Defined in: main.ts:88505

array of tasks

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md).[`tasks`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md).[`tasks_count`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md).[`tasks_error`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md).[`time`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md).[`version`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:88513

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

Defined in: main.ts:88535

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md)

Defined in: main.ts:88528

#### Parameters

##### data

`any`

#### Returns

[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
