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

main.ts:30380

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:30376

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:30372

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:30390

___

### title

• `Optional` **title**: `string`

title of the row

#### Defined in

main.ts:30384

___

### url

• `Optional` **url**: `string`

source URL

#### Defined in

main.ts:30386

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:30382
