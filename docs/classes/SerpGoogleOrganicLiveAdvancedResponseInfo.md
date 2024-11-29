[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleOrganicLiveAdvancedResponseInfo

# Class: SerpGoogleOrganicLiveAdvancedResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicLiveAdvancedResponseInfo()

> **new SerpGoogleOrganicLiveAdvancedResponseInfo**(`data`?): [`SerpGoogleOrganicLiveAdvancedResponseInfo`](SerpGoogleOrganicLiveAdvancedResponseInfo.md)

#### Parameters

##### data?

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md)

#### Returns

[`SerpGoogleOrganicLiveAdvancedResponseInfo`](SerpGoogleOrganicLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:39946

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:25217

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:25210

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:25213

***

### tasks?

> `optional` **tasks**: [`SerpGoogleOrganicLiveAdvancedTaskInfo`](SerpGoogleOrganicLiveAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:39942

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:25219

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:25221

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[`time`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:25215

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[`version`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:25207

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Defined in

main.ts:39950

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Defined in

main.ts:39972

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleOrganicLiveAdvancedResponseInfo`](SerpGoogleOrganicLiveAdvancedResponseInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleOrganicLiveAdvancedResponseInfo`](SerpGoogleOrganicLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:39965
