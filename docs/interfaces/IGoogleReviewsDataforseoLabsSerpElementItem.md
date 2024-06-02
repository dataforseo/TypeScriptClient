**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IGoogleReviewsDataforseoLabsSerpElementItem

# Interface: IGoogleReviewsDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### cid?

> **`optional`** **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

#### Source

main.ts:97762

***

### feature?

> **`optional`** **feature**: `string`

the additional feature of the review

#### Source

main.ts:97758

***

### place\_id?

> **`optional`** **place\_id**: `string`

the identifier of a place

#### Source

main.ts:97756

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:97747

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:97743

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:97740

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Source

main.ts:97754

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

the number of reviews

#### Source

main.ts:97751

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:97749
