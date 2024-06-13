**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsErrorsResponseInfo

# Class: DataforseoLabsErrorsResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsErrorsResponseInfo`](../interfaces/IDataforseoLabsErrorsResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsErrorsResponseInfo(data)

> **new DataforseoLabsErrorsResponseInfo**(`data`?): [`DataforseoLabsErrorsResponseInfo`](DataforseoLabsErrorsResponseInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsErrorsResponseInfo`](../interfaces/IDataforseoLabsErrorsResponseInfo.md)

#### Returns

[`DataforseoLabsErrorsResponseInfo`](DataforseoLabsErrorsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:81093

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsErrorsResponseInfo`](../interfaces/IDataforseoLabsErrorsResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsErrorsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23214

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsErrorsResponseInfo`](../interfaces/IDataforseoLabsErrorsResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsErrorsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23207

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsErrorsResponseInfo`](../interfaces/IDataforseoLabsErrorsResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsErrorsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23210

***

### tasks?

> **`optional`** **tasks**: [`DataforseoLabsErrorsTaskInfo`](DataforseoLabsErrorsTaskInfo.md)[]

array of tasks

#### Implementation of

[`IDataforseoLabsErrorsResponseInfo`](../interfaces/IDataforseoLabsErrorsResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsErrorsResponseInfo.md#tasks)

#### Source

main.ts:81089

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsErrorsResponseInfo`](../interfaces/IDataforseoLabsErrorsResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsErrorsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23216

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsErrorsResponseInfo`](../interfaces/IDataforseoLabsErrorsResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsErrorsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23218

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IDataforseoLabsErrorsResponseInfo`](../interfaces/IDataforseoLabsErrorsResponseInfo.md).[`time`](../interfaces/IDataforseoLabsErrorsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23212

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IDataforseoLabsErrorsResponseInfo`](../interfaces/IDataforseoLabsErrorsResponseInfo.md).[`version`](../interfaces/IDataforseoLabsErrorsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23204

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

main.ts:81097

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

main.ts:81119

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsErrorsResponseInfo`](DataforseoLabsErrorsResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsErrorsResponseInfo`](DataforseoLabsErrorsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:81112
