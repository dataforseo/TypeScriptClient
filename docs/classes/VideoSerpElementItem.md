[Documentation](../README.md) / [Exports](../modules.md) / VideoSerpElementItem

# Class: VideoSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`VideoSerpElementItem`**

## Implements

- [`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](VideoSerpElementItem.md#constructor)

### Properties

- [\_discriminator](VideoSerpElementItem.md#_discriminator)
- [items](VideoSerpElementItem.md#items)
- [position](VideoSerpElementItem.md#position)
- [rank\_absolute](VideoSerpElementItem.md#rank_absolute)
- [rank\_group](VideoSerpElementItem.md#rank_group)
- [rectangle](VideoSerpElementItem.md#rectangle)
- [xpath](VideoSerpElementItem.md#xpath)

### Methods

- [init](VideoSerpElementItem.md#init)
- [toJSON](VideoSerpElementItem.md#tojson)
- [fromJS](VideoSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new VideoSerpElementItem**(`data?`): [`VideoSerpElementItem`](VideoSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md) |

#### Returns

[`VideoSerpElementItem`](VideoSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:31009

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19788

___

### items

• `Optional` **items**: [`VideoElement`](VideoElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IVideoSerpElementItem](../interfaces/IVideoSerpElementItem.md).[items](../interfaces/IVideoSerpElementItem.md#items)

#### Defined in

main.ts:31001

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IVideoSerpElementItem](../interfaces/IVideoSerpElementItem.md).[position](../interfaces/IVideoSerpElementItem.md#position)

#### Defined in

main.ts:30996

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[IVideoSerpElementItem](../interfaces/IVideoSerpElementItem.md).[rank_absolute](../interfaces/IVideoSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:30992

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[IVideoSerpElementItem](../interfaces/IVideoSerpElementItem.md).[rank_group](../interfaces/IVideoSerpElementItem.md#rank_group)

#### Defined in

main.ts:30988

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IVideoSerpElementItem](../interfaces/IVideoSerpElementItem.md).[rectangle](../interfaces/IVideoSerpElementItem.md#rectangle)

#### Defined in

main.ts:31005

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IVideoSerpElementItem](../interfaces/IVideoSerpElementItem.md).[xpath](../interfaces/IVideoSerpElementItem.md#xpath)

#### Defined in

main.ts:30998

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

main.ts:31014

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

main.ts:31041

___

### fromJS

▸ **fromJS**(`data`): [`VideoSerpElementItem`](VideoSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`VideoSerpElementItem`](VideoSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:31034
