[**Documentation**](../README.md)

***

[Documentation](../README.md) / PaidDataforseoLabsSerpElementItem

# Class: PaidDataforseoLabsSerpElementItem

Defined in: main.ts:107943

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new PaidDataforseoLabsSerpElementItem()

> **new PaidDataforseoLabsSerpElementItem**(`data`?): [`PaidDataforseoLabsSerpElementItem`](PaidDataforseoLabsSerpElementItem.md)

Defined in: main.ts:108001

#### Parameters

##### data?

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md)

#### Returns

[`PaidDataforseoLabsSerpElementItem`](PaidDataforseoLabsSerpElementItem.md)

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

Defined in: main.ts:107995

backlinks information for the target website

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`backlinks_info`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#backlinks_info)

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

Defined in: main.ts:107951

breadcrumb of the Ad element in SERP

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`breadcrumb`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#breadcrumb)

***

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

Defined in: main.ts:107991

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article https://dataforseo.com/help-center/whats-clickstream-estimated-traffic-volume-and-how-is-it-calculated

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`clickstream_etv`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#clickstream_etv)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:107949

description of the results element in SERP

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`description`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#description)

***

### description\_rows?

> `optional` **description\_rows**: `string`[]

Defined in: main.ts:107960

extended description
if there is none, equals null

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`description_rows`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#description_rows)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:107947

domain where a link points

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`domain`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#domain)

***

### estimated\_paid\_traffic\_cost?

> `optional` **estimated\_paid\_traffic\_cost**: `number`

Defined in: main.ts:107982

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost of running ads for the returned keyword
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`estimated_paid_traffic_cost`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#estimated_paid_traffic_cost)

***

### etv?

> `optional` **etv**: `number`

Defined in: main.ts:107972

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`etv`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#etv)

***

### extra?

> `optional` **extra**: `object`

Defined in: main.ts:107957

additional information about the result

#### Index Signature

\[`key`: `string`\]: `string`

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`extra`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#extra)

***

### highlighted?

> `optional` **highlighted**: `string`[]

Defined in: main.ts:107955

words highlighted in bold within the results description

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`highlighted`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#highlighted)

***

### impressions\_etv?

> `optional` **impressions\_etv**: `number`

Defined in: main.ts:107977

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of the returned keyword
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`impressions_etv`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#impressions_etv)

***

### links?

> `optional` **links**: [`AdLinkElement`](AdLinkElement.md)[]

Defined in: main.ts:107963

links featured in the math_solver element
if there are none, equals null

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`links`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#links)

***

### main\_domain?

> `optional` **main\_domain**: `string`

Defined in: main.ts:107965

primary domain name in SERP

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`main_domain`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#main_domain)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21421

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21417

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_changes?

> `optional` **rank\_changes**: [`RankChanges`](RankChanges.md)

Defined in: main.ts:107986

changes in rankings
ranking changes of the SERP element compared to the preceding month;
Note: the changes are calculated even if the preceding month is not included in a POST request

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`rank_changes`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#rank_changes)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21414

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### rank\_info?

> `optional` **rank\_info**: [`RankInfo`](RankInfo.md)

Defined in: main.ts:107997

page and domain rank information

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`rank_info`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#rank_info)

***

### relative\_url?

> `optional` **relative\_url**: `string`

Defined in: main.ts:107967

URL in SERP that does not specify the HTTPs protocol and domain name

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`relative_url`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#relative_url)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:107993

search engine type

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#se_type)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:107945

title of the result in SERP

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21411

type of element

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:107953

relevant URL of the Ad element in SERP

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21423

the XPath of the element

#### Implementation of

[`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IPaidDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:108006

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

Defined in: main.ts:108060

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`PaidDataforseoLabsSerpElementItem`](PaidDataforseoLabsSerpElementItem.md)

Defined in: main.ts:108053

#### Parameters

##### data

`any`

#### Returns

[`PaidDataforseoLabsSerpElementItem`](PaidDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
