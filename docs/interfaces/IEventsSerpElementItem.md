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

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:31976

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:31967

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:31963

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:31959

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:31980

___

### title

• `Optional` **title**: `string`

title of the row

#### Defined in

main.ts:31971

___

### url

• `Optional` **url**: `string`

source URL

#### Defined in

main.ts:31973

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:31969
