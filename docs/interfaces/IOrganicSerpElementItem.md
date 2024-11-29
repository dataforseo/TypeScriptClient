[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOrganicSerpElementItem

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

main.ts:29009

***

### amp\_version?

> `optional` **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Defined in

main.ts:28985

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

breadcrumb in SERP

#### Defined in

main.ts:28962

***

### cache\_url?

> `optional` **cache\_url**: `string`

cached version of the page

#### Defined in

main.ts:28957

***

### description?

> `optional` **description**: `string`

description of the results element in SERP

#### Defined in

main.ts:28976

***

### domain?

> `optional` **domain**: `string`

domain name of the reference

#### Defined in

main.ts:28951

***

### extended\_people\_also\_search?

> `optional` **extended\_people\_also\_search**: `string`[]

extension of the organic element
extension of the organic result containing related search queries
Note: extension appears in SERP upon clicking on the result and then bouncing back to search results

#### Defined in

main.ts:29005

***

### extended\_snippet?

> `optional` **extended\_snippet**: `string`

includes additional information appended after the result description in SERP

#### Defined in

main.ts:28980

***

### faq?

> `optional` **faq**: [`FaqBox`](../classes/FaqBox.md)

frequently asked questions
questions and answers extension shown below some of Google’s search results
if there are none, equals null

#### Defined in

main.ts:29001

***

### highlighted?

> `optional` **highlighted**: `string`[]

words highlighted in bold within the results description

#### Defined in

main.ts:28993

***

### images?

> `optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images of the element

#### Defined in

main.ts:28982

***

### is\_featured\_snippet?

> `optional` **is\_featured\_snippet**: `boolean`

indicates whether the element is a featured_snippet

#### Defined in

main.ts:28970

***

### is\_image?

> `optional` **is\_image**: `boolean`

indicates whether the element contains an image

#### Defined in

main.ts:28966

***

### is\_malicious?

> `optional` **is\_malicious**: `boolean`

indicates whether the element is marked as malicious

#### Defined in

main.ts:28972

***

### is\_video?

> `optional` **is\_video**: `boolean`

indicates whether the element contains a video

#### Defined in

main.ts:28968

***

### is\_web\_story?

> `optional` **is\_web\_story**: `boolean`

indicates whether the element is marked as Google web story

#### Defined in

main.ts:28974

***

### links?

> `optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Defined in

main.ts:28997

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`position`](IBaseSerpElementItem.md#position)

#### Defined in

main.ts:21404

***

### pre\_snippet?

> `optional` **pre\_snippet**: `string`

includes additional information appended before the result description in SERP

#### Defined in

main.ts:28978

***

### price?

> `optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

pricing details
contains the pricing details of the product or service featured in the result

#### Defined in

main.ts:28991

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_absolute`](IBaseSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21400

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_group`](IBaseSerpElementItem.md#rank_group)

#### Defined in

main.ts:21397

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:28988

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:29022

***

### related\_result?

> `optional` **related\_result**: [`RelatedResult`](../classes/RelatedResult.md)[]

related result from the same domain
related result from the same domain appears as a part of the main result snippet;
you can derive the related_result snippets as "type": "organic" results by setting the group_organic_results parameter to false in the POST request

#### Defined in

main.ts:29013

***

### related\_search\_url?

> `optional` **related\_search\_url**: `string`

URL to a similar search
URL to a new search for the same keyword(s) on related sites

#### Defined in

main.ts:28960

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:29018

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:28953

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`type`](IBaseSerpElementItem.md#type)

#### Defined in

main.ts:21393

***

### url?

> `optional` **url**: `string`

relevant URL in SERP

#### Defined in

main.ts:28955

***

### website\_name?

> `optional` **website\_name**: `string`

name of the website in SERP

#### Defined in

main.ts:28964

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`xpath`](IBaseSerpElementItem.md#xpath)

#### Defined in

main.ts:21406
