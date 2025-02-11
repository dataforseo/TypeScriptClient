[**Documentation**](../README.md)

***

[Documentation](../README.md) / FeaturedSnippetDataforseoLabsSerpElementItem

# Class: FeaturedSnippetDataforseoLabsSerpElementItem

Defined in: main.ts:107261

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new FeaturedSnippetDataforseoLabsSerpElementItem()

> **new FeaturedSnippetDataforseoLabsSerpElementItem**(`data`?): [`FeaturedSnippetDataforseoLabsSerpElementItem`](FeaturedSnippetDataforseoLabsSerpElementItem.md)

Defined in: main.ts:107300

#### Parameters

##### data?

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md)

#### Returns

[`FeaturedSnippetDataforseoLabsSerpElementItem`](FeaturedSnippetDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21425

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### backlinks\_info?

> `optional` **backlinks\_info**: [`BacklinksInfo`](BacklinksInfo.md)

Defined in: main.ts:107294

backlinks information for the target website

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`backlinks_info`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#backlinks_info)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:107269

description of the results element in SERP

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`description`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:107263

domain where a link points

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`domain`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#domain)

***

### estimated\_paid\_traffic\_cost?

> `optional` **estimated\_paid\_traffic\_cost**: `number`

Defined in: main.ts:107289

estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`estimated_paid_traffic_cost`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#estimated_paid_traffic_cost)

***

### etv?

> `optional` **etv**: `number`

Defined in: main.ts:107285

estimated traffic volume
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`etv`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#etv)

***

### featured\_title?

> `optional` **featured\_title**: `string`

Defined in: main.ts:107267

the title of the featured snippets source page

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`featured_title`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#featured_title)

***

### main\_domain?

> `optional` **main\_domain**: `string`

Defined in: main.ts:107278

primary domain name in SERP

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`main_domain`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#main_domain)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21421

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21417

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_changes?

> `optional` **rank\_changes**: [`RankChanges`](RankChanges.md)

Defined in: main.ts:107292

changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`rank_changes`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#rank_changes)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21414

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### rank\_info?

> `optional` **rank\_info**: [`RankInfo`](RankInfo.md)

Defined in: main.ts:107296

page and domain rank information

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`rank_info`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#rank_info)

***

### relative\_url?

> `optional` **relative\_url**: `string`

Defined in: main.ts:107280

URL in SERP that does not specify the HTTPs protocol and domain name

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`relative_url`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#relative_url)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:107276

search engine type

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#se_type)

***

### table?

> `optional` **table**: [`Table`](Table.md)

Defined in: main.ts:107274

results table
if there are none, equals null

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`table`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#table)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:107265

title of the result in SERP

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21411

type of element

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:107271

relevant URL of the Ad element in SERP

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21423

the XPath of the element

#### Implementation of

[`IFeaturedSnippetDataforseoLabsSerpElementItem`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IFeaturedSnippetDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:107305

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

Defined in: main.ts:107336

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`FeaturedSnippetDataforseoLabsSerpElementItem`](FeaturedSnippetDataforseoLabsSerpElementItem.md)

Defined in: main.ts:107329

#### Parameters

##### data

`any`

#### Returns

[`FeaturedSnippetDataforseoLabsSerpElementItem`](FeaturedSnippetDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
