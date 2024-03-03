[Documentation](../README.md) / [Exports](../modules.md) / IPeopleAlsoSearchSerpElementItem

# Interface: IPeopleAlsoSearchSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IPeopleAlsoSearchSerpElementItem`**

## Implemented by

- [`PeopleAlsoSearchSerpElementItem`](../classes/PeopleAlsoSearchSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IPeopleAlsoSearchSerpElementItem.md#items)
- [position](IPeopleAlsoSearchSerpElementItem.md#position)
- [rank\_absolute](IPeopleAlsoSearchSerpElementItem.md#rank_absolute)
- [rank\_group](IPeopleAlsoSearchSerpElementItem.md#rank_group)
- [rectangle](IPeopleAlsoSearchSerpElementItem.md#rectangle)
- [title](IPeopleAlsoSearchSerpElementItem.md#title)
- [xpath](IPeopleAlsoSearchSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: `string`[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

main.ts:28911

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:28905

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:28901

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:28898

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:28915

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

main.ts:28909

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:28907
