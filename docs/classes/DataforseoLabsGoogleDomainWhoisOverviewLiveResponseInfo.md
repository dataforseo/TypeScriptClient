[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo

# Class: DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo

Defined in: main.ts:100585

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo()

> **new DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md)

Defined in: main.ts:100591

#### Parameters

##### data?

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md)[]

Defined in: main.ts:100587

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:100595

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

Defined in: main.ts:100617

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md)

Defined in: main.ts:100610

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
