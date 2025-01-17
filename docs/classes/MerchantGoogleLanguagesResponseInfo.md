[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleLanguagesResponseInfo

# Class: MerchantGoogleLanguagesResponseInfo

Defined in: main.ts:184809

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantGoogleLanguagesResponseInfo`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleLanguagesResponseInfo()

> **new MerchantGoogleLanguagesResponseInfo**(`data`?): [`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)

Defined in: main.ts:184815

#### Parameters

##### data?

[`IMerchantGoogleLanguagesResponseInfo`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md)

#### Returns

[`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IMerchantGoogleLanguagesResponseInfo`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md).[`cost`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantGoogleLanguagesResponseInfo`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md).[`status_code`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantGoogleLanguagesResponseInfo`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md).[`status_message`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`MerchantGoogleLanguagesTaskInfo`](MerchantGoogleLanguagesTaskInfo.md)[]

Defined in: main.ts:184811

array of tasks

#### Implementation of

[`IMerchantGoogleLanguagesResponseInfo`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md).[`tasks`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IMerchantGoogleLanguagesResponseInfo`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md).[`tasks_count`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantGoogleLanguagesResponseInfo`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md).[`tasks_error`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IMerchantGoogleLanguagesResponseInfo`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md).[`time`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IMerchantGoogleLanguagesResponseInfo`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md).[`version`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:184819

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

Defined in: main.ts:184841

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)

Defined in: main.ts:184834

#### Parameters

##### data

`any`

#### Returns

[`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
