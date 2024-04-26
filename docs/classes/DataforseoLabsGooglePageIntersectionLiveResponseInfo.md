**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGooglePageIntersectionLiveResponseInfo

# Class: DataforseoLabsGooglePageIntersectionLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGooglePageIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGooglePageIntersectionLiveResponseInfo(data)

> **new DataforseoLabsGooglePageIntersectionLiveResponseInfo**(`data`?): [`DataforseoLabsGooglePageIntersectionLiveResponseInfo`](DataforseoLabsGooglePageIntersectionLiveResponseInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGooglePageIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGooglePageIntersectionLiveResponseInfo`](DataforseoLabsGooglePageIntersectionLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:99798

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23157

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23150

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23153

***

### tasks?

> **`optional`** **tasks**: [`DataforseoLabsGooglePageIntersectionLiveTaskInfo`](DataforseoLabsGooglePageIntersectionLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResponseInfo.md#tasks)

#### Source

main.ts:99794

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23159

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23161

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23155

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23147

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

main.ts:99802

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

main.ts:99824

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGooglePageIntersectionLiveResponseInfo`](DataforseoLabsGooglePageIntersectionLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGooglePageIntersectionLiveResponseInfo`](DataforseoLabsGooglePageIntersectionLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:99817
