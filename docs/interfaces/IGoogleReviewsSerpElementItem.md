**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IGoogleReviewsSerpElementItem

# Interface: IGoogleReviewsSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### cid?

> **`optional`** **cid**: `string`

google-defined client id

#### Source

main.ts:30305

***

### feature?

> **`optional`** **feature**: `string`

the additional feature of the review

#### Source

main.ts:30303

***

### place\_id?

> **`optional`** **place\_id**: `string`

the identifier of a place

#### Source

main.ts:30301

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:30292

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Source

main.ts:30288

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Source

main.ts:30284

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Source

main.ts:30299

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Source

main.ts:30309

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

the number of reviews

#### Source

main.ts:30296

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:30294
