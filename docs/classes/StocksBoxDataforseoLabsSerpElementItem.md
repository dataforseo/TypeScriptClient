**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / StocksBoxDataforseoLabsSerpElementItem

# Class: StocksBoxDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new StocksBoxDataforseoLabsSerpElementItem(data)

> **new StocksBoxDataforseoLabsSerpElementItem**(`data`?): [`StocksBoxDataforseoLabsSerpElementItem`](StocksBoxDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md)

#### Returns

[`StocksBoxDataforseoLabsSerpElementItem`](StocksBoxDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:100239

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20243

***

### domain?

> **`optional`** **domain**: `string`

domain where a link points

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`domain`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#domain)

#### Source

main.ts:100230

***

### graph?

> **`optional`** **graph**: [`Graph`](Graph.md)

contains data provided in the graph of the element

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`graph`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#graph)

#### Source

main.ts:100235

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:100215

***

### price?

> **`optional`** **price**: [`PriceInfo`](PriceInfo.md)

price of the shopping element

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`price`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#price)

#### Source

main.ts:100226

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:100211

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:100208

***

### snippet?

> **`optional`** **snippet**: `string`

text alongside the link title

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`snippet`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#snippet)

#### Source

main.ts:100224

***

### source?

> **`optional`** **source**: `string`

source of the element
indicates the source of information included in the shopping_element

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`source`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#source)

#### Source

main.ts:100222

***

### table?

> **`optional`** **table**: [`Table`](Table.md)

results table
if there are none, equals null

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`table`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#table)

#### Source

main.ts:100233

***

### title?

> **`optional`** **title**: `string`

title of the item

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#title)

#### Source

main.ts:100219

***

### url?

> **`optional`** **url**: `string`

URL link

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#url)

#### Source

main.ts:100228

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:100217

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Source

main.ts:100244

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Source

main.ts:100273

***

### fromJS()

> **`static`** **fromJS**(`data`): [`StocksBoxDataforseoLabsSerpElementItem`](StocksBoxDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`StocksBoxDataforseoLabsSerpElementItem`](StocksBoxDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:100266
