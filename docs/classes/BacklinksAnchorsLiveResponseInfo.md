**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksAnchorsLiveResponseInfo

# Class: BacklinksAnchorsLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBacklinksAnchorsLiveResponseInfo`](../interfaces/IBacklinksAnchorsLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksAnchorsLiveResponseInfo(data)

> **new BacklinksAnchorsLiveResponseInfo**(`data`?): [`BacklinksAnchorsLiveResponseInfo`](BacklinksAnchorsLiveResponseInfo.md)

#### Parameters

• **data?**: [`IBacklinksAnchorsLiveResponseInfo`](../interfaces/IBacklinksAnchorsLiveResponseInfo.md)

#### Returns

[`BacklinksAnchorsLiveResponseInfo`](BacklinksAnchorsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:143269

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBacklinksAnchorsLiveResponseInfo`](../interfaces/IBacklinksAnchorsLiveResponseInfo.md).[`cost`](../interfaces/IBacklinksAnchorsLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23649

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBacklinksAnchorsLiveResponseInfo`](../interfaces/IBacklinksAnchorsLiveResponseInfo.md).[`status_code`](../interfaces/IBacklinksAnchorsLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23642

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBacklinksAnchorsLiveResponseInfo`](../interfaces/IBacklinksAnchorsLiveResponseInfo.md).[`status_message`](../interfaces/IBacklinksAnchorsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23645

***

### tasks?

> **`optional`** **tasks**: [`BacklinksAnchorsLiveTaskInfo`](BacklinksAnchorsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBacklinksAnchorsLiveResponseInfo`](../interfaces/IBacklinksAnchorsLiveResponseInfo.md).[`tasks`](../interfaces/IBacklinksAnchorsLiveResponseInfo.md#tasks)

#### Source

main.ts:143265

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBacklinksAnchorsLiveResponseInfo`](../interfaces/IBacklinksAnchorsLiveResponseInfo.md).[`tasks_count`](../interfaces/IBacklinksAnchorsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23651

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBacklinksAnchorsLiveResponseInfo`](../interfaces/IBacklinksAnchorsLiveResponseInfo.md).[`tasks_error`](../interfaces/IBacklinksAnchorsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23653

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IBacklinksAnchorsLiveResponseInfo`](../interfaces/IBacklinksAnchorsLiveResponseInfo.md).[`time`](../interfaces/IBacklinksAnchorsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23647

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IBacklinksAnchorsLiveResponseInfo`](../interfaces/IBacklinksAnchorsLiveResponseInfo.md).[`version`](../interfaces/IBacklinksAnchorsLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23639

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

main.ts:143273

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

main.ts:143295

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksAnchorsLiveResponseInfo`](BacklinksAnchorsLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksAnchorsLiveResponseInfo`](BacklinksAnchorsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:143288
