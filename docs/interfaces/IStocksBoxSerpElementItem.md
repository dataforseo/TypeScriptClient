[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IStocksBoxSerpElementItem

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

[main.ts:32604](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32604)

___


### graph

• `Optional` **graph**: [`Graph`](../classes/Graph.md)

contains data provided in the graph of the element

#### Defined in

[main.ts:32613](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32613)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:32589](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32589)

___


### price

• `Optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

price indicated in the element

#### Defined in

[main.ts:32600](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32600)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:32585](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32585)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:32582](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32582)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:32608](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32608)

___


### snippet

• `Optional` **snippet**: `string`

text alongside the link title

#### Defined in

[main.ts:32598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32598)

___


### source

• `Optional` **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Defined in

[main.ts:32596](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32596)

___


### table

• `Optional` **table**: [`Table`](../classes/Table.md)

results table
if there are none, equals null

#### Defined in

[main.ts:32611](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32611)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

[main.ts:32593](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32593)

___


### url

• `Optional` **url**: `string`

URL

#### Defined in

[main.ts:32602](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32602)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:32591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32591)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")