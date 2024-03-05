[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantErrorsResultInfo

# Class: MerchantErrorsResultInfo

## Implements

- [`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantErrorsResultInfo.md#constructor)

### Properties

- [datetime](MerchantErrorsResultInfo.md#datetime)
- [error\_code](MerchantErrorsResultInfo.md#error_code)
- [error\_message](MerchantErrorsResultInfo.md#error_message)
- [function](MerchantErrorsResultInfo.md#function)
- [http\_code](MerchantErrorsResultInfo.md#http_code)
- [http\_method](MerchantErrorsResultInfo.md#http_method)
- [http\_response](MerchantErrorsResultInfo.md#http_response)
- [http\_time](MerchantErrorsResultInfo.md#http_time)
- [http\_url](MerchantErrorsResultInfo.md#http_url)
- [id](MerchantErrorsResultInfo.md#id)

### Methods

- [init](MerchantErrorsResultInfo.md#init)
- [toJSON](MerchantErrorsResultInfo.md#tojson)
- [fromJS](MerchantErrorsResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantErrorsResultInfo**(`data?`): [`MerchantErrorsResultInfo`](MerchantErrorsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantErrorsResultInfo`](../interfaces/IMerchantErrorsResultInfo.md) |

#### Returns

[`MerchantErrorsResultInfo`](MerchantErrorsResultInfo.md)

#### Defined in

[main.ts:163144](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163144)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IMerchantErrorsResultInfo](../interfaces/IMerchantErrorsResultInfo.md).[datetime](../interfaces/IMerchantErrorsResultInfo.md#datetime)

#### Defined in

[main.ts:163120](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163120)

___

### error\_code

• `Optional` **error\_code**: `number`

error code

#### Implementation of

[IMerchantErrorsResultInfo](../interfaces/IMerchantErrorsResultInfo.md).[error_code](../interfaces/IMerchantErrorsResultInfo.md#error_code)

#### Defined in

[main.ts:163124](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163124)

___

### error\_message

• `Optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[IMerchantErrorsResultInfo](../interfaces/IMerchantErrorsResultInfo.md).[error_message](../interfaces/IMerchantErrorsResultInfo.md#error_message)

#### Defined in

[main.ts:163127](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163127)

___

### function

• `Optional` **function**: `string`

corresponding API function

#### Implementation of

[IMerchantErrorsResultInfo](../interfaces/IMerchantErrorsResultInfo.md).[function](../interfaces/IMerchantErrorsResultInfo.md#function)

#### Defined in

[main.ts:163122](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163122)

___

### http\_code

• `Optional` **http\_code**: `number`

HTTP status code

#### Implementation of

[IMerchantErrorsResultInfo](../interfaces/IMerchantErrorsResultInfo.md).[http_code](../interfaces/IMerchantErrorsResultInfo.md#http_code)

#### Defined in

[main.ts:163134](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163134)

___

### http\_method

• `Optional` **http\_method**: `string`

HTTP method

#### Implementation of

[IMerchantErrorsResultInfo](../interfaces/IMerchantErrorsResultInfo.md).[http_method](../interfaces/IMerchantErrorsResultInfo.md#http_method)

#### Defined in

[main.ts:163132](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163132)

___

### http\_response

• `Optional` **http\_response**: `string`

HTTP response
server response

#### Implementation of

[IMerchantErrorsResultInfo](../interfaces/IMerchantErrorsResultInfo.md).[http_response](../interfaces/IMerchantErrorsResultInfo.md#http_response)

#### Defined in

[main.ts:163140](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163140)

___

### http\_time

• `Optional` **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[IMerchantErrorsResultInfo](../interfaces/IMerchantErrorsResultInfo.md).[http_time](../interfaces/IMerchantErrorsResultInfo.md#http_time)

#### Defined in

[main.ts:163137](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163137)

___

### http\_url

• `Optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[IMerchantErrorsResultInfo](../interfaces/IMerchantErrorsResultInfo.md).[http_url](../interfaces/IMerchantErrorsResultInfo.md#http_url)

#### Defined in

[main.ts:163130](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163130)

___

### id

• `Optional` **id**: `string`

id of the task

#### Implementation of

[IMerchantErrorsResultInfo](../interfaces/IMerchantErrorsResultInfo.md).[id](../interfaces/IMerchantErrorsResultInfo.md#id)

#### Defined in

[main.ts:163115](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163115)

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

[main.ts:163153](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163153)

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

[main.ts:163179](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163179)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantErrorsResultInfo`](MerchantErrorsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantErrorsResultInfo`](MerchantErrorsResultInfo.md)

#### Defined in

[main.ts:163172](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163172)
