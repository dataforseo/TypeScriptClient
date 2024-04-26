**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataGoogleCategoriesResponseInfo

# Class: AppDataGoogleCategoriesResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataGoogleCategoriesResponseInfo`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleCategoriesResponseInfo(data)

> **new AppDataGoogleCategoriesResponseInfo**(`data`?): [`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleCategoriesResponseInfo`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md)

#### Returns

[`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:183546

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IAppDataGoogleCategoriesResponseInfo`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md).[`cost`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23157

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataGoogleCategoriesResponseInfo`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md).[`status_code`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23150

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataGoogleCategoriesResponseInfo`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md).[`status_message`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23153

***

### tasks?

> **`optional`** **tasks**: [`AppDataGoogleCategoriesTaskInfo`](AppDataGoogleCategoriesTaskInfo.md)[]

array of tasks

#### Implementation of

[`IAppDataGoogleCategoriesResponseInfo`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md).[`tasks`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md#tasks)

#### Source

main.ts:183542

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IAppDataGoogleCategoriesResponseInfo`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md).[`tasks_count`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23159

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataGoogleCategoriesResponseInfo`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md).[`tasks_error`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23161

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IAppDataGoogleCategoriesResponseInfo`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md).[`time`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23155

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IAppDataGoogleCategoriesResponseInfo`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md).[`version`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23147

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

main.ts:183550

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

main.ts:183572

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:183565
