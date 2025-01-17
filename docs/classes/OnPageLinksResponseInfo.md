[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageLinksResponseInfo

# Class: OnPageLinksResponseInfo

Defined in: main.ts:169815

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageLinksResponseInfo`](../interfaces/IOnPageLinksResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageLinksResponseInfo()

> **new OnPageLinksResponseInfo**(`data`?): [`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)

Defined in: main.ts:169821

#### Parameters

##### data?

[`IOnPageLinksResponseInfo`](../interfaces/IOnPageLinksResponseInfo.md)

#### Returns

[`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IOnPageLinksResponseInfo`](../interfaces/IOnPageLinksResponseInfo.md).[`cost`](../interfaces/IOnPageLinksResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IOnPageLinksResponseInfo`](../interfaces/IOnPageLinksResponseInfo.md).[`status_code`](../interfaces/IOnPageLinksResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageLinksResponseInfo`](../interfaces/IOnPageLinksResponseInfo.md).[`status_message`](../interfaces/IOnPageLinksResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`OnPageLinksTaskInfo`](OnPageLinksTaskInfo.md)[]

Defined in: main.ts:169817

array of tasks

#### Implementation of

[`IOnPageLinksResponseInfo`](../interfaces/IOnPageLinksResponseInfo.md).[`tasks`](../interfaces/IOnPageLinksResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IOnPageLinksResponseInfo`](../interfaces/IOnPageLinksResponseInfo.md).[`tasks_count`](../interfaces/IOnPageLinksResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageLinksResponseInfo`](../interfaces/IOnPageLinksResponseInfo.md).[`tasks_error`](../interfaces/IOnPageLinksResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IOnPageLinksResponseInfo`](../interfaces/IOnPageLinksResponseInfo.md).[`time`](../interfaces/IOnPageLinksResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IOnPageLinksResponseInfo`](../interfaces/IOnPageLinksResponseInfo.md).[`version`](../interfaces/IOnPageLinksResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:169825

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

Defined in: main.ts:169847

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)

Defined in: main.ts:169840

#### Parameters

##### data

`any`

#### Returns

[`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
