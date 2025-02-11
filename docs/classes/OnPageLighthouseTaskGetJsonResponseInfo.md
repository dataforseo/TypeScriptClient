[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageLighthouseTaskGetJsonResponseInfo

# Class: OnPageLighthouseTaskGetJsonResponseInfo

Defined in: main.ts:176361

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageLighthouseTaskGetJsonResponseInfo`](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageLighthouseTaskGetJsonResponseInfo()

> **new OnPageLighthouseTaskGetJsonResponseInfo**(`data`?): [`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)

Defined in: main.ts:176367

#### Parameters

##### data?

[`IOnPageLighthouseTaskGetJsonResponseInfo`](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md)

#### Returns

[`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IOnPageLighthouseTaskGetJsonResponseInfo`](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md).[`cost`](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IOnPageLighthouseTaskGetJsonResponseInfo`](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md).[`status_code`](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageLighthouseTaskGetJsonResponseInfo`](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md).[`status_message`](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`OnPageLighthouseTaskGetJsonTaskInfo`](OnPageLighthouseTaskGetJsonTaskInfo.md)[]

Defined in: main.ts:176363

array of tasks

#### Implementation of

[`IOnPageLighthouseTaskGetJsonResponseInfo`](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md).[`tasks`](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IOnPageLighthouseTaskGetJsonResponseInfo`](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md).[`tasks_count`](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageLighthouseTaskGetJsonResponseInfo`](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md).[`tasks_error`](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IOnPageLighthouseTaskGetJsonResponseInfo`](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md).[`time`](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IOnPageLighthouseTaskGetJsonResponseInfo`](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md).[`version`](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:176371

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

Defined in: main.ts:176393

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)

Defined in: main.ts:176386

#### Parameters

##### data

`any`

#### Returns

[`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
