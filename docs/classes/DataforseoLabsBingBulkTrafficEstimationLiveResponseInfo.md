[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo

# Class: DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo

Defined in: main.ts:116045

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo()

> **new DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo**(`data`?): [`DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md)

Defined in: main.ts:116051

#### Parameters

##### data?

[`IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md)

#### Returns

[`DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo`](DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo.md)[]

Defined in: main.ts:116047

array of tasks

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:116055

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

Defined in: main.ts:116077

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md)

Defined in: main.ts:116070

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
