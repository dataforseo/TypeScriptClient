[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleLanguagesResponseInfo

# Class: BusinessDataGoogleLanguagesResponseInfo

Defined in: main.ts:212933

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleLanguagesResponseInfo`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleLanguagesResponseInfo()

> **new BusinessDataGoogleLanguagesResponseInfo**(`data`?): [`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)

Defined in: main.ts:212939

#### Parameters

##### data?

[`IBusinessDataGoogleLanguagesResponseInfo`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md)

#### Returns

[`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleLanguagesResponseInfo`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataGoogleLanguagesResponseInfo`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataGoogleLanguagesResponseInfo`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataGoogleLanguagesTaskInfo`](BusinessDataGoogleLanguagesTaskInfo.md)[]

Defined in: main.ts:212935

array of tasks

#### Implementation of

[`IBusinessDataGoogleLanguagesResponseInfo`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleLanguagesResponseInfo`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleLanguagesResponseInfo`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleLanguagesResponseInfo`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataGoogleLanguagesResponseInfo`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:212943

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

Defined in: main.ts:212965

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)

Defined in: main.ts:212958

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
