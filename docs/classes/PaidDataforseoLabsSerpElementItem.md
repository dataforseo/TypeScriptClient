**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / PaidDataforseoLabsSerpElementItem

# Class: PaidDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PaidDataforseoLabsSerpElementItem(data)

> **new PaidDataforseoLabsSerpElementItem**(`data`?): [`PaidDataforseoLabsSerpElementItem`](PaidDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md)

#### Returns

[`PaidDataforseoLabsSerpElementItem`](PaidDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:90580

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20051

***

### backlinks\_info?

> **`optional`** **backlinks\_info**: [`BacklinksInfo`](BacklinksInfo.md)

backlinks information for the target website

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`backlinks_info`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#backlinks_info)

#### Source

main.ts:90574

***

### breadcrumb?

> **`optional`** **breadcrumb**: `string`

breadcrumb in SERP

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`breadcrumb`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#breadcrumb)

#### Source

main.ts:90538

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`description`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#description)

#### Source

main.ts:90536

***

### description\_rows?

> **`optional`** **description\_rows**: `string`[]

extended description
if there is none, equals null

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`description_rows`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#description_rows)

#### Source

main.ts:90547

***

### domain?

> **`optional`** **domain**: `string`

subdomain in SERP

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`domain`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#domain)

#### Source

main.ts:90534

***

### estimated\_paid\_traffic\_cost?

> **`optional`** **estimated\_paid\_traffic\_cost**: `number`

estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`estimated_paid_traffic_cost`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#estimated_paid_traffic_cost)

#### Source

main.ts:90569

***

### etv?

> **`optional`** **etv**: `number`

estimated traffic volume
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`etv`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#etv)

#### Source

main.ts:90560

***

### extra?

> **`optional`** **extra**: `Object`

additional information about the result

#### Index signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`extra`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#extra)

#### Source

main.ts:90544

***

### highlighted?

> **`optional`** **highlighted**: `string`[]

words highlighted in bold within the results description

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`highlighted`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#highlighted)

#### Source

main.ts:90542

***

### impressions\_etv?

> **`optional`** **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`impressions_etv`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#impressions_etv)

#### Source

main.ts:90565

***

### links?

> **`optional`** **links**: [`AdLinkElement`](AdLinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`links`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#links)

#### Source

main.ts:90551

***

### main\_domain?

> **`optional`** **main\_domain**: `string`

primary domain name in SERP

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`main_domain`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#main_domain)

#### Source

main.ts:90553

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:90528

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:90524

***

### rank\_changes?

> **`optional`** **rank\_changes**: [`RankChanges`](RankChanges.md)

changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`rank_changes`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#rank_changes)

#### Source

main.ts:90572

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:90521

***

### rank\_info?

> **`optional`** **rank\_info**: [`RankInfo`](RankInfo.md)

page and domain rank information

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`rank_info`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#rank_info)

#### Source

main.ts:90576

***

### relative\_url?

> **`optional`** **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`relative_url`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#relative_url)

#### Source

main.ts:90555

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#se_type)

#### Source

main.ts:90518

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#title)

#### Source

main.ts:90532

***

### url?

> **`optional`** **url**: `string`

relevant URL in SERP

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#url)

#### Source

main.ts:90540

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:90530

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

main.ts:90585

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

main.ts:90642

***

### fromJS()

> **`static`** **fromJS**(`data`): [`PaidDataforseoLabsSerpElementItem`](PaidDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`PaidDataforseoLabsSerpElementItem`](PaidDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:90635
