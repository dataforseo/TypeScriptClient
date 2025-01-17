[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantErrorsResponseInfo

# Class: MerchantErrorsResponseInfo

Defined in: main.ts:184643

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantErrorsResponseInfo`](../interfaces/IMerchantErrorsResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantErrorsResponseInfo()

> **new MerchantErrorsResponseInfo**(`data`?): [`MerchantErrorsResponseInfo`](MerchantErrorsResponseInfo.md)

Defined in: main.ts:184649

#### Parameters

##### data?

[`IMerchantErrorsResponseInfo`](../interfaces/IMerchantErrorsResponseInfo.md)

#### Returns

[`MerchantErrorsResponseInfo`](MerchantErrorsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IMerchantErrorsResponseInfo`](../interfaces/IMerchantErrorsResponseInfo.md).[`cost`](../interfaces/IMerchantErrorsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantErrorsResponseInfo`](../interfaces/IMerchantErrorsResponseInfo.md).[`status_code`](../interfaces/IMerchantErrorsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantErrorsResponseInfo`](../interfaces/IMerchantErrorsResponseInfo.md).[`status_message`](../interfaces/IMerchantErrorsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`MerchantErrorsTaskInfo`](MerchantErrorsTaskInfo.md)[]

Defined in: main.ts:184645

array of tasks

#### Implementation of

[`IMerchantErrorsResponseInfo`](../interfaces/IMerchantErrorsResponseInfo.md).[`tasks`](../interfaces/IMerchantErrorsResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IMerchantErrorsResponseInfo`](../interfaces/IMerchantErrorsResponseInfo.md).[`tasks_count`](../interfaces/IMerchantErrorsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantErrorsResponseInfo`](../interfaces/IMerchantErrorsResponseInfo.md).[`tasks_error`](../interfaces/IMerchantErrorsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IMerchantErrorsResponseInfo`](../interfaces/IMerchantErrorsResponseInfo.md).[`time`](../interfaces/IMerchantErrorsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IMerchantErrorsResponseInfo`](../interfaces/IMerchantErrorsResponseInfo.md).[`version`](../interfaces/IMerchantErrorsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:184653

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

Defined in: main.ts:184675

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantErrorsResponseInfo`](MerchantErrorsResponseInfo.md)

Defined in: main.ts:184668

#### Parameters

##### data

`any`

#### Returns

[`MerchantErrorsResponseInfo`](MerchantErrorsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
