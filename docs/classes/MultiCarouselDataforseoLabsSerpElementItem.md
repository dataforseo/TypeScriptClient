[Documentation](../README.md) / [Exports](../modules.md) / MultiCarouselDataforseoLabsSerpElementItem

# Class: MultiCarouselDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`MultiCarouselDataforseoLabsSerpElementItem`**

## Implements

- [`IMultiCarouselDataforseoLabsSerpElementItem`](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MultiCarouselDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](MultiCarouselDataforseoLabsSerpElementItem.md#_discriminator)
- [items](MultiCarouselDataforseoLabsSerpElementItem.md#items)
- [position](MultiCarouselDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](MultiCarouselDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](MultiCarouselDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](MultiCarouselDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](MultiCarouselDataforseoLabsSerpElementItem.md#init)
- [toJSON](MultiCarouselDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](MultiCarouselDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new MultiCarouselDataforseoLabsSerpElementItem**(`data?`): [`MultiCarouselDataforseoLabsSerpElementItem`](MultiCarouselDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMultiCarouselDataforseoLabsSerpElementItem`](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md) |

#### Returns

[`MultiCarouselDataforseoLabsSerpElementItem`](MultiCarouselDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:92661

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19715

___

### items

• `Optional` **items**: [`MultiCarouselElement`](MultiCarouselElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IMultiCarouselDataforseoLabsSerpElementItem](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md).[items](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:92657

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IMultiCarouselDataforseoLabsSerpElementItem](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md).[position](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:92652

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IMultiCarouselDataforseoLabsSerpElementItem](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:92648

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IMultiCarouselDataforseoLabsSerpElementItem](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:92645

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IMultiCarouselDataforseoLabsSerpElementItem](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:92654

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

main.ts:92666

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

main.ts:92692

___

### fromJS

▸ **fromJS**(`data`): [`MultiCarouselDataforseoLabsSerpElementItem`](MultiCarouselDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MultiCarouselDataforseoLabsSerpElementItem`](MultiCarouselDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:92685
