[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IStocksBoxDataforseoLabsSerpElementItem

# Interface: IStocksBoxDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### domain?

> `optional` **domain**: `string`

domain where a link points

#### Defined in

main.ts:101946

***

### graph?

> `optional` **graph**: [`Graph`](../classes/Graph.md)

contains data provided in the graph of the element

#### Defined in

main.ts:101951

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:101931

***

### price?

> `optional` **price**: [`Price`](../classes/Price.md)

price of the shopping element

#### Defined in

main.ts:101942

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:101927

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:101924

***

### snippet?

> `optional` **snippet**: `string`

text alongside the link title

#### Defined in

main.ts:101940

***

### source?

> `optional` **source**: `string`

source of the element
indicates the source of information included in the shopping_element

#### Defined in

main.ts:101938

***

### table?

> `optional` **table**: [`Table`](../classes/Table.md)

results table
if there are none, equals null

#### Defined in

main.ts:101949

***

### title?

> `optional` **title**: `string`

title of the item

#### Defined in

main.ts:101935

***

### url?

> `optional` **url**: `string`

URL link

#### Defined in

main.ts:101944

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:101933
