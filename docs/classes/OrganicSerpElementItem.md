**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OrganicSerpElementItem

# Class: OrganicSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OrganicSerpElementItem(data)

> **new OrganicSerpElementItem**(`data`?): [`OrganicSerpElementItem`](OrganicSerpElementItem.md)

#### Parameters

• **data?**: [`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md)

#### Returns

[`OrganicSerpElementItem`](OrganicSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:26351

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19994

***

### about\_this\_result?

> **`optional`** **about\_this\_result**: [`AboutThisResultElement`](AboutThisResultElement.md)

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`about_this_result`](../interfaces/IOrganicSerpElementItem.md#about_this_result)

#### Source

main.ts:26334

***

### amp\_version?

> **`optional`** **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`amp_version`](../interfaces/IOrganicSerpElementItem.md#amp_version)

#### Source

main.ts:26310

***

### breadcrumb?

> **`optional`** **breadcrumb**: `string`

breadcrumb in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`breadcrumb`](../interfaces/IOrganicSerpElementItem.md#breadcrumb)

#### Source

main.ts:26287

***

### cache\_url?

> **`optional`** **cache\_url**: `string`

cached version of the page

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`cache_url`](../interfaces/IOrganicSerpElementItem.md#cache_url)

#### Source

main.ts:26282

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`description`](../interfaces/IOrganicSerpElementItem.md#description)

#### Source

main.ts:26301

***

### domain?

> **`optional`** **domain**: `string`

website domain

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`domain`](../interfaces/IOrganicSerpElementItem.md#domain)

#### Source

main.ts:26276

***

### extended\_people\_also\_search?

> **`optional`** **extended\_people\_also\_search**: `string`[]

extension of the organic element
extension of the organic result containing related search queries
Note: extension appears in SERP upon clicking on the result and then bouncing back to search results

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`extended_people_also_search`](../interfaces/IOrganicSerpElementItem.md#extended_people_also_search)

#### Source

main.ts:26330

***

### extended\_snippet?

> **`optional`** **extended\_snippet**: `string`

includes additional information appended after the result description in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`extended_snippet`](../interfaces/IOrganicSerpElementItem.md#extended_snippet)

#### Source

main.ts:26305

***

### faq?

> **`optional`** **faq**: [`FaqBox`](FaqBox.md)

frequently asked questions
questions and answers extension shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`faq`](../interfaces/IOrganicSerpElementItem.md#faq)

#### Source

main.ts:26326

***

### highlighted?

> **`optional`** **highlighted**: `string`[]

words highlighted in bold within the results description

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`highlighted`](../interfaces/IOrganicSerpElementItem.md#highlighted)

#### Source

main.ts:26318

***

### images?

> **`optional`** **images**: [`ImagesElement`](ImagesElement.md)[]

images of the element

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`images`](../interfaces/IOrganicSerpElementItem.md#images)

#### Source

main.ts:26307

***

### is\_featured\_snippet?

> **`optional`** **is\_featured\_snippet**: `boolean`

indicates whether the element is a featured_snippet

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`is_featured_snippet`](../interfaces/IOrganicSerpElementItem.md#is_featured_snippet)

#### Source

main.ts:26295

***

### is\_image?

> **`optional`** **is\_image**: `boolean`

indicates whether the element contains an image

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`is_image`](../interfaces/IOrganicSerpElementItem.md#is_image)

#### Source

main.ts:26291

***

### is\_malicious?

> **`optional`** **is\_malicious**: `boolean`

indicates whether the element is marked as malicious

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`is_malicious`](../interfaces/IOrganicSerpElementItem.md#is_malicious)

#### Source

main.ts:26297

***

### is\_video?

> **`optional`** **is\_video**: `boolean`

indicates whether the element contains a video

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`is_video`](../interfaces/IOrganicSerpElementItem.md#is_video)

#### Source

main.ts:26293

***

### is\_web\_story?

> **`optional`** **is\_web\_story**: `boolean`

indicates whether the element is marked as Google web story

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`is_web_story`](../interfaces/IOrganicSerpElementItem.md#is_web_story)

#### Source

main.ts:26299

***

### links?

> **`optional`** **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`links`](../interfaces/IOrganicSerpElementItem.md#links)

#### Source

main.ts:26322

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`position`](../interfaces/IOrganicSerpElementItem.md#position)

#### Source

main.ts:26272

***

### pre\_snippet?

> **`optional`** **pre\_snippet**: `string`

includes additional information appended before the result description in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`pre_snippet`](../interfaces/IOrganicSerpElementItem.md#pre_snippet)

#### Source

main.ts:26303

***

### price?

> **`optional`** **price**: [`PriceInfo`](PriceInfo.md)

pricing details
contains the pricing details of the product or service featured in the result

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`price`](../interfaces/IOrganicSerpElementItem.md#price)

#### Source

main.ts:26316

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`rank_absolute`](../interfaces/IOrganicSerpElementItem.md#rank_absolute)

#### Source

main.ts:26268

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`rank_group`](../interfaces/IOrganicSerpElementItem.md#rank_group)

#### Source

main.ts:26265

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`rating`](../interfaces/IOrganicSerpElementItem.md#rating)

#### Source

main.ts:26313

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`rectangle`](../interfaces/IOrganicSerpElementItem.md#rectangle)

#### Source

main.ts:26347

***

### related\_result?

> **`optional`** **related\_result**: [`RelatedResult`](RelatedResult.md)[]

related result from the same domain
related result from the same domain appears as a part of the main result snippet;
you can derive the related_result snippets as "type": "organic" results by setting the group_organic_results parameter to false in the POST request

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`related_result`](../interfaces/IOrganicSerpElementItem.md#related_result)

#### Source

main.ts:26338

***

### related\_search\_url?

> **`optional`** **related\_search\_url**: `string`

URL to a similar search
URL to a new search for the same keyword(s) on related sites

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`related_search_url`](../interfaces/IOrganicSerpElementItem.md#related_search_url)

#### Source

main.ts:26285

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`timestamp`](../interfaces/IOrganicSerpElementItem.md#timestamp)

#### Source

main.ts:26343

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`title`](../interfaces/IOrganicSerpElementItem.md#title)

#### Source

main.ts:26278

***

### url?

> **`optional`** **url**: `string`

relevant URL in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`url`](../interfaces/IOrganicSerpElementItem.md#url)

#### Source

main.ts:26280

***

### website\_name?

> **`optional`** **website\_name**: `string`

name of the website in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`website_name`](../interfaces/IOrganicSerpElementItem.md#website_name)

#### Source

main.ts:26289

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`xpath`](../interfaces/IOrganicSerpElementItem.md#xpath)

#### Source

main.ts:26274

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Source

main.ts:26356

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Source

main.ts:26424

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OrganicSerpElementItem`](OrganicSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`OrganicSerpElementItem`](OrganicSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:26417
