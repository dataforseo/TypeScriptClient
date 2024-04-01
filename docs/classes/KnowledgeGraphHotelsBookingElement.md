[Documentation](../README.md) / [Exports](../modules.md) / KnowledgeGraphHotelsBookingElement

# Class: KnowledgeGraphHotelsBookingElement

## Implements

- [`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KnowledgeGraphHotelsBookingElement.md#constructor)

### Properties

- [description](KnowledgeGraphHotelsBookingElement.md#description)
- [domain](KnowledgeGraphHotelsBookingElement.md#domain)
- [is\_paid](KnowledgeGraphHotelsBookingElement.md#is_paid)
- [price](KnowledgeGraphHotelsBookingElement.md#price)
- [source](KnowledgeGraphHotelsBookingElement.md#source)
- [type](KnowledgeGraphHotelsBookingElement.md#type)
- [url](KnowledgeGraphHotelsBookingElement.md#url)

### Methods

- [init](KnowledgeGraphHotelsBookingElement.md#init)
- [toJSON](KnowledgeGraphHotelsBookingElement.md#tojson)
- [fromJS](KnowledgeGraphHotelsBookingElement.md#fromjs)

## Constructors

### constructor

• **new KnowledgeGraphHotelsBookingElement**(`data?`): [`KnowledgeGraphHotelsBookingElement`](KnowledgeGraphHotelsBookingElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md) |

#### Returns

[`KnowledgeGraphHotelsBookingElement`](KnowledgeGraphHotelsBookingElement.md)

#### Defined in

main.ts:28054

## Properties

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[IKnowledgeGraphHotelsBookingElement](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[description](../interfaces/IKnowledgeGraphHotelsBookingElement.md#description)

#### Defined in

main.ts:28041

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Implementation of

[IKnowledgeGraphHotelsBookingElement](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[domain](../interfaces/IKnowledgeGraphHotelsBookingElement.md#domain)

#### Defined in

main.ts:28045

___

### is\_paid

• `Optional` **is\_paid**: `boolean`

indicates whether the element is an ad

#### Implementation of

[IKnowledgeGraphHotelsBookingElement](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[is_paid](../interfaces/IKnowledgeGraphHotelsBookingElement.md#is_paid)

#### Defined in

main.ts:28050

___

### price

• `Optional` **price**: [`PriceInfo`](PriceInfo.md)

pricing details
contains the pricing details of the product or service featured in the result

#### Implementation of

[IKnowledgeGraphHotelsBookingElement](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[price](../interfaces/IKnowledgeGraphHotelsBookingElement.md#price)

#### Defined in

main.ts:28048

___

### source

• `Optional` **source**: `string`

source of additional information about the result

#### Implementation of

[IKnowledgeGraphHotelsBookingElement](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[source](../interfaces/IKnowledgeGraphHotelsBookingElement.md#source)

#### Defined in

main.ts:28039

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IKnowledgeGraphHotelsBookingElement](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[type](../interfaces/IKnowledgeGraphHotelsBookingElement.md#type)

#### Defined in

main.ts:28037

___

### url

• `Optional` **url**: `string`

relevant URL

#### Implementation of

[IKnowledgeGraphHotelsBookingElement](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[url](../interfaces/IKnowledgeGraphHotelsBookingElement.md#url)

#### Defined in

main.ts:28043

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

main.ts:28063

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

main.ts:28086

___

### fromJS

▸ **fromJS**(`data`): [`KnowledgeGraphHotelsBookingElement`](KnowledgeGraphHotelsBookingElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KnowledgeGraphHotelsBookingElement`](KnowledgeGraphHotelsBookingElement.md)

#### Defined in

main.ts:28079
