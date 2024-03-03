[Documentation](../README.md) / [Exports](../modules.md) / PopularProductsSerpElementItem

# Class: PopularProductsSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`PopularProductsSerpElementItem`**

## Implements

- [`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PopularProductsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](PopularProductsSerpElementItem.md#_discriminator)
- [items](PopularProductsSerpElementItem.md#items)
- [position](PopularProductsSerpElementItem.md#position)
- [rank\_absolute](PopularProductsSerpElementItem.md#rank_absolute)
- [rank\_group](PopularProductsSerpElementItem.md#rank_group)
- [rectangle](PopularProductsSerpElementItem.md#rectangle)
- [xpath](PopularProductsSerpElementItem.md#xpath)

### Methods

- [init](PopularProductsSerpElementItem.md#init)
- [toJSON](PopularProductsSerpElementItem.md#tojson)
- [fromJS](PopularProductsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new PopularProductsSerpElementItem**(`data?`): [`PopularProductsSerpElementItem`](PopularProductsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md) |

#### Returns

[`PopularProductsSerpElementItem`](PopularProductsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:32221

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19337

___

### items

• `Optional` **items**: [`PopularProductsElement`](PopularProductsElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[IPopularProductsSerpElementItem](../interfaces/IPopularProductsSerpElementItem.md).[items](../interfaces/IPopularProductsSerpElementItem.md#items)

#### Defined in

main.ts:32213

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IPopularProductsSerpElementItem](../interfaces/IPopularProductsSerpElementItem.md).[position](../interfaces/IPopularProductsSerpElementItem.md#position)

#### Defined in

main.ts:32209

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IPopularProductsSerpElementItem](../interfaces/IPopularProductsSerpElementItem.md).[rank_absolute](../interfaces/IPopularProductsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:32205

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IPopularProductsSerpElementItem](../interfaces/IPopularProductsSerpElementItem.md).[rank_group](../interfaces/IPopularProductsSerpElementItem.md#rank_group)

#### Defined in

main.ts:32202

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IPopularProductsSerpElementItem](../interfaces/IPopularProductsSerpElementItem.md).[rectangle](../interfaces/IPopularProductsSerpElementItem.md#rectangle)

#### Defined in

main.ts:32217

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IPopularProductsSerpElementItem](../interfaces/IPopularProductsSerpElementItem.md).[xpath](../interfaces/IPopularProductsSerpElementItem.md#xpath)

#### Defined in

main.ts:32211

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

main.ts:32226

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

main.ts:32253

___

### fromJS

▸ **fromJS**(`data`): [`PopularProductsSerpElementItem`](PopularProductsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PopularProductsSerpElementItem`](PopularProductsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:32246
