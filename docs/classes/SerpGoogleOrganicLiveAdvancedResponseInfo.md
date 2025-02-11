[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleOrganicLiveAdvancedResponseInfo

# Class: SerpGoogleOrganicLiveAdvancedResponseInfo

Defined in: main.ts:39956

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicLiveAdvancedResponseInfo()

> **new SerpGoogleOrganicLiveAdvancedResponseInfo**(`data`?): [`SerpGoogleOrganicLiveAdvancedResponseInfo`](SerpGoogleOrganicLiveAdvancedResponseInfo.md)

Defined in: main.ts:39962

#### Parameters

##### data?

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md)

#### Returns

[`SerpGoogleOrganicLiveAdvancedResponseInfo`](SerpGoogleOrganicLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleOrganicLiveAdvancedTaskInfo`](SerpGoogleOrganicLiveAdvancedTaskInfo.md)[]

Defined in: main.ts:39958

array of tasks

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[`time`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[`version`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:39966

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

Defined in: main.ts:39988

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleOrganicLiveAdvancedResponseInfo`](SerpGoogleOrganicLiveAdvancedResponseInfo.md)

Defined in: main.ts:39981

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleOrganicLiveAdvancedResponseInfo`](SerpGoogleOrganicLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
