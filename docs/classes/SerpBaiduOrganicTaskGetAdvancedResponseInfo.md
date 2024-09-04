[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpBaiduOrganicTaskGetAdvancedResponseInfo

# Class: SerpBaiduOrganicTaskGetAdvancedResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduOrganicTaskGetAdvancedResponseInfo()

> **new SerpBaiduOrganicTaskGetAdvancedResponseInfo**(`data`?): [`SerpBaiduOrganicTaskGetAdvancedResponseInfo`](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)

#### Parameters

• **data?**: [`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md)

#### Returns

[`SerpBaiduOrganicTaskGetAdvancedResponseInfo`](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:72210

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:23831

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:23824

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23827

***

### tasks?

> `optional` **tasks**: [`SerpBaiduOrganicTaskGetAdvancedTaskInfo`](SerpBaiduOrganicTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:72206

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23833

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23835

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:23829

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:23821

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Defined in

main.ts:72214

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Defined in

main.ts:72236

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBaiduOrganicTaskGetAdvancedResponseInfo`](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBaiduOrganicTaskGetAdvancedResponseInfo`](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:72229
