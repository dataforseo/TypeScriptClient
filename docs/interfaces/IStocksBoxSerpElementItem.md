[Documentation](../README.md) / [Exports](../modules.md) / IStocksBoxSerpElementItem

# Interface: IStocksBoxSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IStocksBoxSerpElementItem`**

## Implemented by

- [`StocksBoxSerpElementItem`](../classes/StocksBoxSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [domain](IStocksBoxSerpElementItem.md#domain)
- [graph](IStocksBoxSerpElementItem.md#graph)
- [position](IStocksBoxSerpElementItem.md#position)
- [price](IStocksBoxSerpElementItem.md#price)
- [rank\_absolute](IStocksBoxSerpElementItem.md#rank_absolute)
- [rank\_group](IStocksBoxSerpElementItem.md#rank_group)
- [rectangle](IStocksBoxSerpElementItem.md#rectangle)
- [snippet](IStocksBoxSerpElementItem.md#snippet)
- [source](IStocksBoxSerpElementItem.md#source)
- [table](IStocksBoxSerpElementItem.md#table)
- [title](IStocksBoxSerpElementItem.md#title)
- [url](IStocksBoxSerpElementItem.md#url)
- [xpath](IStocksBoxSerpElementItem.md#xpath)

## Properties

### domain

• `Optional` **domain**: `string`

source domain

#### Defined in

main.ts:33487

___

### graph

• `Optional` **graph**: [`Graph`](../classes/Graph.md)

contains data provided in the graph of the element

#### Defined in

main.ts:33496

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:33472

___

### price

• `Optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

price indicated in the element

#### Defined in

main.ts:33483

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:33468

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:33464

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:33491

___

### snippet

• `Optional` **snippet**: `string`

text alongside the link title

#### Defined in

main.ts:33481

___

### source

• `Optional` **source**: `string`

source of the element
indicates the source of the video

#### Defined in

main.ts:33479

___

### table

• `Optional` **table**: [`Table`](../classes/Table.md)

results table
if there are none, equals null

#### Defined in

main.ts:33494

___

### title

• `Optional` **title**: `string`

title of the row

#### Defined in

main.ts:33476

___

### url

• `Optional` **url**: `string`

source URL

#### Defined in

main.ts:33485

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:33474
