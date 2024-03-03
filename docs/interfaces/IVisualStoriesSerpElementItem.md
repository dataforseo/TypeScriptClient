[Documentation](../README.md) / [Exports](../modules.md) / IVisualStoriesSerpElementItem

# Interface: IVisualStoriesSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IVisualStoriesSerpElementItem`**

## Implemented by

- [`VisualStoriesSerpElementItem`](../classes/VisualStoriesSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IVisualStoriesSerpElementItem.md#items)
- [position](IVisualStoriesSerpElementItem.md#position)
- [rank\_absolute](IVisualStoriesSerpElementItem.md#rank_absolute)
- [rank\_group](IVisualStoriesSerpElementItem.md#rank_group)
- [rectangle](IVisualStoriesSerpElementItem.md#rectangle)
- [xpath](IVisualStoriesSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`LicensesElement`](../classes/LicensesElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

main.ts:33517

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:33513

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:33509

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:33506

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:33521

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:33515
