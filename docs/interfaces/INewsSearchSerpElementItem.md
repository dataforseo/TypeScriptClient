[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / INewsSearchSerpElementItem

# Interface: INewsSearchSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### domain?

> `optional` **domain**: `string`

domain name of the result in SERP

#### Defined in

main.ts:45798

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Defined in

main.ts:45805

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:45794

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:45791

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:45818

***

### snippet?

> `optional` **snippet**: `string`

snippet of the result in SERP

#### Defined in

main.ts:45807

***

### time\_published?

> `optional` **time\_published**: `string`

indicates the time the result was published

#### Defined in

main.ts:45809

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the news was published
in the format “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:45814

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:45800

***

### url?

> `optional` **url**: `string`

URL of the result in SERP

#### Defined in

main.ts:45802

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:45796
