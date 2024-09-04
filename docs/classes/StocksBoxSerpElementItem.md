[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / StocksBoxSerpElementItem

# Class: StocksBoxSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new StocksBoxSerpElementItem()

> **new StocksBoxSerpElementItem**(`data`?): [`StocksBoxSerpElementItem`](StocksBoxSerpElementItem.md)

#### Parameters

• **data?**: [`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md)

#### Returns

[`StocksBoxSerpElementItem`](StocksBoxSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:34384

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### domain?

> `optional` **domain**: `string`

source domain

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`domain`](../interfaces/IStocksBoxSerpElementItem.md#domain)

#### Defined in

main.ts:34371

***

### graph?

> `optional` **graph**: [`Graph`](Graph.md)

contains data provided in the graph of the element

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`graph`](../interfaces/IStocksBoxSerpElementItem.md#graph)

#### Defined in

main.ts:34380

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`position`](../interfaces/IStocksBoxSerpElementItem.md#position)

#### Defined in

main.ts:34356

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

price indicated in the element

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`price`](../interfaces/IStocksBoxSerpElementItem.md#price)

#### Defined in

main.ts:34367

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`rank_absolute`](../interfaces/IStocksBoxSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:34352

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`rank_group`](../interfaces/IStocksBoxSerpElementItem.md#rank_group)

#### Defined in

main.ts:34348

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`rectangle`](../interfaces/IStocksBoxSerpElementItem.md#rectangle)

#### Defined in

main.ts:34375

***

### snippet?

> `optional` **snippet**: `string`

text alongside the link title

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`snippet`](../interfaces/IStocksBoxSerpElementItem.md#snippet)

#### Defined in

main.ts:34365

***

### source?

> `optional` **source**: `string`

source of the element
indicates the source of the video

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`source`](../interfaces/IStocksBoxSerpElementItem.md#source)

#### Defined in

main.ts:34363

***

### table?

> `optional` **table**: [`Table`](Table.md)

results table
if there are none, equals null

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`table`](../interfaces/IStocksBoxSerpElementItem.md#table)

#### Defined in

main.ts:34378

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`title`](../interfaces/IStocksBoxSerpElementItem.md#title)

#### Defined in

main.ts:34360

***

### url?

> `optional` **url**: `string`

source URL

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`url`](../interfaces/IStocksBoxSerpElementItem.md#url)

#### Defined in

main.ts:34369

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IStocksBoxSerpElementItem`](../interfaces/IStocksBoxSerpElementItem.md).[`xpath`](../interfaces/IStocksBoxSerpElementItem.md#xpath)

#### Defined in

main.ts:34358

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:34389

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:34419

***

### fromJS()

> `static` **fromJS**(`data`): [`StocksBoxSerpElementItem`](StocksBoxSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`StocksBoxSerpElementItem`](StocksBoxSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:34412
