**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IMapsPaidItemSerpElementItem

# Interface: IMapsPaidItemSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### domain?

> **`optional`** **domain**: `string`

domain in the SERP element

#### Source

main.ts:41476

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:41474

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:41471

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Source

main.ts:41483

***

### rating\_distribution?

> **`optional`** **rating\_distribution**: `Object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:41486

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:41478

***

### url?

> **`optional`** **url**: `string`

relevant URL in SERP

#### Source

main.ts:41480
