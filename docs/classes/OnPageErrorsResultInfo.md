[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageErrorsResultInfo

# Class: OnPageErrorsResultInfo

## Implements

- [`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageErrorsResultInfo.md#constructor)

### Properties

- [datetime](OnPageErrorsResultInfo.md#datetime)
- [error\_code](OnPageErrorsResultInfo.md#error_code)
- [error\_message](OnPageErrorsResultInfo.md#error_message)
- [function](OnPageErrorsResultInfo.md#function)
- [http\_code](OnPageErrorsResultInfo.md#http_code)
- [http\_method](OnPageErrorsResultInfo.md#http_method)
- [http\_response](OnPageErrorsResultInfo.md#http_response)
- [http\_time](OnPageErrorsResultInfo.md#http_time)
- [http\_url](OnPageErrorsResultInfo.md#http_url)
- [id](OnPageErrorsResultInfo.md#id)

### Methods

- [init](OnPageErrorsResultInfo.md#init)
- [toJSON](OnPageErrorsResultInfo.md#tojson)
- [fromJS](OnPageErrorsResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageErrorsResultInfo**(`data?`): [`OnPageErrorsResultInfo`](OnPageErrorsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md) |

#### Returns

[`OnPageErrorsResultInfo`](OnPageErrorsResultInfo.md)

#### Defined in

[main.ts:141928](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141928)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IOnPageErrorsResultInfo](../interfaces/IOnPageErrorsResultInfo.md).[datetime](../interfaces/IOnPageErrorsResultInfo.md#datetime)

#### Defined in

[main.ts:141904](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141904)

___


### error\_code

• `Optional` **error\_code**: `number`

error code

#### Implementation of

[IOnPageErrorsResultInfo](../interfaces/IOnPageErrorsResultInfo.md).[error_code](../interfaces/IOnPageErrorsResultInfo.md#error_code)

#### Defined in

[main.ts:141908](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141908)

___


### error\_message

• `Optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[IOnPageErrorsResultInfo](../interfaces/IOnPageErrorsResultInfo.md).[error_message](../interfaces/IOnPageErrorsResultInfo.md#error_message)

#### Defined in

[main.ts:141911](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141911)

___


### function

• `Optional` **function**: `string`

corresponding API function

#### Implementation of

[IOnPageErrorsResultInfo](../interfaces/IOnPageErrorsResultInfo.md).[function](../interfaces/IOnPageErrorsResultInfo.md#function)

#### Defined in

[main.ts:141906](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141906)

___


### http\_code

• `Optional` **http\_code**: `number`

HTTP status code

#### Implementation of

[IOnPageErrorsResultInfo](../interfaces/IOnPageErrorsResultInfo.md).[http_code](../interfaces/IOnPageErrorsResultInfo.md#http_code)

#### Defined in

[main.ts:141918](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141918)

___


### http\_method

• `Optional` **http\_method**: `string`

HTTP method

#### Implementation of

[IOnPageErrorsResultInfo](../interfaces/IOnPageErrorsResultInfo.md).[http_method](../interfaces/IOnPageErrorsResultInfo.md#http_method)

#### Defined in

[main.ts:141916](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141916)

___


### http\_response

• `Optional` **http\_response**: `string`

HTTP response
server response

#### Implementation of

[IOnPageErrorsResultInfo](../interfaces/IOnPageErrorsResultInfo.md).[http_response](../interfaces/IOnPageErrorsResultInfo.md#http_response)

#### Defined in

[main.ts:141924](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141924)

___


### http\_time

• `Optional` **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[IOnPageErrorsResultInfo](../interfaces/IOnPageErrorsResultInfo.md).[http_time](../interfaces/IOnPageErrorsResultInfo.md#http_time)

#### Defined in

[main.ts:141921](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141921)

___


### http\_url

• `Optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[IOnPageErrorsResultInfo](../interfaces/IOnPageErrorsResultInfo.md).[http_url](../interfaces/IOnPageErrorsResultInfo.md#http_url)

#### Defined in

[main.ts:141914](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141914)

___


### id

• `Optional` **id**: `string`

id of the task

#### Implementation of

[IOnPageErrorsResultInfo](../interfaces/IOnPageErrorsResultInfo.md).[id](../interfaces/IOnPageErrorsResultInfo.md#id)

#### Defined in

[main.ts:141899](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141899)

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

[main.ts:141937](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141937)

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

[main.ts:141963](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141963)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageErrorsResultInfo`](OnPageErrorsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageErrorsResultInfo`](OnPageErrorsResultInfo.md)

#### Defined in

[main.ts:141956](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141956)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")