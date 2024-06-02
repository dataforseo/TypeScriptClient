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

main.ts:99243

***

### graph?

> **`optional`** **graph**: [`Graph`](../classes/Graph.md)

contains data provided in the graph of the element

#### Source

main.ts:99248

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:99228

***

### price?

> **`optional`** **price**: [`PriceInfo`](../classes/PriceInfo.md)

price of the shopping element

#### Source

main.ts:99239

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:99224

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:99221

***

### snippet?

> **`optional`** **snippet**: `string`

text alongside the link title

#### Source

main.ts:99237

***

### source?

> **`optional`** **source**: `string`

source of the element
indicates the source of information included in the shopping_element

#### Source

main.ts:99235

***

### table?

> **`optional`** **table**: [`Table`](../classes/Table.md)

results table
if there are none, equals null

#### Source

main.ts:99246

***

### title?

> **`optional`** **title**: `string`

title of the item

#### Source

main.ts:99232

***

### url?

> **`optional`** **url**: `string`

URL link

#### Source

main.ts:99241

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:99230
