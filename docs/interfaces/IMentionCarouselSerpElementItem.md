[Documentation](../README.md) / [Exports](../modules.md) / IMentionCarouselSerpElementItem

# Interface: IMentionCarouselSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IMentionCarouselSerpElementItem`**

## Implemented by

- [`MentionCarouselSerpElementItem`](../classes/MentionCarouselSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IMentionCarouselSerpElementItem.md#items)
- [position](IMentionCarouselSerpElementItem.md#position)
- [rank\_absolute](IMentionCarouselSerpElementItem.md#rank_absolute)
- [rank\_group](IMentionCarouselSerpElementItem.md#rank_group)
- [rectangle](IMentionCarouselSerpElementItem.md#rectangle)
- [title](IMentionCarouselSerpElementItem.md#title)
- [xpath](IMentionCarouselSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`MentionCarouselElement`](../classes/MentionCarouselElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:31790

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:31783

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:31779

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:31775

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:31794

___

### title

• `Optional` **title**: `string`

title of the row

#### Defined in

main.ts:31787

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:31785
