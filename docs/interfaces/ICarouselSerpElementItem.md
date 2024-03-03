[Documentation](../README.md) / [Exports](../modules.md) / ICarouselSerpElementItem

# Interface: ICarouselSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`ICarouselSerpElementItem`**

## Implemented by

- [`CarouselSerpElementItem`](../classes/CarouselSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](ICarouselSerpElementItem.md#items)
- [position](ICarouselSerpElementItem.md#position)
- [rank\_absolute](ICarouselSerpElementItem.md#rank_absolute)
- [rank\_group](ICarouselSerpElementItem.md#rank_group)
- [rectangle](ICarouselSerpElementItem.md#rectangle)
- [title](ICarouselSerpElementItem.md#title)
- [xpath](ICarouselSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`CarouselElement`](../classes/CarouselElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

main.ts:30223

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:30217

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:30213

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:30210

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:30227

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

main.ts:30221

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:30219
