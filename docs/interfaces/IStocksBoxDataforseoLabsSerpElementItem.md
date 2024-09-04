[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IStocksBoxDataforseoLabsSerpElementItem

# Interface: IStocksBoxDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### domain?

> `optional` **domain**: `string`

website domain

#### Defined in

main.ts:99230

***

### graph?

> `optional` **graph**: [`Graph`](../classes/Graph.md)

contains data provided in the graph of the element

#### Defined in

main.ts:99235

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`position`](IBaseDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:21020

***

### price?

> `optional` **price**: [`Price`](../classes/Price.md)

price of the shopping element

#### Defined in

main.ts:99226

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](IBaseDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21016

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`rank_group`](IBaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:21013

***

### snippet?

> `optional` **snippet**: `string`

text alongside the link title

#### Defined in

main.ts:99224

***

### source?

> `optional` **source**: `string`

source of the element
indicates the source of information included in the shopping_element

#### Defined in

main.ts:99222

***

### table?

> `optional` **table**: [`Table`](../classes/Table.md)

results table
if there are none, equals null

#### Defined in

main.ts:99233

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:99219

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`type`](IBaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:21010

***

### url?

> `optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Defined in

main.ts:99228

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`xpath`](IBaseDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:21022
