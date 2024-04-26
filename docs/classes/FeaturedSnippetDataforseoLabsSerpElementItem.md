**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / FeaturedSnippetDataforseoLabsSerpElementItem

# Class: FeaturedSnippetDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new FeaturedSnippetDataforseoLabsSerpElementItem(data)

> **new FeaturedSnippetDataforseoLabsSerpElementItem**(`data`?): [`FeaturedSnippetDataforseoLabsSerpElementItem`](FeaturedSnippetDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md)

#### Returns

[`FeaturedSnippetDataforseoLabsSerpElementItem`](FeaturedSnippetDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:95793

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20213

***

### backlinks\_info?

> **`optional`** **backlinks\_info**: [`BacklinksInfo`](BacklinksInfo.md)

backlinks information for the target website

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`backlinks_info`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#backlinks_info)

#### Source

main.ts:95787

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`description`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#description)

#### Source

main.ts:95764

***

### domain?

> **`optional`** **domain**: `string`

subdomain in SERP

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`domain`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#domain)

#### Source

main.ts:95758

***

### estimated\_paid\_traffic\_cost?

> **`optional`** **estimated\_paid\_traffic\_cost**: `number`

estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`estimated_paid_traffic_cost`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#estimated_paid_traffic_cost)

#### Source

main.ts:95782

***

### etv?

> **`optional`** **etv**: `number`

estimated traffic volume
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`etv`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#etv)

#### Source

main.ts:95778

***

### featured\_title?

> **`optional`** **featured\_title**: `string`

the title of the featured snippets source page

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`featured_title`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#featured_title)

#### Source

main.ts:95762

***

### main\_domain?

> **`optional`** **main\_domain**: `string`

primary domain name in SERP

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`main_domain`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#main_domain)

#### Source

main.ts:95771

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:95754

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:95750

***

### rank\_changes?

> **`optional`** **rank\_changes**: [`RankChanges`](RankChanges.md)

changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`rank_changes`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#rank_changes)

#### Source

main.ts:95785

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:95747

***

### rank\_info?

> **`optional`** **rank\_info**: [`RankInfo`](RankInfo.md)

page and domain rank information

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`rank_info`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#rank_info)

#### Source

main.ts:95789

***

### relative\_url?

> **`optional`** **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`relative_url`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#relative_url)

#### Source

main.ts:95773

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#se_type)

#### Source

main.ts:95744

***

### table?

> **`optional`** **table**: `any`

results table
if there are none, equals null

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`table`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#table)

#### Source

main.ts:95769

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#title)

#### Source

main.ts:95760

***

### url?

> **`optional`** **url**: `string`

relevant URL in SERP

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#url)

#### Source

main.ts:95766

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:95756

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

main.ts:95798

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

main.ts:95833

***

### fromJS()

> **`static`** **fromJS**(`data`): [`FeaturedSnippetDataforseoLabsSerpElementItem`](FeaturedSnippetDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`FeaturedSnippetDataforseoLabsSerpElementItem`](FeaturedSnippetDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:95826
