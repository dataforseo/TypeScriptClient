[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ILocalPackSerpElementItem

# Interface: ILocalPackSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### cid?

> `optional` **cid**: `string`

google-defined client id

#### Defined in

main.ts:31672

***

### description?

> `optional` **description**: `string`

description of the results element in SERP

#### Defined in

main.ts:31659

***

### domain?

> `optional` **domain**: `string`

source domain

#### Defined in

main.ts:31661

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

indicates whether the element is an ad

#### Defined in

main.ts:31667

***

### phone?

> `optional` **phone**: `string`

phone number

#### Defined in

main.ts:31663

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:31653

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:31649

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:31645

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:31670

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:31676

***

### title?

> `optional` **title**: `string`

title of the row

#### Defined in

main.ts:31657

***

### url?

> `optional` **url**: `string`

source URL

#### Defined in

main.ts:31665

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:31655
