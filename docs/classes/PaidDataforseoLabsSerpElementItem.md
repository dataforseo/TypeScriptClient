[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / PaidDataforseoLabsSerpElementItem

# Class: PaidDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PaidDataforseoLabsSerpElementItem()

> **new PaidDataforseoLabsSerpElementItem**(`data`?): [`PaidDataforseoLabsSerpElementItem`](PaidDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md)

#### Returns

[`PaidDataforseoLabsSerpElementItem`](PaidDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:100175

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20752

***

### backlinks\_info?

> `optional` **backlinks\_info**: [`BacklinksInfo`](BacklinksInfo.md)

backlinks information for the target website

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`backlinks_info`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#backlinks_info)

#### Defined in

main.ts:100169

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

breadcrumb of the Ad element in SERP

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`breadcrumb`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#breadcrumb)

#### Defined in

main.ts:100126

***

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article https://dataforseo.com/help-center/whats-clickstream-estimated-traffic-volume-and-how-is-it-calculated

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`clickstream_etv`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#clickstream_etv)

#### Defined in

main.ts:100165

***

### description?

> `optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`description`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#description)

#### Defined in

main.ts:100124

***

### description\_rows?

> `optional` **description\_rows**: `string`[]

extended description
if there is none, equals null

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`description_rows`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#description_rows)

#### Defined in

main.ts:100135

***

### domain?

> `optional` **domain**: `string`

domain where a link points

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`domain`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#domain)

#### Defined in

main.ts:100122

***

### estimated\_paid\_traffic\_cost?

> `optional` **estimated\_paid\_traffic\_cost**: `number`

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost of running ads for the returned keyword
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`estimated_paid_traffic_cost`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#estimated_paid_traffic_cost)

#### Defined in

main.ts:100156

***

### etv?

> `optional` **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`etv`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#etv)

#### Defined in

main.ts:100146

***

### extra?

> `optional` **extra**: `object`

additional information about the result

#### Index Signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`extra`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#extra)

#### Defined in

main.ts:100132

***

### highlighted?

> `optional` **highlighted**: `string`[]

words highlighted in bold within the results description

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`highlighted`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#highlighted)

#### Defined in

main.ts:100130

***

### impressions\_etv?

> `optional` **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of the returned keyword
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`impressions_etv`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#impressions_etv)

#### Defined in

main.ts:100151

***

### links?

> `optional` **links**: [`AdLinkElement`](AdLinkElement.md)[]

link of the element

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`links`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#links)

#### Defined in

main.ts:100137

***

### main\_domain?

> `optional` **main\_domain**: `string`

primary domain name in SERP

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`main_domain`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#main_domain)

#### Defined in

main.ts:100139

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:100116

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:100112

***

### rank\_changes?

> `optional` **rank\_changes**: [`RankChanges`](RankChanges.md)

changes in rankings
ranking changes of the SERP element compared to the preceding month;
Note: the changes are calculated even if the preceding month is not included in a POST request

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`rank_changes`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#rank_changes)

#### Defined in

main.ts:100160

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:100109

***

### rank\_info?

> `optional` **rank\_info**: [`RankInfo`](RankInfo.md)

page and domain rank information

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`rank_info`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#rank_info)

#### Defined in

main.ts:100171

***

### relative\_url?

> `optional` **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`relative_url`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#relative_url)

#### Defined in

main.ts:100141

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#se_type)

#### Defined in

main.ts:100167

***

### title?

> `optional` **title**: `string`

title of the item

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:100120

***

### url?

> `optional` **url**: `string`

URL link

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#url)

#### Defined in

main.ts:100128

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:100118

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:100180

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:100238

***

### fromJS()

> `static` **fromJS**(`data`): [`PaidDataforseoLabsSerpElementItem`](PaidDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`PaidDataforseoLabsSerpElementItem`](PaidDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:100231
