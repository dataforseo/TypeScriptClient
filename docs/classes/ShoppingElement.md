[dataforseo-client](../README.md) / [Exports](../modules.md) / ShoppingElement

# Class: ShoppingElement

## Implements

- [`IShoppingElement`](../interfaces/IShoppingElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ShoppingElement.md#constructor)

### Properties

- [description](ShoppingElement.md#description)
- [marketplace](ShoppingElement.md#marketplace)
- [marketplace\_url](ShoppingElement.md#marketplace_url)
- [price](ShoppingElement.md#price)
- [source](ShoppingElement.md#source)
- [title](ShoppingElement.md#title)
- [type](ShoppingElement.md#type)
- [url](ShoppingElement.md#url)

### Methods

- [init](ShoppingElement.md#init)
- [toJSON](ShoppingElement.md#tojson)
- [fromJS](ShoppingElement.md#fromjs)

## Constructors

### constructor

• **new ShoppingElement**(`data?`): [`ShoppingElement`](ShoppingElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IShoppingElement`](../interfaces/IShoppingElement.md) |

#### Returns

[`ShoppingElement`](ShoppingElement.md)

#### Defined in

[main.ts:30419](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30419)

## Properties

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[IShoppingElement](../interfaces/IShoppingElement.md).[description](../interfaces/IShoppingElement.md#description)

#### Defined in

[main.ts:30405](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30405)

___

### marketplace

• `Optional` **marketplace**: `string`

merchant account provider
commerce site that hosts products or websites of individual sellers under the same merchant account
example:
by Google

#### Implementation of

[IShoppingElement](../interfaces/IShoppingElement.md).[marketplace](../interfaces/IShoppingElement.md#marketplace)

#### Defined in

[main.ts:30410](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30410)

___

### marketplace\_url

• `Optional` **marketplace\_url**: `string`

relevant marketplace URL
URL of the page on the marketplace website where the product is hosted

#### Implementation of

[IShoppingElement](../interfaces/IShoppingElement.md).[marketplace_url](../interfaces/IShoppingElement.md#marketplace_url)

#### Defined in

[main.ts:30413](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30413)

___

### price

• `Optional` **price**: [`PriceInfo`](PriceInfo.md)

price of booking a place for the specified dates of stay

#### Implementation of

[IShoppingElement](../interfaces/IShoppingElement.md).[price](../interfaces/IShoppingElement.md#price)

#### Defined in

[main.ts:30400](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30400)

___

### source

• `Optional` **source**: `string`

web source of the hotel booking element
indicates the source of information included in the element

#### Implementation of

[IShoppingElement](../interfaces/IShoppingElement.md).[source](../interfaces/IShoppingElement.md#source)

#### Defined in

[main.ts:30403](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30403)

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[IShoppingElement](../interfaces/IShoppingElement.md).[title](../interfaces/IShoppingElement.md#title)

#### Defined in

[main.ts:30398](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30398)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IShoppingElement](../interfaces/IShoppingElement.md).[type](../interfaces/IShoppingElement.md#type)

#### Defined in

[main.ts:30396](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30396)

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IShoppingElement](../interfaces/IShoppingElement.md).[url](../interfaces/IShoppingElement.md#url)

#### Defined in

[main.ts:30415](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30415)

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

[main.ts:30428](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30428)

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

[main.ts:30452](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30452)

___

### fromJS

▸ **fromJS**(`data`): [`ShoppingElement`](ShoppingElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ShoppingElement`](ShoppingElement.md)

#### Defined in

[main.ts:30445](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30445)
