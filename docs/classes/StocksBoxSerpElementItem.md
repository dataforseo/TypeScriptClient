**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / StocksBoxSerpElementItem

# Class: StocksBoxSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new StocksBoxSerpElementItem(data)

> **new StocksBoxSerpElementItem**(`data`?): [`StocksBoxSerpElementItem`](StocksBoxSerpElementItem.md)

#### Parameters

• **data?**: [`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md)

#### Returns

[`StocksBoxSerpElementItem`](StocksBoxSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:33546

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19830

***

### domain?

> **`optional`** **domain**: `string`

source domain

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`domain`](../interfaces/IStocksBoxSerpElementItem.md#domain)

#### Source

main.ts:33533

***

### graph?

> **`optional`** **graph**: [`Graph`](Graph.md)

contains data provided in the graph of the element

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`graph`](../interfaces/IStocksBoxSerpElementItem.md#graph)

#### Source

main.ts:33542

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`position`](../interfaces/IStocksBoxSerpElementItem.md#position)

#### Source

main.ts:33518

***

### price?

> **`optional`** **price**: [`PriceInfo`](PriceInfo.md)

price indicated in the element

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`price`](../interfaces/IStocksBoxSerpElementItem.md#price)

#### Source

main.ts:33529

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`rank_absolute`](../interfaces/IStocksBoxSerpElementItem.md#rank_absolute)

#### Source

main.ts:33514

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`rank_group`](../interfaces/IStocksBoxSerpElementItem.md#rank_group)

#### Source

main.ts:33510

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`rectangle`](../interfaces/IStocksBoxSerpElementItem.md#rectangle)

#### Source

main.ts:33537

***

### snippet?

> **`optional`** **snippet**: `string`

text alongside the link title

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`snippet`](../interfaces/IStocksBoxSerpElementItem.md#snippet)

#### Source

main.ts:33527

***

### source?

> **`optional`** **source**: `string`

source of the element
indicates the source of the video

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`source`](../interfaces/IStocksBoxSerpElementItem.md#source)

#### Source

main.ts:33525

***

### table?

> **`optional`** **table**: [`Table`](Table.md)

results table
if there are none, equals null

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`table`](../interfaces/IStocksBoxSerpElementItem.md#table)

#### Source

main.ts:33540

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`title`](../interfaces/IStocksBoxSerpElementItem.md#title)

#### Source

main.ts:33522

***

### url?

> **`optional`** **url**: `string`

source URL

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`url`](../interfaces/IStocksBoxSerpElementItem.md#url)

#### Source

main.ts:33531

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`xpath`](../interfaces/IStocksBoxSerpElementItem.md#xpath)

#### Source

main.ts:33520

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Source

main.ts:33551

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Source

main.ts:33581

***

### fromJS()

> **`static`** **fromJS**(`data`): [`StocksBoxSerpElementItem`](StocksBoxSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`StocksBoxSerpElementItem`](StocksBoxSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:33574
