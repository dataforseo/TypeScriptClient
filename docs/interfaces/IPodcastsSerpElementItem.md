[Documentation](../README.md) / [Exports](../modules.md) / IPodcastsSerpElementItem

# Interface: IPodcastsSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IPodcastsSerpElementItem`**

## Implemented by

- [`PodcastsSerpElementItem`](../classes/PodcastsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IPodcastsSerpElementItem.md#items)
- [position](IPodcastsSerpElementItem.md#position)
- [rank\_absolute](IPodcastsSerpElementItem.md#rank_absolute)
- [rank\_group](IPodcastsSerpElementItem.md#rank_group)
- [rectangle](IPodcastsSerpElementItem.md#rectangle)
- [xpath](IPodcastsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`PodcastsElement`](../classes/PodcastsElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:33214

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:33209

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:33205

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:33201

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:33218

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:33211
