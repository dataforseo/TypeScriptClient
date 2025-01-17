[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleNewsNewsSearchSerpElementItem

# Interface: IGoogleNewsNewsSearchSerpElementItem

Defined in: main.ts:46280

## Extends

- [`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:46282

domain in SERP

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:46287

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:46204

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md).[`rank_absolute`](IBaseGoogleNewsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:46201

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md).[`rank_group`](IBaseGoogleNewsSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

Defined in: main.ts:46212

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Inherited from

[`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md).[`rectangle`](IBaseGoogleNewsSerpElementItem.md#rectangle)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:46289

snippet of the result in SERP

***

### time\_published?

> `optional` **time\_published**: `string`

Defined in: main.ts:46291

indicates the time the result was published

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:46296

date and time when the news was published
in the format “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:46208

title of the element

#### Inherited from

[`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md).[`title`](IBaseGoogleNewsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:46197

type of element

#### Inherited from

[`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md).[`type`](IBaseGoogleNewsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:46284

search URL with refinement parameters

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:46206

the XPath of the element

#### Inherited from

[`IBaseGoogleNewsSerpElementItem`](IBaseGoogleNewsSerpElementItem.md).[`xpath`](IBaseGoogleNewsSerpElementItem.md#xpath)
