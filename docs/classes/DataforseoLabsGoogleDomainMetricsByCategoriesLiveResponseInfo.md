[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo

# Class: DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo

Defined in: main.ts:99531

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo()

> **new DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md)

Defined in: main.ts:99537

#### Parameters

##### data?

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md)[]

Defined in: main.ts:99533

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:99541

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

Defined in: main.ts:99563

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md)

Defined in: main.ts:99556

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
