[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAutocompleteTasksFixedTaskInfo

# Class: SerpGoogleAutocompleteTasksFixedTaskInfo

Defined in: main.ts:55862

## Extends

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

## Implements

- [`ISerpGoogleAutocompleteTasksFixedTaskInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedTaskInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAutocompleteTasksFixedTaskInfo()

> **new SerpGoogleAutocompleteTasksFixedTaskInfo**(`data`?): [`SerpGoogleAutocompleteTasksFixedTaskInfo`](SerpGoogleAutocompleteTasksFixedTaskInfo.md)

Defined in: main.ts:55868

#### Parameters

##### data?

[`ISerpGoogleAutocompleteTasksFixedTaskInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedTaskInfo.md)

#### Returns

[`SerpGoogleAutocompleteTasksFixedTaskInfo`](SerpGoogleAutocompleteTasksFixedTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`constructor`](BaseResponseTaskInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25309

total tasks cost, USD

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedTaskInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedTaskInfo.md).[`cost`](../interfaces/ISerpGoogleAutocompleteTasksFixedTaskInfo.md#cost)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`cost`](BaseResponseTaskInfo.md#cost)

***

### data?

> `optional` **data**: `object`

Defined in: main.ts:25315

contains the same parameters that you specified in the POST request

#### Index Signature

\[`key`: `string`\]: `any`

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedTaskInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedTaskInfo.md).[`data`](../interfaces/ISerpGoogleAutocompleteTasksFixedTaskInfo.md#data)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`data`](BaseResponseTaskInfo.md#data-1)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:25298

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedTaskInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedTaskInfo.md).[`id`](../interfaces/ISerpGoogleAutocompleteTasksFixedTaskInfo.md#id)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`id`](BaseResponseTaskInfo.md#id)

***

### path?

> `optional` **path**: `string`[]

Defined in: main.ts:25313

URL path

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedTaskInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedTaskInfo.md).[`path`](../interfaces/ISerpGoogleAutocompleteTasksFixedTaskInfo.md#path)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`path`](BaseResponseTaskInfo.md#path)

***

### result?

> `optional` **result**: [`SerpGoogleAutocompleteTasksFixedResultInfo`](SerpGoogleAutocompleteTasksFixedResultInfo.md)[]

Defined in: main.ts:55864

array of results

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedTaskInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedTaskInfo.md).[`result`](../interfaces/ISerpGoogleAutocompleteTasksFixedTaskInfo.md#result)

***

### result\_count?

> `optional` **result\_count**: `number`

Defined in: main.ts:25311

number of elements in the result array

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedTaskInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedTaskInfo.md).[`result_count`](../interfaces/ISerpGoogleAutocompleteTasksFixedTaskInfo.md#result_count)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`result_count`](BaseResponseTaskInfo.md#result_count)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25302

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedTaskInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedTaskInfo.md).[`status_code`](../interfaces/ISerpGoogleAutocompleteTasksFixedTaskInfo.md#status_code)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`status_code`](BaseResponseTaskInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25305

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedTaskInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedTaskInfo.md).[`status_message`](../interfaces/ISerpGoogleAutocompleteTasksFixedTaskInfo.md#status_message)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`status_message`](BaseResponseTaskInfo.md#status_message)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25307

execution time, seconds

#### Implementation of

[`ISerpGoogleAutocompleteTasksFixedTaskInfo`](../interfaces/ISerpGoogleAutocompleteTasksFixedTaskInfo.md).[`time`](../interfaces/ISerpGoogleAutocompleteTasksFixedTaskInfo.md#time)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`time`](BaseResponseTaskInfo.md#time)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:55872

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`init`](BaseResponseTaskInfo.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:55894

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`toJSON`](BaseResponseTaskInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAutocompleteTasksFixedTaskInfo`](SerpGoogleAutocompleteTasksFixedTaskInfo.md)

Defined in: main.ts:55887

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAutocompleteTasksFixedTaskInfo`](SerpGoogleAutocompleteTasksFixedTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`fromJS`](BaseResponseTaskInfo.md#fromjs)
