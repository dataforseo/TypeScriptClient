**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataGoogleLanguagesResponseInfo

# Class: AppDataGoogleLanguagesResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataGoogleLanguagesResponseInfo`](../interfaces/IAppDataGoogleLanguagesResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleLanguagesResponseInfo(data)

> **new AppDataGoogleLanguagesResponseInfo**(`data`?): [`AppDataGoogleLanguagesResponseInfo`](AppDataGoogleLanguagesResponseInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleLanguagesResponseInfo`](../interfaces/IAppDataGoogleLanguagesResponseInfo.md)

#### Returns

[`AppDataGoogleLanguagesResponseInfo`](AppDataGoogleLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:189674

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IAppDataGoogleLanguagesResponseInfo`](../interfaces/IAppDataGoogleLanguagesResponseInfo.md).[`cost`](../interfaces/IAppDataGoogleLanguagesResponseInfo.md#cost)

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

[`IAppDataGoogleLanguagesResponseInfo`](../interfaces/IAppDataGoogleLanguagesResponseInfo.md).[`status_code`](../interfaces/IAppDataGoogleLanguagesResponseInfo.md#status_code)

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

[`IAppDataGoogleLanguagesResponseInfo`](../interfaces/IAppDataGoogleLanguagesResponseInfo.md).[`status_message`](../interfaces/IAppDataGoogleLanguagesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23645

***

### tasks?

> **`optional`** **tasks**: [`AppDataGoogleLanguagesTaskInfo`](AppDataGoogleLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[`IAppDataGoogleLanguagesResponseInfo`](../interfaces/IAppDataGoogleLanguagesResponseInfo.md).[`tasks`](../interfaces/IAppDataGoogleLanguagesResponseInfo.md#tasks)

#### Source

main.ts:189670

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IAppDataGoogleLanguagesResponseInfo`](../interfaces/IAppDataGoogleLanguagesResponseInfo.md).[`tasks_count`](../interfaces/IAppDataGoogleLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23651

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataGoogleLanguagesResponseInfo`](../interfaces/IAppDataGoogleLanguagesResponseInfo.md).[`tasks_error`](../interfaces/IAppDataGoogleLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23653

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IAppDataGoogleLanguagesResponseInfo`](../interfaces/IAppDataGoogleLanguagesResponseInfo.md).[`time`](../interfaces/IAppDataGoogleLanguagesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23647

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IAppDataGoogleLanguagesResponseInfo`](../interfaces/IAppDataGoogleLanguagesResponseInfo.md).[`version`](../interfaces/IAppDataGoogleLanguagesResponseInfo.md#version)

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

main.ts:189678

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

main.ts:189700

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataGoogleLanguagesResponseInfo`](AppDataGoogleLanguagesResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleLanguagesResponseInfo`](AppDataGoogleLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:189693
