[**Documentation**](../README.md)

***

[Documentation](../README.md) / OrganicSerpElementItem

# Class: OrganicSerpElementItem

Defined in: main.ts:28745

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OrganicSerpElementItem()

> **new OrganicSerpElementItem**(`data`?): [`OrganicSerpElementItem`](OrganicSerpElementItem.md)

Defined in: main.ts:28822

#### Parameters

##### data?

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md)

#### Returns

[`OrganicSerpElementItem`](OrganicSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21045

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### about\_this\_result?

> `optional` **about\_this\_result**: [`AboutThisResultElement`](AboutThisResultElement.md)

Defined in: main.ts:28805

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`about_this_result`](../interfaces/IOrganicSerpElementItem.md#about_this_result)

***

### amp\_version?

> `optional` **amp\_version**: `boolean`

Defined in: main.ts:28781

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`amp_version`](../interfaces/IOrganicSerpElementItem.md#amp_version)

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

Defined in: main.ts:28758

breadcrumb in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`breadcrumb`](../interfaces/IOrganicSerpElementItem.md#breadcrumb)

***

### cache\_url?

> `optional` **cache\_url**: `string`

Defined in: main.ts:28753

cached version of the page

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`cache_url`](../interfaces/IOrganicSerpElementItem.md#cache_url)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:28772

description of the results element in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`description`](../interfaces/IOrganicSerpElementItem.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:28747

domain name of the reference

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`domain`](../interfaces/IOrganicSerpElementItem.md#domain)

***

### extended\_people\_also\_search?

> `optional` **extended\_people\_also\_search**: `string`[]

Defined in: main.ts:28801

extension of the organic element
extension of the organic result containing related search queries
Note: extension appears in SERP upon clicking on the result and then bouncing back to search results

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`extended_people_also_search`](../interfaces/IOrganicSerpElementItem.md#extended_people_also_search)

***

### extended\_snippet?

> `optional` **extended\_snippet**: `string`

Defined in: main.ts:28776

includes additional information appended after the result description in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`extended_snippet`](../interfaces/IOrganicSerpElementItem.md#extended_snippet)

***

### faq?

> `optional` **faq**: [`FaqBox`](FaqBox.md)

Defined in: main.ts:28797

frequently asked questions
questions and answers extension shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`faq`](../interfaces/IOrganicSerpElementItem.md#faq)

***

### highlighted?

> `optional` **highlighted**: `string`[]

Defined in: main.ts:28789

words highlighted in bold within the results description

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`highlighted`](../interfaces/IOrganicSerpElementItem.md#highlighted)

***

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

Defined in: main.ts:28778

images of the element

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`images`](../interfaces/IOrganicSerpElementItem.md#images)

***

### is\_featured\_snippet?

> `optional` **is\_featured\_snippet**: `boolean`

Defined in: main.ts:28766

indicates whether the element is a featured_snippet

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`is_featured_snippet`](../interfaces/IOrganicSerpElementItem.md#is_featured_snippet)

***

### is\_image?

> `optional` **is\_image**: `boolean`

Defined in: main.ts:28762

indicates whether the element contains an image

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`is_image`](../interfaces/IOrganicSerpElementItem.md#is_image)

***

### is\_malicious?

> `optional` **is\_malicious**: `boolean`

Defined in: main.ts:28768

indicates whether the element is marked as malicious

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`is_malicious`](../interfaces/IOrganicSerpElementItem.md#is_malicious)

***

### is\_video?

> `optional` **is\_video**: `boolean`

Defined in: main.ts:28764

indicates whether the element contains a video

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`is_video`](../interfaces/IOrganicSerpElementItem.md#is_video)

***

### is\_web\_story?

> `optional` **is\_web\_story**: `boolean`

Defined in: main.ts:28770

indicates whether the element is marked as Google web story

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`is_web_story`](../interfaces/IOrganicSerpElementItem.md#is_web_story)

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

Defined in: main.ts:28793

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`links`](../interfaces/IOrganicSerpElementItem.md#links)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`position`](../interfaces/IOrganicSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### pre\_snippet?

> `optional` **pre\_snippet**: `string`

Defined in: main.ts:28774

includes additional information appended before the result description in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`pre_snippet`](../interfaces/IOrganicSerpElementItem.md#pre_snippet)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:28787

pricing details
contains the pricing details of the product or service featured in the result

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`price`](../interfaces/IOrganicSerpElementItem.md#price)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`rank_absolute`](../interfaces/IOrganicSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21034

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`rank_group`](../interfaces/IOrganicSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:28784

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`rating`](../interfaces/IOrganicSerpElementItem.md#rating)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:28818

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`rectangle`](../interfaces/IOrganicSerpElementItem.md#rectangle)

***

### related\_result?

> `optional` **related\_result**: [`RelatedResult`](RelatedResult.md)[]

Defined in: main.ts:28809

related result from the same domain
related result from the same domain appears as a part of the main result snippet;
you can derive the related_result snippets as "type": "organic" results by setting the group_organic_results parameter to false in the POST request

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`related_result`](../interfaces/IOrganicSerpElementItem.md#related_result)

***

### related\_search\_url?

> `optional` **related\_search\_url**: `string`

Defined in: main.ts:28756

URL to a similar search
URL to a new search for the same keyword(s) on related sites

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`related_search_url`](../interfaces/IOrganicSerpElementItem.md#related_search_url)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:28814

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`timestamp`](../interfaces/IOrganicSerpElementItem.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:28749

title of the result in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`title`](../interfaces/IOrganicSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`type`](../interfaces/IOrganicSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:28751

relevant URL in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`url`](../interfaces/IOrganicSerpElementItem.md#url)

***

### website\_name?

> `optional` **website\_name**: `string`

Defined in: main.ts:28760

name of the website in SERP

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`website_name`](../interfaces/IOrganicSerpElementItem.md#website_name)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md).[`xpath`](../interfaces/IOrganicSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:28827

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:28891

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`OrganicSerpElementItem`](OrganicSerpElementItem.md)

Defined in: main.ts:28884

#### Parameters

##### data

`any`

#### Returns

[`OrganicSerpElementItem`](OrganicSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
