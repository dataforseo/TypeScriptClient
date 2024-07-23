**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantGoogleLanguagesResponseInfo

# Class: MerchantGoogleLanguagesResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantGoogleLanguagesResponseInfo`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleLanguagesResponseInfo(data)

> **new MerchantGoogleLanguagesResponseInfo**(`data`?): [`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleLanguagesResponseInfo`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md)

#### Returns

[`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:175363

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IMerchantGoogleLanguagesResponseInfo`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md).[`cost`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23649

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantGoogleLanguagesResponseInfo`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md).[`status_code`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23642

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantGoogleLanguagesResponseInfo`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md).[`status_message`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23645

***

### tasks?

> **`optional`** **tasks**: [`MerchantGoogleLanguagesTaskInfo`](MerchantGoogleLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[`IMerchantGoogleLanguagesResponseInfo`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md).[`tasks`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md#tasks)

#### Source

main.ts:175359

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IMerchantGoogleLanguagesResponseInfo`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md).[`tasks_count`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23651

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantGoogleLanguagesResponseInfo`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md).[`tasks_error`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23653

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IMerchantGoogleLanguagesResponseInfo`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md).[`time`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23647

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IMerchantGoogleLanguagesResponseInfo`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md).[`version`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23639

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

main.ts:175367

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

main.ts:175389

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:175382
