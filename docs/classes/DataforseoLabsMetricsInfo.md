[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsMetricsInfo

# Class: DataforseoLabsMetricsInfo

## Implements

- [`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsMetricsInfo()

> **new DataforseoLabsMetricsInfo**(`data`?): [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md)

#### Returns

[`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Defined in

main.ts:87640

## Properties

### clickstream\_age\_distribution?

> `optional` **clickstream\_age\_distribution**: `object`

distribution of clickstream-based metrics by age
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`clickstream_age_distribution`](../interfaces/IDataforseoLabsMetricsInfo.md#clickstream_age_distribution)

#### Defined in

main.ts:87636

***

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`clickstream_etv`](../interfaces/IDataforseoLabsMetricsInfo.md#clickstream_etv)

#### Defined in

main.ts:87628

***

### clickstream\_gender\_distribution?

> `optional` **clickstream\_gender\_distribution**: `object`

distribution of estimated clickstream-based metrics by gender
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`clickstream_gender_distribution`](../interfaces/IDataforseoLabsMetricsInfo.md#clickstream_gender_distribution)

#### Defined in

main.ts:87632

***

### count?

> `optional` **count**: `number`

total count of organic SERPs that contain the domain or subdomain

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`count`](../interfaces/IDataforseoLabsMetricsInfo.md#count)

#### Defined in

main.ts:87606

***

### estimated\_paid\_traffic\_cost?

> `optional` **estimated\_paid\_traffic\_cost**: `number`

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost (USD) of running ads for all keywords in the category that the domain or subdomain ranks for
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`estimated_paid_traffic_cost`](../interfaces/IDataforseoLabsMetricsInfo.md#estimated_paid_traffic_cost)

#### Defined in

main.ts:87611

***

### etv?

> `optional` **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain or subdomain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain or subdomain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`etv`](../interfaces/IDataforseoLabsMetricsInfo.md#etv)

#### Defined in

main.ts:87599

***

### impressions\_etv?

> `optional` **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain or subdomain
calculated as the product of CTR (click-through-rate) and impressions values of all keywords in the category that the domain or subdomain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`impressions_etv`](../interfaces/IDataforseoLabsMetricsInfo.md#impressions_etv)

#### Defined in

main.ts:87604

***

### is\_down?

> `optional` **is\_down**: `number`

rank went down
indicates how many ranked elements of the indicated target went down

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`is_down`](../interfaces/IDataforseoLabsMetricsInfo.md#is_down)

#### Defined in

main.ts:87620

***

### is\_lost?

> `optional` **is\_lost**: `number`

lost ranked elements
indicates how many ranked elements of the indicated target were previously presented in SERPs, but weren’t found during the last check

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`is_lost`](../interfaces/IDataforseoLabsMetricsInfo.md#is_lost)

#### Defined in

main.ts:87623

***

### is\_new?

> `optional` **is\_new**: `number`

number of new ranked elements
indicates how many new ranked elements were found for the indicated target

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`is_new`](../interfaces/IDataforseoLabsMetricsInfo.md#is_new)

#### Defined in

main.ts:87614

***

### is\_up?

> `optional` **is\_up**: `number`

rank went up
indicates how many ranked elements of the indicated target went up

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`is_up`](../interfaces/IDataforseoLabsMetricsInfo.md#is_up)

#### Defined in

main.ts:87617

***

### pos\_1?

> `optional` **pos\_1**: `number`

number of organic SERPs where the domain or subdomain ranks #1

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_1`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_1)

#### Defined in

main.ts:87572

***

### pos\_11\_20?

> `optional` **pos\_11\_20**: `number`

number of organic SERPs where the domain or subdomain ranks #11-20

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_11_20`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_11_20)

#### Defined in

main.ts:87578

***

### pos\_21\_30?

> `optional` **pos\_21\_30**: `number`

number of organic SERPs where the domain or subdomain ranks #21-30

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_21_30`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_21_30)

#### Defined in

main.ts:87580

***

### pos\_2\_3?

> `optional` **pos\_2\_3**: `number`

number of organic SERPs where the domain or subdomain ranks #2-3

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_2_3`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_2_3)

#### Defined in

main.ts:87574

***

### pos\_31\_40?

> `optional` **pos\_31\_40**: `number`

number of organic SERPs where the domain or subdomain ranks #31-40

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_31_40`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_31_40)

#### Defined in

main.ts:87582

***

### pos\_41\_50?

> `optional` **pos\_41\_50**: `number`

number of organic SERPs where the domain or subdomain ranks #41-50

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_41_50`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_41_50)

#### Defined in

main.ts:87584

***

### pos\_4\_10?

> `optional` **pos\_4\_10**: `number`

number of organic SERPs where the domain or subdomain ranks #4-10

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_4_10`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_4_10)

#### Defined in

main.ts:87576

***

### pos\_51\_60?

> `optional` **pos\_51\_60**: `number`

number of organic SERPs where the domain or subdomain ranks #51-60

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_51_60`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_51_60)

#### Defined in

main.ts:87586

***

### pos\_61\_70?

> `optional` **pos\_61\_70**: `number`

number of organic SERPs where the domain or subdomain ranks #61-70

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_61_70`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_61_70)

#### Defined in

main.ts:87588

***

### pos\_71\_80?

> `optional` **pos\_71\_80**: `number`

number of organic SERPs where the domain or subdomain ranks #71-80

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_71_80`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_71_80)

#### Defined in

main.ts:87590

***

### pos\_81\_90?

> `optional` **pos\_81\_90**: `number`

number of organic SERPs where the domain or subdomain ranks #81-90

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_81_90`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_81_90)

#### Defined in

main.ts:87592

***

### pos\_91\_100?

> `optional` **pos\_91\_100**: `number`

number of organic SERPs where the domain or subdomain ranks #91-100

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_91_100`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_91_100)

#### Defined in

main.ts:87594

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:87649

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:87700

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Defined in

main.ts:87693
