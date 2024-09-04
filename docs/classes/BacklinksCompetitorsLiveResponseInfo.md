[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksCompetitorsLiveResponseInfo

# Class: BacklinksCompetitorsLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBacklinksCompetitorsLiveResponseInfo`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksCompetitorsLiveResponseInfo()

> **new BacklinksCompetitorsLiveResponseInfo**(`data`?): [`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)

#### Parameters

• **data?**: [`IBacklinksCompetitorsLiveResponseInfo`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md)

#### Returns

[`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:149067

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBacklinksCompetitorsLiveResponseInfo`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md).[`cost`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md#cost)

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

[`IBacklinksCompetitorsLiveResponseInfo`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md).[`status_code`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md#status_code)

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

[`IBacklinksCompetitorsLiveResponseInfo`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md).[`status_message`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23827

***

### tasks?

> `optional` **tasks**: [`BacklinksCompetitorsLiveTaskInfo`](BacklinksCompetitorsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBacklinksCompetitorsLiveResponseInfo`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md).[`tasks`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md#tasks)

#### Defined in

main.ts:149063

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBacklinksCompetitorsLiveResponseInfo`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md).[`tasks_count`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23833

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBacklinksCompetitorsLiveResponseInfo`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md).[`tasks_error`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23835

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IBacklinksCompetitorsLiveResponseInfo`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md).[`time`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:23829

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IBacklinksCompetitorsLiveResponseInfo`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md).[`version`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md#version)

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

main.ts:149071

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

main.ts:149093

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:149086
