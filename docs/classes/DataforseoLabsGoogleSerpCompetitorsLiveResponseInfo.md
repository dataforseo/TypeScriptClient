[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo

# Class: DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo

Defined in: main.ts:102431

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo()

> **new DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md)

Defined in: main.ts:102437

#### Parameters

##### data?

[`IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo`](DataforseoLabsGoogleSerpCompetitorsLiveTaskInfo.md)[]

Defined in: main.ts:102433

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:102441

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

Defined in: main.ts:102463

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md)

Defined in: main.ts:102456

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
