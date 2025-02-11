[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonProductRankOverviewLiveResponseInfo

# Class: DataforseoLabsAmazonProductRankOverviewLiveResponseInfo

Defined in: main.ts:114185

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonProductRankOverviewLiveResponseInfo()

> **new DataforseoLabsAmazonProductRankOverviewLiveResponseInfo**(`data`?): [`DataforseoLabsAmazonProductRankOverviewLiveResponseInfo`](DataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md)

Defined in: main.ts:114191

#### Parameters

##### data?

[`IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md)

#### Returns

[`DataforseoLabsAmazonProductRankOverviewLiveResponseInfo`](DataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsAmazonProductRankOverviewLiveTaskInfo`](DataforseoLabsAmazonProductRankOverviewLiveTaskInfo.md)[]

Defined in: main.ts:114187

array of tasks

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:114195

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:114217

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonProductRankOverviewLiveResponseInfo`](DataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md)

Defined in: main.ts:114210

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAmazonProductRankOverviewLiveResponseInfo`](DataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
