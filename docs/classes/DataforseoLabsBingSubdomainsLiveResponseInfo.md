**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsBingSubdomainsLiveResponseInfo

# Class: DataforseoLabsBingSubdomainsLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsBingSubdomainsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingSubdomainsLiveResponseInfo(data)

> **new DataforseoLabsBingSubdomainsLiveResponseInfo**(`data`?): [`DataforseoLabsBingSubdomainsLiveResponseInfo`](DataforseoLabsBingSubdomainsLiveResponseInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingSubdomainsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResponseInfo.md)

#### Returns

[`DataforseoLabsBingSubdomainsLiveResponseInfo`](DataforseoLabsBingSubdomainsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:111264

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsBingSubdomainsLiveResponseInfo.md#cost)

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

[`IDataforseoLabsBingSubdomainsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsBingSubdomainsLiveResponseInfo.md#status_code)

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

[`IDataforseoLabsBingSubdomainsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsBingSubdomainsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23317

***

### tasks?

> **`optional`** **tasks**: [`DataforseoLabsBingSubdomainsLiveTaskInfo`](DataforseoLabsBingSubdomainsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsBingSubdomainsLiveResponseInfo.md#tasks)

#### Source

main.ts:111260

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsBingSubdomainsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23323

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsBingSubdomainsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23325

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsBingSubdomainsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23319

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsBingSubdomainsLiveResponseInfo.md#version)

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

main.ts:111268

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

main.ts:111290

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsBingSubdomainsLiveResponseInfo`](DataforseoLabsBingSubdomainsLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingSubdomainsLiveResponseInfo`](DataforseoLabsBingSubdomainsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:111283
