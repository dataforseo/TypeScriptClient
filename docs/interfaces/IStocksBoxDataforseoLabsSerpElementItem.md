**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IStocksBoxDataforseoLabsSerpElementItem

# Interface: IStocksBoxDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### domain?

> **`optional`** **domain**: `string`

domain where a link points

#### Source

main.ts:98058

***

### graph?

> **`optional`** **graph**: [`Graph`](../classes/Graph.md)

contains data provided in the graph of the element

#### Source

main.ts:98063

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:98043

***

### price?

> **`optional`** **price**: [`PriceInfo`](../classes/PriceInfo.md)

price of the shopping element

#### Source

main.ts:98054

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:98039

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:98036

***

### snippet?

> **`optional`** **snippet**: `string`

text alongside the link title

#### Source

main.ts:98052

***

### source?

> **`optional`** **source**: `string`

source of the element
indicates the source of information included in the shopping_element

#### Source

main.ts:98050

***

### table?

> **`optional`** **table**: [`Table`](../classes/Table.md)

results table
if there are none, equals null

#### Source

main.ts:98061

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:98047

***

### url?

> **`optional`** **url**: `string`

relevant URL of the Ad element in SERP

#### Source

main.ts:98056

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:98045
