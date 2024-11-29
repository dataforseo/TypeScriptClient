[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo

# Class: DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo()

> **new DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md)

#### Parameters

##### data?

[`IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:121161

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:25217

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:25210

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:25213

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo`](DataforseoLabsGoogleBulkAppMetricsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#tasks)

#### Defined in

main.ts:121157

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:25219

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:25221

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:25215

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:25207

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Defined in

main.ts:121165

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Defined in

main.ts:121187

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:121180
