**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new AppDataGoogleLocationsCountryResponseInfo(data)

> **new AppDataGoogleLocationsCountryResponseInfo**(`data`?): [`AppDataGoogleLocationsCountryResponseInfo`](AppDataGoogleLocationsCountryResponseInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleLocationsCountryResponseInfo`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md)

#### Returns

[`AppDataGoogleLocationsCountryResponseInfo`](AppDataGoogleLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:185697

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IAppDataGoogleLocationsCountryResponseInfo`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md).[`cost`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23214

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataGoogleLocationsCountryResponseInfo`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md).[`status_code`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23207

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataGoogleLocationsCountryResponseInfo`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md).[`status_message`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23210

***

### tasks?

> **`optional`** **tasks**: [`AppDataGoogleLocationsCountryTaskInfo`](AppDataGoogleLocationsCountryTaskInfo.md)[]

array of tasks

#### Implementation of

[`IAppDataGoogleLocationsCountryResponseInfo`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md).[`tasks`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md#tasks)

#### Source

main.ts:185693

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IAppDataGoogleLocationsCountryResponseInfo`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md).[`tasks_count`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23216

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataGoogleLocationsCountryResponseInfo`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md).[`tasks_error`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23218

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IAppDataGoogleLocationsCountryResponseInfo`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md).[`time`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23212

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IAppDataGoogleLocationsCountryResponseInfo`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md).[`version`](../interfaces/IAppDataGoogleLocationsCountryResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23204

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Source

main.ts:185701

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Source

main.ts:185723

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataGoogleLocationsCountryResponseInfo`](AppDataGoogleLocationsCountryResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleLocationsCountryResponseInfo`](AppDataGoogleLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:185716
