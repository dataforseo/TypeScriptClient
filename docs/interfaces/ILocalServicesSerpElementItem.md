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

domain where a link points

#### Defined in

main.ts:33917

___

### items

• `Optional` **items**: [`LocalServicesElement`](../classes/LocalServicesElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

main.ts:33919

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:33909

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:33905

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:33902

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:33923

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

main.ts:33913

___

### url

• `Optional` **url**: `string`

URL

#### Defined in

main.ts:33915

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:33911
