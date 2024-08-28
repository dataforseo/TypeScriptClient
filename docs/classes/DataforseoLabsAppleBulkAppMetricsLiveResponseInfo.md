[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DataforseoLabsAppleBulkAppMetricsLiveResponseInfo

# Class: DataforseoLabsAppleBulkAppMetricsLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAppleBulkAppMetricsLiveResponseInfo()

> **new DataforseoLabsAppleBulkAppMetricsLiveResponseInfo**(`data`?): [`DataforseoLabsAppleBulkAppMetricsLiveResponseInfo`](DataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md)

#### Returns

[`DataforseoLabsAppleBulkAppMetricsLiveResponseInfo`](DataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:116966

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:23831

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:23824

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23827

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsAppleBulkAppMetricsLiveTaskInfo`](DataforseoLabsAppleBulkAppMetricsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md#tasks)

#### Defined in

main.ts:116962

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23833

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23835

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:23829

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:23821

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Defined in

main.ts:116970

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Defined in

main.ts:116992

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAppleBulkAppMetricsLiveResponseInfo`](DataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAppleBulkAppMetricsLiveResponseInfo`](DataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:116985
