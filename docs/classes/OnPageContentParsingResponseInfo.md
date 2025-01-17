[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageContentParsingResponseInfo

# Class: OnPageContentParsingResponseInfo

Defined in: main.ts:173767

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageContentParsingResponseInfo`](../interfaces/IOnPageContentParsingResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageContentParsingResponseInfo()

> **new OnPageContentParsingResponseInfo**(`data`?): [`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)

Defined in: main.ts:173773

#### Parameters

##### data?

[`IOnPageContentParsingResponseInfo`](../interfaces/IOnPageContentParsingResponseInfo.md)

#### Returns

[`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IOnPageContentParsingResponseInfo`](../interfaces/IOnPageContentParsingResponseInfo.md).[`cost`](../interfaces/IOnPageContentParsingResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IOnPageContentParsingResponseInfo`](../interfaces/IOnPageContentParsingResponseInfo.md).[`status_code`](../interfaces/IOnPageContentParsingResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageContentParsingResponseInfo`](../interfaces/IOnPageContentParsingResponseInfo.md).[`status_message`](../interfaces/IOnPageContentParsingResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`OnPageContentParsingTaskInfo`](OnPageContentParsingTaskInfo.md)[]

Defined in: main.ts:173769

array of tasks

#### Implementation of

[`IOnPageContentParsingResponseInfo`](../interfaces/IOnPageContentParsingResponseInfo.md).[`tasks`](../interfaces/IOnPageContentParsingResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IOnPageContentParsingResponseInfo`](../interfaces/IOnPageContentParsingResponseInfo.md).[`tasks_count`](../interfaces/IOnPageContentParsingResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageContentParsingResponseInfo`](../interfaces/IOnPageContentParsingResponseInfo.md).[`tasks_error`](../interfaces/IOnPageContentParsingResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IOnPageContentParsingResponseInfo`](../interfaces/IOnPageContentParsingResponseInfo.md).[`time`](../interfaces/IOnPageContentParsingResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IOnPageContentParsingResponseInfo`](../interfaces/IOnPageContentParsingResponseInfo.md).[`version`](../interfaces/IOnPageContentParsingResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:173777

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

Defined in: main.ts:173799

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)

Defined in: main.ts:173792

#### Parameters

##### data

`any`

#### Returns

[`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
