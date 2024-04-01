[Documentation](../README.md) / [Exports](../modules.md) / FeaturedSnippetDataforseoLabsSerpElementItem

# Class: FeaturedSnippetDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`FeaturedSnippetDataforseoLabsSerpElementItem`**

## Implements

- [`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](FeaturedSnippetDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](FeaturedSnippetDataforseoLabsSerpElementItem.md#_discriminator)
- [backlinks\_info](FeaturedSnippetDataforseoLabsSerpElementItem.md#backlinks_info)
- [description](FeaturedSnippetDataforseoLabsSerpElementItem.md#description)
- [domain](FeaturedSnippetDataforseoLabsSerpElementItem.md#domain)
- [estimated\_paid\_traffic\_cost](FeaturedSnippetDataforseoLabsSerpElementItem.md#estimated_paid_traffic_cost)
- [etv](FeaturedSnippetDataforseoLabsSerpElementItem.md#etv)
- [featured\_title](FeaturedSnippetDataforseoLabsSerpElementItem.md#featured_title)
- [main\_domain](FeaturedSnippetDataforseoLabsSerpElementItem.md#main_domain)
- [position](FeaturedSnippetDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](FeaturedSnippetDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_changes](FeaturedSnippetDataforseoLabsSerpElementItem.md#rank_changes)
- [rank\_group](FeaturedSnippetDataforseoLabsSerpElementItem.md#rank_group)
- [rank\_info](FeaturedSnippetDataforseoLabsSerpElementItem.md#rank_info)
- [relative\_url](FeaturedSnippetDataforseoLabsSerpElementItem.md#relative_url)
- [se\_type](FeaturedSnippetDataforseoLabsSerpElementItem.md#se_type)
- [table](FeaturedSnippetDataforseoLabsSerpElementItem.md#table)
- [title](FeaturedSnippetDataforseoLabsSerpElementItem.md#title)
- [url](FeaturedSnippetDataforseoLabsSerpElementItem.md#url)
- [xpath](FeaturedSnippetDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](FeaturedSnippetDataforseoLabsSerpElementItem.md#init)
- [toJSON](FeaturedSnippetDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](FeaturedSnippetDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new FeaturedSnippetDataforseoLabsSerpElementItem**(`data?`): [`FeaturedSnippetDataforseoLabsSerpElementItem`](FeaturedSnippetDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md) |

#### Returns

[`FeaturedSnippetDataforseoLabsSerpElementItem`](FeaturedSnippetDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:95521

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20171

___

### backlinks\_info

• `Optional` **backlinks\_info**: [`BacklinksInfo`](BacklinksInfo.md)

backlinks information for the target website

#### Implementation of

[IFeaturedSnippetDataforseoLabsSerpElementItem](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[backlinks_info](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#backlinks_info)

#### Defined in

main.ts:95515

___

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[IFeaturedSnippetDataforseoLabsSerpElementItem](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[description](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#description)

#### Defined in

main.ts:95492

___

### domain

• `Optional` **domain**: `string`

subdomain in SERP

#### Implementation of

[IFeaturedSnippetDataforseoLabsSerpElementItem](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[domain](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#domain)

#### Defined in

main.ts:95486

___

### estimated\_paid\_traffic\_cost

• `Optional` **estimated\_paid\_traffic\_cost**: `number`

estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[IFeaturedSnippetDataforseoLabsSerpElementItem](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[estimated_paid_traffic_cost](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#estimated_paid_traffic_cost)

#### Defined in

main.ts:95510

___

### etv

• `Optional` **etv**: `number`

estimated traffic volume
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[IFeaturedSnippetDataforseoLabsSerpElementItem](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[etv](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#etv)

#### Defined in

main.ts:95506

___

### featured\_title

• `Optional` **featured\_title**: `string`

the title of the featured snippets source page

#### Implementation of

[IFeaturedSnippetDataforseoLabsSerpElementItem](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[featured_title](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#featured_title)

#### Defined in

main.ts:95490

___

### main\_domain

• `Optional` **main\_domain**: `string`

primary domain name in SERP

#### Implementation of

[IFeaturedSnippetDataforseoLabsSerpElementItem](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[main_domain](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#main_domain)

#### Defined in

main.ts:95499

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IFeaturedSnippetDataforseoLabsSerpElementItem](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[position](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:95482

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IFeaturedSnippetDataforseoLabsSerpElementItem](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:95478

___

### rank\_changes

• `Optional` **rank\_changes**: [`RankChanges`](RankChanges.md)

changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time

#### Implementation of

[IFeaturedSnippetDataforseoLabsSerpElementItem](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[rank_changes](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#rank_changes)

#### Defined in

main.ts:95513

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IFeaturedSnippetDataforseoLabsSerpElementItem](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:95475

___

### rank\_info

• `Optional` **rank\_info**: [`RankInfo`](RankInfo.md)

page and domain rank information

#### Implementation of

[IFeaturedSnippetDataforseoLabsSerpElementItem](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[rank_info](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#rank_info)

#### Defined in

main.ts:95517

___

### relative\_url

• `Optional` **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Implementation of

[IFeaturedSnippetDataforseoLabsSerpElementItem](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[relative_url](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#relative_url)

#### Defined in

main.ts:95501

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IFeaturedSnippetDataforseoLabsSerpElementItem](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[se_type](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#se_type)

#### Defined in

main.ts:95472

___

### table

• `Optional` **table**: `any`

results table
if there are none, equals null

#### Implementation of

[IFeaturedSnippetDataforseoLabsSerpElementItem](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[table](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#table)

#### Defined in

main.ts:95497

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IFeaturedSnippetDataforseoLabsSerpElementItem](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[title](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:95488

___

### url

• `Optional` **url**: `string`

relevant URL in SERP

#### Implementation of

[IFeaturedSnippetDataforseoLabsSerpElementItem](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[url](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#url)

#### Defined in

main.ts:95494

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IFeaturedSnippetDataforseoLabsSerpElementItem](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:95484

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

main.ts:95526

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

main.ts:95561

___

### fromJS

▸ **fromJS**(`data`): [`FeaturedSnippetDataforseoLabsSerpElementItem`](FeaturedSnippetDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`FeaturedSnippetDataforseoLabsSerpElementItem`](FeaturedSnippetDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:95554
