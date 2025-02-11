[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleDomainIntersectionLiveResponseInfo

# Class: DataforseoLabsGoogleDomainIntersectionLiveResponseInfo

Defined in: main.ts:103811

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleDomainIntersectionLiveResponseInfo()

> **new DataforseoLabsGoogleDomainIntersectionLiveResponseInfo**(`data`?): [`DataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md)

Defined in: main.ts:103817

#### Parameters

##### data?

[`IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleDomainIntersectionLiveTaskInfo`](DataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md)[]

Defined in: main.ts:103813

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:103821

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

Defined in: main.ts:103843

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md)

Defined in: main.ts:103836

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
