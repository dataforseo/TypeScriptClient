**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsMetricsInfo

# Class: DataforseoLabsMetricsInfo

## Implements

- [`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsMetricsInfo(data)

> **new DataforseoLabsMetricsInfo**(`data`?): [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md)

#### Returns

[`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Source

main.ts:88371

## Properties

### clickstream\_age\_distribution?

> **`optional`** **clickstream\_age\_distribution**: `Object`

distribution of clickstream-based metrics by age
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`clickstream_age_distribution`](../interfaces/IDataforseoLabsMetricsInfo.md#clickstream_age_distribution)

#### Source

main.ts:88367

***

### clickstream\_etv?

> **`optional`** **clickstream\_etv**: `number`

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`clickstream_etv`](../interfaces/IDataforseoLabsMetricsInfo.md#clickstream_etv)

#### Source

main.ts:88359

***

### clickstream\_gender\_distribution?

> **`optional`** **clickstream\_gender\_distribution**: `Object`

distribution of estimated clickstream-based metrics by gender
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`clickstream_gender_distribution`](../interfaces/IDataforseoLabsMetricsInfo.md#clickstream_gender_distribution)

#### Source

main.ts:88363

***

### count?

> **`optional`** **count**: `number`

total count of organic SERPs that contain the domain or subdomain

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`count`](../interfaces/IDataforseoLabsMetricsInfo.md#count)

#### Source

main.ts:88337

***

### estimated\_paid\_traffic\_cost?

> **`optional`** **estimated\_paid\_traffic\_cost**: `number`

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost (USD) of running ads for all keywords in the category that the domain or subdomain ranks for
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`estimated_paid_traffic_cost`](../interfaces/IDataforseoLabsMetricsInfo.md#estimated_paid_traffic_cost)

#### Source

main.ts:88342

***

### etv?

> **`optional`** **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain or subdomain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain or subdomain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`etv`](../interfaces/IDataforseoLabsMetricsInfo.md#etv)

#### Source

main.ts:88330

***

### impressions\_etv?

> **`optional`** **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain or subdomain
calculated as the product of CTR (click-through-rate) and impressions values of all keywords in the category that the domain or subdomain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`impressions_etv`](../interfaces/IDataforseoLabsMetricsInfo.md#impressions_etv)

#### Source

main.ts:88335

***

### is\_down?

> **`optional`** **is\_down**: `number`

rank went down
indicates how many ranked elements of the indicated target went down

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`is_down`](../interfaces/IDataforseoLabsMetricsInfo.md#is_down)

#### Source

main.ts:88351

***

### is\_lost?

> **`optional`** **is\_lost**: `number`

lost ranked elements
indicates how many ranked elements of the indicated target were previously presented in SERPs, but weren’t found during the last check

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`is_lost`](../interfaces/IDataforseoLabsMetricsInfo.md#is_lost)

#### Source

main.ts:88354

***

### is\_new?

> **`optional`** **is\_new**: `number`

number of new ranked elements
indicates how many new ranked elements were found for the indicated target

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`is_new`](../interfaces/IDataforseoLabsMetricsInfo.md#is_new)

#### Source

main.ts:88345

***

### is\_up?

> **`optional`** **is\_up**: `number`

rank went up
indicates how many ranked elements of the indicated target went up

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`is_up`](../interfaces/IDataforseoLabsMetricsInfo.md#is_up)

#### Source

main.ts:88348

***

### pos\_1?

> **`optional`** **pos\_1**: `number`

number of organic SERPs where the domain or subdomain ranks #1

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_1`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_1)

#### Source

main.ts:88303

***

### pos\_11\_20?

> **`optional`** **pos\_11\_20**: `number`

number of organic SERPs where the domain or subdomain ranks #11-20

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_11_20`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_11_20)

#### Source

main.ts:88309

***

### pos\_21\_30?

> **`optional`** **pos\_21\_30**: `number`

number of organic SERPs where the domain or subdomain ranks #21-30

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_21_30`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_21_30)

#### Source

main.ts:88311

***

### pos\_2\_3?

> **`optional`** **pos\_2\_3**: `number`

number of organic SERPs where the domain or subdomain ranks #2-3

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_2_3`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_2_3)

#### Source

main.ts:88305

***

### pos\_31\_40?

> **`optional`** **pos\_31\_40**: `number`

number of organic SERPs where the domain or subdomain ranks #31-40

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_31_40`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_31_40)

#### Source

main.ts:88313

***

### pos\_41\_50?

> **`optional`** **pos\_41\_50**: `number`

number of organic SERPs where the domain or subdomain ranks #41-50

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_41_50`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_41_50)

#### Source

main.ts:88315

***

### pos\_4\_10?

> **`optional`** **pos\_4\_10**: `number`

number of organic SERPs where the domain or subdomain ranks #4-10

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_4_10`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_4_10)

#### Source

main.ts:88307

***

### pos\_51\_60?

> **`optional`** **pos\_51\_60**: `number`

number of organic SERPs where the domain or subdomain ranks #51-60

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_51_60`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_51_60)

#### Source

main.ts:88317

***

### pos\_61\_70?

> **`optional`** **pos\_61\_70**: `number`

number of organic SERPs where the domain or subdomain ranks #61-70

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_61_70`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_61_70)

#### Source

main.ts:88319

***

### pos\_71\_80?

> **`optional`** **pos\_71\_80**: `number`

number of organic SERPs where the domain or subdomain ranks #71-80

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_71_80`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_71_80)

#### Source

main.ts:88321

***

### pos\_81\_90?

> **`optional`** **pos\_81\_90**: `number`

number of organic SERPs where the domain or subdomain ranks #81-90

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_81_90`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_81_90)

#### Source

main.ts:88323

***

### pos\_91\_100?

> **`optional`** **pos\_91\_100**: `number`

number of organic SERPs where the domain or subdomain ranks #91-100

#### Implementation of

[`IDataforseoLabsMetricsInfo`](../interfaces/IDataforseoLabsMetricsInfo.md).[`pos_91_100`](../interfaces/IDataforseoLabsMetricsInfo.md#pos_91_100)

#### Source

main.ts:88325

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:88380

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:88431

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Source

main.ts:88424
