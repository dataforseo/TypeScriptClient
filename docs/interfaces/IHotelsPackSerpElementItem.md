[Documentation](../README.md) / [Exports](../modules.md) / IHotelsPackSerpElementItem

# Interface: IHotelsPackSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IHotelsPackSerpElementItem`**

## Implemented by

- [`HotelsPackSerpElementItem`](../classes/HotelsPackSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_from](IHotelsPackSerpElementItem.md#date_from)
- [date\_to](IHotelsPackSerpElementItem.md#date_to)
- [items](IHotelsPackSerpElementItem.md#items)
- [position](IHotelsPackSerpElementItem.md#position)
- [rank\_absolute](IHotelsPackSerpElementItem.md#rank_absolute)
- [rank\_group](IHotelsPackSerpElementItem.md#rank_group)
- [rectangle](IHotelsPackSerpElementItem.md#rectangle)
- [title](IHotelsPackSerpElementItem.md#title)
- [xpath](IHotelsPackSerpElementItem.md#xpath)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of stay
in the format “year-month-date”
example:
2019-11-15

#### Defined in

main.ts:33342

___

### date\_to

• `Optional` **date\_to**: `string`

ending date of stay
in the format “year-month-date”
example:
2019-11-17

#### Defined in

main.ts:33347

___

### items

• `Optional` **items**: [`HotelsPackElement`](../classes/HotelsPackElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

main.ts:33349

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:33333

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:33329

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:33326

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:33353

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

main.ts:33337

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:33335
