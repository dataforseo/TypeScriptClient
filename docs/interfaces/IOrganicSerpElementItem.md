**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IOrganicSerpElementItem

# Interface: IOrganicSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### about\_this\_result?

> **`optional`** **about\_this\_result**: [`AboutThisResultElement`](../classes/AboutThisResultElement.md)

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Source

main.ts:27021

***

### amp\_version?

> **`optional`** **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Source

main.ts:26997

***

### breadcrumb?

> **`optional`** **breadcrumb**: `string`

breadcrumb in SERP

#### Source

main.ts:26974

***

### cache\_url?

> **`optional`** **cache\_url**: `string`

cached version of the page

#### Source

main.ts:26969

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Source

main.ts:26988

***

### domain?

> **`optional`** **domain**: `string`

website domain

#### Source

main.ts:26963

***

### extended\_people\_also\_search?

> **`optional`** **extended\_people\_also\_search**: `string`[]

extension of the organic element
extension of the organic result containing related search queries
Note: extension appears in SERP upon clicking on the result and then bouncing back to search results

#### Source

main.ts:27017

***

### extended\_snippet?

> **`optional`** **extended\_snippet**: `string`

includes additional information appended after the result description in SERP

#### Source

main.ts:26992

***

### faq?

> **`optional`** **faq**: [`FaqBox`](../classes/FaqBox.md)

frequently asked questions
questions and answers extension shown below some of Google’s search results
if there are none, equals null

#### Source

main.ts:27013

***

### highlighted?

> **`optional`** **highlighted**: `string`[]

words highlighted in bold within the results description

#### Source

main.ts:27005

***

### images?

> **`optional`** **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images of the element

#### Source

main.ts:26994

***

### is\_featured\_snippet?

> **`optional`** **is\_featured\_snippet**: `boolean`

indicates whether the element is a featured_snippet

#### Source

main.ts:26982

***

### is\_image?

> **`optional`** **is\_image**: `boolean`

indicates whether the element contains an image

#### Source

main.ts:26978

***

### is\_malicious?

> **`optional`** **is\_malicious**: `boolean`

indicates whether the element is marked as malicious

#### Source

main.ts:26984

***

### is\_video?

> **`optional`** **is\_video**: `boolean`

indicates whether the element contains a video

#### Source

main.ts:26980

***

### is\_web\_story?

> **`optional`** **is\_web\_story**: `boolean`

indicates whether the element is marked as Google web story

#### Source

main.ts:26986

***

### links?

> **`optional`** **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Source

main.ts:27009

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:26959

***

### pre\_snippet?

> **`optional`** **pre\_snippet**: `string`

includes additional information appended before the result description in SERP

#### Source

main.ts:26990

***

### price?

> **`optional`** **price**: [`PriceInfo`](../classes/PriceInfo.md)

pricing details
contains the pricing details of the product or service featured in the result

#### Source

main.ts:27003

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:26955

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:26952

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Source

main.ts:27000

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Source

main.ts:27034

***

### related\_result?

> **`optional`** **related\_result**: [`RelatedResult`](../classes/RelatedResult.md)[]

related result from the same domain
related result from the same domain appears as a part of the main result snippet;
you can derive the related_result snippets as "type": "organic" results by setting the group_organic_results parameter to false in the POST request

#### Source

main.ts:27025

***

### related\_search\_url?

> **`optional`** **related\_search\_url**: `string`

URL to a similar search
URL to a new search for the same keyword(s) on related sites

#### Source

main.ts:26972

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:27030

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:26965

***

### url?

> **`optional`** **url**: `string`

relevant URL in SERP

#### Source

main.ts:26967

***

### website\_name?

> **`optional`** **website\_name**: `string`

name of the website in SERP

#### Source

main.ts:26976

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:26961
