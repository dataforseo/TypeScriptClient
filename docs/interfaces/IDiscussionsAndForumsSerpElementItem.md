[Documentation](../README.md) / [Exports](../modules.md) / IDiscussionsAndForumsSerpElementItem

# Interface: IDiscussionsAndForumsSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IDiscussionsAndForumsSerpElementItem`**

## Implemented by

- [`DiscussionsAndForumsSerpElementItem`](../classes/DiscussionsAndForumsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDiscussionsAndForumsSerpElementItem.md#items)
- [position](IDiscussionsAndForumsSerpElementItem.md#position)
- [rank\_absolute](IDiscussionsAndForumsSerpElementItem.md#rank_absolute)
- [rank\_group](IDiscussionsAndForumsSerpElementItem.md#rank_group)
- [rectangle](IDiscussionsAndForumsSerpElementItem.md#rectangle)
- [title](IDiscussionsAndForumsSerpElementItem.md#title)
- [xpath](IDiscussionsAndForumsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`DiscussionsAndForumsElement`](../classes/DiscussionsAndForumsElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:36762

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:36755

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:36751

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:36747

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:36766

___

### title

• `Optional` **title**: `string`

title of the row

#### Defined in

main.ts:36759

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:36757
