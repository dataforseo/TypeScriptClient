**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksAvailableFiltersResponseInfo

# Class: BacklinksAvailableFiltersResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBacklinksAvailableFiltersResponseInfo`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksAvailableFiltersResponseInfo(data)

> **new BacklinksAvailableFiltersResponseInfo**(`data`?): [`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)

#### Parameters

• **data?**: [`IBacklinksAvailableFiltersResponseInfo`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md)

#### Returns

[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:139708

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBacklinksAvailableFiltersResponseInfo`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md).[`cost`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23649

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBacklinksAvailableFiltersResponseInfo`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md).[`status_code`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23642

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBacklinksAvailableFiltersResponseInfo`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md).[`status_message`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23645

***

### tasks?

> **`optional`** **tasks**: [`BacklinksAvailableFiltersTaskInfo`](BacklinksAvailableFiltersTaskInfo.md)[]

#### Implementation of

[`IBacklinksAvailableFiltersResponseInfo`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md).[`tasks`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md#tasks)

#### Source

main.ts:139704

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBacklinksAvailableFiltersResponseInfo`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md).[`tasks_count`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23651

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBacklinksAvailableFiltersResponseInfo`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md).[`tasks_error`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23653

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IBacklinksAvailableFiltersResponseInfo`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md).[`time`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23647

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IBacklinksAvailableFiltersResponseInfo`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md).[`version`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23639

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

main.ts:139712

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

main.ts:139734

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:139727
