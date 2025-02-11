[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksReferringDomainsLiveResponseInfo

# Class: BacklinksReferringDomainsLiveResponseInfo

Defined in: main.ts:156155

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBacklinksReferringDomainsLiveResponseInfo`](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksReferringDomainsLiveResponseInfo()

> **new BacklinksReferringDomainsLiveResponseInfo**(`data`?): [`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)

Defined in: main.ts:156161

#### Parameters

##### data?

[`IBacklinksReferringDomainsLiveResponseInfo`](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md)

#### Returns

[`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBacklinksReferringDomainsLiveResponseInfo`](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md).[`cost`](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBacklinksReferringDomainsLiveResponseInfo`](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md).[`status_code`](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBacklinksReferringDomainsLiveResponseInfo`](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md).[`status_message`](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BacklinksReferringDomainsLiveTaskInfo`](BacklinksReferringDomainsLiveTaskInfo.md)[]

Defined in: main.ts:156157

array of tasks

#### Implementation of

[`IBacklinksReferringDomainsLiveResponseInfo`](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md).[`tasks`](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBacklinksReferringDomainsLiveResponseInfo`](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md).[`tasks_count`](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBacklinksReferringDomainsLiveResponseInfo`](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md).[`tasks_error`](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBacklinksReferringDomainsLiveResponseInfo`](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md).[`time`](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBacklinksReferringDomainsLiveResponseInfo`](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md).[`version`](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:156165

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

Defined in: main.ts:156187

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)

Defined in: main.ts:156180

#### Parameters

##### data

`any`

#### Returns

[`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
