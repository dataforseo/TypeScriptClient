[Documentation](../README.md) / [Exports](../modules.md) / StocksBoxDataforseoLabsSerpElementItem

# Class: StocksBoxDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`StocksBoxDataforseoLabsSerpElementItem`**

## Implements

- [`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](StocksBoxDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](StocksBoxDataforseoLabsSerpElementItem.md#_discriminator)
- [domain](StocksBoxDataforseoLabsSerpElementItem.md#domain)
- [graph](StocksBoxDataforseoLabsSerpElementItem.md#graph)
- [position](StocksBoxDataforseoLabsSerpElementItem.md#position)
- [price](StocksBoxDataforseoLabsSerpElementItem.md#price)
- [rank\_absolute](StocksBoxDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](StocksBoxDataforseoLabsSerpElementItem.md#rank_group)
- [snippet](StocksBoxDataforseoLabsSerpElementItem.md#snippet)
- [source](StocksBoxDataforseoLabsSerpElementItem.md#source)
- [table](StocksBoxDataforseoLabsSerpElementItem.md#table)
- [title](StocksBoxDataforseoLabsSerpElementItem.md#title)
- [url](StocksBoxDataforseoLabsSerpElementItem.md#url)
- [xpath](StocksBoxDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](StocksBoxDataforseoLabsSerpElementItem.md#init)
- [toJSON](StocksBoxDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](StocksBoxDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new StocksBoxDataforseoLabsSerpElementItem**(`data?`): [`StocksBoxDataforseoLabsSerpElementItem`](StocksBoxDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IStocksBoxDataforseoLabsSerpElementItem`](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md) |

#### Returns

[`StocksBoxDataforseoLabsSerpElementItem`](StocksBoxDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:98100

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20171

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Implementation of

[IStocksBoxDataforseoLabsSerpElementItem](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[domain](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#domain)

#### Defined in

main.ts:98091

___

### graph

• `Optional` **graph**: [`Graph`](Graph.md)

contains data provided in the graph of the element

#### Implementation of

[IStocksBoxDataforseoLabsSerpElementItem](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[graph](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#graph)

#### Defined in

main.ts:98096

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IStocksBoxDataforseoLabsSerpElementItem](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[position](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:98076

___

### price

• `Optional` **price**: [`PriceInfo`](PriceInfo.md)

price of the shopping element

#### Implementation of

[IStocksBoxDataforseoLabsSerpElementItem](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[price](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#price)

#### Defined in

main.ts:98087

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IStocksBoxDataforseoLabsSerpElementItem](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:98072

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IStocksBoxDataforseoLabsSerpElementItem](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:98069

___

### snippet

• `Optional` **snippet**: `string`

text alongside the link title

#### Implementation of

[IStocksBoxDataforseoLabsSerpElementItem](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[snippet](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#snippet)

#### Defined in

main.ts:98085

___

### source

• `Optional` **source**: `string`

source of the element
indicates the source of information included in the shopping_element

#### Implementation of

[IStocksBoxDataforseoLabsSerpElementItem](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[source](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#source)

#### Defined in

main.ts:98083

___

### table

• `Optional` **table**: [`Table`](Table.md)

results table
if there are none, equals null

#### Implementation of

[IStocksBoxDataforseoLabsSerpElementItem](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[table](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#table)

#### Defined in

main.ts:98094

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IStocksBoxDataforseoLabsSerpElementItem](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[title](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:98080

___

### url

• `Optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Implementation of

[IStocksBoxDataforseoLabsSerpElementItem](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[url](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#url)

#### Defined in

main.ts:98089

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IStocksBoxDataforseoLabsSerpElementItem](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IStocksBoxDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:98078

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[init](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:98105

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[toJSON](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:98134

___

### fromJS

▸ **fromJS**(`data`): [`StocksBoxDataforseoLabsSerpElementItem`](StocksBoxDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`StocksBoxDataforseoLabsSerpElementItem`](StocksBoxDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:98127
