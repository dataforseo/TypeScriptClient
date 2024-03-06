[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageLinksRequestInfo

# Class: OnPageLinksRequestInfo

## Implements

- [`IOnPageLinksRequestInfo`](../interfaces/IOnPageLinksRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageLinksRequestInfo.md#constructor)

### Properties

- [filters](OnPageLinksRequestInfo.md#filters)
- [id](OnPageLinksRequestInfo.md#id)
- [limit](OnPageLinksRequestInfo.md#limit)
- [offset](OnPageLinksRequestInfo.md#offset)
- [page\_from](OnPageLinksRequestInfo.md#page_from)
- [page\_to](OnPageLinksRequestInfo.md#page_to)
- [tag](OnPageLinksRequestInfo.md#tag)

### Methods

- [init](OnPageLinksRequestInfo.md#init)
- [toJSON](OnPageLinksRequestInfo.md#tojson)
- [fromJS](OnPageLinksRequestInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageLinksRequestInfo**(`data?`): [`OnPageLinksRequestInfo`](OnPageLinksRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageLinksRequestInfo`](../interfaces/IOnPageLinksRequestInfo.md) |

#### Returns

[`OnPageLinksRequestInfo`](OnPageLinksRequestInfo.md)

#### Defined in

[main.ts:147924](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147924)

## Properties

### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["direction","=","external"]
[["domain_to","<>","example.com"],
"and",
["link_from","not_like","%example.com/blog%"]]
[["direction","=","external"],
"and",
[["link_from","like","%example.com/blog%"],"or",["link_from","like","%example.com/help%"]]]
The full list of possible filters is available by this link.

#### Implementation of

[IOnPageLinksRequestInfo](../interfaces/IOnPageLinksRequestInfo.md).[filters](../interfaces/IOnPageLinksRequestInfo.md#filters)

#### Defined in

[main.ts:147914](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147914)

___


### id

• `Optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[IOnPageLinksRequestInfo](../interfaces/IOnPageLinksRequestInfo.md).[id](../interfaces/IOnPageLinksRequestInfo.md#id)

#### Defined in

[main.ts:147877](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147877)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned links
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IOnPageLinksRequestInfo](../interfaces/IOnPageLinksRequestInfo.md).[limit](../interfaces/IOnPageLinksRequestInfo.md#limit)

#### Defined in

[main.ts:147892](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147892)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned links
optional field
default value: 0
if you specify the 10 value, the first ten links in the results array will be omitted and the data will be provided for the successive links

#### Implementation of

[IOnPageLinksRequestInfo](../interfaces/IOnPageLinksRequestInfo.md).[offset](../interfaces/IOnPageLinksRequestInfo.md#offset)

#### Defined in

[main.ts:147897](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147897)

___


### page\_from

• `Optional` **page\_from**: `string`

relative page URL
optional field
if you use this field, the API response will contain only links from the specified page
note that in this field you can specify relative URLs only

#### Implementation of

[IOnPageLinksRequestInfo](../interfaces/IOnPageLinksRequestInfo.md).[page_from](../interfaces/IOnPageLinksRequestInfo.md#page_from)

#### Defined in

[main.ts:147882](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147882)

___


### page\_to

• `Optional` **page\_to**: `string`

relative page URL
optional field
if you use this field, the API response will contain only internal links pointing to the specified page
note that in this field you can specify relative URLs only

#### Implementation of

[IOnPageLinksRequestInfo](../interfaces/IOnPageLinksRequestInfo.md).[page_to](../interfaces/IOnPageLinksRequestInfo.md#page_to)

#### Defined in

[main.ts:147887](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147887)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IOnPageLinksRequestInfo](../interfaces/IOnPageLinksRequestInfo.md).[tag](../interfaces/IOnPageLinksRequestInfo.md#tag)

#### Defined in

[main.ts:147920](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147920)

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

[main.ts:147933](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147933)

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

[main.ts:147960](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147960)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageLinksRequestInfo`](OnPageLinksRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageLinksRequestInfo`](OnPageLinksRequestInfo.md)

#### Defined in

[main.ts:147953](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147953)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")