**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpYahooLocationsResponseInfo

# Class: SerpYahooLocationsResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYahooLocationsResponseInfo`](../interfaces/ISerpYahooLocationsResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYahooLocationsResponseInfo(data)

> **new SerpYahooLocationsResponseInfo**(`data`?): [`SerpYahooLocationsResponseInfo`](SerpYahooLocationsResponseInfo.md)

#### Parameters

• **data?**: [`ISerpYahooLocationsResponseInfo`](../interfaces/ISerpYahooLocationsResponseInfo.md)

#### Returns

[`SerpYahooLocationsResponseInfo`](SerpYahooLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:66246

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpYahooLocationsResponseInfo`](../interfaces/ISerpYahooLocationsResponseInfo.md).[`cost`](../interfaces/ISerpYahooLocationsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23401

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpYahooLocationsResponseInfo`](../interfaces/ISerpYahooLocationsResponseInfo.md).[`status_code`](../interfaces/ISerpYahooLocationsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23394

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpYahooLocationsResponseInfo`](../interfaces/ISerpYahooLocationsResponseInfo.md).[`status_message`](../interfaces/ISerpYahooLocationsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23397

***

### tasks?

> **`optional`** **tasks**: [`SerpYahooLocationsTaskInfo`](SerpYahooLocationsTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpYahooLocationsResponseInfo`](../interfaces/ISerpYahooLocationsResponseInfo.md).[`tasks`](../interfaces/ISerpYahooLocationsResponseInfo.md#tasks)

#### Source

main.ts:66242

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpYahooLocationsResponseInfo`](../interfaces/ISerpYahooLocationsResponseInfo.md).[`tasks_count`](../interfaces/ISerpYahooLocationsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23403

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYahooLocationsResponseInfo`](../interfaces/ISerpYahooLocationsResponseInfo.md).[`tasks_error`](../interfaces/ISerpYahooLocationsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23405

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpYahooLocationsResponseInfo`](../interfaces/ISerpYahooLocationsResponseInfo.md).[`time`](../interfaces/ISerpYahooLocationsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23399

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpYahooLocationsResponseInfo`](../interfaces/ISerpYahooLocationsResponseInfo.md).[`version`](../interfaces/ISerpYahooLocationsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23391

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

main.ts:66250

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

main.ts:66272

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpYahooLocationsResponseInfo`](SerpYahooLocationsResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYahooLocationsResponseInfo`](SerpYahooLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:66265
