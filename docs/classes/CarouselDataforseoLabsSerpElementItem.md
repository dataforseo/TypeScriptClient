[Documentation](../README.md) / [Exports](../modules.md) / CarouselDataforseoLabsSerpElementItem

# Class: CarouselDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`CarouselDataforseoLabsSerpElementItem`**

## Implements

- [`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](CarouselDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](CarouselDataforseoLabsSerpElementItem.md#_discriminator)
- [items](CarouselDataforseoLabsSerpElementItem.md#items)
- [position](CarouselDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](CarouselDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](CarouselDataforseoLabsSerpElementItem.md#rank_group)
- [title](CarouselDataforseoLabsSerpElementItem.md#title)
- [xpath](CarouselDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](CarouselDataforseoLabsSerpElementItem.md#init)
- [toJSON](CarouselDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](CarouselDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new CarouselDataforseoLabsSerpElementItem**(`data?`): [`CarouselDataforseoLabsSerpElementItem`](CarouselDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md) |

#### Returns

[`CarouselDataforseoLabsSerpElementItem`](CarouselDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:94798

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20171

___

### items

• `Optional` **items**: [`CarouselElement`](CarouselElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[ICarouselDataforseoLabsSerpElementItem](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[items](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:94794

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[ICarouselDataforseoLabsSerpElementItem](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[position](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:94787

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[ICarouselDataforseoLabsSerpElementItem](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:94783

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[ICarouselDataforseoLabsSerpElementItem](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:94780

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[ICarouselDataforseoLabsSerpElementItem](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[title](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:94791

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[ICarouselDataforseoLabsSerpElementItem](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[xpath](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:94789

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

main.ts:94803

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

main.ts:94830

___

### fromJS

▸ **fromJS**(`data`): [`CarouselDataforseoLabsSerpElementItem`](CarouselDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`CarouselDataforseoLabsSerpElementItem`](CarouselDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:94823
