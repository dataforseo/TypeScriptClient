[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingOrganicLiveAdvancedResponseInfo

# Class: SerpBingOrganicLiveAdvancedResponseInfo

Defined in: main.ts:66144

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBingOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicLiveAdvancedResponseInfo()

> **new SerpBingOrganicLiveAdvancedResponseInfo**(`data`?): [`SerpBingOrganicLiveAdvancedResponseInfo`](SerpBingOrganicLiveAdvancedResponseInfo.md)

Defined in: main.ts:66150

#### Parameters

##### data?

[`ISerpBingOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md)

#### Returns

[`SerpBingOrganicLiveAdvancedResponseInfo`](SerpBingOrganicLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpBingOrganicLiveAdvancedTaskInfo`](SerpBingOrganicLiveAdvancedTaskInfo.md)[]

Defined in: main.ts:66146

array of tasks

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md).[`time`](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md).[`version`](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:66154

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

Defined in: main.ts:66176

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingOrganicLiveAdvancedResponseInfo`](SerpBingOrganicLiveAdvancedResponseInfo.md)

Defined in: main.ts:66169

#### Parameters

##### data

`any`

#### Returns

[`SerpBingOrganicLiveAdvancedResponseInfo`](SerpBingOrganicLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
