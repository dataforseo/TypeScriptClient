**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo

# Class: BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo(data)

> **new BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo**(`data`?): [`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:201696

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23252

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23245

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23248

***

### tasks?

> **`optional`** **tasks**: [`BusinessDataGoogleMyBusinessUpdatesTaskPostTaskInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#tasks)

#### Source

main.ts:201692

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23254

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23256

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23250

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23242

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

main.ts:201700

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

main.ts:201722

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:201715
