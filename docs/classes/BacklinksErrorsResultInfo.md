[Documentation](../README.md) / [Exports](../modules.md) / BacklinksErrorsResultInfo

# Class: BacklinksErrorsResultInfo

## Implements

- [`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksErrorsResultInfo.md#constructor)

### Properties

- [datetime](BacklinksErrorsResultInfo.md#datetime)
- [error\_code](BacklinksErrorsResultInfo.md#error_code)
- [error\_message](BacklinksErrorsResultInfo.md#error_message)
- [function](BacklinksErrorsResultInfo.md#function)
- [http\_code](BacklinksErrorsResultInfo.md#http_code)
- [http\_method](BacklinksErrorsResultInfo.md#http_method)
- [http\_response](BacklinksErrorsResultInfo.md#http_response)
- [http\_time](BacklinksErrorsResultInfo.md#http_time)
- [http\_url](BacklinksErrorsResultInfo.md#http_url)
- [id](BacklinksErrorsResultInfo.md#id)

### Methods

- [init](BacklinksErrorsResultInfo.md#init)
- [toJSON](BacklinksErrorsResultInfo.md#tojson)
- [fromJS](BacklinksErrorsResultInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksErrorsResultInfo**(`data?`): [`BacklinksErrorsResultInfo`](BacklinksErrorsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksErrorsResultInfo`](../interfaces/IBacklinksErrorsResultInfo.md) |

#### Returns

[`BacklinksErrorsResultInfo`](BacklinksErrorsResultInfo.md)

#### Defined in

main.ts:128575

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBacklinksErrorsResultInfo](../interfaces/IBacklinksErrorsResultInfo.md).[datetime](../interfaces/IBacklinksErrorsResultInfo.md#datetime)

#### Defined in

main.ts:128552

___

### error\_code

• `Optional` **error\_code**: `number`

error code

#### Implementation of

[IBacklinksErrorsResultInfo](../interfaces/IBacklinksErrorsResultInfo.md).[error_code](../interfaces/IBacklinksErrorsResultInfo.md#error_code)

#### Defined in

main.ts:128556

___

### error\_message

• `Optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[IBacklinksErrorsResultInfo](../interfaces/IBacklinksErrorsResultInfo.md).[error_message](../interfaces/IBacklinksErrorsResultInfo.md#error_message)

#### Defined in

main.ts:128559

___

### function

• `Optional` **function**: `string`

corresponding API function

#### Implementation of

[IBacklinksErrorsResultInfo](../interfaces/IBacklinksErrorsResultInfo.md).[function](../interfaces/IBacklinksErrorsResultInfo.md#function)

#### Defined in

main.ts:128554

___

### http\_code

• `Optional` **http\_code**: `number`

HTTP status code

#### Implementation of

[IBacklinksErrorsResultInfo](../interfaces/IBacklinksErrorsResultInfo.md).[http_code](../interfaces/IBacklinksErrorsResultInfo.md#http_code)

#### Defined in

main.ts:128566

___

### http\_method

• `Optional` **http\_method**: `string`

HTTP method

#### Implementation of

[IBacklinksErrorsResultInfo](../interfaces/IBacklinksErrorsResultInfo.md).[http_method](../interfaces/IBacklinksErrorsResultInfo.md#http_method)

#### Defined in

main.ts:128564

___

### http\_response

• `Optional` **http\_response**: `string`

HTTP response
server response

#### Implementation of

[IBacklinksErrorsResultInfo](../interfaces/IBacklinksErrorsResultInfo.md).[http_response](../interfaces/IBacklinksErrorsResultInfo.md#http_response)

#### Defined in

main.ts:128571

___

### http\_time

• `Optional` **http\_time**: `number`

time taken by HTTP request

#### Implementation of

[IBacklinksErrorsResultInfo](../interfaces/IBacklinksErrorsResultInfo.md).[http_time](../interfaces/IBacklinksErrorsResultInfo.md#http_time)

#### Defined in

main.ts:128568

___

### http\_url

• `Optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call

#### Implementation of

[IBacklinksErrorsResultInfo](../interfaces/IBacklinksErrorsResultInfo.md).[http_url](../interfaces/IBacklinksErrorsResultInfo.md#http_url)

#### Defined in

main.ts:128562

___

### id

• `Optional` **id**: `string`

id of the task

#### Implementation of

[IBacklinksErrorsResultInfo](../interfaces/IBacklinksErrorsResultInfo.md).[id](../interfaces/IBacklinksErrorsResultInfo.md#id)

#### Defined in

main.ts:128547

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:128584

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:128610

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksErrorsResultInfo`](BacklinksErrorsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksErrorsResultInfo`](BacklinksErrorsResultInfo.md)

#### Defined in

main.ts:128603
