**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IStocksBoxSerpElementItem

# Interface: IStocksBoxSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### domain?

> **`optional`** **domain**: `string`

source domain

#### Source

main.ts:34275

***

### graph?

> **`optional`** **graph**: [`Graph`](../classes/Graph.md)

contains data provided in the graph of the element

#### Source

main.ts:34284

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:34260

***

### price?

> **`optional`** **price**: [`PriceInfo`](../classes/PriceInfo.md)

price indicated in the element

#### Source

main.ts:34271

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Source

main.ts:34256

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Source

main.ts:34252

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Source

main.ts:34279

***

### snippet?

> **`optional`** **snippet**: `string`

text alongside the link title

#### Source

main.ts:34269

***

### source?

> **`optional`** **source**: `string`

source of the element
indicates the source of the video

#### Source

main.ts:34267

***

### table?

> **`optional`** **table**: [`Table`](../classes/Table.md)

results table
if there are none, equals null

#### Source

main.ts:34282

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Source

main.ts:34264

***

### url?

> **`optional`** **url**: `string`

source URL

#### Source

main.ts:34273

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:34262
