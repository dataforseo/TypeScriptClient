**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpBingLocalPackLiveRegularResponseInfo

# Class: SerpBingLocalPackLiveRegularResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBingLocalPackLiveRegularResponseInfo`](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocalPackLiveRegularResponseInfo(data)

> **new SerpBingLocalPackLiveRegularResponseInfo**(`data`?): [`SerpBingLocalPackLiveRegularResponseInfo`](SerpBingLocalPackLiveRegularResponseInfo.md)

#### Parameters

• **data?**: [`ISerpBingLocalPackLiveRegularResponseInfo`](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md)

#### Returns

[`SerpBingLocalPackLiveRegularResponseInfo`](SerpBingLocalPackLiveRegularResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:61236

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpBingLocalPackLiveRegularResponseInfo`](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md).[`cost`](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md#cost)

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

[`ISerpBingLocalPackLiveRegularResponseInfo`](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md).[`status_code`](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md#status_code)

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

[`ISerpBingLocalPackLiveRegularResponseInfo`](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md).[`status_message`](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23645

***

### tasks?

> **`optional`** **tasks**: [`SerpBingLocalPackLiveRegularTaskInfo`](SerpBingLocalPackLiveRegularTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpBingLocalPackLiveRegularResponseInfo`](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md).[`tasks`](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md#tasks)

#### Source

main.ts:61232

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpBingLocalPackLiveRegularResponseInfo`](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md).[`tasks_count`](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23651

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBingLocalPackLiveRegularResponseInfo`](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md).[`tasks_error`](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23653

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpBingLocalPackLiveRegularResponseInfo`](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md).[`time`](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23647

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpBingLocalPackLiveRegularResponseInfo`](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md).[`version`](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md#version)

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

main.ts:61240

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

main.ts:61262

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpBingLocalPackLiveRegularResponseInfo`](SerpBingLocalPackLiveRegularResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingLocalPackLiveRegularResponseInfo`](SerpBingLocalPackLiveRegularResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:61255
