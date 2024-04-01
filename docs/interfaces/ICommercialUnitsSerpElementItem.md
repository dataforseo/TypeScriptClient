[Documentation](../README.md) / [Exports](../modules.md) / ICommercialUnitsSerpElementItem

# Interface: ICommercialUnitsSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`ICommercialUnitsSerpElementItem`**

## Implemented by

- [`CommercialUnitsSerpElementItem`](../classes/CommercialUnitsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](ICommercialUnitsSerpElementItem.md#items)
- [position](ICommercialUnitsSerpElementItem.md#position)
- [rank\_absolute](ICommercialUnitsSerpElementItem.md#rank_absolute)
- [rank\_group](ICommercialUnitsSerpElementItem.md#rank_group)
- [rectangle](ICommercialUnitsSerpElementItem.md#rectangle)
- [title](ICommercialUnitsSerpElementItem.md#title)
- [xpath](ICommercialUnitsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`CommercialUnitsElement`](../classes/CommercialUnitsElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:34484

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:34477

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:34473

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:34469

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:34488

___

### title

• `Optional` **title**: `string`

title of the row

#### Defined in

main.ts:34481

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:34479
