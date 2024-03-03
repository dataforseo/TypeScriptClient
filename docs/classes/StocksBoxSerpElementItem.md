[Documentation](../README.md) / [Exports](../modules.md) / StocksBoxSerpElementItem

# Class: StocksBoxSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`StocksBoxSerpElementItem`**

## Implements

- [`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](StocksBoxSerpElementItem.md#constructor)

### Properties

- [\_discriminator](StocksBoxSerpElementItem.md#_discriminator)
- [domain](StocksBoxSerpElementItem.md#domain)
- [graph](StocksBoxSerpElementItem.md#graph)
- [position](StocksBoxSerpElementItem.md#position)
- [price](StocksBoxSerpElementItem.md#price)
- [rank\_absolute](StocksBoxSerpElementItem.md#rank_absolute)
- [rank\_group](StocksBoxSerpElementItem.md#rank_group)
- [rectangle](StocksBoxSerpElementItem.md#rectangle)
- [snippet](StocksBoxSerpElementItem.md#snippet)
- [source](StocksBoxSerpElementItem.md#source)
- [table](StocksBoxSerpElementItem.md#table)
- [title](StocksBoxSerpElementItem.md#title)
- [url](StocksBoxSerpElementItem.md#url)
- [xpath](StocksBoxSerpElementItem.md#xpath)

### Methods

- [init](StocksBoxSerpElementItem.md#init)
- [toJSON](StocksBoxSerpElementItem.md#tojson)
- [fromJS](StocksBoxSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new StocksBoxSerpElementItem**(`data?`): [`StocksBoxSerpElementItem`](StocksBoxSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md) |

#### Returns

[`StocksBoxSerpElementItem`](StocksBoxSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:32661

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19337

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Implementation of

[IStocksBoxSerpElementItem](../interfaces/IStocksBoxSerpElementItem.md).[domain](../interfaces/IStocksBoxSerpElementItem.md#domain)

#### Defined in

main.ts:32648

___

### graph

• `Optional` **graph**: [`Graph`](Graph.md)

contains data provided in the graph of the element

#### Implementation of

[IStocksBoxSerpElementItem](../interfaces/IStocksBoxSerpElementItem.md).[graph](../interfaces/IStocksBoxSerpElementItem.md#graph)

#### Defined in

main.ts:32657

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IStocksBoxSerpElementItem](../interfaces/IStocksBoxSerpElementItem.md).[position](../interfaces/IStocksBoxSerpElementItem.md#position)

#### Defined in

main.ts:32633

___

### price

• `Optional` **price**: [`PriceInfo`](PriceInfo.md)

price indicated in the element

#### Implementation of

[IStocksBoxSerpElementItem](../interfaces/IStocksBoxSerpElementItem.md).[price](../interfaces/IStocksBoxSerpElementItem.md#price)

#### Defined in

main.ts:32644

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IStocksBoxSerpElementItem](../interfaces/IStocksBoxSerpElementItem.md).[rank_absolute](../interfaces/IStocksBoxSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:32629

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IStocksBoxSerpElementItem](../interfaces/IStocksBoxSerpElementItem.md).[rank_group](../interfaces/IStocksBoxSerpElementItem.md#rank_group)

#### Defined in

main.ts:32626

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IStocksBoxSerpElementItem](../interfaces/IStocksBoxSerpElementItem.md).[rectangle](../interfaces/IStocksBoxSerpElementItem.md#rectangle)

#### Defined in

main.ts:32652

___

### snippet

• `Optional` **snippet**: `string`

text alongside the link title

#### Implementation of

[IStocksBoxSerpElementItem](../interfaces/IStocksBoxSerpElementItem.md).[snippet](../interfaces/IStocksBoxSerpElementItem.md#snippet)

#### Defined in

main.ts:32642

___

### source

• `Optional` **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[IStocksBoxSerpElementItem](../interfaces/IStocksBoxSerpElementItem.md).[source](../interfaces/IStocksBoxSerpElementItem.md#source)

#### Defined in

main.ts:32640

___

### table

• `Optional` **table**: [`Table`](Table.md)

results table
if there are none, equals null

#### Implementation of

[IStocksBoxSerpElementItem](../interfaces/IStocksBoxSerpElementItem.md).[table](../interfaces/IStocksBoxSerpElementItem.md#table)

#### Defined in

main.ts:32655

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IStocksBoxSerpElementItem](../interfaces/IStocksBoxSerpElementItem.md).[title](../interfaces/IStocksBoxSerpElementItem.md#title)

#### Defined in

main.ts:32637

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IStocksBoxSerpElementItem](../interfaces/IStocksBoxSerpElementItem.md).[url](../interfaces/IStocksBoxSerpElementItem.md#url)

#### Defined in

main.ts:32646

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IStocksBoxSerpElementItem](../interfaces/IStocksBoxSerpElementItem.md).[xpath](../interfaces/IStocksBoxSerpElementItem.md#xpath)

#### Defined in

main.ts:32635

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[init](BaseSerpElementItem.md#init)

#### Defined in

main.ts:32666

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[toJSON](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:32696

___

### fromJS

▸ **fromJS**(`data`): [`StocksBoxSerpElementItem`](StocksBoxSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`StocksBoxSerpElementItem`](StocksBoxSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:32689
