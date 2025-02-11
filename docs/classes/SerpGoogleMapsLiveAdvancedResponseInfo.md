[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleMapsLiveAdvancedResponseInfo

# Class: SerpGoogleMapsLiveAdvancedResponseInfo

Defined in: main.ts:42816

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleMapsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleMapsLiveAdvancedResponseInfo()

> **new SerpGoogleMapsLiveAdvancedResponseInfo**(`data`?): [`SerpGoogleMapsLiveAdvancedResponseInfo`](SerpGoogleMapsLiveAdvancedResponseInfo.md)

Defined in: main.ts:42822

#### Parameters

##### data?

[`ISerpGoogleMapsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md)

#### Returns

[`SerpGoogleMapsLiveAdvancedResponseInfo`](SerpGoogleMapsLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleMapsLiveAdvancedTaskInfo`](SerpGoogleMapsLiveAdvancedTaskInfo.md)[]

Defined in: main.ts:42818

array of tasks

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md).[`time`](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md).[`version`](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:42826

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

Defined in: main.ts:42848

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleMapsLiveAdvancedResponseInfo`](SerpGoogleMapsLiveAdvancedResponseInfo.md)

Defined in: main.ts:42841

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleMapsLiveAdvancedResponseInfo`](SerpGoogleMapsLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
