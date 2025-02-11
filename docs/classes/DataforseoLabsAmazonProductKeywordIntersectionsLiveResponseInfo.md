[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo

# Class: DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo

Defined in: main.ts:115301

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo()

> **new DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo**(`data`?): [`DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md)

Defined in: main.ts:115307

#### Parameters

##### data?

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md)

#### Returns

[`DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md)[]

Defined in: main.ts:115303

array of tasks

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:115311

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

Defined in: main.ts:115333

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md)

Defined in: main.ts:115326

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
