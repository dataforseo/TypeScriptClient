**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataTripadvisorReviewsTaskGetTaskInfo

# Class: BusinessDataTripadvisorReviewsTaskGetTaskInfo

## Extends

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

## Implements

- [`IBusinessDataTripadvisorReviewsTaskGetTaskInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorReviewsTaskGetTaskInfo(data)

> **new BusinessDataTripadvisorReviewsTaskGetTaskInfo**(`data`?): [`BusinessDataTripadvisorReviewsTaskGetTaskInfo`](BusinessDataTripadvisorReviewsTaskGetTaskInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTripadvisorReviewsTaskGetTaskInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md)

#### Returns

[`BusinessDataTripadvisorReviewsTaskGetTaskInfo`](BusinessDataTripadvisorReviewsTaskGetTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`constructor`](BaseResponseTaskInfo.md#constructors)

#### Source

main.ts:214415

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetTaskInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md).[`cost`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md#cost)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`cost`](BaseResponseTaskInfo.md#cost)

#### Source

main.ts:23344

***

### data?

> **`optional`** **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

 \[`key`: `string`\]: `any`

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetTaskInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md).[`data`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md#data)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`data`](BaseResponseTaskInfo.md#data)

#### Source

main.ts:23350

***

### id?

> **`optional`** **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetTaskInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md).[`id`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md#id)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`id`](BaseResponseTaskInfo.md#id)

#### Source

main.ts:23333

***

### path?

> **`optional`** **path**: `string`[]

URL path

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetTaskInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md).[`path`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md#path)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`path`](BaseResponseTaskInfo.md#path)

#### Source

main.ts:23348

***

### result?

> **`optional`** **result**: [`BusinessDataTripadvisorReviewsTaskGetResultInfo`](BusinessDataTripadvisorReviewsTaskGetResultInfo.md)[]

array of results

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetTaskInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md).[`result`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md#result)

#### Source

main.ts:214411

***

### result\_count?

> **`optional`** **result\_count**: `number`

number of elements in the result array

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetTaskInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md).[`result_count`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md#result_count)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`result_count`](BaseResponseTaskInfo.md#result_count)

#### Source

main.ts:23346

***

### status\_code?

> **`optional`** **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetTaskInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md).[`status_code`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md#status_code)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`status_code`](BaseResponseTaskInfo.md#status_code)

#### Source

main.ts:23337

***

### status\_message?

> **`optional`** **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetTaskInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md).[`status_message`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md#status_message)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`status_message`](BaseResponseTaskInfo.md#status_message)

#### Source

main.ts:23340

***

### time?

> **`optional`** **time**: `string`

execution time, seconds

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetTaskInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md).[`time`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetTaskInfo.md#time)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`time`](BaseResponseTaskInfo.md#time)

#### Source

main.ts:23342

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`init`](BaseResponseTaskInfo.md#init)

#### Source

main.ts:214419

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`toJSON`](BaseResponseTaskInfo.md#tojson)

#### Source

main.ts:214441

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataTripadvisorReviewsTaskGetTaskInfo`](BusinessDataTripadvisorReviewsTaskGetTaskInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTripadvisorReviewsTaskGetTaskInfo`](BusinessDataTripadvisorReviewsTaskGetTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`fromJS`](BaseResponseTaskInfo.md#fromjs)

#### Source

main.ts:214434
