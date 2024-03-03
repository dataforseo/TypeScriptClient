[Documentation](../README.md) / [Exports](../modules.md) / IStocksBoxDataforseoLabsSerpElementItem

# Interface: IStocksBoxDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IStocksBoxDataforseoLabsSerpElementItem`**

## Implemented by

- [`StocksBoxDataforseoLabsSerpElementItem`](../classes/StocksBoxDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [domain](IStocksBoxDataforseoLabsSerpElementItem.md#domain)
- [graph](IStocksBoxDataforseoLabsSerpElementItem.md#graph)
- [position](IStocksBoxDataforseoLabsSerpElementItem.md#position)
- [price](IStocksBoxDataforseoLabsSerpElementItem.md#price)
- [rank\_absolute](IStocksBoxDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IStocksBoxDataforseoLabsSerpElementItem.md#rank_group)
- [snippet](IStocksBoxDataforseoLabsSerpElementItem.md#snippet)
- [source](IStocksBoxDataforseoLabsSerpElementItem.md#source)
- [table](IStocksBoxDataforseoLabsSerpElementItem.md#table)
- [title](IStocksBoxDataforseoLabsSerpElementItem.md#title)
- [url](IStocksBoxDataforseoLabsSerpElementItem.md#url)
- [xpath](IStocksBoxDataforseoLabsSerpElementItem.md#xpath)

## Properties

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Defined in

main.ts:95949

___

### graph

• `Optional` **graph**: [`Graph`](../classes/Graph.md)

contains data provided in the graph of the element

#### Defined in

main.ts:95954

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:95934

___

### price

• `Optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

price of the shopping element

#### Defined in

main.ts:95945

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:95930

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:95927

___

### snippet

• `Optional` **snippet**: `string`

text alongside the link title

#### Defined in

main.ts:95943

___

### source

• `Optional` **source**: `string`

source of the element
indicates the source of information included in the shopping_element

#### Defined in

main.ts:95941

___

### table

• `Optional` **table**: [`Table`](../classes/Table.md)

results table
if there are none, equals null

#### Defined in

main.ts:95952

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:95938

___

### url

• `Optional` **url**: `string`

URL link

#### Defined in

main.ts:95947

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:95936
