[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPagePagesResponseInfo

# Class: OnPagePagesResponseInfo

Defined in: main.ts:167151

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPagePagesResponseInfo`](../interfaces/IOnPagePagesResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPagePagesResponseInfo()

> **new OnPagePagesResponseInfo**(`data`?): [`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)

Defined in: main.ts:167157

#### Parameters

##### data?

[`IOnPagePagesResponseInfo`](../interfaces/IOnPagePagesResponseInfo.md)

#### Returns

[`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IOnPagePagesResponseInfo`](../interfaces/IOnPagePagesResponseInfo.md).[`cost`](../interfaces/IOnPagePagesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IOnPagePagesResponseInfo`](../interfaces/IOnPagePagesResponseInfo.md).[`status_code`](../interfaces/IOnPagePagesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IOnPagePagesResponseInfo`](../interfaces/IOnPagePagesResponseInfo.md).[`status_message`](../interfaces/IOnPagePagesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`OnPagePagesTaskInfo`](OnPagePagesTaskInfo.md)[]

Defined in: main.ts:167153

array of tasks

#### Implementation of

[`IOnPagePagesResponseInfo`](../interfaces/IOnPagePagesResponseInfo.md).[`tasks`](../interfaces/IOnPagePagesResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IOnPagePagesResponseInfo`](../interfaces/IOnPagePagesResponseInfo.md).[`tasks_count`](../interfaces/IOnPagePagesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPagePagesResponseInfo`](../interfaces/IOnPagePagesResponseInfo.md).[`tasks_error`](../interfaces/IOnPagePagesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IOnPagePagesResponseInfo`](../interfaces/IOnPagePagesResponseInfo.md).[`time`](../interfaces/IOnPagePagesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IOnPagePagesResponseInfo`](../interfaces/IOnPagePagesResponseInfo.md).[`version`](../interfaces/IOnPagePagesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:167161

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

Defined in: main.ts:167183

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)

Defined in: main.ts:167176

#### Parameters

##### data

`any`

#### Returns

[`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
