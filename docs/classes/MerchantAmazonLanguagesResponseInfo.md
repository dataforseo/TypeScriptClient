[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonLanguagesResponseInfo

# Class: MerchantAmazonLanguagesResponseInfo

Defined in: main.ts:192079

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantAmazonLanguagesResponseInfo`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonLanguagesResponseInfo()

> **new MerchantAmazonLanguagesResponseInfo**(`data`?): [`MerchantAmazonLanguagesResponseInfo`](MerchantAmazonLanguagesResponseInfo.md)

Defined in: main.ts:192085

#### Parameters

##### data?

[`IMerchantAmazonLanguagesResponseInfo`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md)

#### Returns

[`MerchantAmazonLanguagesResponseInfo`](MerchantAmazonLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IMerchantAmazonLanguagesResponseInfo`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md).[`cost`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantAmazonLanguagesResponseInfo`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md).[`status_code`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantAmazonLanguagesResponseInfo`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md).[`status_message`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`MerchantAmazonLanguagesTaskInfo`](MerchantAmazonLanguagesTaskInfo.md)[]

Defined in: main.ts:192081

array of tasks

#### Implementation of

[`IMerchantAmazonLanguagesResponseInfo`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md).[`tasks`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IMerchantAmazonLanguagesResponseInfo`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md).[`tasks_count`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantAmazonLanguagesResponseInfo`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md).[`tasks_error`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IMerchantAmazonLanguagesResponseInfo`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md).[`time`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IMerchantAmazonLanguagesResponseInfo`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md).[`version`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:192089

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

Defined in: main.ts:192111

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonLanguagesResponseInfo`](MerchantAmazonLanguagesResponseInfo.md)

Defined in: main.ts:192104

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonLanguagesResponseInfo`](MerchantAmazonLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
