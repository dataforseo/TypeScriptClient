[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleProductInfoTaskGetAdvancedResponseInfo

# Class: MerchantGoogleProductInfoTaskGetAdvancedResponseInfo

Defined in: main.ts:190941

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductInfoTaskGetAdvancedResponseInfo()

> **new MerchantGoogleProductInfoTaskGetAdvancedResponseInfo**(`data`?): [`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:190947

#### Parameters

##### data?

[`IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)

#### Returns

[`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`MerchantGoogleProductInfoTaskGetAdvancedTaskInfo`](MerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md)[]

Defined in: main.ts:190943

array of tasks

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:190951

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

Defined in: main.ts:190973

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:190966

#### Parameters

##### data

`any`

#### Returns

[`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
