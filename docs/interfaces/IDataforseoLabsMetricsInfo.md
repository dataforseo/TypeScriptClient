[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsMetricsInfo

# Interface: IDataforseoLabsMetricsInfo

Defined in: main.ts:97531

## Indexable

\[`key`: `string`\]: `any`

## Properties

### clickstream\_age\_distribution?

> `optional` **clickstream\_age\_distribution**: `object`

Defined in: main.ts:97597

distribution of clickstream-based metrics by age
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

#### Index Signature

\[`key`: `string`\]: `number`

***

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

Defined in: main.ts:97589

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

***

### clickstream\_gender\_distribution?

> `optional` **clickstream\_gender\_distribution**: `object`

Defined in: main.ts:97593

distribution of estimated clickstream-based metrics by gender
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

#### Index Signature

\[`key`: `string`\]: `number`

***

### count?

> `optional` **count**: `number`

Defined in: main.ts:97567

total count of organic SERPs that contain the domain or subdomain

***

### estimated\_paid\_traffic\_cost?

> `optional` **estimated\_paid\_traffic\_cost**: `number`

Defined in: main.ts:97572

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost (USD) of running ads for all keywords in the category that the domain or subdomain ranks for
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

***

### etv?

> `optional` **etv**: `number`

Defined in: main.ts:97560

estimated traffic volume
estimated organic monthly traffic to the domain or subdomain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain or subdomain ranks for
learn more about how the metric is calculated in this help center article

***

### impressions\_etv?

> `optional` **impressions\_etv**: `number`

Defined in: main.ts:97565

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain or subdomain
calculated as the product of CTR (click-through-rate) and impressions values of all keywords in the category that the domain or subdomain ranks for
learn more about how the metric is calculated in this help center article

***

### is\_down?

> `optional` **is\_down**: `number`

Defined in: main.ts:97581

rank went down
indicates how many ranked elements of the indicated target went down

***

### is\_lost?

> `optional` **is\_lost**: `number`

Defined in: main.ts:97584

lost ranked elements
indicates how many ranked elements of the indicated target were previously presented in SERPs, but weren’t found during the last check

***

### is\_new?

> `optional` **is\_new**: `number`

Defined in: main.ts:97575

number of new ranked elements
indicates how many new ranked elements were found for the indicated target

***

### is\_up?

> `optional` **is\_up**: `number`

Defined in: main.ts:97578

rank went up
indicates how many ranked elements of the indicated target went up

***

### pos\_1?

> `optional` **pos\_1**: `number`

Defined in: main.ts:97533

number of organic SERPs where the domain or subdomain ranks #1

***

### pos\_11\_20?

> `optional` **pos\_11\_20**: `number`

Defined in: main.ts:97539

number of organic SERPs where the domain or subdomain ranks #11-20

***

### pos\_2\_3?

> `optional` **pos\_2\_3**: `number`

Defined in: main.ts:97535

number of organic SERPs where the domain or subdomain ranks #2-3

***

### pos\_21\_30?

> `optional` **pos\_21\_30**: `number`

Defined in: main.ts:97541

number of organic SERPs where the domain or subdomain ranks #21-30

***

### pos\_31\_40?

> `optional` **pos\_31\_40**: `number`

Defined in: main.ts:97543

number of organic SERPs where the domain or subdomain ranks #31-40

***

### pos\_4\_10?

> `optional` **pos\_4\_10**: `number`

Defined in: main.ts:97537

number of organic SERPs where the domain or subdomain ranks #4-10

***

### pos\_41\_50?

> `optional` **pos\_41\_50**: `number`

Defined in: main.ts:97545

number of organic SERPs where the domain or subdomain ranks #41-50

***

### pos\_51\_60?

> `optional` **pos\_51\_60**: `number`

Defined in: main.ts:97547

number of organic SERPs where the domain or subdomain ranks #51-60

***

### pos\_61\_70?

> `optional` **pos\_61\_70**: `number`

Defined in: main.ts:97549

number of organic SERPs where the domain or subdomain ranks #61-70

***

### pos\_71\_80?

> `optional` **pos\_71\_80**: `number`

Defined in: main.ts:97551

number of organic SERPs where the domain or subdomain ranks #71-80

***

### pos\_81\_90?

> `optional` **pos\_81\_90**: `number`

Defined in: main.ts:97553

number of organic SERPs where the domain or subdomain ranks #81-90

***

### pos\_91\_100?

> `optional` **pos\_91\_100**: `number`

Defined in: main.ts:97555

number of organic SERPs where the domain or subdomain ranks #91-100
