[Documentation](../README.md) / [Exports](../modules.md) / ShortVideosSerpElementItem

# Class: ShortVideosSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`ShortVideosSerpElementItem`**

## Implements

- [`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ShortVideosSerpElementItem.md#constructor)

### Properties

- [\_discriminator](ShortVideosSerpElementItem.md#_discriminator)
- [items](ShortVideosSerpElementItem.md#items)
- [position](ShortVideosSerpElementItem.md#position)
- [rank\_absolute](ShortVideosSerpElementItem.md#rank_absolute)
- [rank\_group](ShortVideosSerpElementItem.md#rank_group)
- [rectangle](ShortVideosSerpElementItem.md#rectangle)
- [title](ShortVideosSerpElementItem.md#title)
- [xpath](ShortVideosSerpElementItem.md#xpath)

### Methods

- [init](ShortVideosSerpElementItem.md#init)
- [toJSON](ShortVideosSerpElementItem.md#tojson)
- [fromJS](ShortVideosSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new ShortVideosSerpElementItem**(`data?`): [`ShortVideosSerpElementItem`](ShortVideosSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md) |

#### Returns

[`ShortVideosSerpElementItem`](ShortVideosSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:35873

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19788

___

### items

• `Optional` **items**: [`ShortVideosElement`](ShortVideosElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IShortVideosSerpElementItem](../interfaces/IShortVideosSerpElementItem.md).[items](../interfaces/IShortVideosSerpElementItem.md#items)

#### Defined in

main.ts:35865

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IShortVideosSerpElementItem](../interfaces/IShortVideosSerpElementItem.md).[position](../interfaces/IShortVideosSerpElementItem.md#position)

#### Defined in

main.ts:35858

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[IShortVideosSerpElementItem](../interfaces/IShortVideosSerpElementItem.md).[rank_absolute](../interfaces/IShortVideosSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:35854

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[IShortVideosSerpElementItem](../interfaces/IShortVideosSerpElementItem.md).[rank_group](../interfaces/IShortVideosSerpElementItem.md#rank_group)

#### Defined in

main.ts:35850

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IShortVideosSerpElementItem](../interfaces/IShortVideosSerpElementItem.md).[rectangle](../interfaces/IShortVideosSerpElementItem.md#rectangle)

#### Defined in

main.ts:35869

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[IShortVideosSerpElementItem](../interfaces/IShortVideosSerpElementItem.md).[title](../interfaces/IShortVideosSerpElementItem.md#title)

#### Defined in

main.ts:35862

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IShortVideosSerpElementItem](../interfaces/IShortVideosSerpElementItem.md).[xpath](../interfaces/IShortVideosSerpElementItem.md#xpath)

#### Defined in

main.ts:35860

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

main.ts:35878

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

main.ts:35906

___

### fromJS

▸ **fromJS**(`data`): [`ShortVideosSerpElementItem`](ShortVideosSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ShortVideosSerpElementItem`](ShortVideosSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:35899
