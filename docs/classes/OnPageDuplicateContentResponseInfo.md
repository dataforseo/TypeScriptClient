[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageDuplicateContentResponseInfo

# Class: OnPageDuplicateContentResponseInfo

Defined in: main.ts:169243

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageDuplicateContentResponseInfo`](../interfaces/IOnPageDuplicateContentResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageDuplicateContentResponseInfo()

> **new OnPageDuplicateContentResponseInfo**(`data`?): [`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)

Defined in: main.ts:169249

#### Parameters

##### data?

[`IOnPageDuplicateContentResponseInfo`](../interfaces/IOnPageDuplicateContentResponseInfo.md)

#### Returns

[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IOnPageDuplicateContentResponseInfo`](../interfaces/IOnPageDuplicateContentResponseInfo.md).[`cost`](../interfaces/IOnPageDuplicateContentResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IOnPageDuplicateContentResponseInfo`](../interfaces/IOnPageDuplicateContentResponseInfo.md).[`status_code`](../interfaces/IOnPageDuplicateContentResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageDuplicateContentResponseInfo`](../interfaces/IOnPageDuplicateContentResponseInfo.md).[`status_message`](../interfaces/IOnPageDuplicateContentResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`OnPageDuplicateContentTaskInfo`](OnPageDuplicateContentTaskInfo.md)[]

Defined in: main.ts:169245

array of tasks

#### Implementation of

[`IOnPageDuplicateContentResponseInfo`](../interfaces/IOnPageDuplicateContentResponseInfo.md).[`tasks`](../interfaces/IOnPageDuplicateContentResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IOnPageDuplicateContentResponseInfo`](../interfaces/IOnPageDuplicateContentResponseInfo.md).[`tasks_count`](../interfaces/IOnPageDuplicateContentResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageDuplicateContentResponseInfo`](../interfaces/IOnPageDuplicateContentResponseInfo.md).[`tasks_error`](../interfaces/IOnPageDuplicateContentResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IOnPageDuplicateContentResponseInfo`](../interfaces/IOnPageDuplicateContentResponseInfo.md).[`time`](../interfaces/IOnPageDuplicateContentResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IOnPageDuplicateContentResponseInfo`](../interfaces/IOnPageDuplicateContentResponseInfo.md).[`version`](../interfaces/IOnPageDuplicateContentResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:169253

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

Defined in: main.ts:169275

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)

Defined in: main.ts:169268

#### Parameters

##### data

`any`

#### Returns

[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
