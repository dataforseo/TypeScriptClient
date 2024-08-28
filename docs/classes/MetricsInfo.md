[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / MetricsInfo

# Class: MetricsInfo

## Implements

- [`IMetricsInfo`](../interfaces/IMetricsInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MetricsInfo()

> **new MetricsInfo**(`data`?): [`MetricsInfo`](MetricsInfo.md)

#### Parameters

• **data?**: [`IMetricsInfo`](../interfaces/IMetricsInfo.md)

#### Returns

[`MetricsInfo`](MetricsInfo.md)

#### Defined in

main.ts:80878

## Properties

### count?

> `optional` **count**: `number`

total count of organic SERPs that contain the domain

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`count`](../interfaces/IMetricsInfo.md#count)

#### Defined in

main.ts:80857

***

### estimated\_paid\_traffic\_cost?

> `optional` **estimated\_paid\_traffic\_cost**: `number`

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost of running ads (USD) for all keywords a domain ranks for
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`estimated_paid_traffic_cost`](../interfaces/IMetricsInfo.md#estimated_paid_traffic_cost)

#### Defined in

main.ts:80862

***

### etv?

> `optional` **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`etv`](../interfaces/IMetricsInfo.md#etv)

#### Defined in

main.ts:80850

***

### impressions\_etv?

> `optional` **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`impressions_etv`](../interfaces/IMetricsInfo.md#impressions_etv)

#### Defined in

main.ts:80855

***

### is\_down?

> `optional` **is\_down**: `number`

rank went down
indicates how many ranked elements of this domain went down in Google Search

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`is_down`](../interfaces/IMetricsInfo.md#is_down)

#### Defined in

main.ts:80871

***

### is\_lost?

> `optional` **is\_lost**: `number`

lost ranked elements
indicates how many ranked elements of this domain were previously presented in SERPs, but weren’t found during the last check

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`is_lost`](../interfaces/IMetricsInfo.md#is_lost)

#### Defined in

main.ts:80874

***

### is\_new?

> `optional` **is\_new**: `number`

number of new ranked elements
indicates how many new ranked elements were found for this domain

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`is_new`](../interfaces/IMetricsInfo.md#is_new)

#### Defined in

main.ts:80865

***

### is\_up?

> `optional` **is\_up**: `number`

rank went up
indicates how many ranked elements of this domain went up in Google Search

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`is_up`](../interfaces/IMetricsInfo.md#is_up)

#### Defined in

main.ts:80868

***

### pos\_1?

> `optional` **pos\_1**: `number`

number of organic SERPs where the domain ranks #1

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`pos_1`](../interfaces/IMetricsInfo.md#pos_1)

#### Defined in

main.ts:80823

***

### pos\_11\_20?

> `optional` **pos\_11\_20**: `number`

number of organic SERPs where the domain ranks #11-20

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`pos_11_20`](../interfaces/IMetricsInfo.md#pos_11_20)

#### Defined in

main.ts:80829

***

### pos\_21\_30?

> `optional` **pos\_21\_30**: `number`

number of organic SERPs where the domain ranks #21-30

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`pos_21_30`](../interfaces/IMetricsInfo.md#pos_21_30)

#### Defined in

main.ts:80831

***

### pos\_2\_3?

> `optional` **pos\_2\_3**: `number`

number of organic SERPs where the domain ranks #2-3

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`pos_2_3`](../interfaces/IMetricsInfo.md#pos_2_3)

#### Defined in

main.ts:80825

***

### pos\_31\_40?

> `optional` **pos\_31\_40**: `number`

number of organic SERPs where the domain ranks #31-40

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`pos_31_40`](../interfaces/IMetricsInfo.md#pos_31_40)

#### Defined in

main.ts:80833

***

### pos\_41\_50?

> `optional` **pos\_41\_50**: `number`

number of organic SERPs where the domain ranks #41-50

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`pos_41_50`](../interfaces/IMetricsInfo.md#pos_41_50)

#### Defined in

main.ts:80835

***

### pos\_4\_10?

> `optional` **pos\_4\_10**: `number`

number of organic SERPs where the domain ranks #4-10

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`pos_4_10`](../interfaces/IMetricsInfo.md#pos_4_10)

#### Defined in

main.ts:80827

***

### pos\_51\_60?

> `optional` **pos\_51\_60**: `number`

number of organic SERPs where the domain ranks #51-60

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`pos_51_60`](../interfaces/IMetricsInfo.md#pos_51_60)

#### Defined in

main.ts:80837

***

### pos\_61\_70?

> `optional` **pos\_61\_70**: `number`

number of organic SERPs where the domain ranks #61-70

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`pos_61_70`](../interfaces/IMetricsInfo.md#pos_61_70)

#### Defined in

main.ts:80839

***

### pos\_71\_80?

> `optional` **pos\_71\_80**: `number`

number of organic SERPs where the domain ranks #71-80

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`pos_71_80`](../interfaces/IMetricsInfo.md#pos_71_80)

#### Defined in

main.ts:80841

***

### pos\_81\_90?

> `optional` **pos\_81\_90**: `number`

number of organic SERPs where the domain ranks #81-90

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`pos_81_90`](../interfaces/IMetricsInfo.md#pos_81_90)

#### Defined in

main.ts:80843

***

### pos\_91\_100?

> `optional` **pos\_91\_100**: `number`

number of organic SERPs where the domain ranks #91-100

#### Implementation of

[`IMetricsInfo`](../interfaces/IMetricsInfo.md).[`pos_91_100`](../interfaces/IMetricsInfo.md#pos_91_100)

#### Defined in

main.ts:80845

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:80887

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:80923

***

### fromJS()

> `static` **fromJS**(`data`): [`MetricsInfo`](MetricsInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MetricsInfo`](MetricsInfo.md)

#### Defined in

main.ts:80916
