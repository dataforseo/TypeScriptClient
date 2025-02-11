[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOrganicSerpElementItem

# Interface: IOrganicSerpElementItem

Defined in: main.ts:28957

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### about\_this\_result?

> `optional` **about\_this\_result**: [`AboutThisResultElement`](../classes/AboutThisResultElement.md)

Defined in: main.ts:29017

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

***

### amp\_version?

> `optional` **amp\_version**: `boolean`

Defined in: main.ts:28993

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

Defined in: main.ts:28970

breadcrumb in SERP

***

### cache\_url?

> `optional` **cache\_url**: `string`

Defined in: main.ts:28965

cached version of the page

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:28984

description of the results element in SERP

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:28959

domain name of the reference

***

### extended\_people\_also\_search?

> `optional` **extended\_people\_also\_search**: `string`[]

Defined in: main.ts:29013

extension of the organic element
extension of the organic result containing related search queries
Note: extension appears in SERP upon clicking on the result and then bouncing back to search results

***

### extended\_snippet?

> `optional` **extended\_snippet**: `string`

Defined in: main.ts:28988

includes additional information appended after the result description in SERP

***

### faq?

> `optional` **faq**: [`FaqBox`](../classes/FaqBox.md)

Defined in: main.ts:29009

frequently asked questions
questions and answers extension shown below some of Google’s search results
if there are none, equals null

***

### highlighted?

> `optional` **highlighted**: `string`[]

Defined in: main.ts:29001

words highlighted in bold within the results description

***

### images?

> `optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

Defined in: main.ts:28990

images of the element

***

### is\_featured\_snippet?

> `optional` **is\_featured\_snippet**: `boolean`

Defined in: main.ts:28978

indicates whether the element is a featured_snippet

***

### is\_image?

> `optional` **is\_image**: `boolean`

Defined in: main.ts:28974

indicates whether the element contains an image

***

### is\_malicious?

> `optional` **is\_malicious**: `boolean`

Defined in: main.ts:28980

indicates whether the element is marked as malicious

***

### is\_video?

> `optional` **is\_video**: `boolean`

Defined in: main.ts:28976

indicates whether the element contains a video

***

### is\_web\_story?

> `optional` **is\_web\_story**: `boolean`

Defined in: main.ts:28982

indicates whether the element is marked as Google web story

***

### links?

> `optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

Defined in: main.ts:29005

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21404

the alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`position`](IBaseSerpElementItem.md#position)

***

### pre\_snippet?

> `optional` **pre\_snippet**: `string`

Defined in: main.ts:28986

includes additional information appended before the result description in SERP

***

### price?

> `optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

Defined in: main.ts:28999

pricing details
contains the pricing details of the product or service featured in the result

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21400

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_absolute`](IBaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21397

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_group`](IBaseSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:28996

the item’s rating 
the popularity rate based on reviews and displayed in SERP

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

Defined in: main.ts:29030

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

***

### related\_result?

> `optional` **related\_result**: [`RelatedResult`](../classes/RelatedResult.md)[]

Defined in: main.ts:29021

related result from the same domain
related result from the same domain appears as a part of the main result snippet;
you can derive the related_result snippets as "type": "organic" results by setting the group_organic_results parameter to false in the POST request

***

### related\_search\_url?

> `optional` **related\_search\_url**: `string`

Defined in: main.ts:28968

URL to a similar search
URL to a new search for the same keyword(s) on related sites

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:29026

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:28961

title of the result in SERP

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21393

type of element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`type`](IBaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:28963

relevant URL in SERP

***

### website\_name?

> `optional` **website\_name**: `string`

Defined in: main.ts:28972

name of the website in SERP

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21406

the XPath of the element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`xpath`](IBaseSerpElementItem.md#xpath)
