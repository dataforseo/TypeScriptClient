[Documentation](../README.md) / [Exports](../modules.md) / IPerspectivesSerpElementItem

# Interface: IPerspectivesSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IPerspectivesSerpElementItem`**

## Implemented by

- [`PerspectivesSerpElementItem`](../classes/PerspectivesSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IPerspectivesSerpElementItem.md#items)
- [position](IPerspectivesSerpElementItem.md#position)
- [rank\_absolute](IPerspectivesSerpElementItem.md#rank_absolute)
- [rank\_group](IPerspectivesSerpElementItem.md#rank_group)
- [rectangle](IPerspectivesSerpElementItem.md#rectangle)
- [title](IPerspectivesSerpElementItem.md#title)
- [xpath](IPerspectivesSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`PerspectivesElement`](../classes/PerspectivesElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:36550

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:36543

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:36539

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:36535

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:36554

___

### title

• `Optional` **title**: `string`

title of the row

#### Defined in

main.ts:36547

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:36545
