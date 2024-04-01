[Documentation](../README.md) / [Exports](../modules.md) / IVideoDataforseoLabsSerpElementItem

# Interface: IVideoDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IVideoDataforseoLabsSerpElementItem`**

## Implemented by

- [`VideoDataforseoLabsSerpElementItem`](../classes/VideoDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IVideoDataforseoLabsSerpElementItem.md#items)
- [position](IVideoDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IVideoDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IVideoDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](IVideoDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`VideoElement`](../classes/VideoElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:95379

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:95374

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:95370

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:95367

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:95376
