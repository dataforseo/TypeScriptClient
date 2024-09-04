[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpYoutubeLanguagesResponseInfo

# Class: SerpYoutubeLanguagesResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYoutubeLanguagesResponseInfo`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeLanguagesResponseInfo()

> **new SerpYoutubeLanguagesResponseInfo**(`data`?): [`SerpYoutubeLanguagesResponseInfo`](SerpYoutubeLanguagesResponseInfo.md)

#### Parameters

• **data?**: [`ISerpYoutubeLanguagesResponseInfo`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md)

#### Returns

[`SerpYoutubeLanguagesResponseInfo`](SerpYoutubeLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:62548

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpYoutubeLanguagesResponseInfo`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md).[`cost`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md#cost)

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

[`ISerpYoutubeLanguagesResponseInfo`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md).[`status_code`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md#status_code)

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

[`ISerpYoutubeLanguagesResponseInfo`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md).[`status_message`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23827

***

### tasks?

> `optional` **tasks**: [`SerpYoutubeLanguagesTaskInfo`](SerpYoutubeLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpYoutubeLanguagesResponseInfo`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md).[`tasks`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md#tasks)

#### Defined in

main.ts:62544

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpYoutubeLanguagesResponseInfo`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md).[`tasks_count`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23833

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYoutubeLanguagesResponseInfo`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md).[`tasks_error`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23835

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpYoutubeLanguagesResponseInfo`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md).[`time`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:23829

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`ISerpYoutubeLanguagesResponseInfo`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md).[`version`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md#version)

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

main.ts:62552

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

main.ts:62574

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeLanguagesResponseInfo`](SerpYoutubeLanguagesResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYoutubeLanguagesResponseInfo`](SerpYoutubeLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:62567
