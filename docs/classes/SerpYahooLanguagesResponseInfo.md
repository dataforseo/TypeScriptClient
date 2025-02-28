[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooLanguagesResponseInfo

# Class: SerpYahooLanguagesResponseInfo

Defined in: main.ts:75151

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYahooLanguagesResponseInfo`](../interfaces/ISerpYahooLanguagesResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYahooLanguagesResponseInfo()

> **new SerpYahooLanguagesResponseInfo**(`data`?): [`SerpYahooLanguagesResponseInfo`](SerpYahooLanguagesResponseInfo.md)

Defined in: main.ts:75157

#### Parameters

##### data?

[`ISerpYahooLanguagesResponseInfo`](../interfaces/ISerpYahooLanguagesResponseInfo.md)

#### Returns

[`SerpYahooLanguagesResponseInfo`](SerpYahooLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpYahooLanguagesResponseInfo`](../interfaces/ISerpYahooLanguagesResponseInfo.md).[`cost`](../interfaces/ISerpYahooLanguagesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpYahooLanguagesResponseInfo`](../interfaces/ISerpYahooLanguagesResponseInfo.md).[`status_code`](../interfaces/ISerpYahooLanguagesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpYahooLanguagesResponseInfo`](../interfaces/ISerpYahooLanguagesResponseInfo.md).[`status_message`](../interfaces/ISerpYahooLanguagesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpYahooLanguagesTaskInfo`](SerpYahooLanguagesTaskInfo.md)[]

Defined in: main.ts:75153

array of tasks

#### Implementation of

[`ISerpYahooLanguagesResponseInfo`](../interfaces/ISerpYahooLanguagesResponseInfo.md).[`tasks`](../interfaces/ISerpYahooLanguagesResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpYahooLanguagesResponseInfo`](../interfaces/ISerpYahooLanguagesResponseInfo.md).[`tasks_count`](../interfaces/ISerpYahooLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYahooLanguagesResponseInfo`](../interfaces/ISerpYahooLanguagesResponseInfo.md).[`tasks_error`](../interfaces/ISerpYahooLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpYahooLanguagesResponseInfo`](../interfaces/ISerpYahooLanguagesResponseInfo.md).[`time`](../interfaces/ISerpYahooLanguagesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpYahooLanguagesResponseInfo`](../interfaces/ISerpYahooLanguagesResponseInfo.md).[`version`](../interfaces/ISerpYahooLanguagesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:75161

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

Defined in: main.ts:75183

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooLanguagesResponseInfo`](SerpYahooLanguagesResponseInfo.md)

Defined in: main.ts:75176

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooLanguagesResponseInfo`](SerpYahooLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
