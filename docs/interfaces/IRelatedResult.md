[Documentation](../README.md) / [Exports](../modules.md) / IRelatedResult

# Interface: IRelatedResult

## Implemented by

- [`RelatedResult`](../classes/RelatedResult.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [about\_this\_result](IRelatedResult.md#about_this_result)
- [amp\_version](IRelatedResult.md#amp_version)
- [breadcrumb](IRelatedResult.md#breadcrumb)
- [cache\_url](IRelatedResult.md#cache_url)
- [description](IRelatedResult.md#description)
- [domain](IRelatedResult.md#domain)
- [extended\_snippet](IRelatedResult.md#extended_snippet)
- [highlighted](IRelatedResult.md#highlighted)
- [images](IRelatedResult.md#images)
- [is\_image](IRelatedResult.md#is_image)
- [is\_video](IRelatedResult.md#is_video)
- [pre\_snippet](IRelatedResult.md#pre_snippet)
- [price](IRelatedResult.md#price)
- [rating](IRelatedResult.md#rating)
- [related\_search\_url](IRelatedResult.md#related_search_url)
- [timestamp](IRelatedResult.md#timestamp)
- [title](IRelatedResult.md#title)
- [type](IRelatedResult.md#type)
- [url](IRelatedResult.md#url)
- [website\_name](IRelatedResult.md#website_name)
- [xpath](IRelatedResult.md#xpath)

## Properties

### about\_this\_result

• `Optional` **about\_this\_result**: [`AboutThisResultElement`](../classes/AboutThisResultElement.md)

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Defined in

main.ts:28903

___

### amp\_version

• `Optional` **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Defined in

main.ts:28892

___

### breadcrumb

• `Optional` **breadcrumb**: `string`

breadcrumb in SERP

#### Defined in

main.ts:28875

___

### cache\_url

• `Optional` **cache\_url**: `string`

cached version of the page

#### Defined in

main.ts:28870

___

### description

• `Optional` **description**: `string`

description of the hotel booking element

#### Defined in

main.ts:28883

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Defined in

main.ts:28864

___

### extended\_snippet

• `Optional` **extended\_snippet**: `string`

includes additional information appended after the result description in SERP

#### Defined in

main.ts:28887

___

### highlighted

• `Optional` **highlighted**: `string`[]

words highlighted in bold within the results description

#### Defined in

main.ts:28899

___

### images

• `Optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images of the element

#### Defined in

main.ts:28889

___

### is\_image

• `Optional` **is\_image**: `boolean`

indicates whether the element contains an image

#### Defined in

main.ts:28879

___

### is\_video

• `Optional` **is\_video**: `boolean`

indicates whether the element contains a video

#### Defined in

main.ts:28881

___

### pre\_snippet

• `Optional` **pre\_snippet**: `string`

includes additional information appended before the result description in SERP

#### Defined in

main.ts:28885

___

### price

• `Optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

price of booking a place for the specified dates of stay

#### Defined in

main.ts:28897

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:28895

___

### related\_search\_url

• `Optional` **related\_search\_url**: `string`

URL to a similar search
URL to a new search for the same keyword(s) on related sites

#### Defined in

main.ts:28873

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:28908

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

main.ts:28866

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:28860

___

### url

• `Optional` **url**: `string`

URL of element

#### Defined in

main.ts:28868

___

### website\_name

• `Optional` **website\_name**: `string`

name of the website in SERP

#### Defined in

main.ts:28877

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:28862
