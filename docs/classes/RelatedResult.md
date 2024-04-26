**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / RelatedResult

# Class: RelatedResult

## Implements

- [`IRelatedResult`](../interfaces/IRelatedResult.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RelatedResult(data)

> **new RelatedResult**(`data`?): [`RelatedResult`](RelatedResult.md)

#### Parameters

• **data?**: [`IRelatedResult`](../interfaces/IRelatedResult.md)

#### Returns

[`RelatedResult`](RelatedResult.md)

#### Source

main.ts:28893

## Properties

### about\_this\_result?

> **`optional`** **about\_this\_result**: [`AboutThisResultElement`](AboutThisResultElement.md)

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`about_this_result`](../interfaces/IRelatedResult.md#about_this_result)

#### Source

main.ts:28884

***

### amp\_version?

> **`optional`** **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`amp_version`](../interfaces/IRelatedResult.md#amp_version)

#### Source

main.ts:28873

***

### breadcrumb?

> **`optional`** **breadcrumb**: `string`

breadcrumb in SERP

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`breadcrumb`](../interfaces/IRelatedResult.md#breadcrumb)

#### Source

main.ts:28856

***

### cache\_url?

> **`optional`** **cache\_url**: `string`

cached version of the page

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`cache_url`](../interfaces/IRelatedResult.md#cache_url)

#### Source

main.ts:28851

***

### description?

> **`optional`** **description**: `string`

description of the hotel booking element

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`description`](../interfaces/IRelatedResult.md#description)

#### Source

main.ts:28864

***

### domain?

> **`optional`** **domain**: `string`

domain where a link points

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`domain`](../interfaces/IRelatedResult.md#domain)

#### Source

main.ts:28845

***

### extended\_snippet?

> **`optional`** **extended\_snippet**: `string`

includes additional information appended after the result description in SERP

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`extended_snippet`](../interfaces/IRelatedResult.md#extended_snippet)

#### Source

main.ts:28868

***

### highlighted?

> **`optional`** **highlighted**: `string`[]

words highlighted in bold within the results description

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`highlighted`](../interfaces/IRelatedResult.md#highlighted)

#### Source

main.ts:28880

***

### images?

> **`optional`** **images**: [`ImagesElement`](ImagesElement.md)[]

images of the element

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`images`](../interfaces/IRelatedResult.md#images)

#### Source

main.ts:28870

***

### is\_image?

> **`optional`** **is\_image**: `boolean`

indicates whether the element contains an image

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`is_image`](../interfaces/IRelatedResult.md#is_image)

#### Source

main.ts:28860

***

### is\_video?

> **`optional`** **is\_video**: `boolean`

indicates whether the element contains a video

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`is_video`](../interfaces/IRelatedResult.md#is_video)

#### Source

main.ts:28862

***

### pre\_snippet?

> **`optional`** **pre\_snippet**: `string`

includes additional information appended before the result description in SERP

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`pre_snippet`](../interfaces/IRelatedResult.md#pre_snippet)

#### Source

main.ts:28866

***

### price?

> **`optional`** **price**: [`PriceInfo`](PriceInfo.md)

price of booking a place for the specified dates of stay

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`price`](../interfaces/IRelatedResult.md#price)

#### Source

main.ts:28878

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`rating`](../interfaces/IRelatedResult.md#rating)

#### Source

main.ts:28876

***

### related\_search\_url?

> **`optional`** **related\_search\_url**: `string`

URL to a similar search
URL to a new search for the same keyword(s) on related sites

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`related_search_url`](../interfaces/IRelatedResult.md#related_search_url)

#### Source

main.ts:28854

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`timestamp`](../interfaces/IRelatedResult.md#timestamp)

#### Source

main.ts:28889

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`title`](../interfaces/IRelatedResult.md#title)

#### Source

main.ts:28847

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`type`](../interfaces/IRelatedResult.md#type)

#### Source

main.ts:28841

***

### url?

> **`optional`** **url**: `string`

URL of element

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`url`](../interfaces/IRelatedResult.md#url)

#### Source

main.ts:28849

***

### website\_name?

> **`optional`** **website\_name**: `string`

name of the website in SERP

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`website_name`](../interfaces/IRelatedResult.md#website_name)

#### Source

main.ts:28858

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`xpath`](../interfaces/IRelatedResult.md#xpath)

#### Source

main.ts:28843

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:28902

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:28947

***

### fromJS()

> **`static`** **fromJS**(`data`): [`RelatedResult`](RelatedResult.md)

#### Parameters

• **data**: `any`

#### Returns

[`RelatedResult`](RelatedResult.md)

#### Source

main.ts:28940
