**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpSeznamLocationsCountryResponseInfo

# Class: SerpSeznamLocationsCountryResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpSeznamLocationsCountryResponseInfo`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamLocationsCountryResponseInfo(data)

> **new SerpSeznamLocationsCountryResponseInfo**(`data`?): [`SerpSeznamLocationsCountryResponseInfo`](SerpSeznamLocationsCountryResponseInfo.md)

#### Parameters

• **data?**: [`ISerpSeznamLocationsCountryResponseInfo`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md)

#### Returns

[`SerpSeznamLocationsCountryResponseInfo`](SerpSeznamLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:72881

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpSeznamLocationsCountryResponseInfo`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md).[`cost`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md#cost)

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

[`ISerpSeznamLocationsCountryResponseInfo`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md).[`status_code`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md#status_code)

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

[`ISerpSeznamLocationsCountryResponseInfo`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md).[`status_message`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23210

***

### tasks?

> **`optional`** **tasks**: [`SerpSeznamLocationsCountryTaskInfo`](SerpSeznamLocationsCountryTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpSeznamLocationsCountryResponseInfo`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md).[`tasks`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md#tasks)

#### Source

main.ts:72877

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpSeznamLocationsCountryResponseInfo`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md).[`tasks_count`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23216

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpSeznamLocationsCountryResponseInfo`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md).[`tasks_error`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23218

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpSeznamLocationsCountryResponseInfo`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md).[`time`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23212

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpSeznamLocationsCountryResponseInfo`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md).[`version`](../interfaces/ISerpSeznamLocationsCountryResponseInfo.md#version)

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

main.ts:72885

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

main.ts:72907

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpSeznamLocationsCountryResponseInfo`](SerpSeznamLocationsCountryResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpSeznamLocationsCountryResponseInfo`](SerpSeznamLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:72900
