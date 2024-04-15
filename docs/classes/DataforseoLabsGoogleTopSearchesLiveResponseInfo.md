**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleTopSearchesLiveResponseInfo

# Class: DataforseoLabsGoogleTopSearchesLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleTopSearchesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleTopSearchesLiveResponseInfo(data)

> **new DataforseoLabsGoogleTopSearchesLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleTopSearchesLiveResponseInfo`](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleTopSearchesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleTopSearchesLiveResponseInfo`](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:87826

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23029

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23022

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23025

***

### tasks?

> **`optional`** **tasks**: [`DataforseoLabsGoogleTopSearchesLiveTaskInfo`](DataforseoLabsGoogleTopSearchesLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md#tasks)

#### Source

main.ts:87822

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23031

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23033

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23027

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleTopSearchesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23019

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

main.ts:87830

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

main.ts:87852

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleTopSearchesLiveResponseInfo`](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleTopSearchesLiveResponseInfo`](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:87845
