**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / INewsSearchSerpElementItem

# Interface: INewsSearchSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### domain?

> **`optional`** **domain**: `string`

domain name of the result in SERP

#### Source

main.ts:43486

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Source

main.ts:43493

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:43482

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:43479

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Source

main.ts:43506

***

### snippet?

> **`optional`** **snippet**: `string`

snippet of the result in SERP

#### Source

main.ts:43495

***

### time\_published?

> **`optional`** **time\_published**: `string`

indicates the time the result was published

#### Source

main.ts:43497

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the news was published
in the format “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:43502

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:43488

***

### url?

> **`optional`** **url**: `string`

URL of the result in SERP

#### Source

main.ts:43490

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:43484
