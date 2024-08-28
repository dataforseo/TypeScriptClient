[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IStocksBoxSerpElementItem

# Interface: IStocksBoxSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### domain?

> `optional` **domain**: `string`

source domain

#### Defined in

main.ts:34471

***

### graph?

> `optional` **graph**: [`Graph`](../classes/Graph.md)

contains data provided in the graph of the element

#### Defined in

main.ts:34480

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:34456

***

### price?

> `optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

price indicated in the element

#### Defined in

main.ts:34467

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:34452

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:34448

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:34475

***

### snippet?

> `optional` **snippet**: `string`

text alongside the link title

#### Defined in

main.ts:34465

***

### source?

> `optional` **source**: `string`

source of the element
indicates the source of the video

#### Defined in

main.ts:34463

***

### table?

> `optional` **table**: [`Table`](../classes/Table.md)

results table
if there are none, equals null

#### Defined in

main.ts:34478

***

### title?

> `optional` **title**: `string`

title of the row

#### Defined in

main.ts:34460

***

### url?

> `optional` **url**: `string`

source URL

#### Defined in

main.ts:34469

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:34458
