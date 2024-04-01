[Documentation](../README.md) / [Exports](../modules.md) / CommercialUnitsElement

# Class: CommercialUnitsElement

## Implements

- [`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](CommercialUnitsElement.md#constructor)

### Properties

- [domain](CommercialUnitsElement.md#domain)
- [price](CommercialUnitsElement.md#price)
- [rating](CommercialUnitsElement.md#rating)
- [source](CommercialUnitsElement.md#source)
- [title](CommercialUnitsElement.md#title)
- [type](CommercialUnitsElement.md#type)
- [url](CommercialUnitsElement.md#url)

### Methods

- [init](CommercialUnitsElement.md#init)
- [toJSON](CommercialUnitsElement.md#tojson)
- [fromJS](CommercialUnitsElement.md#fromjs)

## Constructors

### constructor

• **new CommercialUnitsElement**(`data?`): [`CommercialUnitsElement`](CommercialUnitsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md) |

#### Returns

[`CommercialUnitsElement`](CommercialUnitsElement.md)

#### Defined in

main.ts:34311

## Properties

### domain

• `Optional` **domain**: `string`

website domain

#### Implementation of

[ICommercialUnitsElement](../interfaces/ICommercialUnitsElement.md).[domain](../interfaces/ICommercialUnitsElement.md#domain)

#### Defined in

main.ts:34299

___

### price

• `Optional` **price**: [`PriceInfo`](PriceInfo.md)

price indicated in the element

#### Implementation of

[ICommercialUnitsElement](../interfaces/ICommercialUnitsElement.md).[price](../interfaces/ICommercialUnitsElement.md#price)

#### Defined in

main.ts:34301

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[ICommercialUnitsElement](../interfaces/ICommercialUnitsElement.md).[rating](../interfaces/ICommercialUnitsElement.md#rating)

#### Defined in

main.ts:34307

___

### source

• `Optional` **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[ICommercialUnitsElement](../interfaces/ICommercialUnitsElement.md).[source](../interfaces/ICommercialUnitsElement.md#source)

#### Defined in

main.ts:34304

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[ICommercialUnitsElement](../interfaces/ICommercialUnitsElement.md).[title](../interfaces/ICommercialUnitsElement.md#title)

#### Defined in

main.ts:34295

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ICommercialUnitsElement](../interfaces/ICommercialUnitsElement.md).[type](../interfaces/ICommercialUnitsElement.md#type)

#### Defined in

main.ts:34293

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[ICommercialUnitsElement](../interfaces/ICommercialUnitsElement.md).[url](../interfaces/ICommercialUnitsElement.md#url)

#### Defined in

main.ts:34297

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:34320

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:34343

___

### fromJS

▸ **fromJS**(`data`): [`CommercialUnitsElement`](CommercialUnitsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`CommercialUnitsElement`](CommercialUnitsElement.md)

#### Defined in

main.ts:34336
