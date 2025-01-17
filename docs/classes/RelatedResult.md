[**Documentation**](../README.md)

***

[Documentation](../README.md) / RelatedResult

# Class: RelatedResult

Defined in: main.ts:31361

## Implements

- [`IRelatedResult`](../interfaces/IRelatedResult.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new RelatedResult()

> **new RelatedResult**(`data`?): [`RelatedResult`](RelatedResult.md)

Defined in: main.ts:31415

#### Parameters

##### data?

[`IRelatedResult`](../interfaces/IRelatedResult.md)

#### Returns

[`RelatedResult`](RelatedResult.md)

## Properties

### about\_this\_result?

> `optional` **about\_this\_result**: [`AboutThisResultElement`](AboutThisResultElement.md)

Defined in: main.ts:31406

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`about_this_result`](../interfaces/IRelatedResult.md#about_this_result)

***

### amp\_version?

> `optional` **amp\_version**: `boolean`

Defined in: main.ts:31395

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`amp_version`](../interfaces/IRelatedResult.md#amp_version)

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

Defined in: main.ts:31378

breadcrumb in SERP

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`breadcrumb`](../interfaces/IRelatedResult.md#breadcrumb)

***

### cache\_url?

> `optional` **cache\_url**: `string`

Defined in: main.ts:31373

cached version of the page

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`cache_url`](../interfaces/IRelatedResult.md#cache_url)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:31386

description of the hotel booking element

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`description`](../interfaces/IRelatedResult.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:31367

domain where a link points

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`domain`](../interfaces/IRelatedResult.md#domain)

***

### extended\_snippet?

> `optional` **extended\_snippet**: `string`

Defined in: main.ts:31390

includes additional information appended after the result description in SERP

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`extended_snippet`](../interfaces/IRelatedResult.md#extended_snippet)

***

### highlighted?

> `optional` **highlighted**: `string`[]

Defined in: main.ts:31402

words highlighted in bold within the results description

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`highlighted`](../interfaces/IRelatedResult.md#highlighted)

***

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

Defined in: main.ts:31392

images of the element

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`images`](../interfaces/IRelatedResult.md#images)

***

### is\_image?

> `optional` **is\_image**: `boolean`

Defined in: main.ts:31382

indicates whether the element contains an image

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`is_image`](../interfaces/IRelatedResult.md#is_image)

***

### is\_video?

> `optional` **is\_video**: `boolean`

Defined in: main.ts:31384

indicates whether the element contains a video

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`is_video`](../interfaces/IRelatedResult.md#is_video)

***

### pre\_snippet?

> `optional` **pre\_snippet**: `string`

Defined in: main.ts:31388

includes additional information appended before the result description in SERP

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`pre_snippet`](../interfaces/IRelatedResult.md#pre_snippet)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:31400

price of booking a place for the specified dates of stay

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`price`](../interfaces/IRelatedResult.md#price)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:31398

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`rating`](../interfaces/IRelatedResult.md#rating)

***

### related\_search\_url?

> `optional` **related\_search\_url**: `string`

Defined in: main.ts:31376

URL to a similar search
URL to a new search for the same keyword(s) on related sites

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`related_search_url`](../interfaces/IRelatedResult.md#related_search_url)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:31411

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`timestamp`](../interfaces/IRelatedResult.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:31369

title of a given link element

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`title`](../interfaces/IRelatedResult.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:31363

type of element

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`type`](../interfaces/IRelatedResult.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:31371

reference page URL

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`url`](../interfaces/IRelatedResult.md#url)

***

### website\_name?

> `optional` **website\_name**: `string`

Defined in: main.ts:31380

name of the website in SERP

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`website_name`](../interfaces/IRelatedResult.md#website_name)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:31365

the XPath of the element

#### Implementation of

[`IRelatedResult`](../interfaces/IRelatedResult.md).[`xpath`](../interfaces/IRelatedResult.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:31424

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:31469

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`RelatedResult`](RelatedResult.md)

Defined in: main.ts:31462

#### Parameters

##### data

`any`

#### Returns

[`RelatedResult`](RelatedResult.md)
