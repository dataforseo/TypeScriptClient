[Documentation](../README.md) / [Exports](../modules.md) / ShoppingElement

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

main.ts:31234

## Properties

### description

• `Optional` **description**: `string`

description

#### Implementation of

[IShoppingElement](../interfaces/IShoppingElement.md).[description](../interfaces/IShoppingElement.md#description)

#### Defined in

main.ts:31220

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

main.ts:31225

___

### marketplace\_url

• `Optional` **marketplace\_url**: `string`

relevant marketplace URL
URL of the page on the marketplace website where the product is hosted

#### Implementation of

[IShoppingElement](../interfaces/IShoppingElement.md).[marketplace_url](../interfaces/IShoppingElement.md#marketplace_url)

#### Defined in

main.ts:31228

___

### price

• `Optional` **price**: [`PriceInfo`](PriceInfo.md)

price indicated in the element

#### Implementation of

[IShoppingElement](../interfaces/IShoppingElement.md).[price](../interfaces/IShoppingElement.md#price)

#### Defined in

main.ts:31215

___

### source

• `Optional` **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[IShoppingElement](../interfaces/IShoppingElement.md).[source](../interfaces/IShoppingElement.md#source)

#### Defined in

main.ts:31218

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IShoppingElement](../interfaces/IShoppingElement.md).[title](../interfaces/IShoppingElement.md#title)

#### Defined in

main.ts:31213

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IShoppingElement](../interfaces/IShoppingElement.md).[type](../interfaces/IShoppingElement.md#type)

#### Defined in

main.ts:31211

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IShoppingElement](../interfaces/IShoppingElement.md).[url](../interfaces/IShoppingElement.md#url)

#### Defined in

main.ts:31230

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

main.ts:31243

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

main.ts:31267

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

main.ts:31260
