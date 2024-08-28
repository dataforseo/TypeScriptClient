[**Documentation**](../README.md) • **Docs**

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

### new OrganicSerpElementItem()

> **new OrganicSerpElementItem**(`data`?): [`OrganicSerpElementItem`](OrganicSerpElementItem.md)

#### Parameters

• **data?**: [`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md)

#### Returns

[`OrganicSerpElementItem`](OrganicSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:26995

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### about\_this\_result?

> `optional` **about\_this\_result**: [`AboutThisResultElement`](AboutThisResultElement.md)

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`about_this_result`](../interfaces/IOrganicSerpElementItem.md#about_this_result)

#### Defined in

main.ts:26978

***

### amp\_version?

> `optional` **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`amp_version`](../interfaces/IOrganicSerpElementItem.md#amp_version)

#### Defined in

main.ts:26954

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

breadcrumb in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`breadcrumb`](../interfaces/IOrganicSerpElementItem.md#breadcrumb)

#### Defined in

main.ts:26931

***

### cache\_url?

> `optional` **cache\_url**: `string`

cached version of the page

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`cache_url`](../interfaces/IOrganicSerpElementItem.md#cache_url)

#### Defined in

main.ts:26926

***

### description?

> `optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`description`](../interfaces/IOrganicSerpElementItem.md#description)

#### Defined in

main.ts:26945

***

### domain?

> `optional` **domain**: `string`

website domain

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`domain`](../interfaces/IOrganicSerpElementItem.md#domain)

#### Defined in

main.ts:26920

***

### extended\_people\_also\_search?

> `optional` **extended\_people\_also\_search**: `string`[]

extension of the organic element
extension of the organic result containing related search queries
Note: extension appears in SERP upon clicking on the result and then bouncing back to search results

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`extended_people_also_search`](../interfaces/IOrganicSerpElementItem.md#extended_people_also_search)

#### Defined in

main.ts:26974

***

### extended\_snippet?

> `optional` **extended\_snippet**: `string`

includes additional information appended after the result description in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`extended_snippet`](../interfaces/IOrganicSerpElementItem.md#extended_snippet)

#### Defined in

main.ts:26949

***

### faq?

> `optional` **faq**: [`FaqBox`](FaqBox.md)

frequently asked questions
questions and answers extension shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`faq`](../interfaces/IOrganicSerpElementItem.md#faq)

#### Defined in

main.ts:26970

***

### highlighted?

> `optional` **highlighted**: `string`[]

words highlighted in bold within the results description

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`highlighted`](../interfaces/IOrganicSerpElementItem.md#highlighted)

#### Defined in

main.ts:26962

***

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

images of the element

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`images`](../interfaces/IOrganicSerpElementItem.md#images)

#### Defined in

main.ts:26951

***

### is\_featured\_snippet?

> `optional` **is\_featured\_snippet**: `boolean`

indicates whether the element is a featured_snippet

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`is_featured_snippet`](../interfaces/IOrganicSerpElementItem.md#is_featured_snippet)

#### Defined in

main.ts:26939

***

### is\_image?

> `optional` **is\_image**: `boolean`

indicates whether the element contains an image

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`is_image`](../interfaces/IOrganicSerpElementItem.md#is_image)

#### Defined in

main.ts:26935

***

### is\_malicious?

> `optional` **is\_malicious**: `boolean`

indicates whether the element is marked as malicious

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`is_malicious`](../interfaces/IOrganicSerpElementItem.md#is_malicious)

#### Defined in

main.ts:26941

***

### is\_video?

> `optional` **is\_video**: `boolean`

indicates whether the element contains a video

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`is_video`](../interfaces/IOrganicSerpElementItem.md#is_video)

#### Defined in

main.ts:26937

***

### is\_web\_story?

> `optional` **is\_web\_story**: `boolean`

indicates whether the element is marked as Google web story

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`is_web_story`](../interfaces/IOrganicSerpElementItem.md#is_web_story)

#### Defined in

main.ts:26943

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`links`](../interfaces/IOrganicSerpElementItem.md#links)

#### Defined in

main.ts:26966

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`position`](../interfaces/IOrganicSerpElementItem.md#position)

#### Defined in

main.ts:26916

***

### pre\_snippet?

> `optional` **pre\_snippet**: `string`

includes additional information appended before the result description in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`pre_snippet`](../interfaces/IOrganicSerpElementItem.md#pre_snippet)

#### Defined in

main.ts:26947

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

pricing details
contains the pricing details of the product or service featured in the result

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`price`](../interfaces/IOrganicSerpElementItem.md#price)

#### Defined in

main.ts:26960

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`rank_absolute`](../interfaces/IOrganicSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:26912

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`rank_group`](../interfaces/IOrganicSerpElementItem.md#rank_group)

#### Defined in

main.ts:26909

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`rating`](../interfaces/IOrganicSerpElementItem.md#rating)

#### Defined in

main.ts:26957

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`rectangle`](../interfaces/IOrganicSerpElementItem.md#rectangle)

#### Defined in

main.ts:26991

***

### related\_result?

> `optional` **related\_result**: [`RelatedResult`](RelatedResult.md)[]

related result from the same domain
related result from the same domain appears as a part of the main result snippet;
you can derive the related_result snippets as "type": "organic" results by setting the group_organic_results parameter to false in the POST request

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`related_result`](../interfaces/IOrganicSerpElementItem.md#related_result)

#### Defined in

main.ts:26982

***

### related\_search\_url?

> `optional` **related\_search\_url**: `string`

URL to a similar search
URL to a new search for the same keyword(s) on related sites

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`related_search_url`](../interfaces/IOrganicSerpElementItem.md#related_search_url)

#### Defined in

main.ts:26929

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`timestamp`](../interfaces/IOrganicSerpElementItem.md#timestamp)

#### Defined in

main.ts:26987

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`title`](../interfaces/IOrganicSerpElementItem.md#title)

#### Defined in

main.ts:26922

***

### url?

> `optional` **url**: `string`

relevant URL in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`url`](../interfaces/IOrganicSerpElementItem.md#url)

#### Defined in

main.ts:26924

***

### website\_name?

> `optional` **website\_name**: `string`

name of the website in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`website_name`](../interfaces/IOrganicSerpElementItem.md#website_name)

#### Defined in

main.ts:26933

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`xpath`](../interfaces/IOrganicSerpElementItem.md#xpath)

#### Defined in

main.ts:26918

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:27000

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:27068

***

### fromJS()

> `static` **fromJS**(`data`): [`OrganicSerpElementItem`](OrganicSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`OrganicSerpElementItem`](OrganicSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:27061
