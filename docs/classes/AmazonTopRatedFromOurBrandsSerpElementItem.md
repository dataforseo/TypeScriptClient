[Documentation](../README.md) / [Exports](../modules.md) / AmazonTopRatedFromOurBrandsSerpElementItem

# Class: AmazonTopRatedFromOurBrandsSerpElementItem

## Hierarchy

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

  ↳ **`AmazonTopRatedFromOurBrandsSerpElementItem`**

## Implements

- [`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AmazonTopRatedFromOurBrandsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](AmazonTopRatedFromOurBrandsSerpElementItem.md#_discriminator)
- [items](AmazonTopRatedFromOurBrandsSerpElementItem.md#items)
- [position](AmazonTopRatedFromOurBrandsSerpElementItem.md#position)
- [rank\_absolute](AmazonTopRatedFromOurBrandsSerpElementItem.md#rank_absolute)
- [rank\_group](AmazonTopRatedFromOurBrandsSerpElementItem.md#rank_group)
- [xpath](AmazonTopRatedFromOurBrandsSerpElementItem.md#xpath)

### Methods

- [init](AmazonTopRatedFromOurBrandsSerpElementItem.md#init)
- [toJSON](AmazonTopRatedFromOurBrandsSerpElementItem.md#tojson)
- [fromJS](AmazonTopRatedFromOurBrandsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new AmazonTopRatedFromOurBrandsSerpElementItem**(`data?`): [`AmazonTopRatedFromOurBrandsSerpElementItem`](AmazonTopRatedFromOurBrandsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md) |

#### Returns

[`AmazonTopRatedFromOurBrandsSerpElementItem`](AmazonTopRatedFromOurBrandsSerpElementItem.md)

#### Overrides

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[constructor](BaseAmazonSerpElementItem.md#constructor)

#### Defined in

main.ts:176657

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[_discriminator](BaseAmazonSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21275

___

### items

• `Optional` **items**: [`AmazonSerpElement`](AmazonSerpElement.md)[]

Amazon product items

#### Implementation of

[IAmazonTopRatedFromOurBrandsSerpElementItem](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md).[items](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md#items)

#### Defined in

main.ts:176653

___

### position

• `Optional` **position**: `string`

the alignment of the element in Amazon SERP
possible values:
left, right

#### Implementation of

[IAmazonTopRatedFromOurBrandsSerpElementItem](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md).[position](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md#position)

#### Defined in

main.ts:176649

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Amazon SERP

#### Implementation of

[IAmazonTopRatedFromOurBrandsSerpElementItem](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md).[rank_absolute](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:176645

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IAmazonTopRatedFromOurBrandsSerpElementItem](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md).[rank_group](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md#rank_group)

#### Defined in

main.ts:176642

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IAmazonTopRatedFromOurBrandsSerpElementItem](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md).[xpath](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md#xpath)

#### Defined in

main.ts:176651

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

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[init](BaseAmazonSerpElementItem.md#init)

#### Defined in

main.ts:176662

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

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[toJSON](BaseAmazonSerpElementItem.md#tojson)

#### Defined in

main.ts:176688

___

### fromJS

▸ **fromJS**(`data`): [`AmazonTopRatedFromOurBrandsSerpElementItem`](AmazonTopRatedFromOurBrandsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AmazonTopRatedFromOurBrandsSerpElementItem`](AmazonTopRatedFromOurBrandsSerpElementItem.md)

#### Overrides

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[fromJS](BaseAmazonSerpElementItem.md#fromjs)

#### Defined in

main.ts:176681
