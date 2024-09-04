[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IGoogleReviewsSerpElementItem

# Interface: IGoogleReviewsSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### cid?

> `optional` **cid**: `string`

google-defined client id

#### Defined in

main.ts:31028

***

### feature?

> `optional` **feature**: `string`

the additional feature of the review

#### Defined in

main.ts:31026

***

### place\_id?

> `optional` **place\_id**: `string`

the identifier of a place

#### Defined in

main.ts:31024

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:31015

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:31011

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:31007

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:31022

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:31032

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the number of reviews

#### Defined in

main.ts:31019

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:31017
