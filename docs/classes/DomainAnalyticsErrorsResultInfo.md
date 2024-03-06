[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DomainAnalyticsErrorsResultInfo

# Class: DomainAnalyticsErrorsResultInfo

## Implements

- [`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsErrorsResultInfo.md#constructor)

### Properties

- [datetime](DomainAnalyticsErrorsResultInfo.md#datetime)
- [error\_code](DomainAnalyticsErrorsResultInfo.md#error_code)
- [error\_message](DomainAnalyticsErrorsResultInfo.md#error_message)
- [function](DomainAnalyticsErrorsResultInfo.md#function)
- [http\_code](DomainAnalyticsErrorsResultInfo.md#http_code)
- [http\_method](DomainAnalyticsErrorsResultInfo.md#http_method)
- [http\_response](DomainAnalyticsErrorsResultInfo.md#http_response)
- [http\_time](DomainAnalyticsErrorsResultInfo.md#http_time)
- [http\_url](DomainAnalyticsErrorsResultInfo.md#http_url)
- [id](DomainAnalyticsErrorsResultInfo.md#id)

### Methods

- [init](DomainAnalyticsErrorsResultInfo.md#init)
- [toJSON](DomainAnalyticsErrorsResultInfo.md#tojson)
- [fromJS](DomainAnalyticsErrorsResultInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsErrorsResultInfo**(`data?`): [`DomainAnalyticsErrorsResultInfo`](DomainAnalyticsErrorsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsErrorsResultInfo`](../interfaces/IDomainAnalyticsErrorsResultInfo.md) |

#### Returns

[`DomainAnalyticsErrorsResultInfo`](DomainAnalyticsErrorsResultInfo.md)

#### Defined in

[main.ts:71355](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71355)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IDomainAnalyticsErrorsResultInfo](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[datetime](../interfaces/IDomainAnalyticsErrorsResultInfo.md#datetime)

#### Defined in

[main.ts:71331](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71331)

___


### error\_code

• `Optional` **error\_code**: `number`

error code

#### Implementation of

[IDomainAnalyticsErrorsResultInfo](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[error_code](../interfaces/IDomainAnalyticsErrorsResultInfo.md#error_code)

#### Defined in

[main.ts:71335](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71335)

___


### error\_message

• `Optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[IDomainAnalyticsErrorsResultInfo](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[error_message](../interfaces/IDomainAnalyticsErrorsResultInfo.md#error_message)

#### Defined in

[main.ts:71338](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71338)

___


### function

• `Optional` **function**: `string`

corresponding API function

#### Implementation of

[IDomainAnalyticsErrorsResultInfo](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[function](../interfaces/IDomainAnalyticsErrorsResultInfo.md#function)

#### Defined in

[main.ts:71333](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71333)

___


### http\_code

• `Optional` **http\_code**: `number`

HTTP status code

#### Implementation of

[IDomainAnalyticsErrorsResultInfo](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[http_code](../interfaces/IDomainAnalyticsErrorsResultInfo.md#http_code)

#### Defined in

[main.ts:71345](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71345)

___


### http\_method

• `Optional` **http\_method**: `string`

HTTP method

#### Implementation of

[IDomainAnalyticsErrorsResultInfo](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[http_method](../interfaces/IDomainAnalyticsErrorsResultInfo.md#http_method)

#### Defined in

[main.ts:71343](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71343)

___


### http\_response

• `Optional` **http\_response**: `string`

HTTP response
server response

#### Implementation of

[IDomainAnalyticsErrorsResultInfo](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[http_response](../interfaces/IDomainAnalyticsErrorsResultInfo.md#http_response)

#### Defined in

[main.ts:71351](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71351)

___


### http\_time

• `Optional` **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[IDomainAnalyticsErrorsResultInfo](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[http_time](../interfaces/IDomainAnalyticsErrorsResultInfo.md#http_time)

#### Defined in

[main.ts:71348](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71348)

___


### http\_url

• `Optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[IDomainAnalyticsErrorsResultInfo](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[http_url](../interfaces/IDomainAnalyticsErrorsResultInfo.md#http_url)

#### Defined in

[main.ts:71341](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71341)

___


### id

• `Optional` **id**: `string`

id of the task

#### Implementation of

[IDomainAnalyticsErrorsResultInfo](../interfaces/IDomainAnalyticsErrorsResultInfo.md).[id](../interfaces/IDomainAnalyticsErrorsResultInfo.md#id)

#### Defined in

[main.ts:71326](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71326)

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

[main.ts:71364](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71364)

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

[main.ts:71390](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71390)

___


### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsErrorsResultInfo`](DomainAnalyticsErrorsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsErrorsResultInfo`](DomainAnalyticsErrorsResultInfo.md)

#### Defined in

[main.ts:71383](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71383)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")