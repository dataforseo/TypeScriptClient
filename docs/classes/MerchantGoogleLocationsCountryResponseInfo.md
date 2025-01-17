[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleLocationsCountryResponseInfo

# Class: MerchantGoogleLocationsCountryResponseInfo

Defined in: main.ts:185189

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantGoogleLocationsCountryResponseInfo`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleLocationsCountryResponseInfo()

> **new MerchantGoogleLocationsCountryResponseInfo**(`data`?): [`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)

Defined in: main.ts:185195

#### Parameters

##### data?

[`IMerchantGoogleLocationsCountryResponseInfo`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md)

#### Returns

[`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IMerchantGoogleLocationsCountryResponseInfo`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md).[`cost`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantGoogleLocationsCountryResponseInfo`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md).[`status_code`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantGoogleLocationsCountryResponseInfo`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md).[`status_message`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`MerchantGoogleLocationsCountryTaskInfo`](MerchantGoogleLocationsCountryTaskInfo.md)[]

Defined in: main.ts:185191

array of tasks

#### Implementation of

[`IMerchantGoogleLocationsCountryResponseInfo`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md).[`tasks`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IMerchantGoogleLocationsCountryResponseInfo`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md).[`tasks_count`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantGoogleLocationsCountryResponseInfo`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md).[`tasks_error`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IMerchantGoogleLocationsCountryResponseInfo`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md).[`time`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IMerchantGoogleLocationsCountryResponseInfo`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md).[`version`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:185199

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

Defined in: main.ts:185221

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)

Defined in: main.ts:185214

#### Parameters

##### data

`any`

#### Returns

[`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
