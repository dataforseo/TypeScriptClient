[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IOrganicSerpElementItem

# Interface: IOrganicSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### about\_this\_result?

> `optional` **about\_this\_result**: [`AboutThisResultElement`](../classes/AboutThisResultElement.md)

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Defined in

main.ts:27203

***

### amp\_version?

> `optional` **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Defined in

main.ts:27179

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

breadcrumb in SERP

#### Defined in

main.ts:27156

***

### cache\_url?

> `optional` **cache\_url**: `string`

cached version of the page

#### Defined in

main.ts:27151

***

### description?

> `optional` **description**: `string`

description of the results element in SERP

#### Defined in

main.ts:27170

***

### domain?

> `optional` **domain**: `string`

website domain

#### Defined in

main.ts:27145

***

### extended\_people\_also\_search?

> `optional` **extended\_people\_also\_search**: `string`[]

extension of the organic element
extension of the organic result containing related search queries
Note: extension appears in SERP upon clicking on the result and then bouncing back to search results

#### Defined in

main.ts:27199

***

### extended\_snippet?

> `optional` **extended\_snippet**: `string`

includes additional information appended after the result description in SERP

#### Defined in

main.ts:27174

***

### faq?

> `optional` **faq**: [`FaqBox`](../classes/FaqBox.md)

frequently asked questions
questions and answers extension shown below some of Google’s search results
if there are none, equals null

#### Defined in

main.ts:27195

***

### highlighted?

> `optional` **highlighted**: `string`[]

words highlighted in bold within the results description

#### Defined in

main.ts:27187

***

### images?

> `optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images of the element

#### Defined in

main.ts:27176

***

### is\_featured\_snippet?

> `optional` **is\_featured\_snippet**: `boolean`

indicates whether the element is a featured_snippet

#### Defined in

main.ts:27164

***

### is\_image?

> `optional` **is\_image**: `boolean`

indicates whether the element contains an image

#### Defined in

main.ts:27160

***

### is\_malicious?

> `optional` **is\_malicious**: `boolean`

indicates whether the element is marked as malicious

#### Defined in

main.ts:27166

***

### is\_video?

> `optional` **is\_video**: `boolean`

indicates whether the element contains a video

#### Defined in

main.ts:27162

***

### is\_web\_story?

> `optional` **is\_web\_story**: `boolean`

indicates whether the element is marked as Google web story

#### Defined in

main.ts:27168

***

### links?

> `optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Defined in

main.ts:27191

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:27141

***

### pre\_snippet?

> `optional` **pre\_snippet**: `string`

includes additional information appended before the result description in SERP

#### Defined in

main.ts:27172

***

### price?

> `optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

pricing details
contains the pricing details of the product or service featured in the result

#### Defined in

main.ts:27185

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:27137

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:27134

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:27182

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:27216

***

### related\_result?

> `optional` **related\_result**: [`RelatedResult`](../classes/RelatedResult.md)[]

related result from the same domain
related result from the same domain appears as a part of the main result snippet;
you can derive the related_result snippets as "type": "organic" results by setting the group_organic_results parameter to false in the POST request

#### Defined in

main.ts:27207

***

### related\_search\_url?

> `optional` **related\_search\_url**: `string`

URL to a similar search
URL to a new search for the same keyword(s) on related sites

#### Defined in

main.ts:27154

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:27212

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:27147

***

### url?

> `optional` **url**: `string`

relevant URL in SERP

#### Defined in

main.ts:27149

***

### website\_name?

> `optional` **website\_name**: `string`

name of the website in SERP

#### Defined in

main.ts:27158

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:27143
