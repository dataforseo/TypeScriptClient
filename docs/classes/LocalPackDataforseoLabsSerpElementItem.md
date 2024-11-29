[**Documentation**](../README.md)

***

[Documentation](../README.md) / LocalPackDataforseoLabsSerpElementItem

# Class: LocalPackDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new LocalPackDataforseoLabsSerpElementItem()

> **new LocalPackDataforseoLabsSerpElementItem**(`data`?): [`LocalPackDataforseoLabsSerpElementItem`](LocalPackDataforseoLabsSerpElementItem.md)

#### Parameters

##### data?

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md)

#### Returns

[`LocalPackDataforseoLabsSerpElementItem`](LocalPackDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:107314

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21425

***

### backlinks\_info?

> `optional` **backlinks\_info**: [`BacklinksInfo`](BacklinksInfo.md)

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`backlinks_info`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#backlinks_info)

#### Defined in

main.ts:107309

***

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article https://dataforseo.com/help-center/whats-clickstream-estimated-traffic-volume-and-how-is-it-calculated

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`clickstream_etv`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#clickstream_etv)

#### Defined in

main.ts:107306

***

### description?

> `optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`description`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#description)

#### Defined in

main.ts:107267

***

### domain?

> `optional` **domain**: `string`

domain where a link points

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`domain`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#domain)

#### Defined in

main.ts:107269

***

### estimated\_paid\_traffic\_cost?

> `optional` **estimated\_paid\_traffic\_cost**: `number`

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost of running ads for the returned keyword
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`estimated_paid_traffic_cost`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#estimated_paid_traffic_cost)

#### Defined in

main.ts:107297

***

### etv?

> `optional` **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword
learn more about how the metric is calculated in this help center article

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`etv`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#etv)

#### Defined in

main.ts:107287

***

### impressions\_etv?

> `optional` **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of the returned keyword
learn more about how the metric is calculated in this help center article

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`impressions_etv`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#impressions_etv)

#### Defined in

main.ts:107292

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

indicates whether the element is an ad

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`is_paid`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#is_paid)

#### Defined in

main.ts:107275

***

### main\_domain?

> `optional` **main\_domain**: `string`

primary domain name in SERP

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`main_domain`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#main_domain)

#### Defined in

main.ts:107280

***

### phone?

> `optional` **phone**: `string`

phone number

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`phone`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#phone)

#### Defined in

main.ts:107271

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`position`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:21421

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21417

***

### rank\_changes?

> `optional` **rank\_changes**: [`RankChanges`](RankChanges.md)

changes in rankings
ranking changes of the SERP element compared to the preceding month;
Note: the changes are calculated even if the preceding month is not included in a POST request

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`rank_changes`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#rank_changes)

#### Defined in

main.ts:107301

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:21414

***

### rank\_info?

> `optional` **rank\_info**: [`RankInfo`](RankInfo.md)

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`rank_info`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#rank_info)

#### Defined in

main.ts:107310

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`rating`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#rating)

#### Defined in

main.ts:107278

***

### relative\_url?

> `optional` **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`relative_url`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#relative_url)

#### Defined in

main.ts:107282

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#se_type)

#### Defined in

main.ts:107308

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`title`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:107265

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`type`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:21411

***

### url?

> `optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`url`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#url)

#### Defined in

main.ts:107273

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:21423

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:107319

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:107353

***

### fromJS()

> `static` **fromJS**(`data`): [`LocalPackDataforseoLabsSerpElementItem`](LocalPackDataforseoLabsSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`LocalPackDataforseoLabsSerpElementItem`](LocalPackDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:107346
