[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataBusinessListingsSearchLiveResponseInfo

# Class: BusinessDataBusinessListingsSearchLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataBusinessListingsSearchLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataBusinessListingsSearchLiveResponseInfo()

> **new BusinessDataBusinessListingsSearchLiveResponseInfo**(`data`?): [`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)

#### Parameters

• **data?**: [`IBusinessDataBusinessListingsSearchLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md)

#### Returns

[`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:203950

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md).[`cost`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:23831

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md).[`status_code`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:23824

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md).[`status_message`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23827

***

### tasks?

> `optional` **tasks**: [`BusinessDataBusinessListingsSearchLiveTaskInfo`](BusinessDataBusinessListingsSearchLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md).[`tasks`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md#tasks)

#### Defined in

main.ts:203946

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23833

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23835

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md).[`time`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:23829

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md).[`version`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:23821

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

main.ts:203954

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

main.ts:203976

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:203969
