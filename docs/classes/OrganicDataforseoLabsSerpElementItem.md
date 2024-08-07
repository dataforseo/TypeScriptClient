**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new OrganicDataforseoLabsSerpElementItem(data)

> **new OrganicDataforseoLabsSerpElementItem**(`data`?): [`OrganicDataforseoLabsSerpElementItem`](OrganicDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md)

#### Returns

[`OrganicDataforseoLabsSerpElementItem`](OrganicDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:92157

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20570

***

### about\_this\_result?

> **`optional`** **about\_this\_result**: `Object`

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Index signature

 \[`key`: `string`\]: [`AboutThisResultElement`](AboutThisResultElement.md)

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`about_this_result`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#about_this_result)

#### Source

main.ts:92123

***

### amp\_version?

> **`optional`** **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`amp_version`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#amp_version)

#### Source

main.ts:92110

***

### backlinks\_info?

> **`optional`** **backlinks\_info**: [`BacklinksInfo`](BacklinksInfo.md)

backlinks information for the target website

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`backlinks_info`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#backlinks_info)

#### Source

main.ts:92151

***

### breadcrumb?

> **`optional`** **breadcrumb**: `string`

breadcrumb in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`breadcrumb`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#breadcrumb)

#### Source

main.ts:92091

***

### clickstream\_etv?

> **`optional`** **clickstream\_etv**: `number`

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`clickstream_etv`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#clickstream_etv)

#### Source

main.ts:92146

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`description`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#description)

#### Source

main.ts:92103

***

### domain?

> **`optional`** **domain**: `string`

subdomain in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`domain`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#domain)

#### Source

main.ts:92085

***

### estimated\_paid\_traffic\_cost?

> **`optional`** **estimated\_paid\_traffic\_cost**: `number`

estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`estimated_paid_traffic_cost`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#estimated_paid_traffic_cost)

#### Source

main.ts:92141

***

### etv?

> **`optional`** **etv**: `number`

estimated traffic volume
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`etv`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#etv)

#### Source

main.ts:92132

***

### extended\_snippet?

> **`optional`** **extended\_snippet**: `string`

includes additional information appended after the result description in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`extended_snippet`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#extended_snippet)

#### Source

main.ts:92107

***

### highlighted?

> **`optional`** **highlighted**: `string`[]

words highlighted in bold within the results description

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`highlighted`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#highlighted)

#### Source

main.ts:92115

***

### impressions\_etv?

> **`optional`** **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`impressions_etv`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#impressions_etv)

#### Source

main.ts:92137

***

### is\_featured\_snippet?

> **`optional`** **is\_featured\_snippet**: `boolean`

indicates whether the element is a featured_snippet

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`is_featured_snippet`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#is_featured_snippet)

#### Source

main.ts:92099

***

### is\_image?

> **`optional`** **is\_image**: `boolean`

indicates whether the element contains an image

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`is_image`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#is_image)

#### Source

main.ts:92095

***

### is\_malicious?

> **`optional`** **is\_malicious**: `boolean`

indicates whether the element is marked as malicious

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`is_malicious`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#is_malicious)

#### Source

main.ts:92101

***

### is\_video?

> **`optional`** **is\_video**: `boolean`

indicates whether the element contains a video

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`is_video`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#is_video)

#### Source

main.ts:92097

***

### links?

> **`optional`** **links**: [`AdLinkElement`](AdLinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`links`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#links)

#### Source

main.ts:92119

***

### main\_domain?

> **`optional`** **main\_domain**: `string`

primary domain name in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`main_domain`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#main_domain)

#### Source

main.ts:92125

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:92081

***

### pre\_snippet?

> **`optional`** **pre\_snippet**: `string`

includes additional information appended before the result description in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`pre_snippet`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#pre_snippet)

#### Source

main.ts:92105

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:92077

***

### rank\_changes?

> **`optional`** **rank\_changes**: [`RankChanges`](RankChanges.md)

changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`rank_changes`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rank_changes)

#### Source

main.ts:92149

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:92074

***

### rank\_info?

> **`optional`** **rank\_info**: [`RankInfo`](RankInfo.md)

page and domain rank information

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`rank_info`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rank_info)

#### Source

main.ts:92153

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`rating`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rating)

#### Source

main.ts:92113

***

### relative\_url?

> **`optional`** **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`relative_url`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#relative_url)

#### Source

main.ts:92127

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#se_type)

#### Source

main.ts:92071

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#title)

#### Source

main.ts:92087

***

### url?

> **`optional`** **url**: `string`

relevant URL in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#url)

#### Source

main.ts:92089

***

### website\_name?

> **`optional`** **website\_name**: `string`

relevant website name in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`website_name`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#website_name)

#### Source

main.ts:92093

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:92083

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Source

main.ts:92162

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Source

main.ts:92224

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OrganicDataforseoLabsSerpElementItem`](OrganicDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`OrganicDataforseoLabsSerpElementItem`](OrganicDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:92217
