[Documentation](../README.md) / [Exports](../modules.md) / TopSightsSerpElementItem

# Class: TopSightsSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`TopSightsSerpElementItem`**

## Implements

- [`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](TopSightsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](TopSightsSerpElementItem.md#_discriminator)
- [items](TopSightsSerpElementItem.md#items)
- [position](TopSightsSerpElementItem.md#position)
- [rank\_absolute](TopSightsSerpElementItem.md#rank_absolute)
- [rank\_group](TopSightsSerpElementItem.md#rank_group)
- [rectangle](TopSightsSerpElementItem.md#rectangle)
- [title](TopSightsSerpElementItem.md#title)
- [xpath](TopSightsSerpElementItem.md#xpath)

### Methods

- [init](TopSightsSerpElementItem.md#init)
- [toJSON](TopSightsSerpElementItem.md#tojson)
- [fromJS](TopSightsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new TopSightsSerpElementItem**(`data?`): [`TopSightsSerpElementItem`](TopSightsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md) |

#### Returns

[`TopSightsSerpElementItem`](TopSightsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:31855

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19337

___

### items

• `Optional` **items**: [`TopSightsElement`](TopSightsElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[ITopSightsSerpElementItem](../interfaces/ITopSightsSerpElementItem.md).[items](../interfaces/ITopSightsSerpElementItem.md#items)

#### Defined in

main.ts:31847

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[ITopSightsSerpElementItem](../interfaces/ITopSightsSerpElementItem.md).[position](../interfaces/ITopSightsSerpElementItem.md#position)

#### Defined in

main.ts:31841

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[ITopSightsSerpElementItem](../interfaces/ITopSightsSerpElementItem.md).[rank_absolute](../interfaces/ITopSightsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:31837

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[ITopSightsSerpElementItem](../interfaces/ITopSightsSerpElementItem.md).[rank_group](../interfaces/ITopSightsSerpElementItem.md#rank_group)

#### Defined in

main.ts:31834

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[ITopSightsSerpElementItem](../interfaces/ITopSightsSerpElementItem.md).[rectangle](../interfaces/ITopSightsSerpElementItem.md#rectangle)

#### Defined in

main.ts:31851

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[ITopSightsSerpElementItem](../interfaces/ITopSightsSerpElementItem.md).[title](../interfaces/ITopSightsSerpElementItem.md#title)

#### Defined in

main.ts:31845

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[ITopSightsSerpElementItem](../interfaces/ITopSightsSerpElementItem.md).[xpath](../interfaces/ITopSightsSerpElementItem.md#xpath)

#### Defined in

main.ts:31843

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

[BaseSerpElementItem](BaseSerpElementItem.md).[init](BaseSerpElementItem.md#init)

#### Defined in

main.ts:31860

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

[BaseSerpElementItem](BaseSerpElementItem.md).[toJSON](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:31888

___

### fromJS

▸ **fromJS**(`data`): [`TopSightsSerpElementItem`](TopSightsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TopSightsSerpElementItem`](TopSightsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:31881
