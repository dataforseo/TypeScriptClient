[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo

# Class: KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo()

> **new KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo**(`data`?): [`KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)

#### Parameters

##### data?

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:143553

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#cost)

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

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#status_code)

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

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:25213

***

### tasks?

> `optional` **tasks**: [`KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md)[]

array of tasks

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#tasks)

#### Defined in

main.ts:143549

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:25219

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:25221

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:25215

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#version)

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

main.ts:143557

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

main.ts:143579

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:143572
