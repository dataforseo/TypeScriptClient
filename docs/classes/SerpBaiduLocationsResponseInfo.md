[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpBaiduLocationsResponseInfo

# Class: SerpBaiduLocationsResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBaiduLocationsResponseInfo`](../interfaces/ISerpBaiduLocationsResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduLocationsResponseInfo()

> **new SerpBaiduLocationsResponseInfo**(`data`?): [`SerpBaiduLocationsResponseInfo`](SerpBaiduLocationsResponseInfo.md)

#### Parameters

• **data?**: [`ISerpBaiduLocationsResponseInfo`](../interfaces/ISerpBaiduLocationsResponseInfo.md)

#### Returns

[`SerpBaiduLocationsResponseInfo`](SerpBaiduLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:69079

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpBaiduLocationsResponseInfo`](../interfaces/ISerpBaiduLocationsResponseInfo.md).[`cost`](../interfaces/ISerpBaiduLocationsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:24152

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBaiduLocationsResponseInfo`](../interfaces/ISerpBaiduLocationsResponseInfo.md).[`status_code`](../interfaces/ISerpBaiduLocationsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:24145

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBaiduLocationsResponseInfo`](../interfaces/ISerpBaiduLocationsResponseInfo.md).[`status_message`](../interfaces/ISerpBaiduLocationsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24148

***

### tasks?

> `optional` **tasks**: [`SerpBaiduLocationsTaskInfo`](SerpBaiduLocationsTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpBaiduLocationsResponseInfo`](../interfaces/ISerpBaiduLocationsResponseInfo.md).[`tasks`](../interfaces/ISerpBaiduLocationsResponseInfo.md#tasks)

#### Defined in

main.ts:69075

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpBaiduLocationsResponseInfo`](../interfaces/ISerpBaiduLocationsResponseInfo.md).[`tasks_count`](../interfaces/ISerpBaiduLocationsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24154

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBaiduLocationsResponseInfo`](../interfaces/ISerpBaiduLocationsResponseInfo.md).[`tasks_error`](../interfaces/ISerpBaiduLocationsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24156

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpBaiduLocationsResponseInfo`](../interfaces/ISerpBaiduLocationsResponseInfo.md).[`time`](../interfaces/ISerpBaiduLocationsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24150

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`ISerpBaiduLocationsResponseInfo`](../interfaces/ISerpBaiduLocationsResponseInfo.md).[`version`](../interfaces/ISerpBaiduLocationsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:24142

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Defined in

main.ts:69083

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Defined in

main.ts:69105

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBaiduLocationsResponseInfo`](SerpBaiduLocationsResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBaiduLocationsResponseInfo`](SerpBaiduLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:69098
