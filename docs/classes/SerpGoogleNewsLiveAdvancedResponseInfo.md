[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleNewsLiveAdvancedResponseInfo

# Class: SerpGoogleNewsLiveAdvancedResponseInfo

Defined in: main.ts:47362

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleNewsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleNewsLiveAdvancedResponseInfo()

> **new SerpGoogleNewsLiveAdvancedResponseInfo**(`data`?): [`SerpGoogleNewsLiveAdvancedResponseInfo`](SerpGoogleNewsLiveAdvancedResponseInfo.md)

Defined in: main.ts:47368

#### Parameters

##### data?

[`ISerpGoogleNewsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md)

#### Returns

[`SerpGoogleNewsLiveAdvancedResponseInfo`](SerpGoogleNewsLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleNewsLiveAdvancedTaskInfo`](SerpGoogleNewsLiveAdvancedTaskInfo.md)[]

Defined in: main.ts:47364

array of tasks

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md).[`time`](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md).[`version`](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:47372

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

Defined in: main.ts:47394

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleNewsLiveAdvancedResponseInfo`](SerpGoogleNewsLiveAdvancedResponseInfo.md)

Defined in: main.ts:47387

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleNewsLiveAdvancedResponseInfo`](SerpGoogleNewsLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
