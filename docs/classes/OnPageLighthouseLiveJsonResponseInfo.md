[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageLighthouseLiveJsonResponseInfo

# Class: OnPageLighthouseLiveJsonResponseInfo

Defined in: main.ts:176299

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageLighthouseLiveJsonResponseInfo`](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageLighthouseLiveJsonResponseInfo()

> **new OnPageLighthouseLiveJsonResponseInfo**(`data`?): [`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)

Defined in: main.ts:176305

#### Parameters

##### data?

[`IOnPageLighthouseLiveJsonResponseInfo`](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md)

#### Returns

[`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IOnPageLighthouseLiveJsonResponseInfo`](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md).[`cost`](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IOnPageLighthouseLiveJsonResponseInfo`](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md).[`status_code`](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageLighthouseLiveJsonResponseInfo`](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md).[`status_message`](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`OnPageLighthouseLiveJsonTaskInfo`](OnPageLighthouseLiveJsonTaskInfo.md)[]

Defined in: main.ts:176301

array of tasks

#### Implementation of

[`IOnPageLighthouseLiveJsonResponseInfo`](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md).[`tasks`](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IOnPageLighthouseLiveJsonResponseInfo`](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md).[`tasks_count`](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageLighthouseLiveJsonResponseInfo`](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md).[`tasks_error`](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IOnPageLighthouseLiveJsonResponseInfo`](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md).[`time`](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IOnPageLighthouseLiveJsonResponseInfo`](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md).[`version`](../interfaces/IOnPageLighthouseLiveJsonResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:176309

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

Defined in: main.ts:176331

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)

Defined in: main.ts:176324

#### Parameters

##### data

`any`

#### Returns

[`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
