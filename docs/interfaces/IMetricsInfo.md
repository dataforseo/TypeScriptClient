[Documentation](../README.md) / [Exports](../modules.md) / IMetricsInfo

# Interface: IMetricsInfo

## Implemented by

- [`MetricsInfo`](../classes/MetricsInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [count](IMetricsInfo.md#count)
- [estimated\_paid\_traffic\_cost](IMetricsInfo.md#estimated_paid_traffic_cost)
- [etv](IMetricsInfo.md#etv)
- [impressions\_etv](IMetricsInfo.md#impressions_etv)
- [is\_down](IMetricsInfo.md#is_down)
- [is\_lost](IMetricsInfo.md#is_lost)
- [is\_new](IMetricsInfo.md#is_new)
- [is\_up](IMetricsInfo.md#is_up)
- [pos\_1](IMetricsInfo.md#pos_1)
- [pos\_11\_20](IMetricsInfo.md#pos_11_20)
- [pos\_21\_30](IMetricsInfo.md#pos_21_30)
- [pos\_2\_3](IMetricsInfo.md#pos_2_3)
- [pos\_31\_40](IMetricsInfo.md#pos_31_40)
- [pos\_41\_50](IMetricsInfo.md#pos_41_50)
- [pos\_4\_10](IMetricsInfo.md#pos_4_10)
- [pos\_51\_60](IMetricsInfo.md#pos_51_60)
- [pos\_61\_70](IMetricsInfo.md#pos_61_70)
- [pos\_71\_80](IMetricsInfo.md#pos_71_80)
- [pos\_81\_90](IMetricsInfo.md#pos_81_90)
- [pos\_91\_100](IMetricsInfo.md#pos_91_100)

## Properties

### count

• `Optional` **count**: `number`

total count of organic SERPs that contain the domain

#### Defined in

main.ts:78283

___

### estimated\_paid\_traffic\_cost

• `Optional` **estimated\_paid\_traffic\_cost**: `number`

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost of running ads (USD) for all keywords a domain ranks for
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:78288

___

### etv

• `Optional` **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:78276

___

### impressions\_etv

• `Optional` **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:78281

___

### is\_down

• `Optional` **is\_down**: `number`

rank went down
indicates how many ranked elements of this domain went down in Google Search

#### Defined in

main.ts:78297

___

### is\_lost

• `Optional` **is\_lost**: `number`

lost ranked elements
indicates how many ranked elements of this domain were previously presented in SERPs, but weren’t found during the last check

#### Defined in

main.ts:78300

___

### is\_new

• `Optional` **is\_new**: `number`

number of new ranked elements
indicates how many new ranked elements were found for this domain

#### Defined in

main.ts:78291

___

### is\_up

• `Optional` **is\_up**: `number`

rank went up
indicates how many ranked elements of this domain went up in Google Search

#### Defined in

main.ts:78294

___

### pos\_1

• `Optional` **pos\_1**: `number`

number of organic SERPs where the domain ranks #1

#### Defined in

main.ts:78249

___

### pos\_11\_20

• `Optional` **pos\_11\_20**: `number`

number of organic SERPs where the domain ranks #11-20

#### Defined in

main.ts:78255

___

### pos\_21\_30

• `Optional` **pos\_21\_30**: `number`

number of organic SERPs where the domain ranks #21-30

#### Defined in

main.ts:78257

___

### pos\_2\_3

• `Optional` **pos\_2\_3**: `number`

number of organic SERPs where the domain ranks #2-3

#### Defined in

main.ts:78251

___

### pos\_31\_40

• `Optional` **pos\_31\_40**: `number`

number of organic SERPs where the domain ranks #31-40

#### Defined in

main.ts:78259

___

### pos\_41\_50

• `Optional` **pos\_41\_50**: `number`

number of organic SERPs where the domain ranks #41-50

#### Defined in

main.ts:78261

___

### pos\_4\_10

• `Optional` **pos\_4\_10**: `number`

number of organic SERPs where the domain ranks #4-10

#### Defined in

main.ts:78253

___

### pos\_51\_60

• `Optional` **pos\_51\_60**: `number`

number of organic SERPs where the domain ranks #51-60

#### Defined in

main.ts:78263

___

### pos\_61\_70

• `Optional` **pos\_61\_70**: `number`

number of organic SERPs where the domain ranks #61-70

#### Defined in

main.ts:78265

___

### pos\_71\_80

• `Optional` **pos\_71\_80**: `number`

number of organic SERPs where the domain ranks #71-80

#### Defined in

main.ts:78267

___

### pos\_81\_90

• `Optional` **pos\_81\_90**: `number`

number of organic SERPs where the domain ranks #81-90

#### Defined in

main.ts:78269

___

### pos\_91\_100

• `Optional` **pos\_91\_100**: `number`

number of organic SERPs where the domain ranks #91-100

#### Defined in

main.ts:78271
