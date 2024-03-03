[Documentation](../README.md) / [Exports](../modules.md) / ITwitterSerpElementItem

# Interface: ITwitterSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`ITwitterSerpElementItem`**

## Implemented by

- [`TwitterSerpElementItem`](../classes/TwitterSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](ITwitterSerpElementItem.md#items)
- [position](ITwitterSerpElementItem.md#position)
- [rank\_absolute](ITwitterSerpElementItem.md#rank_absolute)
- [rank\_group](ITwitterSerpElementItem.md#rank_group)
- [rectangle](ITwitterSerpElementItem.md#rectangle)
- [title](ITwitterSerpElementItem.md#title)
- [url](ITwitterSerpElementItem.md#url)
- [xpath](ITwitterSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`TwitterElement`](../classes/TwitterElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

main.ts:29307

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:29299

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:29295

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:29292

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:29311

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

main.ts:29303

___

### url

• `Optional` **url**: `string`

URL

#### Defined in

main.ts:29305

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:29301
