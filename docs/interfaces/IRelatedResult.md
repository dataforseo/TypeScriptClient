**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IRelatedResult

# Interface: IRelatedResult

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### about\_this\_result?

> **`optional`** **about\_this\_result**: [`AboutThisResultElement`](../classes/AboutThisResultElement.md)

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Source

main.ts:29669

***

### amp\_version?

> **`optional`** **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Source

main.ts:29658

***

### breadcrumb?

> **`optional`** **breadcrumb**: `string`

breadcrumb in SERP

#### Source

main.ts:29641

***

### cache\_url?

> **`optional`** **cache\_url**: `string`

cached version of the page

#### Source

main.ts:29636

***

### description?

> **`optional`** **description**: `string`

description of the hotel booking element

#### Source

main.ts:29649

***

### domain?

> **`optional`** **domain**: `string`

domain where a link points

#### Source

main.ts:29630

***

### extended\_snippet?

> **`optional`** **extended\_snippet**: `string`

includes additional information appended after the result description in SERP

#### Source

main.ts:29653

***

### highlighted?

> **`optional`** **highlighted**: `string`[]

words highlighted in bold within the results description

#### Source

main.ts:29665

***

### images?

> **`optional`** **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images of the element

#### Source

main.ts:29655

***

### is\_image?

> **`optional`** **is\_image**: `boolean`

indicates whether the element contains an image

#### Source

main.ts:29645

***

### is\_video?

> **`optional`** **is\_video**: `boolean`

indicates whether the element contains a video

#### Source

main.ts:29647

***

### pre\_snippet?

> **`optional`** **pre\_snippet**: `string`

includes additional information appended before the result description in SERP

#### Source

main.ts:29651

***

### price?

> **`optional`** **price**: [`PriceInfo`](../classes/PriceInfo.md)

price of booking a place for the specified dates of stay

#### Source

main.ts:29663

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Source

main.ts:29661

***

### related\_search\_url?

> **`optional`** **related\_search\_url**: `string`

URL to a similar search
URL to a new search for the same keyword(s) on related sites

#### Source

main.ts:29639

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:29674

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Source

main.ts:29632

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:29626

***

### url?

> **`optional`** **url**: `string`

URL of element

#### Source

main.ts:29634

***

### website\_name?

> **`optional`** **website\_name**: `string`

name of the website in SERP

#### Source

main.ts:29643

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:29628
