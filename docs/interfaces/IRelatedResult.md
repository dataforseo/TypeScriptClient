[**Documentation**](../README.md)

***

[Documentation](../README.md) / IRelatedResult

# Interface: IRelatedResult

Defined in: main.ts:31514

## Indexable

\[`key`: `string`\]: `any`

## Properties

### about\_this\_result?

> `optional` **about\_this\_result**: [`AboutThisResultElement`](../classes/AboutThisResultElement.md)

Defined in: main.ts:31559

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

***

### amp\_version?

> `optional` **amp\_version**: `boolean`

Defined in: main.ts:31548

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

Defined in: main.ts:31531

breadcrumb in SERP

***

### cache\_url?

> `optional` **cache\_url**: `string`

Defined in: main.ts:31526

cached version of the page

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:31539

description of the hotel booking element

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:31520

domain where a link points

***

### extended\_snippet?

> `optional` **extended\_snippet**: `string`

Defined in: main.ts:31543

includes additional information appended after the result description in SERP

***

### highlighted?

> `optional` **highlighted**: `string`[]

Defined in: main.ts:31555

words highlighted in bold within the results description

***

### images?

> `optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

Defined in: main.ts:31545

images of the element

***

### is\_image?

> `optional` **is\_image**: `boolean`

Defined in: main.ts:31535

indicates whether the element contains an image

***

### is\_video?

> `optional` **is\_video**: `boolean`

Defined in: main.ts:31537

indicates whether the element contains a video

***

### pre\_snippet?

> `optional` **pre\_snippet**: `string`

Defined in: main.ts:31541

includes additional information appended before the result description in SERP

***

### price?

> `optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

Defined in: main.ts:31553

price of booking a place for the specified dates of stay

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:31551

the item’s rating 
the popularity rate based on reviews and displayed in SERP

***

### related\_search\_url?

> `optional` **related\_search\_url**: `string`

Defined in: main.ts:31529

URL to a similar search
URL to a new search for the same keyword(s) on related sites

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:31564

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:31522

title of a given link element

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:31516

type of element

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:31524

reference page URL

***

### website\_name?

> `optional` **website\_name**: `string`

Defined in: main.ts:31533

name of the website in the ad element

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:31518

the XPath of the element
