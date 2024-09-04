[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppDataAppleLanguagesResponseInfo

# Class: AppDataAppleLanguagesResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleLanguagesResponseInfo()

> **new AppDataAppleLanguagesResponseInfo**(`data`?): [`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)

#### Parameters

• **data?**: [`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md)

#### Returns

[`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:192782

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md).[`cost`](../interfaces/IAppDataAppleLanguagesResponseInfo.md#cost)

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

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md).[`status_code`](../interfaces/IAppDataAppleLanguagesResponseInfo.md#status_code)

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

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md).[`status_message`](../interfaces/IAppDataAppleLanguagesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24143

***

### tasks?

> `optional` **tasks**: [`AppDataAppleLanguagesTaskInfo`](AppDataAppleLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md).[`tasks`](../interfaces/IAppDataAppleLanguagesResponseInfo.md#tasks)

#### Defined in

main.ts:192778

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md).[`tasks_count`](../interfaces/IAppDataAppleLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24149

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md).[`tasks_error`](../interfaces/IAppDataAppleLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24151

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md).[`time`](../interfaces/IAppDataAppleLanguagesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24145

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md).[`version`](../interfaces/IAppDataAppleLanguagesResponseInfo.md#version)

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

main.ts:192786

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

main.ts:192808

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:192801
