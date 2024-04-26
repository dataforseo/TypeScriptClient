**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IMetricsInfo

# Interface: IMetricsInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### count?

> **`optional`** **count**: `number`

total count of organic SERPs that contain the domain

#### Source

main.ts:78431

***

### estimated\_paid\_traffic\_cost?

> **`optional`** **estimated\_paid\_traffic\_cost**: `number`

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost of running ads (USD) for all keywords a domain ranks for
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

#### Source

main.ts:78436

***

### etv?

> **`optional`** **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

#### Source

main.ts:78424

***

### impressions\_etv?

> **`optional`** **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

#### Source

main.ts:78429

***

### is\_down?

> **`optional`** **is\_down**: `number`

rank went down
indicates how many ranked elements of this domain went down in Google Search

#### Source

main.ts:78445

***

### is\_lost?

> **`optional`** **is\_lost**: `number`

lost ranked elements
indicates how many ranked elements of this domain were previously presented in SERPs, but weren’t found during the last check

#### Source

main.ts:78448

***

### is\_new?

> **`optional`** **is\_new**: `number`

number of new ranked elements
indicates how many new ranked elements were found for this domain

#### Source

main.ts:78439

***

### is\_up?

> **`optional`** **is\_up**: `number`

rank went up
indicates how many ranked elements of this domain went up in Google Search

#### Source

main.ts:78442

***

### pos\_1?

> **`optional`** **pos\_1**: `number`

number of organic SERPs where the domain ranks #1

#### Source

main.ts:78397

***

### pos\_11\_20?

> **`optional`** **pos\_11\_20**: `number`

number of organic SERPs where the domain ranks #11-20

#### Source

main.ts:78403

***

### pos\_21\_30?

> **`optional`** **pos\_21\_30**: `number`

number of organic SERPs where the domain ranks #21-30

#### Source

main.ts:78405

***

### pos\_2\_3?

> **`optional`** **pos\_2\_3**: `number`

number of organic SERPs where the domain ranks #2-3

#### Source

main.ts:78399

***

### pos\_31\_40?

> **`optional`** **pos\_31\_40**: `number`

number of organic SERPs where the domain ranks #31-40

#### Source

main.ts:78407

***

### pos\_41\_50?

> **`optional`** **pos\_41\_50**: `number`

number of organic SERPs where the domain ranks #41-50

#### Source

main.ts:78409

***

### pos\_4\_10?

> **`optional`** **pos\_4\_10**: `number`

number of organic SERPs where the domain ranks #4-10

#### Source

main.ts:78401

***

### pos\_51\_60?

> **`optional`** **pos\_51\_60**: `number`

number of organic SERPs where the domain ranks #51-60

#### Source

main.ts:78411

***

### pos\_61\_70?

> **`optional`** **pos\_61\_70**: `number`

number of organic SERPs where the domain ranks #61-70

#### Source

main.ts:78413

***

### pos\_71\_80?

> **`optional`** **pos\_71\_80**: `number`

number of organic SERPs where the domain ranks #71-80

#### Source

main.ts:78415

***

### pos\_81\_90?

> **`optional`** **pos\_81\_90**: `number`

number of organic SERPs where the domain ranks #81-90

#### Source

main.ts:78417

***

### pos\_91\_100?

> **`optional`** **pos\_91\_100**: `number`

number of organic SERPs where the domain ranks #91-100

#### Source

main.ts:78419
