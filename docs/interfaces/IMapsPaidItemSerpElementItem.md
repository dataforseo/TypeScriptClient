[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IMapsPaidItemSerpElementItem

# Interface: IMapsPaidItemSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### domain?

> `optional` **domain**: `string`

domain in the SERP element

#### Defined in

main.ts:42008

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:42006

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:42003

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:42015

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:42018

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:42010

***

### url?

> `optional` **url**: `string`

relevant URL in SERP

#### Defined in

main.ts:42012
