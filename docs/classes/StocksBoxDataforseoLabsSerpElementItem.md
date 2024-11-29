[**Documentation**](../README.md)

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

### new StocksBoxDataforseoLabsSerpElementItem()

> **new StocksBoxDataforseoLabsSerpElementItem**(`data`?): [`StocksBoxDataforseoLabsSerpElementItem`](StocksBoxDataforseoLabsSerpElementItem.md)

#### Parameters

##### data?

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md)

#### Returns

[`StocksBoxDataforseoLabsSerpElementItem`](StocksBoxDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:108937

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21425

***

### domain?

> `optional` **domain**: `string`

domain where a link points

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`domain`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#domain)

#### Defined in

main.ts:108928

***

### graph?

> `optional` **graph**: [`Graph`](Graph.md)

contains data provided in the graph of the element

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`graph`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#graph)

#### Defined in

main.ts:108933

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:21421

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

price of the shopping element

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`price`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#price)

#### Defined in

main.ts:108924

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21417

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:21414

***

### snippet?

> `optional` **snippet**: `string`

text alongside the link title

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`snippet`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#snippet)

#### Defined in

main.ts:108922

***

### source?

> `optional` **source**: `string`

source of the element
indicates the source of information included in the shopping_element

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`source`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#source)

#### Defined in

main.ts:108920

***

### table?

> `optional` **table**: [`Table`](Table.md)

results table
if there are none, equals null

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`table`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#table)

#### Defined in

main.ts:108931

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:108917

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:21411

***

### url?

> `optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#url)

#### Defined in

main.ts:108926

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:21423

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:108942

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:108967

***

### fromJS()

> `static` **fromJS**(`data`): [`StocksBoxDataforseoLabsSerpElementItem`](StocksBoxDataforseoLabsSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`StocksBoxDataforseoLabsSerpElementItem`](StocksBoxDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:108960
