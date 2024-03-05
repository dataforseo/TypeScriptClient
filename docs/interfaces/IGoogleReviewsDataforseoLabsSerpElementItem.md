[dataforseo-client](../README.md) / [Exports](../modules.md) / IGoogleReviewsDataforseoLabsSerpElementItem

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

[main.ts:94354](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94354)

___

### feature

• `Optional` **feature**: `string`

the additional feature of the review

#### Defined in

[main.ts:94352](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94352)

___

### place\_id

• `Optional` **place\_id**: `string`

the identifier of a place

#### Defined in

[main.ts:94350](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94350)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:94341](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94341)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:94337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94337)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:94334](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94334)

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

[main.ts:94348](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94348)

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

the number of reviews

#### Defined in

[main.ts:94345](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94345)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:94343](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94343)
