[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / RelatedResult

# Class: RelatedResult

## Implements

- [`IRelatedResult`](../interfaces/IRelatedResult.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RelatedResult()

> **new RelatedResult**(`data`?): [`RelatedResult`](RelatedResult.md)

#### Parameters

• **data?**: [`IRelatedResult`](../interfaces/IRelatedResult.md)

#### Returns

[`RelatedResult`](RelatedResult.md)

#### Defined in

main.ts:29581

## Properties

### about\_this\_result?

> `optional` **about\_this\_result**: [`AboutThisResultElement`](AboutThisResultElement.md)

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`about_this_result`](../interfaces/IRelatedResult.md#about_this_result)

#### Defined in

main.ts:29572

***

### amp\_version?

> `optional` **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`amp_version`](../interfaces/IRelatedResult.md#amp_version)

#### Defined in

main.ts:29561

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

breadcrumb in SERP

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`breadcrumb`](../interfaces/IRelatedResult.md#breadcrumb)

#### Defined in

main.ts:29544

***

### cache\_url?

> `optional` **cache\_url**: `string`

cached version of the page

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`cache_url`](../interfaces/IRelatedResult.md#cache_url)

#### Defined in

main.ts:29539

***

### description?

> `optional` **description**: `string`

description of the hotel booking element

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`description`](../interfaces/IRelatedResult.md#description)

#### Defined in

main.ts:29552

***

### domain?

> `optional` **domain**: `string`

domain where a link points

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`domain`](../interfaces/IRelatedResult.md#domain)

#### Defined in

main.ts:29533

***

### extended\_snippet?

> `optional` **extended\_snippet**: `string`

includes additional information appended after the result description in SERP

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`extended_snippet`](../interfaces/IRelatedResult.md#extended_snippet)

#### Defined in

main.ts:29556

***

### highlighted?

> `optional` **highlighted**: `string`[]

words highlighted in bold within the results description

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`highlighted`](../interfaces/IRelatedResult.md#highlighted)

#### Defined in

main.ts:29568

***

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

images of the element

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`images`](../interfaces/IRelatedResult.md#images)

#### Defined in

main.ts:29558

***

### is\_image?

> `optional` **is\_image**: `boolean`

indicates whether the element contains an image

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`is_image`](../interfaces/IRelatedResult.md#is_image)

#### Defined in

main.ts:29548

***

### is\_video?

> `optional` **is\_video**: `boolean`

indicates whether the element contains a video

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`is_video`](../interfaces/IRelatedResult.md#is_video)

#### Defined in

main.ts:29550

***

### pre\_snippet?

> `optional` **pre\_snippet**: `string`

includes additional information appended before the result description in SERP

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`pre_snippet`](../interfaces/IRelatedResult.md#pre_snippet)

#### Defined in

main.ts:29554

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

price of booking a place for the specified dates of stay

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`price`](../interfaces/IRelatedResult.md#price)

#### Defined in

main.ts:29566

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`rating`](../interfaces/IRelatedResult.md#rating)

#### Defined in

main.ts:29564

***

### related\_search\_url?

> `optional` **related\_search\_url**: `string`

URL to a similar search
URL to a new search for the same keyword(s) on related sites

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`related_search_url`](../interfaces/IRelatedResult.md#related_search_url)

#### Defined in

main.ts:29542

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`timestamp`](../interfaces/IRelatedResult.md#timestamp)

#### Defined in

main.ts:29577

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`title`](../interfaces/IRelatedResult.md#title)

#### Defined in

main.ts:29535

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`type`](../interfaces/IRelatedResult.md#type)

#### Defined in

main.ts:29529

***

### url?

> `optional` **url**: `string`

URL of element

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`url`](../interfaces/IRelatedResult.md#url)

#### Defined in

main.ts:29537

***

### website\_name?

> `optional` **website\_name**: `string`

name of the website in SERP

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`website_name`](../interfaces/IRelatedResult.md#website_name)

#### Defined in

main.ts:29546

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`xpath`](../interfaces/IRelatedResult.md#xpath)

#### Defined in

main.ts:29531

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:29590

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:29635

***

### fromJS()

> `static` **fromJS**(`data`): [`RelatedResult`](RelatedResult.md)

#### Parameters

• **data**: `any`

#### Returns

[`RelatedResult`](RelatedResult.md)

#### Defined in

main.ts:29628
