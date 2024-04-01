[Documentation](../README.md) / [Exports](../modules.md) / ITopStoriesSerpElementItem

# Interface: ITopStoriesSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`ITopStoriesSerpElementItem`**

## Implemented by

- [`TopStoriesSerpElementItem`](../classes/TopStoriesSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](ITopStoriesSerpElementItem.md#items)
- [position](ITopStoriesSerpElementItem.md#position)
- [rank\_absolute](ITopStoriesSerpElementItem.md#rank_absolute)
- [rank\_group](ITopStoriesSerpElementItem.md#rank_group)
- [rectangle](ITopStoriesSerpElementItem.md#rectangle)
- [title](ITopStoriesSerpElementItem.md#title)
- [xpath](ITopStoriesSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`TopStoriesElement`](../classes/TopStoriesElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:29118

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:29111

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:29107

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:29103

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:29122

___

### title

• `Optional` **title**: `string`

title of the row

#### Defined in

main.ts:29115

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:29113
