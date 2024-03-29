[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataErrorsResultInfo

# Class: AppDataErrorsResultInfo

## Implements

- [`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataErrorsResultInfo.md#constructor)

### Properties

- [datetime](AppDataErrorsResultInfo.md#datetime)
- [error\_code](AppDataErrorsResultInfo.md#error_code)
- [error\_message](AppDataErrorsResultInfo.md#error_message)
- [function](AppDataErrorsResultInfo.md#function)
- [http\_code](AppDataErrorsResultInfo.md#http_code)
- [http\_method](AppDataErrorsResultInfo.md#http_method)
- [http\_response](AppDataErrorsResultInfo.md#http_response)
- [http\_time](AppDataErrorsResultInfo.md#http_time)
- [http\_url](AppDataErrorsResultInfo.md#http_url)
- [id](AppDataErrorsResultInfo.md#id)

### Methods

- [init](AppDataErrorsResultInfo.md#init)
- [toJSON](AppDataErrorsResultInfo.md#tojson)
- [fromJS](AppDataErrorsResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataErrorsResultInfo**(`data?`): [`AppDataErrorsResultInfo`](AppDataErrorsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataErrorsResultInfo`](../interfaces/IAppDataErrorsResultInfo.md) |

#### Returns

[`AppDataErrorsResultInfo`](AppDataErrorsResultInfo.md)

#### Defined in

[main.ts:176769](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176769)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IAppDataErrorsResultInfo](../interfaces/IAppDataErrorsResultInfo.md).[datetime](../interfaces/IAppDataErrorsResultInfo.md#datetime)

#### Defined in

[main.ts:176745](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176745)

___


### error\_code

• `Optional` **error\_code**: `number`

error code

#### Implementation of

[IAppDataErrorsResultInfo](../interfaces/IAppDataErrorsResultInfo.md).[error_code](../interfaces/IAppDataErrorsResultInfo.md#error_code)

#### Defined in

[main.ts:176749](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176749)

___


### error\_message

• `Optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[IAppDataErrorsResultInfo](../interfaces/IAppDataErrorsResultInfo.md).[error_message](../interfaces/IAppDataErrorsResultInfo.md#error_message)

#### Defined in

[main.ts:176752](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176752)

___


### function

• `Optional` **function**: `string`

corresponding API function

#### Implementation of

[IAppDataErrorsResultInfo](../interfaces/IAppDataErrorsResultInfo.md).[function](../interfaces/IAppDataErrorsResultInfo.md#function)

#### Defined in

[main.ts:176747](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176747)

___


### http\_code

• `Optional` **http\_code**: `number`

HTTP status code

#### Implementation of

[IAppDataErrorsResultInfo](../interfaces/IAppDataErrorsResultInfo.md).[http_code](../interfaces/IAppDataErrorsResultInfo.md#http_code)

#### Defined in

[main.ts:176759](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176759)

___


### http\_method

• `Optional` **http\_method**: `string`

HTTP method

#### Implementation of

[IAppDataErrorsResultInfo](../interfaces/IAppDataErrorsResultInfo.md).[http_method](../interfaces/IAppDataErrorsResultInfo.md#http_method)

#### Defined in

[main.ts:176757](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176757)

___


### http\_response

• `Optional` **http\_response**: `string`

HTTP response
server response

#### Implementation of

[IAppDataErrorsResultInfo](../interfaces/IAppDataErrorsResultInfo.md).[http_response](../interfaces/IAppDataErrorsResultInfo.md#http_response)

#### Defined in

[main.ts:176765](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176765)

___


### http\_time

• `Optional` **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[IAppDataErrorsResultInfo](../interfaces/IAppDataErrorsResultInfo.md).[http_time](../interfaces/IAppDataErrorsResultInfo.md#http_time)

#### Defined in

[main.ts:176762](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176762)

___


### http\_url

• `Optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[IAppDataErrorsResultInfo](../interfaces/IAppDataErrorsResultInfo.md).[http_url](../interfaces/IAppDataErrorsResultInfo.md#http_url)

#### Defined in

[main.ts:176755](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176755)

___


### id

• `Optional` **id**: `string`

id of the task

#### Implementation of

[IAppDataErrorsResultInfo](../interfaces/IAppDataErrorsResultInfo.md).[id](../interfaces/IAppDataErrorsResultInfo.md#id)

#### Defined in

[main.ts:176740](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176740)

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

[main.ts:176778](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176778)

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

[main.ts:176804](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176804)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataErrorsResultInfo`](AppDataErrorsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataErrorsResultInfo`](AppDataErrorsResultInfo.md)

#### Defined in

[main.ts:176797](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176797)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")