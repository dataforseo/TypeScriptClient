[Documentation](../README.md) / [Exports](../modules.md) / ITopSightsSerpElementItem

# Interface: ITopSightsSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`ITopSightsSerpElementItem`**

## Implemented by

- [`TopSightsSerpElementItem`](../classes/TopSightsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](ITopSightsSerpElementItem.md#items)
- [position](ITopSightsSerpElementItem.md#position)
- [rank\_absolute](ITopSightsSerpElementItem.md#rank_absolute)
- [rank\_group](ITopSightsSerpElementItem.md#rank_group)
- [rectangle](ITopSightsSerpElementItem.md#rectangle)
- [title](ITopSightsSerpElementItem.md#title)
- [xpath](ITopSightsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`TopSightsElement`](../classes/TopSightsElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:32648

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:32641

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:32637

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:32633

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:32652

___

### title

• `Optional` **title**: `string`

title of the row

#### Defined in

main.ts:32645

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:32643
