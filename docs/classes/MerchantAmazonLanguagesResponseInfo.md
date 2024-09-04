[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MerchantAmazonLanguagesResponseInfo

# Class: MerchantAmazonLanguagesResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantAmazonLanguagesResponseInfo`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonLanguagesResponseInfo()

> **new MerchantAmazonLanguagesResponseInfo**(`data`?): [`MerchantAmazonLanguagesResponseInfo`](MerchantAmazonLanguagesResponseInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonLanguagesResponseInfo`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md)

#### Returns

[`MerchantAmazonLanguagesResponseInfo`](MerchantAmazonLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:184115

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IMerchantAmazonLanguagesResponseInfo`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md).[`cost`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:23831

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantAmazonLanguagesResponseInfo`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md).[`status_code`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:23824

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantAmazonLanguagesResponseInfo`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md).[`status_message`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23827

***

### tasks?

> `optional` **tasks**: [`MerchantAmazonLanguagesTaskInfo`](MerchantAmazonLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[`IMerchantAmazonLanguagesResponseInfo`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md).[`tasks`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md#tasks)

#### Defined in

main.ts:184111

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IMerchantAmazonLanguagesResponseInfo`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md).[`tasks_count`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23833

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantAmazonLanguagesResponseInfo`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md).[`tasks_error`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23835

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IMerchantAmazonLanguagesResponseInfo`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md).[`time`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:23829

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IMerchantAmazonLanguagesResponseInfo`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md).[`version`](../interfaces/IMerchantAmazonLanguagesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:23821

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

main.ts:184119

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

main.ts:184141

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonLanguagesResponseInfo`](MerchantAmazonLanguagesResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonLanguagesResponseInfo`](MerchantAmazonLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:184134
