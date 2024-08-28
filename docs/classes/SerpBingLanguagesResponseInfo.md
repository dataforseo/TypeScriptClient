[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / SerpBingLanguagesResponseInfo

# Class: SerpBingLanguagesResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBingLanguagesResponseInfo`](../interfaces/ISerpBingLanguagesResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingLanguagesResponseInfo()

> **new SerpBingLanguagesResponseInfo**(`data`?): [`SerpBingLanguagesResponseInfo`](SerpBingLanguagesResponseInfo.md)

#### Parameters

• **data?**: [`ISerpBingLanguagesResponseInfo`](../interfaces/ISerpBingLanguagesResponseInfo.md)

#### Returns

[`SerpBingLanguagesResponseInfo`](SerpBingLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:58494

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpBingLanguagesResponseInfo`](../interfaces/ISerpBingLanguagesResponseInfo.md).[`cost`](../interfaces/ISerpBingLanguagesResponseInfo.md#cost)

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

[`ISerpBingLanguagesResponseInfo`](../interfaces/ISerpBingLanguagesResponseInfo.md).[`status_code`](../interfaces/ISerpBingLanguagesResponseInfo.md#status_code)

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

[`ISerpBingLanguagesResponseInfo`](../interfaces/ISerpBingLanguagesResponseInfo.md).[`status_message`](../interfaces/ISerpBingLanguagesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23827

***

### tasks?

> `optional` **tasks**: [`SerpBingLanguagesTaskInfo`](SerpBingLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpBingLanguagesResponseInfo`](../interfaces/ISerpBingLanguagesResponseInfo.md).[`tasks`](../interfaces/ISerpBingLanguagesResponseInfo.md#tasks)

#### Defined in

main.ts:58490

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpBingLanguagesResponseInfo`](../interfaces/ISerpBingLanguagesResponseInfo.md).[`tasks_count`](../interfaces/ISerpBingLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23833

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBingLanguagesResponseInfo`](../interfaces/ISerpBingLanguagesResponseInfo.md).[`tasks_error`](../interfaces/ISerpBingLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23835

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpBingLanguagesResponseInfo`](../interfaces/ISerpBingLanguagesResponseInfo.md).[`time`](../interfaces/ISerpBingLanguagesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:23829

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`ISerpBingLanguagesResponseInfo`](../interfaces/ISerpBingLanguagesResponseInfo.md).[`version`](../interfaces/ISerpBingLanguagesResponseInfo.md#version)

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

main.ts:58498

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

main.ts:58520

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingLanguagesResponseInfo`](SerpBingLanguagesResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingLanguagesResponseInfo`](SerpBingLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:58513
