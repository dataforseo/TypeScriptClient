**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageTaskPostResponseInfo

# Class: OnPageTaskPostResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageTaskPostResponseInfo`](../interfaces/IOnPageTaskPostResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageTaskPostResponseInfo(data)

> **new OnPageTaskPostResponseInfo**(`data`?): [`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)

#### Parameters

• **data?**: [`IOnPageTaskPostResponseInfo`](../interfaces/IOnPageTaskPostResponseInfo.md)

#### Returns

[`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:150359

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IOnPageTaskPostResponseInfo`](../interfaces/IOnPageTaskPostResponseInfo.md).[`cost`](../interfaces/IOnPageTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23321

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IOnPageTaskPostResponseInfo`](../interfaces/IOnPageTaskPostResponseInfo.md).[`status_code`](../interfaces/IOnPageTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23314

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageTaskPostResponseInfo`](../interfaces/IOnPageTaskPostResponseInfo.md).[`status_message`](../interfaces/IOnPageTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23317

***

### tasks?

> **`optional`** **tasks**: [`OnPageTaskPostTaskInfo`](OnPageTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[`IOnPageTaskPostResponseInfo`](../interfaces/IOnPageTaskPostResponseInfo.md).[`tasks`](../interfaces/IOnPageTaskPostResponseInfo.md#tasks)

#### Source

main.ts:150355

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IOnPageTaskPostResponseInfo`](../interfaces/IOnPageTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IOnPageTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23323

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageTaskPostResponseInfo`](../interfaces/IOnPageTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IOnPageTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23325

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IOnPageTaskPostResponseInfo`](../interfaces/IOnPageTaskPostResponseInfo.md).[`time`](../interfaces/IOnPageTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23319

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IOnPageTaskPostResponseInfo`](../interfaces/IOnPageTaskPostResponseInfo.md).[`version`](../interfaces/IOnPageTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23311

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Source

main.ts:150363

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Source

main.ts:150385

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:150378
