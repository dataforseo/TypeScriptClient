[Documentation](../README.md) / [Exports](../modules.md) / ICarouselDataforseoLabsSerpElementItem

# Interface: ICarouselDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`ICarouselDataforseoLabsSerpElementItem`**

## Implemented by

- [`CarouselDataforseoLabsSerpElementItem`](../classes/CarouselDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](ICarouselDataforseoLabsSerpElementItem.md#items)
- [position](ICarouselDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](ICarouselDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](ICarouselDataforseoLabsSerpElementItem.md#rank_group)
- [title](ICarouselDataforseoLabsSerpElementItem.md#title)
- [xpath](ICarouselDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`CarouselElement`](../classes/CarouselElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:92636

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:92629

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:92625

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:92622

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:92633

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:92631
