[Documentation](../README.md) / [Exports](../modules.md) / IShortVideosSerpElementItem

# Interface: IShortVideosSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IShortVideosSerpElementItem`**

## Implemented by

- [`ShortVideosSerpElementItem`](../classes/ShortVideosSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IShortVideosSerpElementItem.md#items)
- [position](IShortVideosSerpElementItem.md#position)
- [rank\_absolute](IShortVideosSerpElementItem.md#rank_absolute)
- [rank\_group](IShortVideosSerpElementItem.md#rank_group)
- [rectangle](IShortVideosSerpElementItem.md#rectangle)
- [title](IShortVideosSerpElementItem.md#title)
- [xpath](IShortVideosSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`ShortVideosElement`](../classes/ShortVideosElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:35948

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:35941

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:35937

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:35933

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:35952

___

### title

• `Optional` **title**: `string`

title of the row

#### Defined in

main.ts:35945

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:35943
