[Documentation](../README.md) / [Exports](../modules.md) / ILocalServicesSerpElementItem

# Interface: ILocalServicesSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`ILocalServicesSerpElementItem`**

## Implemented by

- [`LocalServicesSerpElementItem`](../classes/LocalServicesSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [domain](ILocalServicesSerpElementItem.md#domain)
- [items](ILocalServicesSerpElementItem.md#items)
- [position](ILocalServicesSerpElementItem.md#position)
- [rank\_absolute](ILocalServicesSerpElementItem.md#rank_absolute)
- [rank\_group](ILocalServicesSerpElementItem.md#rank_group)
- [rectangle](ILocalServicesSerpElementItem.md#rectangle)
- [title](ILocalServicesSerpElementItem.md#title)
- [url](ILocalServicesSerpElementItem.md#url)
- [xpath](ILocalServicesSerpElementItem.md#xpath)

## Properties

### domain

• `Optional` **domain**: `string`

source domain

#### Defined in

main.ts:34693

___

### items

• `Optional` **items**: [`LocalServicesElement`](../classes/LocalServicesElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:34696

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:34685

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:34681

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:34677

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:34700

___

### title

• `Optional` **title**: `string`

title of the row

#### Defined in

main.ts:34689

___

### url

• `Optional` **url**: `string`

source URL

#### Defined in

main.ts:34691

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:34687
