[Documentation](../README.md) / [Exports](../modules.md) / OrganicDataforseoLabsSerpElementItem

# Class: OrganicDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`OrganicDataforseoLabsSerpElementItem`**

## Implements

- [`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OrganicDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](OrganicDataforseoLabsSerpElementItem.md#_discriminator)
- [about\_this\_result](OrganicDataforseoLabsSerpElementItem.md#about_this_result)
- [amp\_version](OrganicDataforseoLabsSerpElementItem.md#amp_version)
- [backlinks\_info](OrganicDataforseoLabsSerpElementItem.md#backlinks_info)
- [breadcrumb](OrganicDataforseoLabsSerpElementItem.md#breadcrumb)
- [description](OrganicDataforseoLabsSerpElementItem.md#description)
- [domain](OrganicDataforseoLabsSerpElementItem.md#domain)
- [estimated\_paid\_traffic\_cost](OrganicDataforseoLabsSerpElementItem.md#estimated_paid_traffic_cost)
- [etv](OrganicDataforseoLabsSerpElementItem.md#etv)
- [extended\_snippet](OrganicDataforseoLabsSerpElementItem.md#extended_snippet)
- [highlighted](OrganicDataforseoLabsSerpElementItem.md#highlighted)
- [impressions\_etv](OrganicDataforseoLabsSerpElementItem.md#impressions_etv)
- [is\_featured\_snippet](OrganicDataforseoLabsSerpElementItem.md#is_featured_snippet)
- [is\_image](OrganicDataforseoLabsSerpElementItem.md#is_image)
- [is\_malicious](OrganicDataforseoLabsSerpElementItem.md#is_malicious)
- [is\_video](OrganicDataforseoLabsSerpElementItem.md#is_video)
- [links](OrganicDataforseoLabsSerpElementItem.md#links)
- [main\_domain](OrganicDataforseoLabsSerpElementItem.md#main_domain)
- [position](OrganicDataforseoLabsSerpElementItem.md#position)
- [pre\_snippet](OrganicDataforseoLabsSerpElementItem.md#pre_snippet)
- [rank\_absolute](OrganicDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_changes](OrganicDataforseoLabsSerpElementItem.md#rank_changes)
- [rank\_group](OrganicDataforseoLabsSerpElementItem.md#rank_group)
- [rank\_info](OrganicDataforseoLabsSerpElementItem.md#rank_info)
- [rating](OrganicDataforseoLabsSerpElementItem.md#rating)
- [relative\_url](OrganicDataforseoLabsSerpElementItem.md#relative_url)
- [se\_type](OrganicDataforseoLabsSerpElementItem.md#se_type)
- [title](OrganicDataforseoLabsSerpElementItem.md#title)
- [url](OrganicDataforseoLabsSerpElementItem.md#url)
- [website\_name](OrganicDataforseoLabsSerpElementItem.md#website_name)
- [xpath](OrganicDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](OrganicDataforseoLabsSerpElementItem.md#init)
- [toJSON](OrganicDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](OrganicDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new OrganicDataforseoLabsSerpElementItem**(`data?`): [`OrganicDataforseoLabsSerpElementItem`](OrganicDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOrganicDataforseoLabsSerpElementItem`](../interfaces/IOrganicDataforseoLabsSerpElementItem.md) |

#### Returns

