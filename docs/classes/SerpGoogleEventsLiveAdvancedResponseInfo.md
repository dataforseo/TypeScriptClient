[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleEventsLiveAdvancedResponseInfo

# Class: SerpGoogleEventsLiveAdvancedResponseInfo

Defined in: main.ts:49810

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleEventsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleEventsLiveAdvancedResponseInfo()

> **new SerpGoogleEventsLiveAdvancedResponseInfo**(`data`?): [`SerpGoogleEventsLiveAdvancedResponseInfo`](SerpGoogleEventsLiveAdvancedResponseInfo.md)

Defined in: main.ts:49816

#### Parameters

##### data?

[`ISerpGoogleEventsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md)

#### Returns

[`SerpGoogleEventsLiveAdvancedResponseInfo`](SerpGoogleEventsLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleEventsLiveAdvancedTaskInfo`](SerpGoogleEventsLiveAdvancedTaskInfo.md)[]

Defined in: main.ts:49812

array of tasks

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md).[`time`](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md).[`version`](../interfaces/ISerpGoogleEventsLiveAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:49820

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

Defined in: main.ts:49842

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleEventsLiveAdvancedResponseInfo`](SerpGoogleEventsLiveAdvancedResponseInfo.md)

Defined in: main.ts:49835

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleEventsLiveAdvancedResponseInfo`](SerpGoogleEventsLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
