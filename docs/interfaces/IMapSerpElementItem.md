[Documentation](../README.md) / [Exports](../modules.md) / IMapSerpElementItem

# Interface: IMapSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IMapSerpElementItem`**

## Implemented by

- [`MapSerpElementItem`](../classes/MapSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [position](IMapSerpElementItem.md#position)
- [rank\_absolute](IMapSerpElementItem.md#rank_absolute)
- [rank\_group](IMapSerpElementItem.md#rank_group)
- [rectangle](IMapSerpElementItem.md#rectangle)
- [title](IMapSerpElementItem.md#title)
- [url](IMapSerpElementItem.md#url)
- [xpath](IMapSerpElementItem.md#xpath)

## Properties

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:29733

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:29729

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:29726

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:29743

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

main.ts:29737

___

### url

• `Optional` **url**: `string`

URL

#### Defined in

main.ts:29739

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:29735
