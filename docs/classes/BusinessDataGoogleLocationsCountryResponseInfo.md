[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleLocationsCountryResponseInfo

# Class: BusinessDataGoogleLocationsCountryResponseInfo

Defined in: main.ts:212767

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleLocationsCountryResponseInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleLocationsCountryResponseInfo()

> **new BusinessDataGoogleLocationsCountryResponseInfo**(`data`?): [`BusinessDataGoogleLocationsCountryResponseInfo`](BusinessDataGoogleLocationsCountryResponseInfo.md)

Defined in: main.ts:212773

#### Parameters

##### data?

[`IBusinessDataGoogleLocationsCountryResponseInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResponseInfo.md)

#### Returns

[`BusinessDataGoogleLocationsCountryResponseInfo`](BusinessDataGoogleLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleLocationsCountryResponseInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleLocationsCountryResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataGoogleLocationsCountryResponseInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleLocationsCountryResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataGoogleLocationsCountryResponseInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataGoogleLocationsCountryTaskInfo`](BusinessDataGoogleLocationsCountryTaskInfo.md)[]

Defined in: main.ts:212769

array of tasks

#### Implementation of

[`IBusinessDataGoogleLocationsCountryResponseInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleLocationsCountryResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleLocationsCountryResponseInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleLocationsCountryResponseInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleLocationsCountryResponseInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleLocationsCountryResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataGoogleLocationsCountryResponseInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleLocationsCountryResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:212777

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

Defined in: main.ts:212799

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleLocationsCountryResponseInfo`](BusinessDataGoogleLocationsCountryResponseInfo.md)

Defined in: main.ts:212792

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleLocationsCountryResponseInfo`](BusinessDataGoogleLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
