[Documentation](../README.md) / [Exports](../modules.md) / IShoppingElement

# Interface: IShoppingElement

## Implemented by

- [`ShoppingElement`](../classes/ShoppingElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [description](IShoppingElement.md#description)
- [marketplace](IShoppingElement.md#marketplace)
- [marketplace\_url](IShoppingElement.md#marketplace_url)
- [price](IShoppingElement.md#price)
- [source](IShoppingElement.md#source)
- [title](IShoppingElement.md#title)
- [type](IShoppingElement.md#type)
- [url](IShoppingElement.md#url)

## Properties

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Defined in

main.ts:30623

___

### marketplace

• `Optional` **marketplace**: `string`

merchant account provider
commerce site that hosts products or websites of individual sellers under the same merchant account
example:
by Google

#### Defined in

main.ts:30628

___

### marketplace\_url

• `Optional` **marketplace\_url**: `string`

relevant marketplace URL
URL of the page on the marketplace website where the product is hosted

#### Defined in

main.ts:30631

___

### price

• `Optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

price of booking a place for the specified dates of stay

#### Defined in

main.ts:30618

___

### source

• `Optional` **source**: `string`

web source of the hotel booking element
indicates the source of information included in the element

#### Defined in

main.ts:30621

___

### title

• `Optional` **title**: `string`

title of the row

#### Defined in

main.ts:30616

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:30614

___

### url

• `Optional` **url**: `string`

URL

#### Defined in

main.ts:30633
