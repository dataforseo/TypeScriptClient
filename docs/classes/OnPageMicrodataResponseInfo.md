**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageMicrodataResponseInfo

# Class: OnPageMicrodataResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageMicrodataResponseInfo`](../interfaces/IOnPageMicrodataResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageMicrodataResponseInfo(data)

> **new OnPageMicrodataResponseInfo**(`data`?): [`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)

#### Parameters

• **data?**: [`IOnPageMicrodataResponseInfo`](../interfaces/IOnPageMicrodataResponseInfo.md)

#### Returns

[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:162577

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IOnPageMicrodataResponseInfo`](../interfaces/IOnPageMicrodataResponseInfo.md).[`cost`](../interfaces/IOnPageMicrodataResponseInfo.md#cost)

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

[`IOnPageMicrodataResponseInfo`](../interfaces/IOnPageMicrodataResponseInfo.md).[`status_code`](../interfaces/IOnPageMicrodataResponseInfo.md#status_code)

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

[`IOnPageMicrodataResponseInfo`](../interfaces/IOnPageMicrodataResponseInfo.md).[`status_message`](../interfaces/IOnPageMicrodataResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23645

***

### tasks?

> **`optional`** **tasks**: [`OnPageMicrodataTaskInfo`](OnPageMicrodataTaskInfo.md)[]

array of tasks

#### Implementation of

[`IOnPageMicrodataResponseInfo`](../interfaces/IOnPageMicrodataResponseInfo.md).[`tasks`](../interfaces/IOnPageMicrodataResponseInfo.md#tasks)

#### Source

main.ts:162573

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IOnPageMicrodataResponseInfo`](../interfaces/IOnPageMicrodataResponseInfo.md).[`tasks_count`](../interfaces/IOnPageMicrodataResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23651

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageMicrodataResponseInfo`](../interfaces/IOnPageMicrodataResponseInfo.md).[`tasks_error`](../interfaces/IOnPageMicrodataResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23653

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IOnPageMicrodataResponseInfo`](../interfaces/IOnPageMicrodataResponseInfo.md).[`time`](../interfaces/IOnPageMicrodataResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23647

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IOnPageMicrodataResponseInfo`](../interfaces/IOnPageMicrodataResponseInfo.md).[`version`](../interfaces/IOnPageMicrodataResponseInfo.md#version)

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

main.ts:162581

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

main.ts:162603

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:162596
