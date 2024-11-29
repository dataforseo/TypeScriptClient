[**Documentation**](../README.md)

***

[Documentation](../README.md) / OrganicDataforseoLabsSerpElementItem

# Class: OrganicDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OrganicDataforseoLabsSerpElementItem()

> **new OrganicDataforseoLabsSerpElementItem**(`data`?): [`OrganicDataforseoLabsSerpElementItem`](OrganicDataforseoLabsSerpElementItem.md)

#### Parameters

##### data?

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md)

#### Returns

[`OrganicDataforseoLabsSerpElementItem`](OrganicDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:101118

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21425

***

### about\_this\_result?

> `optional` **about\_this\_result**: `object`

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Index Signature

 \[`key`: `string`\]: [`AboutThisResultElement`](AboutThisResultElement.md)

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`about_this_result`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#about_this_result)

#### Defined in

main.ts:101084

***

### amp\_version?

> `optional` **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`amp_version`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#amp_version)

#### Defined in

main.ts:101071

***

### backlinks\_info?

> `optional` **backlinks\_info**: [`BacklinksInfo`](BacklinksInfo.md)

backlinks information for the target website

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`backlinks_info`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#backlinks_info)

#### Defined in

main.ts:101112

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

breadcrumb in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`breadcrumb`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#breadcrumb)

#### Defined in

main.ts:101052

***

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`clickstream_etv`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#clickstream_etv)

#### Defined in

main.ts:101107

***

### description?

> `optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`description`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#description)

#### Defined in

main.ts:101064

***

### domain?

> `optional` **domain**: `string`

subdomain in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`domain`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#domain)

#### Defined in

main.ts:101046

***

### estimated\_paid\_traffic\_cost?

> `optional` **estimated\_paid\_traffic\_cost**: `number`

estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`estimated_paid_traffic_cost`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#estimated_paid_traffic_cost)

#### Defined in

main.ts:101102

***

### etv?

> `optional` **etv**: `number`

estimated traffic volume
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`etv`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#etv)

#### Defined in

main.ts:101093

***

### extended\_snippet?

> `optional` **extended\_snippet**: `string`

includes additional information appended after the result description in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`extended_snippet`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#extended_snippet)

#### Defined in

main.ts:101068

***

### highlighted?

> `optional` **highlighted**: `string`[]

words highlighted in bold within the results description

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`highlighted`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#highlighted)

#### Defined in

main.ts:101076

***

### impressions\_etv?

> `optional` **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`impressions_etv`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#impressions_etv)

#### Defined in

main.ts:101098

***

### is\_featured\_snippet?

> `optional` **is\_featured\_snippet**: `boolean`

indicates whether the element is a featured_snippet

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`is_featured_snippet`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#is_featured_snippet)

#### Defined in

main.ts:101060

***

### is\_image?

> `optional` **is\_image**: `boolean`

indicates whether the element contains an image

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`is_image`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#is_image)

#### Defined in

main.ts:101056

***

### is\_malicious?

> `optional` **is\_malicious**: `boolean`

indicates whether the element is marked as malicious

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`is_malicious`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#is_malicious)

#### Defined in

main.ts:101062

***

### is\_video?

> `optional` **is\_video**: `boolean`

indicates whether the element contains a video

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`is_video`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#is_video)

#### Defined in

main.ts:101058

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`links`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#links)

#### Defined in

main.ts:101080

***

### main\_domain?

> `optional` **main\_domain**: `string`

primary domain name in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`main_domain`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#main_domain)

#### Defined in

main.ts:101086

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:21421

***

### pre\_snippet?

> `optional` **pre\_snippet**: `string`

includes additional information appended before the result description in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`pre_snippet`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#pre_snippet)

#### Defined in

main.ts:101066

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21417

***

### rank\_changes?

> `optional` **rank\_changes**: [`RankChanges`](RankChanges.md)

changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`rank_changes`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rank_changes)

#### Defined in

main.ts:101110

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:21414

***

### rank\_info?

> `optional` **rank\_info**: [`RankInfo`](RankInfo.md)

page and domain rank information

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`rank_info`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rank_info)

#### Defined in

main.ts:101114

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`rating`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rating)

#### Defined in

main.ts:101074

***

### relative\_url?

> `optional` **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`relative_url`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#relative_url)

#### Defined in

main.ts:101088

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#se_type)

#### Defined in

main.ts:101044

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:101048

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:21411

***

### url?

> `optional` **url**: `string`

relevant URL in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#url)

#### Defined in

main.ts:101050

***

### website\_name?

> `optional` **website\_name**: `string`

relevant website name in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`website_name`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#website_name)

#### Defined in

main.ts:101054

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:21423

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:101123

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:101181

***

### fromJS()

> `static` **fromJS**(`data`): [`OrganicDataforseoLabsSerpElementItem`](OrganicDataforseoLabsSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`OrganicDataforseoLabsSerpElementItem`](OrganicDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:101174
