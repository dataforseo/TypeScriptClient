[Documentation](../README.md) / [Exports](../modules.md) / IEventsSerpElementItem

# Interface: IEventsSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IEventsSerpElementItem`**

## Implemented by

- [`EventsSerpElementItem`](../classes/EventsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IEventsSerpElementItem.md#items)
- [position](IEventsSerpElementItem.md#position)
- [rank\_absolute](IEventsSerpElementItem.md#rank_absolute)
- [rank\_group](IEventsSerpElementItem.md#rank_group)
- [rectangle](IEventsSerpElementItem.md#rectangle)
- [title](IEventsSerpElementItem.md#title)
- [url](IEventsSerpElementItem.md#url)
- [xpath](IEventsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`EventsElement`](../classes/EventsElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

main.ts:31279

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:31271

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:31267

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:31264

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:31283

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

main.ts:31275

___

### url

• `Optional` **url**: `string`

URL

#### Defined in

main.ts:31277

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:31273
