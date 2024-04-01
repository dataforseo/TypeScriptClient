[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataErrorsResultInfo

# Class: BusinessDataErrorsResultInfo

## Implements

- [`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataErrorsResultInfo.md#constructor)

### Properties

- [datetime](BusinessDataErrorsResultInfo.md#datetime)
- [error\_code](BusinessDataErrorsResultInfo.md#error_code)
- [error\_message](BusinessDataErrorsResultInfo.md#error_message)
- [function](BusinessDataErrorsResultInfo.md#function)
- [http\_code](BusinessDataErrorsResultInfo.md#http_code)
- [http\_method](BusinessDataErrorsResultInfo.md#http_method)
- [http\_response](BusinessDataErrorsResultInfo.md#http_response)
- [http\_time](BusinessDataErrorsResultInfo.md#http_time)
- [http\_url](BusinessDataErrorsResultInfo.md#http_url)
- [id](BusinessDataErrorsResultInfo.md#id)

### Methods

- [init](BusinessDataErrorsResultInfo.md#init)
- [toJSON](BusinessDataErrorsResultInfo.md#tojson)
- [fromJS](BusinessDataErrorsResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataErrorsResultInfo**(`data?`): [`BusinessDataErrorsResultInfo`](BusinessDataErrorsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataErrorsResultInfo`](../interfaces/IBusinessDataErrorsResultInfo.md) |

#### Returns

[`BusinessDataErrorsResultInfo`](BusinessDataErrorsResultInfo.md)

#### Defined in

main.ts:193088

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBusinessDataErrorsResultInfo](../interfaces/IBusinessDataErrorsResultInfo.md).[datetime](../interfaces/IBusinessDataErrorsResultInfo.md#datetime)

#### Defined in

main.ts:193064

___

### error\_code

• `Optional` **error\_code**: `number`

error code

#### Implementation of

[IBusinessDataErrorsResultInfo](../interfaces/IBusinessDataErrorsResultInfo.md).[error_code](../interfaces/IBusinessDataErrorsResultInfo.md#error_code)

#### Defined in

main.ts:193068

___

### error\_message

• `Optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[IBusinessDataErrorsResultInfo](../interfaces/IBusinessDataErrorsResultInfo.md).[error_message](../interfaces/IBusinessDataErrorsResultInfo.md#error_message)

#### Defined in

main.ts:193071

___

### function

• `Optional` **function**: `string`

corresponding API function

#### Implementation of

[IBusinessDataErrorsResultInfo](../interfaces/IBusinessDataErrorsResultInfo.md).[function](../interfaces/IBusinessDataErrorsResultInfo.md#function)

#### Defined in

main.ts:193066

___

### http\_code

• `Optional` **http\_code**: `number`

HTTP status code

#### Implementation of

[IBusinessDataErrorsResultInfo](../interfaces/IBusinessDataErrorsResultInfo.md).[http_code](../interfaces/IBusinessDataErrorsResultInfo.md#http_code)

#### Defined in

main.ts:193078

___

### http\_method

• `Optional` **http\_method**: `string`

HTTP method

#### Implementation of

[IBusinessDataErrorsResultInfo](../interfaces/IBusinessDataErrorsResultInfo.md).[http_method](../interfaces/IBusinessDataErrorsResultInfo.md#http_method)

#### Defined in

main.ts:193076

___

### http\_response

• `Optional` **http\_response**: `string`

HTTP response
server response

#### Implementation of

[IBusinessDataErrorsResultInfo](../interfaces/IBusinessDataErrorsResultInfo.md).[http_response](../interfaces/IBusinessDataErrorsResultInfo.md#http_response)

#### Defined in

main.ts:193084

___

### http\_time

• `Optional` **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[IBusinessDataErrorsResultInfo](../interfaces/IBusinessDataErrorsResultInfo.md).[http_time](../interfaces/IBusinessDataErrorsResultInfo.md#http_time)

#### Defined in

main.ts:193081

___

### http\_url

• `Optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[IBusinessDataErrorsResultInfo](../interfaces/IBusinessDataErrorsResultInfo.md).[http_url](../interfaces/IBusinessDataErrorsResultInfo.md#http_url)

#### Defined in

main.ts:193074

___

### id

• `Optional` **id**: `string`

id of the task

#### Implementation of

[IBusinessDataErrorsResultInfo](../interfaces/IBusinessDataErrorsResultInfo.md).[id](../interfaces/IBusinessDataErrorsResultInfo.md#id)

#### Defined in

main.ts:193059

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

main.ts:193097

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

main.ts:193123

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataErrorsResultInfo`](BusinessDataErrorsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataErrorsResultInfo`](BusinessDataErrorsResultInfo.md)

#### Defined in

main.ts:193116
