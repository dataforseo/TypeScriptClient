[Documentation](../README.md) / [Exports](../modules.md) / IGoogleReviewsDataforseoLabsSerpElementItem

# Interface: IGoogleReviewsDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IGoogleReviewsDataforseoLabsSerpElementItem`**

## Implemented by

- [`GoogleReviewsDataforseoLabsSerpElementItem`](../classes/GoogleReviewsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cid](IGoogleReviewsDataforseoLabsSerpElementItem.md#cid)
- [feature](IGoogleReviewsDataforseoLabsSerpElementItem.md#feature)
- [place\_id](IGoogleReviewsDataforseoLabsSerpElementItem.md#place_id)
- [position](IGoogleReviewsDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IGoogleReviewsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IGoogleReviewsDataforseoLabsSerpElementItem.md#rank_group)
- [rating](IGoogleReviewsDataforseoLabsSerpElementItem.md#rating)
- [reviews\_count](IGoogleReviewsDataforseoLabsSerpElementItem.md#reviews_count)
- [xpath](IGoogleReviewsDataforseoLabsSerpElementItem.md#xpath)

## Properties

### cid

• `Optional` **cid**: `string`

google-defined client id

#### Defined in

main.ts:94498

___

### feature

• `Optional` **feature**: `string`

the additional feature of the review

#### Defined in

main.ts:94496

___

### place\_id

• `Optional` **place\_id**: `string`

the identifier of a place

#### Defined in

main.ts:94494

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:94485

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:94481

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:94478

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:94492

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

the number of reviews

#### Defined in

main.ts:94489

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:94487
