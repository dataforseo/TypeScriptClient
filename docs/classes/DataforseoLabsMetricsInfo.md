[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsMetricsInfo

# Class: DataforseoLabsMetricsInfo

Defined in: main.ts:97356

## Implements

- [`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsMetricsInfo()

> **new DataforseoLabsMetricsInfo**(`data`?): [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

Defined in: main.ts:97426

#### Parameters

##### data?

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md)

#### Returns

[`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

## Properties

### clickstream\_age\_distribution?

> `optional` **clickstream\_age\_distribution**: `object`

Defined in: main.ts:97422

distribution of clickstream-based metrics by age
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`clickstream_age_distribution`](../interfaces/IDataforseoLabsMetricsInfo.md#clickstream_age_distribution)

***

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

Defined in: main.ts:97414

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`clickstream_etv`](../interfaces/IDataforseoLabsMetricsInfo.md#clickstream_etv)

***

### clickstream\_gender\_distribution?

> `optional` **clickstream\_gender\_distribution**: `object`

Defined in: main.ts:97418

distribution of estimated clickstream-based metrics by gender
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`clickstream_gender_distribution`](../interfaces/IDataforseoLabsMetricsInfo.md#clickstream_gender_distribution)

***

### count?

> `optional` **count**: `number`

Defined in: main.ts:97392

total count of organic SERPs that contain the domain or subdomain

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`count`](../interfaces/IDataforseoLabsMetricsInfo.md#count)

***

### estimated\_paid\_traffic\_cost?

> `optional` **estimated\_paid\_traffic\_cost**: `number`

Defined in: main.ts:97397

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost (USD) of running ads for all keywords in the category that the domain or subdomain ranks for
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`estimated_paid_traffic_cost`](../interfaces/IDataforseoLabsMetricsInfo.md#estimated_paid_traffic_cost)

***

### etv?

> `optional` **etv**: `number`

Defined in: main.ts:97385

estimated traffic volume
estimated organic monthly traffic to the domain or subdomain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain or subdomain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`etv`](../interfaces/IDataforseoLabsMetricsInfo.md#etv)

***

### impressions\_etv?

> `optional` **impressions\_etv**: `number`

Defined in: main.ts:97390

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain or subdomain
calculated as the product of CTR (click-through-rate) and impressions values of all keywords in the category that the domain or subdomain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`impressions_etv`](../interfaces/IDataforseoLabsMetricsInfo.md#impressions_etv)

***

### is\_down?

> `optional` **is\_down**: `number`

Defined in: main.ts:97406

rank went down
indicates how many ranked elements of the indicated target went down

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`is_down`](../interfaces/IDataforseoLabsMetricsInfo.md#is_down)

***

### is\_lost?

> `optional` **is\_lost**: `number`

Defined in: main.ts:97409

lost ranked elements
indicates how many ranked elements of the indicated target were previously presented in SERPs, but weren’t found during the last check

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`is_lost`](../interfaces/IDataforseoLabsMetricsInfo.md#is_lost)

***

### is\_new?

> `optional` **is\_new**: `number`

Defined in: main.ts:97400

number of new ranked elements
indicates how many new ranked elements were found for the indicated target

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`is_new`](../interfaces/IDataforseoLabsMetricsInfo.md#is_new)

***

### is\_up?

> `optional` **is\_up**: `number`

Defined in: main.ts:97403

rank went up
indicates how many ranked elements of the indicated target went up

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`is_up`](../interfaces/IDataforseoLabsMetricsInfo.md#is_up)

***

### pos\_1?

> `optional` **pos\_1**: `number`

Defined in: main.ts:97358

number of organic SERPs where the domain or subdomain ranks #1

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_1`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_1)

***

### pos\_11\_20?

> `optional` **pos\_11\_20**: `number`

Defined in: main.ts:97364

number of organic SERPs where the domain or subdomain ranks #11-20

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_11_20`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_11_20)

***

### pos\_2\_3?

> `optional` **pos\_2\_3**: `number`

Defined in: main.ts:97360

number of organic SERPs where the domain or subdomain ranks #2-3

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_2_3`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_2_3)

***

### pos\_21\_30?

> `optional` **pos\_21\_30**: `number`

Defined in: main.ts:97366

number of organic SERPs where the domain or subdomain ranks #21-30

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_21_30`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_21_30)

***

### pos\_31\_40?

> `optional` **pos\_31\_40**: `number`

Defined in: main.ts:97368

number of organic SERPs where the domain or subdomain ranks #31-40

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_31_40`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_31_40)

***

### pos\_4\_10?

> `optional` **pos\_4\_10**: `number`

Defined in: main.ts:97362

number of organic SERPs where the domain or subdomain ranks #4-10

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_4_10`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_4_10)

***

### pos\_41\_50?

> `optional` **pos\_41\_50**: `number`

Defined in: main.ts:97370

number of organic SERPs where the domain or subdomain ranks #41-50

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_41_50`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_41_50)

***

### pos\_51\_60?

> `optional` **pos\_51\_60**: `number`

Defined in: main.ts:97372

number of organic SERPs where the domain or subdomain ranks #51-60

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_51_60`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_51_60)

***

### pos\_61\_70?

> `optional` **pos\_61\_70**: `number`

Defined in: main.ts:97374

number of organic SERPs where the domain or subdomain ranks #61-70

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_61_70`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_61_70)

***

### pos\_71\_80?

> `optional` **pos\_71\_80**: `number`

Defined in: main.ts:97376

number of organic SERPs where the domain or subdomain ranks #71-80

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_71_80`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_71_80)

***

### pos\_81\_90?

> `optional` **pos\_81\_90**: `number`

Defined in: main.ts:97378

number of organic SERPs where the domain or subdomain ranks #81-90

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_81_90`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_81_90)

***

### pos\_91\_100?

> `optional` **pos\_91\_100**: `number`

Defined in: main.ts:97380

number of organic SERPs where the domain or subdomain ranks #91-100

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_91_100`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_91_100)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:97435

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:97486

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

Defined in: main.ts:97479

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)
