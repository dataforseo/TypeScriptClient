**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataAppleLanguagesResponseInfo

# Class: AppDataAppleLanguagesResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleLanguagesResponseInfo(data)

> **new AppDataAppleLanguagesResponseInfo**(`data`?): [`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)

#### Parameters

• **data?**: [`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md)

#### Returns

[`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:190364

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md).[`cost`](../interfaces/IAppDataAppleLanguagesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23321

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md).[`status_code`](../interfaces/IAppDataAppleLanguagesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23314

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md).[`status_message`](../interfaces/IAppDataAppleLanguagesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23317

***

### tasks?

> **`optional`** **tasks**: [`AppDataAppleLanguagesTaskInfo`](AppDataAppleLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md).[`tasks`](../interfaces/IAppDataAppleLanguagesResponseInfo.md#tasks)

#### Source

main.ts:190360

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md).[`tasks_count`](../interfaces/IAppDataAppleLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23323

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md).[`tasks_error`](../interfaces/IAppDataAppleLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23325

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md).[`time`](../interfaces/IAppDataAppleLanguagesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23319

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md).[`version`](../interfaces/IAppDataAppleLanguagesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23311

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

main.ts:190368

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

main.ts:190390

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:190383
