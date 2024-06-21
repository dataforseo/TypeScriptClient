**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageIdListResponseInfo

# Class: OnPageIdListResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageIdListResponseInfo`](../interfaces/IOnPageIdListResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageIdListResponseInfo(data)

> **new OnPageIdListResponseInfo**(`data`?): [`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)

#### Parameters

• **data?**: [`IOnPageIdListResponseInfo`](../interfaces/IOnPageIdListResponseInfo.md)

#### Returns

[`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:150180

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IOnPageIdListResponseInfo`](../interfaces/IOnPageIdListResponseInfo.md).[`cost`](../interfaces/IOnPageIdListResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23252

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IOnPageIdListResponseInfo`](../interfaces/IOnPageIdListResponseInfo.md).[`status_code`](../interfaces/IOnPageIdListResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23245

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageIdListResponseInfo`](../interfaces/IOnPageIdListResponseInfo.md).[`status_message`](../interfaces/IOnPageIdListResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23248

***

### tasks?

> **`optional`** **tasks**: [`OnPageIdListTaskInfo`](OnPageIdListTaskInfo.md)[]

array of tasks

#### Implementation of

[`IOnPageIdListResponseInfo`](../interfaces/IOnPageIdListResponseInfo.md).[`tasks`](../interfaces/IOnPageIdListResponseInfo.md#tasks)

#### Source

main.ts:150176

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IOnPageIdListResponseInfo`](../interfaces/IOnPageIdListResponseInfo.md).[`tasks_count`](../interfaces/IOnPageIdListResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23254

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageIdListResponseInfo`](../interfaces/IOnPageIdListResponseInfo.md).[`tasks_error`](../interfaces/IOnPageIdListResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23256

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IOnPageIdListResponseInfo`](../interfaces/IOnPageIdListResponseInfo.md).[`time`](../interfaces/IOnPageIdListResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23250

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IOnPageIdListResponseInfo`](../interfaces/IOnPageIdListResponseInfo.md).[`version`](../interfaces/IOnPageIdListResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23242

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

main.ts:150184

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

main.ts:150206

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:150199
