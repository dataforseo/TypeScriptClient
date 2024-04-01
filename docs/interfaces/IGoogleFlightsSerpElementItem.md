[Documentation](../README.md) / [Exports](../modules.md) / IGoogleFlightsSerpElementItem

# Interface: IGoogleFlightsSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IGoogleFlightsSerpElementItem`**

## Implemented by

- [`GoogleFlightsSerpElementItem`](../classes/GoogleFlightsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IGoogleFlightsSerpElementItem.md#items)
- [position](IGoogleFlightsSerpElementItem.md#position)
- [rank\_absolute](IGoogleFlightsSerpElementItem.md#rank_absolute)
- [rank\_group](IGoogleFlightsSerpElementItem.md#rank_group)
- [rectangle](IGoogleFlightsSerpElementItem.md#rectangle)
- [title](IGoogleFlightsSerpElementItem.md#title)
- [url](IGoogleFlightsSerpElementItem.md#url)
- [xpath](IGoogleFlightsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`GoogleFlightsElement`](../classes/GoogleFlightsElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:31594

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:31585

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:31581

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:31577

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:31598

___

### title

• `Optional` **title**: `string`

title of the row

#### Defined in

main.ts:31589

___

### url

• `Optional` **url**: `string`

source URL

#### Defined in

main.ts:31591

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:31587
