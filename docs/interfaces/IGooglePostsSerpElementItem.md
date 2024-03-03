[Documentation](../README.md) / [Exports](../modules.md) / IGooglePostsSerpElementItem

# Interface: IGooglePostsSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IGooglePostsSerpElementItem`**

## Implemented by

- [`GooglePostsSerpElementItem`](../classes/GooglePostsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cid](IGooglePostsSerpElementItem.md#cid)
- [feature](IGooglePostsSerpElementItem.md#feature)
- [position](IGooglePostsSerpElementItem.md#position)
- [posts\_id](IGooglePostsSerpElementItem.md#posts_id)
- [rank\_absolute](IGooglePostsSerpElementItem.md#rank_absolute)
- [rank\_group](IGooglePostsSerpElementItem.md#rank_group)
- [rectangle](IGooglePostsSerpElementItem.md#rectangle)
- [xpath](IGooglePostsSerpElementItem.md#xpath)

## Properties

### cid

• `Optional` **cid**: `string`

google-defined client id

#### Defined in

main.ts:34543

___

### feature

• `Optional` **feature**: `string`

the additional feature of the review

#### Defined in

main.ts:34541

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:34535

___

### posts\_id

• `Optional` **posts\_id**: `string`

the identifier of the google_posts feature

#### Defined in

main.ts:34539

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:34531

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:34528

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:34547

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:34537
