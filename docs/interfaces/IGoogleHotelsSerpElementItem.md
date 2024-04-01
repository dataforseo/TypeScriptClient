[Documentation](../README.md) / [Exports](../modules.md) / IGoogleHotelsSerpElementItem

# Interface: IGoogleHotelsSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IGoogleHotelsSerpElementItem`**

## Implemented by

- [`GoogleHotelsSerpElementItem`](../classes/GoogleHotelsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cid](IGoogleHotelsSerpElementItem.md#cid)
- [hotel\_identifier](IGoogleHotelsSerpElementItem.md#hotel_identifier)
- [position](IGoogleHotelsSerpElementItem.md#position)
- [rank\_absolute](IGoogleHotelsSerpElementItem.md#rank_absolute)
- [rank\_group](IGoogleHotelsSerpElementItem.md#rank_group)
- [rectangle](IGoogleHotelsSerpElementItem.md#rectangle)
- [url](IGoogleHotelsSerpElementItem.md#url)
- [xpath](IGoogleHotelsSerpElementItem.md#xpath)

## Properties

### cid

• `Optional` **cid**: `string`

google-defined client id

#### Defined in

main.ts:34808

___

### hotel\_identifier

• `Optional` **hotel\_identifier**: `string`

unique hotel identifier
unique hotel identifier assigned by Google;
example: "CgoIjaeSlI6CnNpVEAE"

#### Defined in

main.ts:34804

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:34798

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:34794

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:34790

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:34812

___

### url

• `Optional` **url**: `string`

source URL

#### Defined in

main.ts:34806

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:34800
