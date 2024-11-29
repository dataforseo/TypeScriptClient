[**Documentation**](../README.md)

***

[Documentation](../README.md) / IRelatedResult

# Interface: IRelatedResult

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### about\_this\_result?

> `optional` **about\_this\_result**: [`AboutThisResultElement`](../classes/AboutThisResultElement.md)

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Defined in

main.ts:31553

***

### amp\_version?

> `optional` **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Defined in

main.ts:31542

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

breadcrumb in SERP

#### Defined in

main.ts:31525

***

### cache\_url?

> `optional` **cache\_url**: `string`

cached version of the page

#### Defined in

main.ts:31520

***

### description?

> `optional` **description**: `string`

description of the hotel booking element

#### Defined in

main.ts:31533

***

### domain?

> `optional` **domain**: `string`

domain where a link points

#### Defined in

main.ts:31514

***

### extended\_snippet?

> `optional` **extended\_snippet**: `string`

includes additional information appended after the result description in SERP

#### Defined in

main.ts:31537

***

### highlighted?

> `optional` **highlighted**: `string`[]

words highlighted in bold within the results description

#### Defined in

main.ts:31549

***

### images?

> `optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images of the element

#### Defined in

main.ts:31539

***

### is\_image?

> `optional` **is\_image**: `boolean`

indicates whether the element contains an image

#### Defined in

main.ts:31529

***

### is\_video?

> `optional` **is\_video**: `boolean`

indicates whether the element contains a video

#### Defined in

main.ts:31531

***

### pre\_snippet?

> `optional` **pre\_snippet**: `string`

includes additional information appended before the result description in SERP

#### Defined in

main.ts:31535

***

### price?

> `optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

price of booking a place for the specified dates of stay

#### Defined in

main.ts:31547

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:31545

***

### related\_search\_url?

> `optional` **related\_search\_url**: `string`

URL to a similar search
URL to a new search for the same keyword(s) on related sites

#### Defined in

main.ts:31523

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:31558

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Defined in

main.ts:31516

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:31510

***

### url?

> `optional` **url**: `string`

reference page URL

#### Defined in

main.ts:31518

***

### website\_name?

> `optional` **website\_name**: `string`

name of the website in SERP

#### Defined in

main.ts:31527

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:31512
