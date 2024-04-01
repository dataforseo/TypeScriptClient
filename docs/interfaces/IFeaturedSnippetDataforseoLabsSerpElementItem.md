[Documentation](../README.md) / [Exports](../modules.md) / IFeaturedSnippetDataforseoLabsSerpElementItem

# Interface: IFeaturedSnippetDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IFeaturedSnippetDataforseoLabsSerpElementItem`**

## Implemented by

- [`FeaturedSnippetDataforseoLabsSerpElementItem`](../classes/FeaturedSnippetDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [backlinks\_info](IFeaturedSnippetDataforseoLabsSerpElementItem.md#backlinks_info)
- [description](IFeaturedSnippetDataforseoLabsSerpElementItem.md#description)
- [domain](IFeaturedSnippetDataforseoLabsSerpElementItem.md#domain)
- [estimated\_paid\_traffic\_cost](IFeaturedSnippetDataforseoLabsSerpElementItem.md#estimated_paid_traffic_cost)
- [etv](IFeaturedSnippetDataforseoLabsSerpElementItem.md#etv)
- [featured\_title](IFeaturedSnippetDataforseoLabsSerpElementItem.md#featured_title)
- [main\_domain](IFeaturedSnippetDataforseoLabsSerpElementItem.md#main_domain)
- [position](IFeaturedSnippetDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IFeaturedSnippetDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_changes](IFeaturedSnippetDataforseoLabsSerpElementItem.md#rank_changes)
- [rank\_group](IFeaturedSnippetDataforseoLabsSerpElementItem.md#rank_group)
- [rank\_info](IFeaturedSnippetDataforseoLabsSerpElementItem.md#rank_info)
- [relative\_url](IFeaturedSnippetDataforseoLabsSerpElementItem.md#relative_url)
- [se\_type](IFeaturedSnippetDataforseoLabsSerpElementItem.md#se_type)
- [table](IFeaturedSnippetDataforseoLabsSerpElementItem.md#table)
- [title](IFeaturedSnippetDataforseoLabsSerpElementItem.md#title)
- [url](IFeaturedSnippetDataforseoLabsSerpElementItem.md#url)
- [xpath](IFeaturedSnippetDataforseoLabsSerpElementItem.md#xpath)

## Properties

### backlinks\_info

• `Optional` **backlinks\_info**: [`BacklinksInfo`](../classes/BacklinksInfo.md)

backlinks information for the target website

#### Defined in

main.ts:95635

___

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Defined in

main.ts:95612

___

### domain

• `Optional` **domain**: `string`

subdomain in SERP

#### Defined in

main.ts:95606

___

### estimated\_paid\_traffic\_cost

• `Optional` **estimated\_paid\_traffic\_cost**: `number`

estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:95630

___

### etv

• `Optional` **etv**: `number`

estimated traffic volume
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:95626

___

### featured\_title

• `Optional` **featured\_title**: `string`

the title of the featured snippets source page

#### Defined in

main.ts:95610

___

### main\_domain

• `Optional` **main\_domain**: `string`

primary domain name in SERP

#### Defined in

main.ts:95619

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:95602

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:95598

___

### rank\_changes

• `Optional` **rank\_changes**: [`RankChanges`](../classes/RankChanges.md)

changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time

#### Defined in

main.ts:95633

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:95595

___

### rank\_info

• `Optional` **rank\_info**: [`RankInfo`](../classes/RankInfo.md)

page and domain rank information

#### Defined in

main.ts:95637

___

### relative\_url

• `Optional` **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Defined in

main.ts:95621

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:95592

___

### table

• `Optional` **table**: `any`

results table
if there are none, equals null

#### Defined in

main.ts:95617

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:95608

___

### url

• `Optional` **url**: `string`

relevant URL in SERP

#### Defined in

main.ts:95614

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:95604
