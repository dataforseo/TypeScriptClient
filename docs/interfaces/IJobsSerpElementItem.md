[Documentation](../README.md) / [Exports](../modules.md) / IJobsSerpElementItem

# Interface: IJobsSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IJobsSerpElementItem`**

## Implemented by

- [`JobsSerpElementItem`](../classes/JobsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IJobsSerpElementItem.md#items)
- [position](IJobsSerpElementItem.md#position)
- [rank\_absolute](IJobsSerpElementItem.md#rank_absolute)
- [rank\_group](IJobsSerpElementItem.md#rank_group)
- [rectangle](IJobsSerpElementItem.md#rectangle)
- [title](IJobsSerpElementItem.md#title)
- [url](IJobsSerpElementItem.md#url)
- [xpath](IJobsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`JobsElement`](../classes/JobsElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:30284

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:30275

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:30271

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:30267

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:30288

___

### title

• `Optional` **title**: `string`

title of the row

#### Defined in

main.ts:30279

___

### url

• `Optional` **url**: `string`

source URL

#### Defined in

main.ts:30281

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:30277
