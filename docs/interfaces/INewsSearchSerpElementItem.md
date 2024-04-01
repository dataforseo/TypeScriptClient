[Documentation](../README.md) / [Exports](../modules.md) / INewsSearchSerpElementItem

# Interface: INewsSearchSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`INewsSearchSerpElementItem`**

## Implemented by

- [`NewsSearchSerpElementItem`](../classes/NewsSearchSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [domain](INewsSearchSerpElementItem.md#domain)
- [image\_url](INewsSearchSerpElementItem.md#image_url)
- [rank\_absolute](INewsSearchSerpElementItem.md#rank_absolute)
- [rank\_group](INewsSearchSerpElementItem.md#rank_group)
- [rectangle](INewsSearchSerpElementItem.md#rectangle)
- [snippet](INewsSearchSerpElementItem.md#snippet)
- [time\_published](INewsSearchSerpElementItem.md#time_published)
- [timestamp](INewsSearchSerpElementItem.md#timestamp)
- [title](INewsSearchSerpElementItem.md#title)
- [url](INewsSearchSerpElementItem.md#url)
- [xpath](INewsSearchSerpElementItem.md#xpath)

## Properties

### domain

• `Optional` **domain**: `string`

domain name of the result in SERP

#### Defined in

main.ts:43340

___

### image\_url

• `Optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Defined in

main.ts:43347

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:43336

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:43333

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:43360

___

### snippet

• `Optional` **snippet**: `string`

snippet of the result in SERP

#### Defined in

main.ts:43349

___

### time\_published

• `Optional` **time\_published**: `string`

indicates the time the result was published

#### Defined in

main.ts:43351

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the news was published
in the format “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:43356

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:43342

___

### url

• `Optional` **url**: `string`

URL of the result in SERP

#### Defined in

main.ts:43344

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:43338
