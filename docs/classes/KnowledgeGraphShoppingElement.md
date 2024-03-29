[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KnowledgeGraphShoppingElement

# Class: KnowledgeGraphShoppingElement

## Implements

- [`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KnowledgeGraphShoppingElement.md#constructor)

### Properties

- [domain](KnowledgeGraphShoppingElement.md#domain)
- [marketplace](KnowledgeGraphShoppingElement.md#marketplace)
- [marketplace\_url](KnowledgeGraphShoppingElement.md#marketplace_url)
- [price](KnowledgeGraphShoppingElement.md#price)
- [snippet](KnowledgeGraphShoppingElement.md#snippet)
- [source](KnowledgeGraphShoppingElement.md#source)
- [title](KnowledgeGraphShoppingElement.md#title)
- [type](KnowledgeGraphShoppingElement.md#type)
- [url](KnowledgeGraphShoppingElement.md#url)

### Methods

- [init](KnowledgeGraphShoppingElement.md#init)
- [toJSON](KnowledgeGraphShoppingElement.md#tojson)
- [fromJS](KnowledgeGraphShoppingElement.md#fromjs)

## Constructors

### constructor

• **new KnowledgeGraphShoppingElement**(`data?`): [`KnowledgeGraphShoppingElement`](KnowledgeGraphShoppingElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKnowledgeGraphShoppingElement`](../interfaces/IKnowledgeGraphShoppingElement.md) |

#### Returns

[`KnowledgeGraphShoppingElement`](KnowledgeGraphShoppingElement.md)

#### Defined in

[main.ts:27317](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27317)

## Properties

### domain

• `Optional` **domain**: `string`

website domain

#### Implementation of

[IKnowledgeGraphShoppingElement](../interfaces/IKnowledgeGraphShoppingElement.md).[domain](../interfaces/IKnowledgeGraphShoppingElement.md#domain)

#### Defined in

[main.ts:27298](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27298)

___


### marketplace

• `Optional` **marketplace**: `string`

merchant account provider
ecommerce site that hosts products or websites of individual sellers under the same merchant account
example:
by Google

#### Implementation of

[IKnowledgeGraphShoppingElement](../interfaces/IKnowledgeGraphShoppingElement.md).[marketplace](../interfaces/IKnowledgeGraphShoppingElement.md#marketplace)

#### Defined in

[main.ts:27310](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27310)

___


### marketplace\_url

• `Optional` **marketplace\_url**: `string`

URL to the merchant account provider
ecommerce site that hosts products or websites of individual sellers under the same merchant account

#### Implementation of

[IKnowledgeGraphShoppingElement](../interfaces/IKnowledgeGraphShoppingElement.md).[marketplace_url](../interfaces/IKnowledgeGraphShoppingElement.md#marketplace_url)

#### Defined in

[main.ts:27313](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27313)

___


### price

• `Optional` **price**: [`PriceInfo`](PriceInfo.md)

pricing details
contains the pricing details of the product or service featured in the result

#### Implementation of

[IKnowledgeGraphShoppingElement](../interfaces/IKnowledgeGraphShoppingElement.md).[price](../interfaces/IKnowledgeGraphShoppingElement.md#price)

#### Defined in

[main.ts:27301](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27301)

___


### snippet

• `Optional` **snippet**: `string`

text alongside the link title

#### Implementation of

[IKnowledgeGraphShoppingElement](../interfaces/IKnowledgeGraphShoppingElement.md).[snippet](../interfaces/IKnowledgeGraphShoppingElement.md#snippet)

#### Defined in

[main.ts:27305](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27305)

___


### source

• `Optional` **source**: `string`

source of additional information about the result

#### Implementation of

[IKnowledgeGraphShoppingElement](../interfaces/IKnowledgeGraphShoppingElement.md).[source](../interfaces/IKnowledgeGraphShoppingElement.md#source)

#### Defined in

[main.ts:27303](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27303)

___


### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IKnowledgeGraphShoppingElement](../interfaces/IKnowledgeGraphShoppingElement.md).[title](../interfaces/IKnowledgeGraphShoppingElement.md#title)

#### Defined in

[main.ts:27294](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27294)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IKnowledgeGraphShoppingElement](../interfaces/IKnowledgeGraphShoppingElement.md).[type](../interfaces/IKnowledgeGraphShoppingElement.md#type)

#### Defined in

[main.ts:27292](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27292)

___


### url

• `Optional` **url**: `string`

relevant URL

#### Implementation of

[IKnowledgeGraphShoppingElement](../interfaces/IKnowledgeGraphShoppingElement.md).[url](../interfaces/IKnowledgeGraphShoppingElement.md#url)

#### Defined in

[main.ts:27296](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27296)

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

[main.ts:27326](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27326)

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

[main.ts:27351](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27351)

___


### fromJS

▸ **fromJS**(`data`): [`KnowledgeGraphShoppingElement`](KnowledgeGraphShoppingElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KnowledgeGraphShoppingElement`](KnowledgeGraphShoppingElement.md)

#### Defined in

[main.ts:27344](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27344)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")