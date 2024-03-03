[Documentation](../README.md) / [Exports](../modules.md) / IImagesSerpElementItem

# Interface: IImagesSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IImagesSerpElementItem`**

## Implemented by

- [`ImagesSerpElementItem`](../classes/ImagesSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IImagesSerpElementItem.md#items)
- [position](IImagesSerpElementItem.md#position)
- [rank\_absolute](IImagesSerpElementItem.md#rank_absolute)
- [rank\_group](IImagesSerpElementItem.md#rank_group)
- [rectangle](IImagesSerpElementItem.md#rectangle)
- [related\_image\_searches](IImagesSerpElementItem.md#related_image_searches)
- [title](IImagesSerpElementItem.md#title)
- [url](IImagesSerpElementItem.md#url)
- [xpath](IImagesSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`ImagesElement`](../classes/ImagesElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

main.ts:29112

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:29104

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:29100

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:29097

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:29119

___

### related\_image\_searches

• `Optional` **related\_image\_searches**: [`RelatedImageSearchesElement`](../classes/RelatedImageSearchesElement.md)[]

contains keywords and images related to the specified search term
if there are none, equals null

#### Defined in

main.ts:29115

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

main.ts:29108

___

### url

• `Optional` **url**: `string`

URL

#### Defined in

main.ts:29110

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:29106
