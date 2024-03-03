[Documentation](../README.md) / [Exports](../modules.md) / RelatedSearchesSerpElementItem

# Class: RelatedSearchesSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`RelatedSearchesSerpElementItem`**

## Implements

- [`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](RelatedSearchesSerpElementItem.md#constructor)

### Properties

- [\_discriminator](RelatedSearchesSerpElementItem.md#_discriminator)
- [items](RelatedSearchesSerpElementItem.md#items)
- [position](RelatedSearchesSerpElementItem.md#position)
- [rank\_absolute](RelatedSearchesSerpElementItem.md#rank_absolute)
- [rank\_group](RelatedSearchesSerpElementItem.md#rank_group)
- [rectangle](RelatedSearchesSerpElementItem.md#rectangle)
- [xpath](RelatedSearchesSerpElementItem.md#xpath)

### Methods

- [init](RelatedSearchesSerpElementItem.md#init)
- [toJSON](RelatedSearchesSerpElementItem.md#tojson)
- [fromJS](RelatedSearchesSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new RelatedSearchesSerpElementItem**(`data?`): [`RelatedSearchesSerpElementItem`](RelatedSearchesSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md) |

#### Returns

[`RelatedSearchesSerpElementItem`](RelatedSearchesSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:31311

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19337

___

### items

• `Optional` **items**: `string`[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[IRelatedSearchesSerpElementItem](../interfaces/IRelatedSearchesSerpElementItem.md).[items](../interfaces/IRelatedSearchesSerpElementItem.md#items)

#### Defined in

main.ts:31303

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IRelatedSearchesSerpElementItem](../interfaces/IRelatedSearchesSerpElementItem.md).[position](../interfaces/IRelatedSearchesSerpElementItem.md#position)

#### Defined in

main.ts:31299

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IRelatedSearchesSerpElementItem](../interfaces/IRelatedSearchesSerpElementItem.md).[rank_absolute](../interfaces/IRelatedSearchesSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:31295

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IRelatedSearchesSerpElementItem](../interfaces/IRelatedSearchesSerpElementItem.md).[rank_group](../interfaces/IRelatedSearchesSerpElementItem.md#rank_group)

#### Defined in

main.ts:31292

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IRelatedSearchesSerpElementItem](../interfaces/IRelatedSearchesSerpElementItem.md).[rectangle](../interfaces/IRelatedSearchesSerpElementItem.md#rectangle)

#### Defined in

main.ts:31307

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IRelatedSearchesSerpElementItem](../interfaces/IRelatedSearchesSerpElementItem.md).[xpath](../interfaces/IRelatedSearchesSerpElementItem.md#xpath)

#### Defined in

main.ts:31301

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

main.ts:31316

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

main.ts:31343

___

### fromJS

▸ **fromJS**(`data`): [`RelatedSearchesSerpElementItem`](RelatedSearchesSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`RelatedSearchesSerpElementItem`](RelatedSearchesSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:31336
