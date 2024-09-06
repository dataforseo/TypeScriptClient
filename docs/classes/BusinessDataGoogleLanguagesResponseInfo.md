[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataGoogleLanguagesResponseInfo

# Class: BusinessDataGoogleLanguagesResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleLanguagesResponseInfo`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleLanguagesResponseInfo()

> **new BusinessDataGoogleLanguagesResponseInfo**(`data`?): [`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleLanguagesResponseInfo`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md)

#### Returns

[`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:200521

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleLanguagesResponseInfo`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md#cost)

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

[`IBusinessDataGoogleLanguagesResponseInfo`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md#status_code)

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

[`IBusinessDataGoogleLanguagesResponseInfo`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24148

***

### tasks?

> `optional` **tasks**: [`BusinessDataGoogleLanguagesTaskInfo`](BusinessDataGoogleLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBusinessDataGoogleLanguagesResponseInfo`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md#tasks)

#### Defined in

main.ts:200517

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleLanguagesResponseInfo`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24154

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleLanguagesResponseInfo`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24156

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleLanguagesResponseInfo`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24150

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IBusinessDataGoogleLanguagesResponseInfo`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md#version)

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

main.ts:200525

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

main.ts:200547

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:200540
