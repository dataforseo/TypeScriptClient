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

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

main.ts:29641

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:29633

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:29629

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:29626

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:29645

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

main.ts:29637

___

### url

• `Optional` **url**: `string`

URL

#### Defined in

main.ts:29639

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:29635
