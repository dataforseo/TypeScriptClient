[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpSeznamLocationsCountryTaskInfo

# Class: SerpSeznamLocationsCountryTaskInfo

Defined in: main.ts:82470

## Extends

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

## Implements

- [`ISerpSeznamLocationsCountryTaskInfo`](../interfaces/ISerpSeznamLocationsCountryTaskInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamLocationsCountryTaskInfo()

> **new SerpSeznamLocationsCountryTaskInfo**(`data`?): [`SerpSeznamLocationsCountryTaskInfo`](SerpSeznamLocationsCountryTaskInfo.md)

Defined in: main.ts:82476

#### Parameters

##### data?

[`ISerpSeznamLocationsCountryTaskInfo`](../interfaces/ISerpSeznamLocationsCountryTaskInfo.md)

#### Returns

[`SerpSeznamLocationsCountryTaskInfo`](SerpSeznamLocationsCountryTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`constructor`](BaseResponseTaskInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25309

total tasks cost, USD

#### Implementation of

[`ISerpSeznamLocationsCountryTaskInfo`](../interfaces/ISerpSeznamLocationsCountryTaskInfo.md).[`cost`](../interfaces/ISerpSeznamLocationsCountryTaskInfo.md#cost)

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

[`ISerpSeznamLocationsCountryTaskInfo`](../interfaces/ISerpSeznamLocationsCountryTaskInfo.md).[`data`](../interfaces/ISerpSeznamLocationsCountryTaskInfo.md#data)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`data`](BaseResponseTaskInfo.md#data-1)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:25298

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpSeznamLocationsCountryTaskInfo`](../interfaces/ISerpSeznamLocationsCountryTaskInfo.md).[`id`](../interfaces/ISerpSeznamLocationsCountryTaskInfo.md#id)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`id`](BaseResponseTaskInfo.md#id)

***

### path?

> `optional` **path**: `string`[]

Defined in: main.ts:25313

URL path

#### Implementation of

[`ISerpSeznamLocationsCountryTaskInfo`](../interfaces/ISerpSeznamLocationsCountryTaskInfo.md).[`path`](../interfaces/ISerpSeznamLocationsCountryTaskInfo.md#path)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`path`](BaseResponseTaskInfo.md#path)

***

### result?

> `optional` **result**: [`SerpSeznamLocationsCountryResultInfo`](SerpSeznamLocationsCountryResultInfo.md)[]

Defined in: main.ts:82472

array of results

#### Implementation of

[`ISerpSeznamLocationsCountryTaskInfo`](../interfaces/ISerpSeznamLocationsCountryTaskInfo.md).[`result`](../interfaces/ISerpSeznamLocationsCountryTaskInfo.md#result)

***

### result\_count?

> `optional` **result\_count**: `number`

Defined in: main.ts:25311

number of elements in the result array

#### Implementation of

[`ISerpSeznamLocationsCountryTaskInfo`](../interfaces/ISerpSeznamLocationsCountryTaskInfo.md).[`result_count`](../interfaces/ISerpSeznamLocationsCountryTaskInfo.md#result_count)

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

[`ISerpSeznamLocationsCountryTaskInfo`](../interfaces/ISerpSeznamLocationsCountryTaskInfo.md).[`status_code`](../interfaces/ISerpSeznamLocationsCountryTaskInfo.md#status_code)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`status_code`](BaseResponseTaskInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25305

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`ISerpSeznamLocationsCountryTaskInfo`](../interfaces/ISerpSeznamLocationsCountryTaskInfo.md).[`status_message`](../interfaces/ISerpSeznamLocationsCountryTaskInfo.md#status_message)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`status_message`](BaseResponseTaskInfo.md#status_message)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25307

execution time, seconds

#### Implementation of

[`ISerpSeznamLocationsCountryTaskInfo`](../interfaces/ISerpSeznamLocationsCountryTaskInfo.md).[`time`](../interfaces/ISerpSeznamLocationsCountryTaskInfo.md#time)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`time`](BaseResponseTaskInfo.md#time)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:82480

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

Defined in: main.ts:82502

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`toJSON`](BaseResponseTaskInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpSeznamLocationsCountryTaskInfo`](SerpSeznamLocationsCountryTaskInfo.md)

Defined in: main.ts:82495

#### Parameters

##### data

`any`

#### Returns

[`SerpSeznamLocationsCountryTaskInfo`](SerpSeznamLocationsCountryTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`fromJS`](BaseResponseTaskInfo.md#fromjs)
