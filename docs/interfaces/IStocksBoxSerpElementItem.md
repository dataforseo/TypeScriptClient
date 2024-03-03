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

domain where a link points

#### Defined in

main.ts:32746

___

### graph

• `Optional` **graph**: [`Graph`](../classes/Graph.md)

contains data provided in the graph of the element

#### Defined in

main.ts:32755

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:32731

___

### price

• `Optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

price indicated in the element

#### Defined in

main.ts:32742

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:32727

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:32724

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:32750

___

### snippet

• `Optional` **snippet**: `string`

text alongside the link title

#### Defined in

main.ts:32740

___

### source

• `Optional` **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Defined in

main.ts:32738

___

### table

• `Optional` **table**: [`Table`](../classes/Table.md)

results table
if there are none, equals null

#### Defined in

main.ts:32753

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

main.ts:32735

___

### url

• `Optional` **url**: `string`

URL

#### Defined in

main.ts:32744

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:32733
