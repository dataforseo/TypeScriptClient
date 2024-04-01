[Documentation](../README.md) / [Exports](../modules.md) / IFoundOnWebSerpElementItem

# Interface: IFoundOnWebSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IFoundOnWebSerpElementItem`**

## Implemented by

- [`FoundOnWebSerpElementItem`](../classes/FoundOnWebSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IFoundOnWebSerpElementItem.md#items)
- [position](IFoundOnWebSerpElementItem.md#position)
- [rank\_absolute](IFoundOnWebSerpElementItem.md#rank_absolute)
- [rank\_group](IFoundOnWebSerpElementItem.md#rank_group)
- [rectangle](IFoundOnWebSerpElementItem.md#rectangle)
- [related\_searches](IFoundOnWebSerpElementItem.md#related_searches)
- [title](IFoundOnWebSerpElementItem.md#title)
- [xpath](IFoundOnWebSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`FoundOnWebElement`](../classes/FoundOnWebElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:35836

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:35827

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:35823

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:35819

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:35840

___

### related\_searches

• `Optional` **related\_searches**: `string`[]

search queries related to the elment

#### Defined in

main.ts:35833

___

### title

• `Optional` **title**: `string`

title of the row

#### Defined in

main.ts:35831

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:35829
