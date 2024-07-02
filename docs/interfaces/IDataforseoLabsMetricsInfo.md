**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsMetricsInfo

# Interface: IDataforseoLabsMetricsInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### clickstream\_age\_distribution?

> **`optional`** **clickstream\_age\_distribution**: `Object`

distribution of clickstream-based metrics by age
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:87845

***

### clickstream\_etv?

> **`optional`** **clickstream\_etv**: `number`

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

#### Source

main.ts:87837

***

### clickstream\_gender\_distribution?

> **`optional`** **clickstream\_gender\_distribution**: `Object`

distribution of estimated clickstream-based metrics by gender
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:87841

***

### count?

> **`optional`** **count**: `number`

total count of organic SERPs that contain the domain or subdomain

#### Source

main.ts:87815

***

### estimated\_paid\_traffic\_cost?

> **`optional`** **estimated\_paid\_traffic\_cost**: `number`

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost (USD) of running ads for all keywords in the category that the domain or subdomain ranks for
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

#### Source

main.ts:87820

***

### etv?

> **`optional`** **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain or subdomain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain or subdomain ranks for
learn more about how the metric is calculated in this help center article

#### Source

main.ts:87808

***

### impressions\_etv?

> **`optional`** **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain or subdomain
calculated as the product of CTR (click-through-rate) and impressions values of all keywords in the category that the domain or subdomain ranks for
learn more about how the metric is calculated in this help center article

#### Source

main.ts:87813

***

### is\_down?

> **`optional`** **is\_down**: `number`

rank went down
indicates how many ranked elements of the indicated target went down

#### Source

main.ts:87829

***

### is\_lost?

> **`optional`** **is\_lost**: `number`

lost ranked elements
indicates how many ranked elements of the indicated target were previously presented in SERPs, but weren’t found during the last check

#### Source

main.ts:87832

***

### is\_new?

> **`optional`** **is\_new**: `number`

number of new ranked elements
indicates how many new ranked elements were found for the indicated target

#### Source

main.ts:87823

***

### is\_up?

> **`optional`** **is\_up**: `number`

rank went up
indicates how many ranked elements of the indicated target went up

#### Source

main.ts:87826

***

### pos\_1?

> **`optional`** **pos\_1**: `number`

number of organic SERPs where the domain or subdomain ranks #1

#### Source

main.ts:87781

***

### pos\_11\_20?

> **`optional`** **pos\_11\_20**: `number`

number of organic SERPs where the domain or subdomain ranks #11-20

#### Source

main.ts:87787

***

### pos\_21\_30?

> **`optional`** **pos\_21\_30**: `number`

number of organic SERPs where the domain or subdomain ranks #21-30

#### Source

main.ts:87789

***

### pos\_2\_3?

> **`optional`** **pos\_2\_3**: `number`

number of organic SERPs where the domain or subdomain ranks #2-3

#### Source

main.ts:87783

***

### pos\_31\_40?

> **`optional`** **pos\_31\_40**: `number`

number of organic SERPs where the domain or subdomain ranks #31-40

#### Source

main.ts:87791

***

### pos\_41\_50?

> **`optional`** **pos\_41\_50**: `number`

number of organic SERPs where the domain or subdomain ranks #41-50

#### Source

main.ts:87793

***

### pos\_4\_10?

> **`optional`** **pos\_4\_10**: `number`

number of organic SERPs where the domain or subdomain ranks #4-10

#### Source

main.ts:87785

***

### pos\_51\_60?

> **`optional`** **pos\_51\_60**: `number`

number of organic SERPs where the domain or subdomain ranks #51-60

#### Source

main.ts:87795

***

### pos\_61\_70?

> **`optional`** **pos\_61\_70**: `number`

number of organic SERPs where the domain or subdomain ranks #61-70

#### Source

main.ts:87797

***

### pos\_71\_80?

> **`optional`** **pos\_71\_80**: `number`

number of organic SERPs where the domain or subdomain ranks #71-80

#### Source

main.ts:87799

***

### pos\_81\_90?

> **`optional`** **pos\_81\_90**: `number`

number of organic SERPs where the domain or subdomain ranks #81-90

#### Source

main.ts:87801

***

### pos\_91\_100?

> **`optional`** **pos\_91\_100**: `number`

number of organic SERPs where the domain or subdomain ranks #91-100

#### Source

main.ts:87803
