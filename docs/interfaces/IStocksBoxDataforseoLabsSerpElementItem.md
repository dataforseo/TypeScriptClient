[dataforseo-client](../README.md) / [Exports](../modules.md) / IStocksBoxDataforseoLabsSerpElementItem

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

[main.ts:95805](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95805)

___

### graph

• `Optional` **graph**: [`Graph`](../classes/Graph.md)

contains data provided in the graph of the element

#### Defined in

[main.ts:95810](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95810)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:95790](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95790)

___

### price

• `Optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

price of the shopping element

#### Defined in

[main.ts:95801](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95801)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:95786](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95786)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:95783](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95783)

___

### snippet

• `Optional` **snippet**: `string`

text alongside the link title

#### Defined in

[main.ts:95799](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95799)

___

### source

• `Optional` **source**: `string`

source of the element
indicates the source of information included in the shopping_element

#### Defined in

[main.ts:95797](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95797)

___

### table

• `Optional` **table**: [`Table`](../classes/Table.md)

results table
if there are none, equals null

#### Defined in

[main.ts:95808](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95808)

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

[main.ts:95794](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95794)

___

### url

• `Optional` **url**: `string`

URL link

#### Defined in

[main.ts:95803](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95803)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:95792](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95792)
