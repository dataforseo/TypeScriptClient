[**Documentation**](../README.md)

***

[Documentation](../README.md) / MetricsInfo

# Class: MetricsInfo

Defined in: main.ts:89274

## Implements

- [`IMetricsInfo`](../interfaces/IMetricsInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MetricsInfo()

> **new MetricsInfo**(`data`?): [`MetricsInfo`](MetricsInfo.md)

Defined in: main.ts:89331

#### Parameters

##### data?

[`IMetricsInfo`](../interfaces/IMetricsInfo.md)

#### Returns

[`MetricsInfo`](MetricsInfo.md)

## Properties

### count?

> `optional` **count**: `number`

Defined in: main.ts:89310

total count of organic SERPs that contain the domain

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`count`](../interfaces/IMetricsInfo.md#count)

***

### estimated\_paid\_traffic\_cost?

> `optional` **estimated\_paid\_traffic\_cost**: `number`

Defined in: main.ts:89315

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost of running ads (USD) for all keywords a domain ranks for
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`estimated_paid_traffic_cost`](../interfaces/IMetricsInfo.md#estimated_paid_traffic_cost)

***

### etv?

> `optional` **etv**: `number`

Defined in: main.ts:89303

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`etv`](../interfaces/IMetricsInfo.md#etv)

***

### impressions\_etv?

> `optional` **impressions\_etv**: `number`

Defined in: main.ts:89308

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`impressions_etv`](../interfaces/IMetricsInfo.md#impressions_etv)

***

### is\_down?

> `optional` **is\_down**: `number`

Defined in: main.ts:89324

rank went down
indicates how many ranked elements of this domain went down in Google Search

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`is_down`](../interfaces/IMetricsInfo.md#is_down)

***

### is\_lost?

> `optional` **is\_lost**: `number`

Defined in: main.ts:89327

lost ranked elements
indicates how many ranked elements of this domain were previously presented in SERPs, but weren’t found during the last check

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`is_lost`](../interfaces/IMetricsInfo.md#is_lost)

***

### is\_new?

> `optional` **is\_new**: `number`

Defined in: main.ts:89318

number of new ranked elements
indicates how many new ranked elements were found for this domain

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`is_new`](../interfaces/IMetricsInfo.md#is_new)

***

### is\_up?

> `optional` **is\_up**: `number`

Defined in: main.ts:89321

rank went up
indicates how many ranked elements of this domain went up in Google Search

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`is_up`](../interfaces/IMetricsInfo.md#is_up)

***

### pos\_1?

> `optional` **pos\_1**: `number`

Defined in: main.ts:89276

number of organic SERPs where the domain ranks #1

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`pos_1`](../interfaces/IMetricsInfo.md#pos_1)

***

### pos\_11\_20?

> `optional` **pos\_11\_20**: `number`

Defined in: main.ts:89282

number of organic SERPs where the domain ranks #11-20

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`pos_11_20`](../interfaces/IMetricsInfo.md#pos_11_20)

***

### pos\_2\_3?

> `optional` **pos\_2\_3**: `number`

Defined in: main.ts:89278

number of organic SERPs where the domain ranks #2-3

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`pos_2_3`](../interfaces/IMetricsInfo.md#pos_2_3)

***

### pos\_21\_30?

> `optional` **pos\_21\_30**: `number`

Defined in: main.ts:89284

number of organic SERPs where the domain ranks #21-30

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`pos_21_30`](../interfaces/IMetricsInfo.md#pos_21_30)

***

### pos\_31\_40?

> `optional` **pos\_31\_40**: `number`

Defined in: main.ts:89286

number of organic SERPs where the domain ranks #31-40

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`pos_31_40`](../interfaces/IMetricsInfo.md#pos_31_40)

***

### pos\_4\_10?

> `optional` **pos\_4\_10**: `number`

Defined in: main.ts:89280

number of organic SERPs where the domain ranks #4-10

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`pos_4_10`](../interfaces/IMetricsInfo.md#pos_4_10)

***

### pos\_41\_50?

> `optional` **pos\_41\_50**: `number`

Defined in: main.ts:89288

number of organic SERPs where the domain ranks #41-50

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`pos_41_50`](../interfaces/IMetricsInfo.md#pos_41_50)

***

### pos\_51\_60?

> `optional` **pos\_51\_60**: `number`

Defined in: main.ts:89290

number of organic SERPs where the domain ranks #51-60

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`pos_51_60`](../interfaces/IMetricsInfo.md#pos_51_60)

***

### pos\_61\_70?

> `optional` **pos\_61\_70**: `number`

Defined in: main.ts:89292

number of organic SERPs where the domain ranks #61-70

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`pos_61_70`](../interfaces/IMetricsInfo.md#pos_61_70)

***

### pos\_71\_80?

> `optional` **pos\_71\_80**: `number`

Defined in: main.ts:89294

number of organic SERPs where the domain ranks #71-80

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`pos_71_80`](../interfaces/IMetricsInfo.md#pos_71_80)

***

### pos\_81\_90?

> `optional` **pos\_81\_90**: `number`

Defined in: main.ts:89296

number of organic SERPs where the domain ranks #81-90

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`pos_81_90`](../interfaces/IMetricsInfo.md#pos_81_90)

***

### pos\_91\_100?

> `optional` **pos\_91\_100**: `number`

Defined in: main.ts:89298

number of organic SERPs where the domain ranks #91-100

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`pos_91_100`](../interfaces/IMetricsInfo.md#pos_91_100)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:89340

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:89376

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MetricsInfo`](MetricsInfo.md)

Defined in: main.ts:89369

#### Parameters

##### data

`any`

#### Returns

[`MetricsInfo`](MetricsInfo.md)
