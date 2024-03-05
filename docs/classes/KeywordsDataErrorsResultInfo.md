[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataErrorsResultInfo

# Class: KeywordsDataErrorsResultInfo

## Implements

- [`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataErrorsResultInfo.md#constructor)

### Properties

- [datetime](KeywordsDataErrorsResultInfo.md#datetime)
- [error\_code](KeywordsDataErrorsResultInfo.md#error_code)
- [error\_message](KeywordsDataErrorsResultInfo.md#error_message)
- [function](KeywordsDataErrorsResultInfo.md#function)
- [http\_code](KeywordsDataErrorsResultInfo.md#http_code)
- [http\_method](KeywordsDataErrorsResultInfo.md#http_method)
- [http\_response](KeywordsDataErrorsResultInfo.md#http_response)
- [http\_time](KeywordsDataErrorsResultInfo.md#http_time)
- [http\_url](KeywordsDataErrorsResultInfo.md#http_url)
- [id](KeywordsDataErrorsResultInfo.md#id)

### Methods

- [init](KeywordsDataErrorsResultInfo.md#init)
- [toJSON](KeywordsDataErrorsResultInfo.md#tojson)
- [fromJS](KeywordsDataErrorsResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataErrorsResultInfo**(`data?`): [`KeywordsDataErrorsResultInfo`](KeywordsDataErrorsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataErrorsResultInfo`](../interfaces/IKeywordsDataErrorsResultInfo.md) |

#### Returns

[`KeywordsDataErrorsResultInfo`](KeywordsDataErrorsResultInfo.md)

#### Defined in

[main.ts:112711](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112711)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IKeywordsDataErrorsResultInfo](../interfaces/IKeywordsDataErrorsResultInfo.md).[datetime](../interfaces/IKeywordsDataErrorsResultInfo.md#datetime)

#### Defined in

[main.ts:112687](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112687)

___

### error\_code

• `Optional` **error\_code**: `number`

error code

#### Implementation of

[IKeywordsDataErrorsResultInfo](../interfaces/IKeywordsDataErrorsResultInfo.md).[error_code](../interfaces/IKeywordsDataErrorsResultInfo.md#error_code)

#### Defined in

[main.ts:112691](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112691)

___

### error\_message

• `Optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[IKeywordsDataErrorsResultInfo](../interfaces/IKeywordsDataErrorsResultInfo.md).[error_message](../interfaces/IKeywordsDataErrorsResultInfo.md#error_message)

#### Defined in

[main.ts:112694](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112694)

___

### function

• `Optional` **function**: `string`

corresponding API function

#### Implementation of

[IKeywordsDataErrorsResultInfo](../interfaces/IKeywordsDataErrorsResultInfo.md).[function](../interfaces/IKeywordsDataErrorsResultInfo.md#function)

#### Defined in

[main.ts:112689](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112689)

___

### http\_code

• `Optional` **http\_code**: `number`

HTTP status code

#### Implementation of

[IKeywordsDataErrorsResultInfo](../interfaces/IKeywordsDataErrorsResultInfo.md).[http_code](../interfaces/IKeywordsDataErrorsResultInfo.md#http_code)

#### Defined in

[main.ts:112701](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112701)

___

### http\_method

• `Optional` **http\_method**: `string`

HTTP method

#### Implementation of

[IKeywordsDataErrorsResultInfo](../interfaces/IKeywordsDataErrorsResultInfo.md).[http_method](../interfaces/IKeywordsDataErrorsResultInfo.md#http_method)

#### Defined in

[main.ts:112699](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112699)

___

### http\_response

• `Optional` **http\_response**: `string`

HTTP response
server response

#### Implementation of

[IKeywordsDataErrorsResultInfo](../interfaces/IKeywordsDataErrorsResultInfo.md).[http_response](../interfaces/IKeywordsDataErrorsResultInfo.md#http_response)

#### Defined in

[main.ts:112707](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112707)

___

### http\_time

• `Optional` **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[IKeywordsDataErrorsResultInfo](../interfaces/IKeywordsDataErrorsResultInfo.md).[http_time](../interfaces/IKeywordsDataErrorsResultInfo.md#http_time)

#### Defined in

[main.ts:112704](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112704)

___

### http\_url

• `Optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[IKeywordsDataErrorsResultInfo](../interfaces/IKeywordsDataErrorsResultInfo.md).[http_url](../interfaces/IKeywordsDataErrorsResultInfo.md#http_url)

#### Defined in

[main.ts:112697](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112697)

___

### id

• `Optional` **id**: `string`

id of the task

#### Implementation of

[IKeywordsDataErrorsResultInfo](../interfaces/IKeywordsDataErrorsResultInfo.md).[id](../interfaces/IKeywordsDataErrorsResultInfo.md#id)

#### Defined in

[main.ts:112682](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112682)

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

[main.ts:112720](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112720)

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

[main.ts:112746](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112746)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataErrorsResultInfo`](KeywordsDataErrorsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataErrorsResultInfo`](KeywordsDataErrorsResultInfo.md)

#### Defined in

[main.ts:112739](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112739)