[`OrganicDataforseoLabsSerpElementItem`](OrganicDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:86849

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19715

___

### about\_this\_result

• `Optional` **about\_this\_result**: [`AboutThisResultElement`](AboutThisResultElement.md)

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[about_this_result](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#about_this_result)

#### Defined in

main.ts:86820

___

### amp\_version

• `Optional` **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[amp_version](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#amp_version)

#### Defined in

main.ts:86807

___

### backlinks\_info

• `Optional` **backlinks\_info**: [`BacklinksInfo`](BacklinksInfo.md)

backlinks information for the target website

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[backlinks_info](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#backlinks_info)

#### Defined in

main.ts:86843

___

### breadcrumb

• `Optional` **breadcrumb**: `string`

breadcrumb in SERP

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[breadcrumb](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#breadcrumb)

#### Defined in

main.ts:86788

___

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[description](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#description)

#### Defined in

main.ts:86800

___

### domain

• `Optional` **domain**: `string`

subdomain in SERP

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[domain](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#domain)

#### Defined in

main.ts:86782

___

### estimated\_paid\_traffic\_cost

• `Optional` **estimated\_paid\_traffic\_cost**: `number`

estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[estimated_paid_traffic_cost](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#estimated_paid_traffic_cost)

#### Defined in

main.ts:86838

___

### etv

• `Optional` **etv**: `number`

estimated traffic volume
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[etv](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#etv)

#### Defined in

main.ts:86829

___

### extended\_snippet

• `Optional` **extended\_snippet**: `string`

includes additional information appended after the result description in SERP

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[extended_snippet](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#extended_snippet)

#### Defined in

main.ts:86804

___

### highlighted

• `Optional` **highlighted**: `string`[]

words highlighted in bold within the results description

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[highlighted](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#highlighted)

#### Defined in

main.ts:86812

___

### impressions\_etv

• `Optional` **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[impressions_etv](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#impressions_etv)

#### Defined in

main.ts:86834

___

### is\_featured\_snippet

• `Optional` **is\_featured\_snippet**: `boolean`

indicates whether the element is a featured_snippet

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[is_featured_snippet](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#is_featured_snippet)

#### Defined in

main.ts:86796

___

### is\_image

• `Optional` **is\_image**: `boolean`

indicates whether the element contains an image

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[is_image](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#is_image)

#### Defined in

main.ts:86792

___

### is\_malicious

• `Optional` **is\_malicious**: `boolean`

indicates whether the element is marked as malicious

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[is_malicious](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#is_malicious)

#### Defined in

main.ts:86798

___

### is\_video

• `Optional` **is\_video**: `boolean`

indicates whether the element contains a video

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[is_video](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#is_video)

#### Defined in

main.ts:86794

___

### links

• `Optional` **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[links](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#links)

#### Defined in

main.ts:86816

___

### main\_domain

• `Optional` **main\_domain**: `string`

primary domain name in SERP

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[main_domain](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#main_domain)

#### Defined in

main.ts:86822

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[position](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:86778

___

### pre\_snippet

• `Optional` **pre\_snippet**: `string`

includes additional information appended before the result description in SERP

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[pre_snippet](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#pre_snippet)

#### Defined in

main.ts:86802

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:86774

___

### rank\_changes

• `Optional` **rank\_changes**: [`RankChanges`](RankChanges.md)

changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[rank_changes](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rank_changes)

#### Defined in

main.ts:86841

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:86771

___

### rank\_info

• `Optional` **rank\_info**: [`RankInfo`](RankInfo.md)

page and domain rank information

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[rank_info](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rank_info)

#### Defined in

main.ts:86845

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[rating](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#rating)

#### Defined in

main.ts:86810

___

### relative\_url

• `Optional` **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[relative_url](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#relative_url)

#### Defined in

main.ts:86824

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[se_type](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#se_type)

#### Defined in

main.ts:86768

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[title](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:86784

___

### url

• `Optional` **url**: `string`

relevant URL in SERP

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[url](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#url)

#### Defined in

main.ts:86786

___

### website\_name

• `Optional` **website\_name**: `string`

relevant website name in SERP

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[website_name](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#website_name)

#### Defined in

main.ts:86790

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IOrganicDataforseoLabsSerpElementItem](../interfaces/IOrganicDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IOrganicDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:86780

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[init](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:86854

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[toJSON](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:86909

___

### fromJS

▸ **fromJS**(`data`): [`OrganicDataforseoLabsSerpElementItem`](OrganicDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OrganicDataforseoLabsSerpElementItem`](OrganicDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:86902
