[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleLanguagesResponseInfo

# Class: AppDataAppleLanguagesResponseInfo

Defined in: main.ts:205715

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleLanguagesResponseInfo()

> **new AppDataAppleLanguagesResponseInfo**(`data`?): [`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)

Defined in: main.ts:205721

#### Parameters

##### data?

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md)

#### Returns

[`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md).[`cost`](../interfaces/IAppDataAppleLanguagesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md).[`status_code`](../interfaces/IAppDataAppleLanguagesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md).[`status_message`](../interfaces/IAppDataAppleLanguagesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`AppDataAppleLanguagesTaskInfo`](AppDataAppleLanguagesTaskInfo.md)[]

Defined in: main.ts:205717

array of tasks

#### Implementation of

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md).[`tasks`](../interfaces/IAppDataAppleLanguagesResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md).[`tasks_count`](../interfaces/IAppDataAppleLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md).[`tasks_error`](../interfaces/IAppDataAppleLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md).[`time`](../interfaces/IAppDataAppleLanguagesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IAppDataAppleLanguagesResponseInfo`](../interfaces/IAppDataAppleLanguagesResponseInfo.md).[`version`](../interfaces/IAppDataAppleLanguagesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:205725

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:205747

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)

Defined in: main.ts:205740

#### Parameters

##### data

`any`

#### Returns

[`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
