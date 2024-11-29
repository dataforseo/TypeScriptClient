[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleLocationsCountryResponseInfo

# Class: AppDataGoogleLocationsCountryResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataGoogleLocationsCountryResponseInfo`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleLocationsCountryResponseInfo()

> **new AppDataGoogleLocationsCountryResponseInfo**(`data`?): [`AppDataGoogleLocationsCountryResponseInfo`](AppDataGoogleLocationsCountryResponseInfo.md)

#### Parameters

##### data?

[`IAppDataGoogleLocationsCountryResponseInfo`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md)

#### Returns

[`AppDataGoogleLocationsCountryResponseInfo`](AppDataGoogleLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:198999

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IAppDataGoogleLocationsCountryResponseInfo`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md).[`cost`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:25217

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataGoogleLocationsCountryResponseInfo`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md).[`status_code`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:25210

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataGoogleLocationsCountryResponseInfo`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md).[`status_message`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:25213

***

### tasks?

> `optional` **tasks**: [`AppDataGoogleLocationsCountryTaskInfo`](AppDataGoogleLocationsCountryTaskInfo.md)[]

array of tasks

#### Implementation of

[`IAppDataGoogleLocationsCountryResponseInfo`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md).[`tasks`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md#tasks)

#### Defined in

main.ts:198995

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IAppDataGoogleLocationsCountryResponseInfo`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md).[`tasks_count`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:25219

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataGoogleLocationsCountryResponseInfo`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md).[`tasks_error`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:25221

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IAppDataGoogleLocationsCountryResponseInfo`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md).[`time`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:25215

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IAppDataGoogleLocationsCountryResponseInfo`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md).[`version`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:25207

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Defined in

main.ts:199003

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Defined in

main.ts:199025

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleLocationsCountryResponseInfo`](AppDataGoogleLocationsCountryResponseInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleLocationsCountryResponseInfo`](AppDataGoogleLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:199018
