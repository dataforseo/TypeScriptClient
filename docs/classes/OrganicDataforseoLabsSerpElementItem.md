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

main.ts:90111

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20051

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

main.ts:90082

***

### amp\_version?

> **`optional`** **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`amp_version`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#amp_version)

#### Source

main.ts:90069

***

### backlinks\_info?

> **`optional`** **backlinks\_info**: [`BacklinksInfo`](BacklinksInfo.md)

backlinks information for the target website

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`backlinks_info`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#backlinks_info)

#### Source

main.ts:90105

***

### breadcrumb?

> **`optional`** **breadcrumb**: `string`

breadcrumb in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`breadcrumb`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#breadcrumb)

#### Source

main.ts:90050

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`description`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#description)

#### Source

main.ts:90062

***

### domain?

> **`optional`** **domain**: `string`

subdomain in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`domain`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#domain)

#### Source

main.ts:90044

***

### estimated\_paid\_traffic\_cost?

> **`optional`** **estimated\_paid\_traffic\_cost**: `number`

estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`estimated_paid_traffic_cost`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#estimated_paid_traffic_cost)

#### Source

main.ts:90100

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

main.ts:90091

***

### extended\_snippet?

> **`optional`** **extended\_snippet**: `string`

includes additional information appended after the result description in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`extended_snippet`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#extended_snippet)

#### Source

main.ts:90066

***

### highlighted?

> **`optional`** **highlighted**: `string`[]

words highlighted in bold within the results description

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`highlighted`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#highlighted)

#### Source

main.ts:90074

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

main.ts:90096

***

### is\_featured\_snippet?

> **`optional`** **is\_featured\_snippet**: `boolean`

indicates whether the element is a featured_snippet

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`is_featured_snippet`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#is_featured_snippet)

#### Source

main.ts:90058

***

### is\_image?

> **`optional`** **is\_image**: `boolean`

indicates whether the element contains an image

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`is_image`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#is_image)

#### Source

main.ts:90054

***

### is\_malicious?

> **`optional`** **is\_malicious**: `boolean`

indicates whether the element is marked as malicious

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`is_malicious`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#is_malicious)

#### Source

main.ts:90060

***

### is\_video?

> **`optional`** **is\_video**: `boolean`

indicates whether the element contains a video

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`is_video`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#is_video)

#### Source

main.ts:90056

***

### links?

> **`optional`** **links**: [`AdLinkElement`](AdLinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`links`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#links)

#### Source

main.ts:90078

***

### main\_domain?

> **`optional`** **main\_domain**: `string`

primary domain name in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`main_domain`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#main_domain)

#### Source

main.ts:90084

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:90040

***

### pre\_snippet?

> **`optional`** **pre\_snippet**: `string`

includes additional information appended before the result description in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`pre_snippet`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#pre_snippet)

#### Source

main.ts:90064

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:90036

***

### rank\_changes?

> **`optional`** **rank\_changes**: [`RankChanges`](RankChanges.md)

changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`rank_changes`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rank_changes)

#### Source

main.ts:90103

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:90033

***

### rank\_info?

> **`optional`** **rank\_info**: [`RankInfo`](RankInfo.md)

page and domain rank information

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`rank_info`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rank_info)

#### Source

main.ts:90107

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`rating`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rating)

#### Source

main.ts:90072

***

### relative\_url?

> **`optional`** **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`relative_url`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#relative_url)

#### Source

main.ts:90086

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#se_type)

#### Source

main.ts:90030

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#title)

#### Source

main.ts:90046

***

### url?

> **`optional`** **url**: `string`

relevant URL in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#url)

#### Source

main.ts:90048

***

### website\_name?

> **`optional`** **website\_name**: `string`

relevant website name in SERP

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`website_name`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#website_name)

#### Source

main.ts:90052

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:90042

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

main.ts:90116

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

main.ts:90177

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

main.ts:90170
