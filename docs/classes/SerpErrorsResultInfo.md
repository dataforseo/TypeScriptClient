[Documentation](../README.md) / [Exports](../modules.md) / SerpErrorsResultInfo

# Class: SerpErrorsResultInfo

## Implements

- [`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpErrorsResultInfo.md#constructor)

### Properties

- [datetime](SerpErrorsResultInfo.md#datetime)
- [error\_code](SerpErrorsResultInfo.md#error_code)
- [error\_message](SerpErrorsResultInfo.md#error_message)
- [function](SerpErrorsResultInfo.md#function)
- [http\_code](SerpErrorsResultInfo.md#http_code)
- [http\_method](SerpErrorsResultInfo.md#http_method)
- [http\_response](SerpErrorsResultInfo.md#http_response)
- [http\_time](SerpErrorsResultInfo.md#http_time)
- [http\_url](SerpErrorsResultInfo.md#http_url)
- [id](SerpErrorsResultInfo.md#id)

### Methods

- [init](SerpErrorsResultInfo.md#init)
- [toJSON](SerpErrorsResultInfo.md#tojson)
- [fromJS](SerpErrorsResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpErrorsResultInfo**(`data?`): [`SerpErrorsResultInfo`](SerpErrorsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpErrorsResultInfo`](../interfaces/ISerpErrorsResultInfo.md) |

#### Returns

[`SerpErrorsResultInfo`](SerpErrorsResultInfo.md)

#### Defined in

main.ts:23720

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpErrorsResultInfo](../interfaces/ISerpErrorsResultInfo.md).[datetime](../interfaces/ISerpErrorsResultInfo.md#datetime)

#### Defined in

main.ts:23696

___

### error\_code

• `Optional` **error\_code**: `number`

error code

#### Implementation of

[ISerpErrorsResultInfo](../interfaces/ISerpErrorsResultInfo.md).[error_code](../interfaces/ISerpErrorsResultInfo.md#error_code)

#### Defined in

main.ts:23700

___

### error\_message

• `Optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[ISerpErrorsResultInfo](../interfaces/ISerpErrorsResultInfo.md).[error_message](../interfaces/ISerpErrorsResultInfo.md#error_message)

#### Defined in

main.ts:23703

___

### function

• `Optional` **function**: `string`

corresponding API function

#### Implementation of

[ISerpErrorsResultInfo](../interfaces/ISerpErrorsResultInfo.md).[function](../interfaces/ISerpErrorsResultInfo.md#function)

#### Defined in

main.ts:23698

___

### http\_code

• `Optional` **http\_code**: `number`

HTTP status code

#### Implementation of

[ISerpErrorsResultInfo](../interfaces/ISerpErrorsResultInfo.md).[http_code](../interfaces/ISerpErrorsResultInfo.md#http_code)

#### Defined in

main.ts:23710

___

### http\_method

• `Optional` **http\_method**: `string`

HTTP method

#### Implementation of

[ISerpErrorsResultInfo](../interfaces/ISerpErrorsResultInfo.md).[http_method](../interfaces/ISerpErrorsResultInfo.md#http_method)

#### Defined in

main.ts:23708

___

### http\_response

• `Optional` **http\_response**: `string`

HTTP response
server response

#### Implementation of

[ISerpErrorsResultInfo](../interfaces/ISerpErrorsResultInfo.md).[http_response](../interfaces/ISerpErrorsResultInfo.md#http_response)

#### Defined in

main.ts:23716

___

### http\_time

• `Optional` **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[ISerpErrorsResultInfo](../interfaces/ISerpErrorsResultInfo.md).[http_time](../interfaces/ISerpErrorsResultInfo.md#http_time)

#### Defined in

main.ts:23713

___

### http\_url

• `Optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[ISerpErrorsResultInfo](../interfaces/ISerpErrorsResultInfo.md).[http_url](../interfaces/ISerpErrorsResultInfo.md#http_url)

#### Defined in

main.ts:23706

___

### id

• `Optional` **id**: `string`

id of the task

#### Implementation of

[ISerpErrorsResultInfo](../interfaces/ISerpErrorsResultInfo.md).[id](../interfaces/ISerpErrorsResultInfo.md#id)

#### Defined in

main.ts:23691

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

main.ts:23729

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

main.ts:23755

___

### fromJS

▸ **fromJS**(`data`): [`SerpErrorsResultInfo`](SerpErrorsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpErrorsResultInfo`](SerpErrorsResultInfo.md)

#### Defined in

main.ts:23748
