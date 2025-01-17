[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleCategoriesResponseInfo

# Class: AppDataGoogleCategoriesResponseInfo

Defined in: main.ts:198669

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataGoogleCategoriesResponseInfo`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleCategoriesResponseInfo()

> **new AppDataGoogleCategoriesResponseInfo**(`data`?): [`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)

Defined in: main.ts:198675

#### Parameters

##### data?

[`IAppDataGoogleCategoriesResponseInfo`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md)

#### Returns

[`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IAppDataGoogleCategoriesResponseInfo`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md).[`cost`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataGoogleCategoriesResponseInfo`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md).[`status_code`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataGoogleCategoriesResponseInfo`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md).[`status_message`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`AppDataGoogleCategoriesTaskInfo`](AppDataGoogleCategoriesTaskInfo.md)[]

Defined in: main.ts:198671

array of tasks

#### Implementation of

[`IAppDataGoogleCategoriesResponseInfo`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md).[`tasks`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IAppDataGoogleCategoriesResponseInfo`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md).[`tasks_count`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataGoogleCategoriesResponseInfo`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md).[`tasks_error`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IAppDataGoogleCategoriesResponseInfo`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md).[`time`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IAppDataGoogleCategoriesResponseInfo`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md).[`version`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:198679

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

Defined in: main.ts:198701

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)

Defined in: main.ts:198694

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
