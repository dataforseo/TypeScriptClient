[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo

# Class: DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo

Defined in: main.ts:111843

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo()

> **new DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md)

Defined in: main.ts:111849

#### Parameters

##### data?

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md)[]

Defined in: main.ts:111845

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:111853

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

Defined in: main.ts:111875

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md)

Defined in: main.ts:111868

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
