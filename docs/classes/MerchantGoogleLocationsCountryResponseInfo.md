[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MerchantGoogleLocationsCountryResponseInfo

# Class: MerchantGoogleLocationsCountryResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantGoogleLocationsCountryResponseInfo`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleLocationsCountryResponseInfo()

> **new MerchantGoogleLocationsCountryResponseInfo**(`data`?): [`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleLocationsCountryResponseInfo`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md)

#### Returns

[`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:177575

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IMerchantGoogleLocationsCountryResponseInfo`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md).[`cost`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md#cost)

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

[`IMerchantGoogleLocationsCountryResponseInfo`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md).[`status_code`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md#status_code)

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

[`IMerchantGoogleLocationsCountryResponseInfo`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md).[`status_message`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23827

***

### tasks?

> `optional` **tasks**: [`MerchantGoogleLocationsCountryTaskInfo`](MerchantGoogleLocationsCountryTaskInfo.md)[]

array of tasks

#### Implementation of

[`IMerchantGoogleLocationsCountryResponseInfo`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md).[`tasks`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md#tasks)

#### Defined in

main.ts:177571

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IMerchantGoogleLocationsCountryResponseInfo`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md).[`tasks_count`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23833

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantGoogleLocationsCountryResponseInfo`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md).[`tasks_error`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23835

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IMerchantGoogleLocationsCountryResponseInfo`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md).[`time`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:23829

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IMerchantGoogleLocationsCountryResponseInfo`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md).[`version`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md#version)

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

main.ts:177579

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

main.ts:177601

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:177594
