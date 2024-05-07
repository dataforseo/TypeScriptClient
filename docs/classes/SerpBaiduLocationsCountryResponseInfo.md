**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpBaiduLocationsCountryResponseInfo

# Class: SerpBaiduLocationsCountryResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBaiduLocationsCountryResponseInfo`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduLocationsCountryResponseInfo(data)

> **new SerpBaiduLocationsCountryResponseInfo**(`data`?): [`SerpBaiduLocationsCountryResponseInfo`](SerpBaiduLocationsCountryResponseInfo.md)

#### Parameters

• **data?**: [`ISerpBaiduLocationsCountryResponseInfo`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md)

#### Returns

[`SerpBaiduLocationsCountryResponseInfo`](SerpBaiduLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:68914

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpBaiduLocationsCountryResponseInfo`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md).[`cost`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23321

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBaiduLocationsCountryResponseInfo`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md).[`status_code`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23314

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBaiduLocationsCountryResponseInfo`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md).[`status_message`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23317

***

### tasks?

> **`optional`** **tasks**: [`SerpBaiduLocationsCountryTaskInfo`](SerpBaiduLocationsCountryTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpBaiduLocationsCountryResponseInfo`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md).[`tasks`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md#tasks)

#### Source

main.ts:68910

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpBaiduLocationsCountryResponseInfo`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md).[`tasks_count`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23323

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBaiduLocationsCountryResponseInfo`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md).[`tasks_error`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23325

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpBaiduLocationsCountryResponseInfo`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md).[`time`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23319

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpBaiduLocationsCountryResponseInfo`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md).[`version`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23311

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

main.ts:68918

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

main.ts:68940

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpBaiduLocationsCountryResponseInfo`](SerpBaiduLocationsCountryResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBaiduLocationsCountryResponseInfo`](SerpBaiduLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:68933
