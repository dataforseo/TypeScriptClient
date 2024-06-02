**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageDuplicateContentResponseInfo

# Class: OnPageDuplicateContentResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageDuplicateContentResponseInfo`](../interfaces/IOnPageDuplicateContentResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageDuplicateContentResponseInfo(data)

> **new OnPageDuplicateContentResponseInfo**(`data`?): [`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)

#### Parameters

• **data?**: [`IOnPageDuplicateContentResponseInfo`](../interfaces/IOnPageDuplicateContentResponseInfo.md)

#### Returns

[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:155118

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IOnPageDuplicateContentResponseInfo`](../interfaces/IOnPageDuplicateContentResponseInfo.md).[`cost`](../interfaces/IOnPageDuplicateContentResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23060

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IOnPageDuplicateContentResponseInfo`](../interfaces/IOnPageDuplicateContentResponseInfo.md).[`status_code`](../interfaces/IOnPageDuplicateContentResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23053

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageDuplicateContentResponseInfo`](../interfaces/IOnPageDuplicateContentResponseInfo.md).[`status_message`](../interfaces/IOnPageDuplicateContentResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23056

***

### tasks?

> **`optional`** **tasks**: [`OnPageDuplicateContentTaskInfo`](OnPageDuplicateContentTaskInfo.md)[]

array of tasks

#### Implementation of

[`IOnPageDuplicateContentResponseInfo`](../interfaces/IOnPageDuplicateContentResponseInfo.md).[`tasks`](../interfaces/IOnPageDuplicateContentResponseInfo.md#tasks)

#### Source

main.ts:155114

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IOnPageDuplicateContentResponseInfo`](../interfaces/IOnPageDuplicateContentResponseInfo.md).[`tasks_count`](../interfaces/IOnPageDuplicateContentResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23062

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageDuplicateContentResponseInfo`](../interfaces/IOnPageDuplicateContentResponseInfo.md).[`tasks_error`](../interfaces/IOnPageDuplicateContentResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23064

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IOnPageDuplicateContentResponseInfo`](../interfaces/IOnPageDuplicateContentResponseInfo.md).[`time`](../interfaces/IOnPageDuplicateContentResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23058

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IOnPageDuplicateContentResponseInfo`](../interfaces/IOnPageDuplicateContentResponseInfo.md).[`version`](../interfaces/IOnPageDuplicateContentResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23050

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

main.ts:155122

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

main.ts:155144

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:155137
