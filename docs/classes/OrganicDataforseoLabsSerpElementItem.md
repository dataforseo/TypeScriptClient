[**Documentation**](../README.md)

***

[Documentation](../README.md) / OrganicDataforseoLabsSerpElementItem

# Class: OrganicDataforseoLabsSerpElementItem

Defined in: main.ts:101138

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OrganicDataforseoLabsSerpElementItem()

> **new OrganicDataforseoLabsSerpElementItem**(`data`?): [`OrganicDataforseoLabsSerpElementItem`](OrganicDataforseoLabsSerpElementItem.md)

Defined in: main.ts:101214

#### Parameters

##### data?

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md)

#### Returns

[`OrganicDataforseoLabsSerpElementItem`](OrganicDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21425

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### about\_this\_result?

> `optional` **about\_this\_result**: `object`

Defined in: main.ts:101180

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Index Signature

\[`key`: `string`\]: [`AboutThisResultElement`](AboutThisResultElement.md)

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`about_this_result`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#about_this_result)

***

### amp\_version?

> `optional` **amp\_version**: `boolean`

Defined in: main.ts:101167

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`amp_version`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#amp_version)

***

### backlinks\_info?

> `optional` **backlinks\_info**: [`BacklinksInfo`](BacklinksInfo.md)

Defined in: main.ts:101208

backlinks information for the target website

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`backlinks_info`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#backlinks_info)

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

Defined in: main.ts:101148

breadcrumb in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`breadcrumb`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#breadcrumb)

***

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

Defined in: main.ts:101203

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`clickstream_etv`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#clickstream_etv)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:101160

description of the results element in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`description`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:101142

subdomain in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`domain`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#domain)

***

### estimated\_paid\_traffic\_cost?

> `optional` **estimated\_paid\_traffic\_cost**: `number`

Defined in: main.ts:101198

estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`estimated_paid_traffic_cost`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#estimated_paid_traffic_cost)

***

### etv?

> `optional` **etv**: `number`

Defined in: main.ts:101189

estimated traffic volume
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`etv`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#etv)

***

### extended\_snippet?

> `optional` **extended\_snippet**: `string`

Defined in: main.ts:101164

includes additional information appended after the result description in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`extended_snippet`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#extended_snippet)

***

### highlighted?

> `optional` **highlighted**: `string`[]

Defined in: main.ts:101172

words highlighted in bold within the results description

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`highlighted`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#highlighted)

***

### impressions\_etv?

> `optional` **impressions\_etv**: `number`

Defined in: main.ts:101194

estimated traffic volume based on impressions
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`impressions_etv`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#impressions_etv)

***

### is\_featured\_snippet?

> `optional` **is\_featured\_snippet**: `boolean`

Defined in: main.ts:101156

indicates whether the element is a featured_snippet

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`is_featured_snippet`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#is_featured_snippet)

***

### is\_image?

> `optional` **is\_image**: `boolean`

Defined in: main.ts:101152

indicates whether the element contains an image

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`is_image`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#is_image)

***

### is\_malicious?

> `optional` **is\_malicious**: `boolean`

Defined in: main.ts:101158

indicates whether the element is marked as malicious

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`is_malicious`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#is_malicious)

***

### is\_video?

> `optional` **is\_video**: `boolean`

Defined in: main.ts:101154

indicates whether the element contains a video

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`is_video`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#is_video)

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

Defined in: main.ts:101176

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`links`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#links)

***

### main\_domain?

> `optional` **main\_domain**: `string`

Defined in: main.ts:101182

primary domain name in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`main_domain`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#main_domain)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21421

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### pre\_snippet?

> `optional` **pre\_snippet**: `string`

Defined in: main.ts:101162

includes additional information appended before the result description in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`pre_snippet`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#pre_snippet)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21417

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_changes?

> `optional` **rank\_changes**: [`RankChanges`](RankChanges.md)

Defined in: main.ts:101206

changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`rank_changes`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rank_changes)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21414

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### rank\_info?

> `optional` **rank\_info**: [`RankInfo`](RankInfo.md)

Defined in: main.ts:101210

page and domain rank information

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`rank_info`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rank_info)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:101170

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`rating`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rating)

***

### relative\_url?

> `optional` **relative\_url**: `string`

Defined in: main.ts:101184

URL in SERP that does not specify the HTTPs protocol and domain name

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`relative_url`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#relative_url)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:101140

search engine type

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#se_type)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:101144

title of the result in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21411

type of element

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:101146

relevant URL in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#url)

***

### website\_name?

> `optional` **website\_name**: `string`

Defined in: main.ts:101150

relevant website name in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`website_name`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#website_name)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21423

the XPath of the element

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:101219

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:101277

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`OrganicDataforseoLabsSerpElementItem`](OrganicDataforseoLabsSerpElementItem.md)

Defined in: main.ts:101270

#### Parameters

##### data

`any`

#### Returns

[`OrganicDataforseoLabsSerpElementItem`](OrganicDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
