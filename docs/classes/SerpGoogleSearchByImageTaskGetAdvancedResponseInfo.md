[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleSearchByImageTaskGetAdvancedResponseInfo

# Class: SerpGoogleSearchByImageTaskGetAdvancedResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleSearchByImageTaskGetAdvancedResponseInfo()

> **new SerpGoogleSearchByImageTaskGetAdvancedResponseInfo**(`data`?): [`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)

#### Parameters

##### data?

[`ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)

#### Returns

[`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:53613

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#cost)

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

[`ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#status_code)

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

[`ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:25213

***

### tasks?

> `optional` **tasks**: [`SerpGoogleSearchByImageTaskGetAdvancedTaskInfo`](SerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:53609

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:25219

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:25221

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:25215

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#version)

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

main.ts:53617

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

main.ts:53639

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:53632
