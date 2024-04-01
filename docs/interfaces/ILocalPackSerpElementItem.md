[Documentation](../README.md) / [Exports](../modules.md) / ILocalPackSerpElementItem

# Interface: ILocalPackSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`ILocalPackSerpElementItem`**

## Implemented by

- [`LocalPackSerpElementItem`](../classes/LocalPackSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cid](ILocalPackSerpElementItem.md#cid)
- [description](ILocalPackSerpElementItem.md#description)
- [domain](ILocalPackSerpElementItem.md#domain)
- [is\_paid](ILocalPackSerpElementItem.md#is_paid)
- [phone](ILocalPackSerpElementItem.md#phone)
- [position](ILocalPackSerpElementItem.md#position)
- [rank\_absolute](ILocalPackSerpElementItem.md#rank_absolute)
- [rank\_group](ILocalPackSerpElementItem.md#rank_group)
- [rating](ILocalPackSerpElementItem.md#rating)
- [rectangle](ILocalPackSerpElementItem.md#rectangle)
- [title](ILocalPackSerpElementItem.md#title)
- [url](ILocalPackSerpElementItem.md#url)
- [xpath](ILocalPackSerpElementItem.md#xpath)

## Properties

### cid

• `Optional` **cid**: `string`

google-defined client id

#### Defined in

main.ts:30706

___

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Defined in

main.ts:30693

___

### domain

• `Optional` **domain**: `string`

source domain

#### Defined in

main.ts:30695

___

### is\_paid

• `Optional` **is\_paid**: `boolean`

indicates whether the element is an ad

#### Defined in

main.ts:30701

___

### phone

• `Optional` **phone**: `string`

phone number

#### Defined in

main.ts:30697

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:30687

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:30683

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:30679

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:30704

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:30710

___

### title

• `Optional` **title**: `string`

title of the row

#### Defined in

main.ts:30691

___

### url

• `Optional` **url**: `string`

source URL

#### Defined in

main.ts:30699

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:30689
