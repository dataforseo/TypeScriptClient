[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IGoogleReviewsDataforseoLabsSerpElementItem

# Interface: IGoogleReviewsDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### cid?

> `optional` **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

#### Defined in

main.ts:100465

***

### feature?

> `optional` **feature**: `string`

the additional feature of the review

#### Defined in

main.ts:100461

***

### place\_id?

> `optional` **place\_id**: `string`

the identifier of a place

#### Defined in

main.ts:100459

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:100450

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:100446

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:100443

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:100457

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the number of reviews

#### Defined in

main.ts:100454

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:100452
