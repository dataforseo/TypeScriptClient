[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / OnPageResourcesResponseInfo

# Class: OnPageResourcesResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageResourcesResponseInfo`](../interfaces/IOnPageResourcesResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageResourcesResponseInfo()

> **new OnPageResourcesResponseInfo**(`data`?): [`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)

#### Parameters

• **data?**: [`IOnPageResourcesResponseInfo`](../interfaces/IOnPageResourcesResponseInfo.md)

#### Returns

[`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:156685

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IOnPageResourcesResponseInfo`](../interfaces/IOnPageResourcesResponseInfo.md).[`cost`](../interfaces/IOnPageResourcesResponseInfo.md#cost)

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

[`IOnPageResourcesResponseInfo`](../interfaces/IOnPageResourcesResponseInfo.md).[`status_code`](../interfaces/IOnPageResourcesResponseInfo.md#status_code)

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

[`IOnPageResourcesResponseInfo`](../interfaces/IOnPageResourcesResponseInfo.md).[`status_message`](../interfaces/IOnPageResourcesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24143

***

### tasks?

> `optional` **tasks**: [`OnPageResourcesTaskInfo`](OnPageResourcesTaskInfo.md)[]

array of tasks

#### Implementation of

[`IOnPageResourcesResponseInfo`](../interfaces/IOnPageResourcesResponseInfo.md).[`tasks`](../interfaces/IOnPageResourcesResponseInfo.md#tasks)

#### Defined in

main.ts:156681

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IOnPageResourcesResponseInfo`](../interfaces/IOnPageResourcesResponseInfo.md).[`tasks_count`](../interfaces/IOnPageResourcesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24149

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageResourcesResponseInfo`](../interfaces/IOnPageResourcesResponseInfo.md).[`tasks_error`](../interfaces/IOnPageResourcesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24151

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IOnPageResourcesResponseInfo`](../interfaces/IOnPageResourcesResponseInfo.md).[`time`](../interfaces/IOnPageResourcesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24145

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IOnPageResourcesResponseInfo`](../interfaces/IOnPageResourcesResponseInfo.md).[`version`](../interfaces/IOnPageResourcesResponseInfo.md#version)

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

main.ts:156689

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

main.ts:156711

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:156704
