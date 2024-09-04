[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpBingLocalPackTaskGetRegularResponseInfo

# Class: SerpBingLocalPackTaskGetRegularResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBingLocalPackTaskGetRegularResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocalPackTaskGetRegularResponseInfo()

> **new SerpBingLocalPackTaskGetRegularResponseInfo**(`data`?): [`SerpBingLocalPackTaskGetRegularResponseInfo`](SerpBingLocalPackTaskGetRegularResponseInfo.md)

#### Parameters

• **data?**: [`ISerpBingLocalPackTaskGetRegularResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md)

#### Returns

[`SerpBingLocalPackTaskGetRegularResponseInfo`](SerpBingLocalPackTaskGetRegularResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:59969

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md).[`cost`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:24147

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md).[`status_code`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:24140

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md).[`status_message`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24143

***

### tasks?

> `optional` **tasks**: [`SerpBingLocalPackTaskGetRegularTaskInfo`](SerpBingLocalPackTaskGetRegularTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md).[`tasks`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md#tasks)

#### Defined in

main.ts:59965

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md).[`tasks_count`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24149

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md).[`tasks_error`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24151

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md).[`time`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24145

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md).[`version`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:24137

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

main.ts:59973

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

main.ts:59995

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingLocalPackTaskGetRegularResponseInfo`](SerpBingLocalPackTaskGetRegularResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingLocalPackTaskGetRegularResponseInfo`](SerpBingLocalPackTaskGetRegularResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:59988
