[Documentation](../README.md) / [Exports](../modules.md) / MentionCarouselDataforseoLabsSerpElementItem

# Class: MentionCarouselDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`MentionCarouselDataforseoLabsSerpElementItem`**

## Implements

- [`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MentionCarouselDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](MentionCarouselDataforseoLabsSerpElementItem.md#_discriminator)
- [items](MentionCarouselDataforseoLabsSerpElementItem.md#items)
- [position](MentionCarouselDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](MentionCarouselDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](MentionCarouselDataforseoLabsSerpElementItem.md#rank_group)
- [title](MentionCarouselDataforseoLabsSerpElementItem.md#title)
- [xpath](MentionCarouselDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](MentionCarouselDataforseoLabsSerpElementItem.md#init)
- [toJSON](MentionCarouselDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](MentionCarouselDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new MentionCarouselDataforseoLabsSerpElementItem**(`data?`): [`MentionCarouselDataforseoLabsSerpElementItem`](MentionCarouselDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMentionCarouselDataforseoLabsSerpElementItem`](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md) |

#### Returns

[`MentionCarouselDataforseoLabsSerpElementItem`](MentionCarouselDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:97358

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20171

___

### items

• `Optional` **items**: [`MentionCarouselElement`](MentionCarouselElement.md)[]

elements of search results found in SERP

#### Implementation of

[IMentionCarouselDataforseoLabsSerpElementItem](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[items](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:97354

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IMentionCarouselDataforseoLabsSerpElementItem](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[position](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:97348

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IMentionCarouselDataforseoLabsSerpElementItem](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:97344

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IMentionCarouselDataforseoLabsSerpElementItem](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:97341

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IMentionCarouselDataforseoLabsSerpElementItem](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[title](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:97352

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IMentionCarouselDataforseoLabsSerpElementItem](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IMentionCarouselDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:97350

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

main.ts:97363

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

main.ts:97390

___

### fromJS

▸ **fromJS**(`data`): [`MentionCarouselDataforseoLabsSerpElementItem`](MentionCarouselDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MentionCarouselDataforseoLabsSerpElementItem`](MentionCarouselDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:97383
