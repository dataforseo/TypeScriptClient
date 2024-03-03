[Documentation](../README.md) / [Exports](../modules.md) / IMultiCarouselSerpElementItem

# Interface: IMultiCarouselSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IMultiCarouselSerpElementItem`**

## Implemented by

- [`MultiCarouselSerpElementItem`](../classes/MultiCarouselSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IMultiCarouselSerpElementItem.md#items)
- [position](IMultiCarouselSerpElementItem.md#position)
- [rank\_absolute](IMultiCarouselSerpElementItem.md#rank_absolute)
- [rank\_group](IMultiCarouselSerpElementItem.md#rank_group)
- [rectangle](IMultiCarouselSerpElementItem.md#rectangle)
- [xpath](IMultiCarouselSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`MultiCarouselElement`](../classes/MultiCarouselElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

main.ts:31549

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:31545

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:31541

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:31538

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:31553

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:31547
