[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IRelatedResult

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

main.ts:29719

***

### amp\_version?

> `optional` **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Defined in

main.ts:29708

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

breadcrumb in SERP

#### Defined in

main.ts:29691

***

### cache\_url?

> `optional` **cache\_url**: `string`

cached version of the page

#### Defined in

main.ts:29686

***

### description?

> `optional` **description**: `string`

description of the hotel booking element

#### Defined in

main.ts:29699

***

### domain?

> `optional` **domain**: `string`

domain where a link points

#### Defined in

main.ts:29680

***

### extended\_snippet?

> `optional` **extended\_snippet**: `string`

includes additional information appended after the result description in SERP

#### Defined in

main.ts:29703

***

### highlighted?

> `optional` **highlighted**: `string`[]

words highlighted in bold within the results description

#### Defined in

main.ts:29715

***

### images?

> `optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images of the element

#### Defined in

main.ts:29705

***

### is\_image?

> `optional` **is\_image**: `boolean`

indicates whether the element contains an image

#### Defined in

main.ts:29695

***

### is\_video?

> `optional` **is\_video**: `boolean`

indicates whether the element contains a video

#### Defined in

main.ts:29697

***

### pre\_snippet?

> `optional` **pre\_snippet**: `string`

includes additional information appended before the result description in SERP

#### Defined in

main.ts:29701

***

### price?

> `optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

price of booking a place for the specified dates of stay

#### Defined in

main.ts:29713

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:29711

***

### related\_search\_url?

> `optional` **related\_search\_url**: `string`

URL to a similar search
URL to a new search for the same keyword(s) on related sites

#### Defined in

main.ts:29689

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:29724

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Defined in

main.ts:29682

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:29676

***

### url?

> `optional` **url**: `string`

URL of element

#### Defined in

main.ts:29684

***

### website\_name?

> `optional` **website\_name**: `string`

name of the website in SERP

#### Defined in

main.ts:29693

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:29678
