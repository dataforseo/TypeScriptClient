[Documentation](../README.md) / [Exports](../modules.md) / IVideoSerpElementItem

# Interface: IVideoSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IVideoSerpElementItem`**

## Implemented by

- [`VideoSerpElementItem`](../classes/VideoSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IVideoSerpElementItem.md#items)
- [position](IVideoSerpElementItem.md#position)
- [rank\_absolute](IVideoSerpElementItem.md#rank_absolute)
- [rank\_group](IVideoSerpElementItem.md#rank_group)
- [rectangle](IVideoSerpElementItem.md#rectangle)
- [xpath](IVideoSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`VideoElement`](../classes/VideoElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:31080

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:31075

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:31071

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:31067

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:31084

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:31077
