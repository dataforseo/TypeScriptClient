[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingDomainIntersectionLiveResponseInfo

# Class: DataforseoLabsBingDomainIntersectionLiveResponseInfo

Defined in: main.ts:117067

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsBingDomainIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingDomainIntersectionLiveResponseInfo()

> **new DataforseoLabsBingDomainIntersectionLiveResponseInfo**(`data`?): [`DataforseoLabsBingDomainIntersectionLiveResponseInfo`](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md)

Defined in: main.ts:117073

#### Parameters

##### data?

[`IDataforseoLabsBingDomainIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md)

#### Returns

[`DataforseoLabsBingDomainIntersectionLiveResponseInfo`](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsBingDomainIntersectionLiveTaskInfo`](DataforseoLabsBingDomainIntersectionLiveTaskInfo.md)[]

Defined in: main.ts:117069

array of tasks

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:117077

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

Defined in: main.ts:117099

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingDomainIntersectionLiveResponseInfo`](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md)

Defined in: main.ts:117092

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsBingDomainIntersectionLiveResponseInfo`](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
