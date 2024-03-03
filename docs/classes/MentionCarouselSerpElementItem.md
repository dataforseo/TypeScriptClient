[Documentation](../README.md) / [Exports](../modules.md) / MentionCarouselSerpElementItem

# Class: MentionCarouselSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`MentionCarouselSerpElementItem`**

## Implements

- [`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MentionCarouselSerpElementItem.md#constructor)

### Properties

- [\_discriminator](MentionCarouselSerpElementItem.md#_discriminator)
- [items](MentionCarouselSerpElementItem.md#items)
- [position](MentionCarouselSerpElementItem.md#position)
- [rank\_absolute](MentionCarouselSerpElementItem.md#rank_absolute)
- [rank\_group](MentionCarouselSerpElementItem.md#rank_group)
- [rectangle](MentionCarouselSerpElementItem.md#rectangle)
- [title](MentionCarouselSerpElementItem.md#title)
- [xpath](MentionCarouselSerpElementItem.md#xpath)

### Methods

- [init](MentionCarouselSerpElementItem.md#init)
- [toJSON](MentionCarouselSerpElementItem.md#tojson)
- [fromJS](MentionCarouselSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new MentionCarouselSerpElementItem**(`data?`): [`MentionCarouselSerpElementItem`](MentionCarouselSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md) |

#### Returns

[`MentionCarouselSerpElementItem`](MentionCarouselSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:31027

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19337

___

### items

• `Optional` **items**: [`MentionCarouselElement`](MentionCarouselElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[IMentionCarouselSerpElementItem](../interfaces/IMentionCarouselSerpElementItem.md).[items](../interfaces/IMentionCarouselSerpElementItem.md#items)

#### Defined in

main.ts:31019

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IMentionCarouselSerpElementItem](../interfaces/IMentionCarouselSerpElementItem.md).[position](../interfaces/IMentionCarouselSerpElementItem.md#position)

#### Defined in

main.ts:31013

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IMentionCarouselSerpElementItem](../interfaces/IMentionCarouselSerpElementItem.md).[rank_absolute](../interfaces/IMentionCarouselSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:31009

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IMentionCarouselSerpElementItem](../interfaces/IMentionCarouselSerpElementItem.md).[rank_group](../interfaces/IMentionCarouselSerpElementItem.md#rank_group)

#### Defined in

main.ts:31006

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IMentionCarouselSerpElementItem](../interfaces/IMentionCarouselSerpElementItem.md).[rectangle](../interfaces/IMentionCarouselSerpElementItem.md#rectangle)

#### Defined in

main.ts:31023

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IMentionCarouselSerpElementItem](../interfaces/IMentionCarouselSerpElementItem.md).[title](../interfaces/IMentionCarouselSerpElementItem.md#title)

#### Defined in

main.ts:31017

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IMentionCarouselSerpElementItem](../interfaces/IMentionCarouselSerpElementItem.md).[xpath](../interfaces/IMentionCarouselSerpElementItem.md#xpath)

#### Defined in

main.ts:31015

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

main.ts:31032

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

main.ts:31060

___

### fromJS

▸ **fromJS**(`data`): [`MentionCarouselSerpElementItem`](MentionCarouselSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MentionCarouselSerpElementItem`](MentionCarouselSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:31053
