[Documentation](../README.md) / [Exports](../modules.md) / IGoogleReviewsSerpElementItem

# Interface: IGoogleReviewsSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IGoogleReviewsSerpElementItem`**

## Implemented by

- [`GoogleReviewsSerpElementItem`](../classes/GoogleReviewsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cid](IGoogleReviewsSerpElementItem.md#cid)
- [feature](IGoogleReviewsSerpElementItem.md#feature)
- [place\_id](IGoogleReviewsSerpElementItem.md#place_id)
- [position](IGoogleReviewsSerpElementItem.md#position)
- [rank\_absolute](IGoogleReviewsSerpElementItem.md#rank_absolute)
- [rank\_group](IGoogleReviewsSerpElementItem.md#rank_group)
- [rating](IGoogleReviewsSerpElementItem.md#rating)
- [rectangle](IGoogleReviewsSerpElementItem.md#rectangle)
- [reviews\_count](IGoogleReviewsSerpElementItem.md#reviews_count)
- [xpath](IGoogleReviewsSerpElementItem.md#xpath)

## Properties

### cid

• `Optional` **cid**: `string`

google-defined client id

#### Defined in

main.ts:29425

___

### feature

• `Optional` **feature**: `string`

the additional feature of the review

#### Defined in

main.ts:29423

___

### place\_id

• `Optional` **place\_id**: `string`

the identifier of a place

#### Defined in

main.ts:29421

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:29412

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:29408

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:29405

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:29419

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:29429

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

the number of reviews

#### Defined in

main.ts:29416

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:29414
