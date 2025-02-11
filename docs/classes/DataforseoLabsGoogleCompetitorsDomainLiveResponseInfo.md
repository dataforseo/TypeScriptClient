[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo

# Class: DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo

Defined in: main.ts:103193

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo()

> **new DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md)

Defined in: main.ts:103199

#### Parameters

##### data?

[`IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo`](DataforseoLabsGoogleCompetitorsDomainLiveTaskInfo.md)[]

Defined in: main.ts:103195

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:103203

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

Defined in: main.ts:103225

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md)

Defined in: main.ts:103218

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
