**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppendixErrorsResponseInfo

# Class: AppendixErrorsResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppendixErrorsResponseInfo`](../interfaces/IAppendixErrorsResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppendixErrorsResponseInfo(data)

> **new AppendixErrorsResponseInfo**(`data`?): [`AppendixErrorsResponseInfo`](AppendixErrorsResponseInfo.md)

#### Parameters

• **data?**: [`IAppendixErrorsResponseInfo`](../interfaces/IAppendixErrorsResponseInfo.md)

#### Returns

[`AppendixErrorsResponseInfo`](AppendixErrorsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:224393

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IAppendixErrorsResponseInfo`](../interfaces/IAppendixErrorsResponseInfo.md).[`cost`](../interfaces/IAppendixErrorsResponseInfo.md#cost)

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

[`IAppendixErrorsResponseInfo`](../interfaces/IAppendixErrorsResponseInfo.md).[`status_code`](../interfaces/IAppendixErrorsResponseInfo.md#status_code)

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

[`IAppendixErrorsResponseInfo`](../interfaces/IAppendixErrorsResponseInfo.md).[`status_message`](../interfaces/IAppendixErrorsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23645

***

### tasks?

> **`optional`** **tasks**: [`AppendixErrorsTaskInfo`](AppendixErrorsTaskInfo.md)[]

array of tasks

#### Implementation of

[`IAppendixErrorsResponseInfo`](../interfaces/IAppendixErrorsResponseInfo.md).[`tasks`](../interfaces/IAppendixErrorsResponseInfo.md#tasks)

#### Source

main.ts:224389

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IAppendixErrorsResponseInfo`](../interfaces/IAppendixErrorsResponseInfo.md).[`tasks_count`](../interfaces/IAppendixErrorsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23651

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppendixErrorsResponseInfo`](../interfaces/IAppendixErrorsResponseInfo.md).[`tasks_error`](../interfaces/IAppendixErrorsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23653

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IAppendixErrorsResponseInfo`](../interfaces/IAppendixErrorsResponseInfo.md).[`time`](../interfaces/IAppendixErrorsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23647

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IAppendixErrorsResponseInfo`](../interfaces/IAppendixErrorsResponseInfo.md).[`version`](../interfaces/IAppendixErrorsResponseInfo.md#version)

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

main.ts:224397

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

main.ts:224419

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppendixErrorsResponseInfo`](AppendixErrorsResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppendixErrorsResponseInfo`](AppendixErrorsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:224412
