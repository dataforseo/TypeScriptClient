[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeLanguagesResponseInfo

# Class: SerpYoutubeLanguagesResponseInfo

Defined in: main.ts:69468

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYoutubeLanguagesResponseInfo`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeLanguagesResponseInfo()

> **new SerpYoutubeLanguagesResponseInfo**(`data`?): [`SerpYoutubeLanguagesResponseInfo`](SerpYoutubeLanguagesResponseInfo.md)

Defined in: main.ts:69474

#### Parameters

##### data?

[`ISerpYoutubeLanguagesResponseInfo`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md)

#### Returns

[`SerpYoutubeLanguagesResponseInfo`](SerpYoutubeLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpYoutubeLanguagesResponseInfo`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md).[`cost`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpYoutubeLanguagesResponseInfo`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md).[`status_code`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpYoutubeLanguagesResponseInfo`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md).[`status_message`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpYoutubeLanguagesTaskInfo`](SerpYoutubeLanguagesTaskInfo.md)[]

Defined in: main.ts:69470

array of tasks

#### Implementation of

[`ISerpYoutubeLanguagesResponseInfo`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md).[`tasks`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpYoutubeLanguagesResponseInfo`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md).[`tasks_count`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYoutubeLanguagesResponseInfo`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md).[`tasks_error`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpYoutubeLanguagesResponseInfo`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md).[`time`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpYoutubeLanguagesResponseInfo`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md).[`version`](../interfaces/ISerpYoutubeLanguagesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:69478

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

Defined in: main.ts:69500

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeLanguagesResponseInfo`](SerpYoutubeLanguagesResponseInfo.md)

Defined in: main.ts:69493

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeLanguagesResponseInfo`](SerpYoutubeLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
