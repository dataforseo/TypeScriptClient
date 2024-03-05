[dataforseo-client](../README.md) / [Exports](../modules.md) / IOrganicDataforseoLabsSerpElementItem

# Interface: IOrganicDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IOrganicDataforseoLabsSerpElementItem`**

## Implemented by

- [`OrganicDataforseoLabsSerpElementItem`](../classes/OrganicDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [about\_this\_result](IOrganicDataforseoLabsSerpElementItem.md#about_this_result)
- [amp\_version](IOrganicDataforseoLabsSerpElementItem.md#amp_version)
- [backlinks\_info](IOrganicDataforseoLabsSerpElementItem.md#backlinks_info)
- [breadcrumb](IOrganicDataforseoLabsSerpElementItem.md#breadcrumb)
- [description](IOrganicDataforseoLabsSerpElementItem.md#description)
- [domain](IOrganicDataforseoLabsSerpElementItem.md#domain)
- [estimated\_paid\_traffic\_cost](IOrganicDataforseoLabsSerpElementItem.md#estimated_paid_traffic_cost)
- [etv](IOrganicDataforseoLabsSerpElementItem.md#etv)
- [extended\_snippet](IOrganicDataforseoLabsSerpElementItem.md#extended_snippet)
- [highlighted](IOrganicDataforseoLabsSerpElementItem.md#highlighted)
- [impressions\_etv](IOrganicDataforseoLabsSerpElementItem.md#impressions_etv)
- [is\_featured\_snippet](IOrganicDataforseoLabsSerpElementItem.md#is_featured_snippet)
- [is\_image](IOrganicDataforseoLabsSerpElementItem.md#is_image)
- [is\_malicious](IOrganicDataforseoLabsSerpElementItem.md#is_malicious)
- [is\_video](IOrganicDataforseoLabsSerpElementItem.md#is_video)
- [links](IOrganicDataforseoLabsSerpElementItem.md#links)
- [main\_domain](IOrganicDataforseoLabsSerpElementItem.md#main_domain)
- [position](IOrganicDataforseoLabsSerpElementItem.md#position)
- [pre\_snippet](IOrganicDataforseoLabsSerpElementItem.md#pre_snippet)
- [rank\_absolute](IOrganicDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_changes](IOrganicDataforseoLabsSerpElementItem.md#rank_changes)
- [rank\_group](IOrganicDataforseoLabsSerpElementItem.md#rank_group)
- [rank\_info](IOrganicDataforseoLabsSerpElementItem.md#rank_info)
- [rating](IOrganicDataforseoLabsSerpElementItem.md#rating)
- [relative\_url](IOrganicDataforseoLabsSerpElementItem.md#relative_url)
- [se\_type](IOrganicDataforseoLabsSerpElementItem.md#se_type)
- [title](IOrganicDataforseoLabsSerpElementItem.md#title)
- [url](IOrganicDataforseoLabsSerpElementItem.md#url)
- [website\_name](IOrganicDataforseoLabsSerpElementItem.md#website_name)
- [xpath](IOrganicDataforseoLabsSerpElementItem.md#xpath)

## Properties

### about\_this\_result

• `Optional` **about\_this\_result**: [`AboutThisResultElement`](../classes/AboutThisResultElement.md)

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Defined in

[main.ts:86868](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86868)

___

### amp\_version

• `Optional` **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Defined in

[main.ts:86855](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86855)

___

### backlinks\_info

• `Optional` **backlinks\_info**: [`BacklinksInfo`](../classes/BacklinksInfo.md)

backlinks information for the target website

#### Defined in

[main.ts:86891](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86891)

___

### breadcrumb

• `Optional` **breadcrumb**: `string`

breadcrumb in SERP

#### Defined in

[main.ts:86836](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86836)

___

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Defined in

[main.ts:86848](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86848)

___

### domain

• `Optional` **domain**: `string`

subdomain in SERP

#### Defined in

[main.ts:86830](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86830)

___

### estimated\_paid\_traffic\_cost

• `Optional` **estimated\_paid\_traffic\_cost**: `number`

estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Defined in

[main.ts:86886](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86886)

___

### etv

• `Optional` **etv**: `number`

estimated traffic volume
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Defined in

[main.ts:86877](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86877)

___

### extended\_snippet

• `Optional` **extended\_snippet**: `string`

includes additional information appended after the result description in SERP

#### Defined in

[main.ts:86852](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86852)

___

### highlighted

• `Optional` **highlighted**: `string`[]

words highlighted in bold within the results description

#### Defined in

[main.ts:86860](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86860)

___

### impressions\_etv

• `Optional` **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Defined in

[main.ts:86882](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86882)

___

### is\_featured\_snippet

• `Optional` **is\_featured\_snippet**: `boolean`

indicates whether the element is a featured_snippet

#### Defined in

[main.ts:86844](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86844)

___

### is\_image

• `Optional` **is\_image**: `boolean`

indicates whether the element contains an image

#### Defined in

[main.ts:86840](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86840)

___

### is\_malicious

• `Optional` **is\_malicious**: `boolean`

indicates whether the element is marked as malicious

#### Defined in

[main.ts:86846](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86846)

___

### is\_video

• `Optional` **is\_video**: `boolean`

indicates whether the element contains a video

#### Defined in

[main.ts:86842](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86842)

___

### links

• `Optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Defined in

[main.ts:86864](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86864)

___

### main\_domain

• `Optional` **main\_domain**: `string`

primary domain name in SERP

#### Defined in

[main.ts:86870](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86870)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:86826](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86826)

___

### pre\_snippet

• `Optional` **pre\_snippet**: `string`

includes additional information appended before the result description in SERP

#### Defined in

[main.ts:86850](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86850)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:86822](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86822)

___

### rank\_changes

• `Optional` **rank\_changes**: [`RankChanges`](../classes/RankChanges.md)

changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time

#### Defined in

[main.ts:86889](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86889)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:86819](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86819)

___

### rank\_info

• `Optional` **rank\_info**: [`RankInfo`](../classes/RankInfo.md)

page and domain rank information

#### Defined in

[main.ts:86893](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86893)

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

[main.ts:86858](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86858)

___

### relative\_url

• `Optional` **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Defined in

[main.ts:86872](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86872)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:86816](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86816)

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

[main.ts:86832](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86832)

___

### url

• `Optional` **url**: `string`

relevant URL in SERP

#### Defined in

[main.ts:86834](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86834)

___

### website\_name

• `Optional` **website\_name**: `string`

relevant website name in SERP

#### Defined in

[main.ts:86838](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86838)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:86828](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86828)
