**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonProductCompetitorsLiveResponseInfo

# Class: DataforseoLabsAmazonProductCompetitorsLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonProductCompetitorsLiveResponseInfo(data)

> **new DataforseoLabsAmazonProductCompetitorsLiveResponseInfo**(`data`?): [`DataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md)

#### Returns

[`DataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:106153

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#cost)

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

[`IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#status_code)

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

[`IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23248

***

### tasks?

> **`optional`** **tasks**: [`DataforseoLabsAmazonProductCompetitorsLiveTaskInfo`](DataforseoLabsAmazonProductCompetitorsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#tasks)

#### Source

main.ts:106149

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23254

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23256

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23250

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md#version)

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

main.ts:106157

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

main.ts:106179

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:106172
