[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleNewsNewsSearchSerpElementItem

# Interface: IGoogleNewsNewsSearchSerpElementItem

## Extends

- [`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### domain?

> `optional` **domain**: `string`

domain in SERP

#### Defined in

main.ts:46282

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Defined in

main.ts:46287

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md).[`rank_absolute`](IBaseGoogleNewsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:46204

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md).[`rank_group`](IBaseGoogleNewsSerpElementItem.md#rank_group)

#### Defined in

main.ts:46201

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Inherited from

[`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md).[`rectangle`](IBaseGoogleNewsSerpElementItem.md#rectangle)

#### Defined in

main.ts:46212

***

### snippet?

> `optional` **snippet**: `string`

snippet of the result in SERP

#### Defined in

main.ts:46289

***

### time\_published?

> `optional` **time\_published**: `string`

indicates the time the result was published

#### Defined in

main.ts:46291

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the news was published
in the format “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:46296

***

### title?

> `optional` **title**: `string`

title of the element

#### Inherited from

[`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md).[`title`](IBaseGoogleNewsSerpElementItem.md#title)

#### Defined in

main.ts:46208

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md).[`type`](IBaseGoogleNewsSerpElementItem.md#type)

#### Defined in

main.ts:46197

***

### url?

> `optional` **url**: `string`

search URL with refinement parameters

#### Defined in

main.ts:46284

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Inherited from

[`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md).[`xpath`](IBaseGoogleNewsSerpElementItem.md#xpath)

#### Defined in

main.ts:46206
