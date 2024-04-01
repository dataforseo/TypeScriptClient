[Documentation](../README.md) / [Exports](../modules.md) / HotelsPackElement

# Class: HotelsPackElement

## Implements

- [`IHotelsPackElement`](../interfaces/IHotelsPackElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](HotelsPackElement.md#constructor)

### Properties

- [description](HotelsPackElement.md#description)
- [domain](HotelsPackElement.md#domain)
- [hotel\_identifier](HotelsPackElement.md#hotel_identifier)
- [is\_paid](HotelsPackElement.md#is_paid)
- [price](HotelsPackElement.md#price)
- [rating](HotelsPackElement.md#rating)
- [title](HotelsPackElement.md#title)
- [type](HotelsPackElement.md#type)
- [url](HotelsPackElement.md#url)

### Methods

- [init](HotelsPackElement.md#init)
- [toJSON](HotelsPackElement.md#tojson)
- [fromJS](HotelsPackElement.md#fromjs)

## Constructors

### constructor

• **new HotelsPackElement**(`data?`): [`HotelsPackElement`](HotelsPackElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IHotelsPackElement`](../interfaces/IHotelsPackElement.md) |

#### Returns

[`HotelsPackElement`](HotelsPackElement.md)

#### Defined in

main.ts:33902

## Properties

### description

• `Optional` **description**: `string`

description

#### Implementation of

[IHotelsPackElement](../interfaces/IHotelsPackElement.md).[description](../interfaces/IHotelsPackElement.md#description)

#### Defined in

main.ts:33885

___

### domain

• `Optional` **domain**: `string`

website domain

#### Implementation of

[IHotelsPackElement](../interfaces/IHotelsPackElement.md).[domain](../interfaces/IHotelsPackElement.md#domain)

#### Defined in

main.ts:33891

___

### hotel\_identifier

• `Optional` **hotel\_identifier**: `string`

unique hotel identifier
unique hotel identifier assigned by Google;
example: "CgoIjaeSlI6CnNpVEAE"

#### Implementation of

[IHotelsPackElement](../interfaces/IHotelsPackElement.md).[hotel_identifier](../interfaces/IHotelsPackElement.md#hotel_identifier)

#### Defined in

main.ts:33889

___

### is\_paid

• `Optional` **is\_paid**: `boolean`

indicates whether the element is an ad

#### Implementation of

[IHotelsPackElement](../interfaces/IHotelsPackElement.md).[is_paid](../interfaces/IHotelsPackElement.md#is_paid)

#### Defined in

main.ts:33895

___

### price

• `Optional` **price**: [`PriceInfo`](PriceInfo.md)

price indicated in the element

#### Implementation of

[IHotelsPackElement](../interfaces/IHotelsPackElement.md).[price](../interfaces/IHotelsPackElement.md#price)

#### Defined in

main.ts:33881

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[IHotelsPackElement](../interfaces/IHotelsPackElement.md).[rating](../interfaces/IHotelsPackElement.md#rating)

#### Defined in

main.ts:33898

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IHotelsPackElement](../interfaces/IHotelsPackElement.md).[title](../interfaces/IHotelsPackElement.md#title)

#### Defined in

main.ts:33883

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IHotelsPackElement](../interfaces/IHotelsPackElement.md).[type](../interfaces/IHotelsPackElement.md#type)

#### Defined in

main.ts:33879

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IHotelsPackElement](../interfaces/IHotelsPackElement.md).[url](../interfaces/IHotelsPackElement.md#url)

#### Defined in

main.ts:33893

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

main.ts:33911

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

main.ts:33936

___

### fromJS

▸ **fromJS**(`data`): [`HotelsPackElement`](HotelsPackElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`HotelsPackElement`](HotelsPackElement.md)

#### Defined in

main.ts:33929
