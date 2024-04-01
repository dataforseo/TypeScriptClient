[Documentation](../README.md) / [Exports](../modules.md) / IRefineProductsSerpElementItem

# Interface: IRefineProductsSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IRefineProductsSerpElementItem`**

## Implemented by

- [`RefineProductsSerpElementItem`](../classes/RefineProductsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IRefineProductsSerpElementItem.md#items)
- [position](IRefineProductsSerpElementItem.md#position)
- [rank\_absolute](IRefineProductsSerpElementItem.md#rank_absolute)
- [rank\_group](IRefineProductsSerpElementItem.md#rank_group)
- [rectangle](IRefineProductsSerpElementItem.md#rectangle)
- [title](IRefineProductsSerpElementItem.md#title)
- [xpath](IRefineProductsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`RefineProductsElement`](../classes/RefineProductsElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:36140

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:36133

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:36129

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:36125

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:36144

___

### title

• `Optional` **title**: `string`

title of the row

#### Defined in

main.ts:36137

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:36135
