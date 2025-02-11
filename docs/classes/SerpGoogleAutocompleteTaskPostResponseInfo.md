[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAutocompleteTaskPostResponseInfo

# Class: SerpGoogleAutocompleteTaskPostResponseInfo

Defined in: main.ts:55493

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleAutocompleteTaskPostResponseInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAutocompleteTaskPostResponseInfo()

> **new SerpGoogleAutocompleteTaskPostResponseInfo**(`data`?): [`SerpGoogleAutocompleteTaskPostResponseInfo`](SerpGoogleAutocompleteTaskPostResponseInfo.md)

Defined in: main.ts:55499

#### Parameters

##### data?

[`ISerpGoogleAutocompleteTaskPostResponseInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md)

#### Returns

[`SerpGoogleAutocompleteTaskPostResponseInfo`](SerpGoogleAutocompleteTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleAutocompleteTaskPostResponseInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md).[`cost`](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleAutocompleteTaskPostResponseInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleAutocompleteTaskPostResponseInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleAutocompleteTaskPostTaskInfo`](SerpGoogleAutocompleteTaskPostTaskInfo.md)[]

Defined in: main.ts:55495

array of tasks

#### Implementation of

[`ISerpGoogleAutocompleteTaskPostResponseInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleAutocompleteTaskPostResponseInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleAutocompleteTaskPostResponseInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleAutocompleteTaskPostResponseInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md).[`time`](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleAutocompleteTaskPostResponseInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md).[`version`](../interfaces/ISerpGoogleAutocompleteTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:55503

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

Defined in: main.ts:55525

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAutocompleteTaskPostResponseInfo`](SerpGoogleAutocompleteTaskPostResponseInfo.md)

Defined in: main.ts:55518

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAutocompleteTaskPostResponseInfo`](SerpGoogleAutocompleteTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
