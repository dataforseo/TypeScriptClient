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

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

main.ts:35925

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:35919

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:35915

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:35912

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:35929

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

main.ts:35923

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:35921
