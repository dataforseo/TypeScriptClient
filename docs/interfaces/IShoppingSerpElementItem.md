[Documentation](../README.md) / [Exports](../modules.md) / IShoppingSerpElementItem

# Interface: IShoppingSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IShoppingSerpElementItem`**

## Implemented by

- [`ShoppingSerpElementItem`](../classes/ShoppingSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IShoppingSerpElementItem.md#items)
- [position](IShoppingSerpElementItem.md#position)
- [rank\_absolute](IShoppingSerpElementItem.md#rank_absolute)
- [rank\_group](IShoppingSerpElementItem.md#rank_group)
- [rectangle](IShoppingSerpElementItem.md#rectangle)
- [title](IShoppingSerpElementItem.md#title)
- [xpath](IShoppingSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`ShoppingElement`](../classes/ShoppingElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

main.ts:30735

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:30729

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:30725

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:30722

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:30739

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

main.ts:30733

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:30731
