[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleLocationsResponseInfo

# Class: AppDataGoogleLocationsResponseInfo

Defined in: main.ts:198865

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataGoogleLocationsResponseInfo`](../interfaces/IAppDataGoogleLocationsResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleLocationsResponseInfo()

> **new AppDataGoogleLocationsResponseInfo**(`data`?): [`AppDataGoogleLocationsResponseInfo`](AppDataGoogleLocationsResponseInfo.md)

Defined in: main.ts:198871

#### Parameters

##### data?

[`IAppDataGoogleLocationsResponseInfo`](../interfaces/IAppDataGoogleLocationsResponseInfo.md)

#### Returns

[`AppDataGoogleLocationsResponseInfo`](AppDataGoogleLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IAppDataGoogleLocationsResponseInfo`](../interfaces/IAppDataGoogleLocationsResponseInfo.md).[`cost`](../interfaces/IAppDataGoogleLocationsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataGoogleLocationsResponseInfo`](../interfaces/IAppDataGoogleLocationsResponseInfo.md).[`status_code`](../interfaces/IAppDataGoogleLocationsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataGoogleLocationsResponseInfo`](../interfaces/IAppDataGoogleLocationsResponseInfo.md).[`status_message`](../interfaces/IAppDataGoogleLocationsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`AppDataGoogleLocationsTaskInfo`](AppDataGoogleLocationsTaskInfo.md)[]

Defined in: main.ts:198867

array of tasks

#### Implementation of

[`IAppDataGoogleLocationsResponseInfo`](../interfaces/IAppDataGoogleLocationsResponseInfo.md).[`tasks`](../interfaces/IAppDataGoogleLocationsResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IAppDataGoogleLocationsResponseInfo`](../interfaces/IAppDataGoogleLocationsResponseInfo.md).[`tasks_count`](../interfaces/IAppDataGoogleLocationsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataGoogleLocationsResponseInfo`](../interfaces/IAppDataGoogleLocationsResponseInfo.md).[`tasks_error`](../interfaces/IAppDataGoogleLocationsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IAppDataGoogleLocationsResponseInfo`](../interfaces/IAppDataGoogleLocationsResponseInfo.md).[`time`](../interfaces/IAppDataGoogleLocationsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IAppDataGoogleLocationsResponseInfo`](../interfaces/IAppDataGoogleLocationsResponseInfo.md).[`version`](../interfaces/IAppDataGoogleLocationsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:198875

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

Defined in: main.ts:198897

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleLocationsResponseInfo`](AppDataGoogleLocationsResponseInfo.md)

Defined in: main.ts:198890

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleLocationsResponseInfo`](AppDataGoogleLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
