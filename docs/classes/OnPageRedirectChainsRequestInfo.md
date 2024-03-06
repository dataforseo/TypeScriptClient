[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageRedirectChainsRequestInfo

# Class: OnPageRedirectChainsRequestInfo

## Implements

- [`IOnPageRedirectChainsRequestInfo`](../interfaces/IOnPageRedirectChainsRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageRedirectChainsRequestInfo.md#constructor)

### Properties

- [filters](OnPageRedirectChainsRequestInfo.md#filters)
- [id](OnPageRedirectChainsRequestInfo.md#id)
- [limit](OnPageRedirectChainsRequestInfo.md#limit)
- [offset](OnPageRedirectChainsRequestInfo.md#offset)
- [tag](OnPageRedirectChainsRequestInfo.md#tag)
- [url](OnPageRedirectChainsRequestInfo.md#url)

### Methods

- [init](OnPageRedirectChainsRequestInfo.md#init)
- [toJSON](OnPageRedirectChainsRequestInfo.md#tojson)
- [fromJS](OnPageRedirectChainsRequestInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageRedirectChainsRequestInfo**(`data?`): [`OnPageRedirectChainsRequestInfo`](OnPageRedirectChainsRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageRedirectChainsRequestInfo`](../interfaces/IOnPageRedirectChainsRequestInfo.md) |

#### Returns

[`OnPageRedirectChainsRequestInfo`](OnPageRedirectChainsRequestInfo.md)

#### Defined in

[main.ts:148761](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148761)

## Properties

### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can use only one filtering parameter with this endpoint
the following filtering parameter is supported:
is_redirect_loop
the following operators are supported:
regex, =, <>
examples:
["is_redirect_loop","=","true"]
["is_redirect_loop","<>","false"]

#### Implementation of

[IOnPageRedirectChainsRequestInfo](../interfaces/IOnPageRedirectChainsRequestInfo.md).[filters](../interfaces/IOnPageRedirectChainsRequestInfo.md#filters)

#### Defined in

[main.ts:148751](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148751)

___


### id

• `Optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[IOnPageRedirectChainsRequestInfo](../interfaces/IOnPageRedirectChainsRequestInfo.md).[id](../interfaces/IOnPageRedirectChainsRequestInfo.md#id)

#### Defined in

[main.ts:148725](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148725)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned redirect chains
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IOnPageRedirectChainsRequestInfo](../interfaces/IOnPageRedirectChainsRequestInfo.md).[limit](../interfaces/IOnPageRedirectChainsRequestInfo.md#limit)

#### Defined in

[main.ts:148735](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148735)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned redirect chains
optional field
default value: 0
if you specify the 10 value, the first ten redirect chains in the results array will be omitted and the data will be provided for the successive redirect chains

#### Implementation of

[IOnPageRedirectChainsRequestInfo](../interfaces/IOnPageRedirectChainsRequestInfo.md).[offset](../interfaces/IOnPageRedirectChainsRequestInfo.md#offset)

#### Defined in

[main.ts:148740](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148740)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IOnPageRedirectChainsRequestInfo](../interfaces/IOnPageRedirectChainsRequestInfo.md).[tag](../interfaces/IOnPageRedirectChainsRequestInfo.md#tag)

#### Defined in

[main.ts:148757](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148757)

___


### url

• `Optional` **url**: `string`

page URL
optional field
absolute URL of the target page
if you use this field, the API response will return only redirect chains which contain the specified URL

#### Implementation of

[IOnPageRedirectChainsRequestInfo](../interfaces/IOnPageRedirectChainsRequestInfo.md).[url](../interfaces/IOnPageRedirectChainsRequestInfo.md#url)

#### Defined in

[main.ts:148730](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148730)

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

[main.ts:148770](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148770)

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

[main.ts:148796](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148796)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageRedirectChainsRequestInfo`](OnPageRedirectChainsRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageRedirectChainsRequestInfo`](OnPageRedirectChainsRequestInfo.md)

#### Defined in

[main.ts:148789](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148789)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")