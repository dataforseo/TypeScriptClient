[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsMetricsInfo

# Interface: IDataforseoLabsMetricsInfo

Defined in: main.ts:97559

## Indexable

\[`key`: `string`\]: `any`

## Properties

### clickstream\_age\_distribution?

> `optional` **clickstream\_age\_distribution**: `object`

Defined in: main.ts:97625

distribution of clickstream-based metrics by age
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

#### Index Signature

\[`key`: `string`\]: `number`

***

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

Defined in: main.ts:97617

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

***

### clickstream\_gender\_distribution?

> `optional` **clickstream\_gender\_distribution**: `object`

Defined in: main.ts:97621

distribution of estimated clickstream-based metrics by gender
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

#### Index Signature

\[`key`: `string`\]: `number`

***

### count?

> `optional` **count**: `number`

Defined in: main.ts:97595

total count of organic SERPs that contain the domain or subdomain

***

### estimated\_paid\_traffic\_cost?

> `optional` **estimated\_paid\_traffic\_cost**: `number`

Defined in: main.ts:97600

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost (USD) of running ads for all keywords in the category that the domain or subdomain ranks for
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

***

### etv?

> `optional` **etv**: `number`

Defined in: main.ts:97588

estimated traffic volume
estimated organic monthly traffic to the domain or subdomain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain or subdomain ranks for
learn more about how the metric is calculated in this help center article

***

### impressions\_etv?

> `optional` **impressions\_etv**: `number`

Defined in: main.ts:97593

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain or subdomain
calculated as the product of CTR (click-through-rate) and impressions values of all keywords in the category that the domain or subdomain ranks for
learn more about how the metric is calculated in this help center article

***

### is\_down?

> `optional` **is\_down**: `number`

Defined in: main.ts:97609

rank went down
indicates how many ranked elements of the indicated target went down

***

### is\_lost?

> `optional` **is\_lost**: `number`

Defined in: main.ts:97612

lost ranked elements
indicates how many ranked elements of the indicated target were previously presented in SERPs, but weren’t found during the last check

***

### is\_new?

> `optional` **is\_new**: `number`

Defined in: main.ts:97603

number of new ranked elements
indicates how many new ranked elements were found for the indicated target

***

### is\_up?

> `optional` **is\_up**: `number`

Defined in: main.ts:97606

rank went up
indicates how many ranked elements of the indicated target went up

***

### pos\_1?

> `optional` **pos\_1**: `number`

Defined in: main.ts:97561

number of organic SERPs where the domain or subdomain ranks #1

***

### pos\_11\_20?

> `optional` **pos\_11\_20**: `number`

Defined in: main.ts:97567

number of organic SERPs where the domain or subdomain ranks #11-20

***

### pos\_2\_3?

> `optional` **pos\_2\_3**: `number`

Defined in: main.ts:97563

number of organic SERPs where the domain or subdomain ranks #2-3

***

### pos\_21\_30?

> `optional` **pos\_21\_30**: `number`

Defined in: main.ts:97569

number of organic SERPs where the domain or subdomain ranks #21-30

***

### pos\_31\_40?

> `optional` **pos\_31\_40**: `number`

Defined in: main.ts:97571

number of organic SERPs where the domain or subdomain ranks #31-40

***

### pos\_4\_10?

> `optional` **pos\_4\_10**: `number`

Defined in: main.ts:97565

number of organic SERPs where the domain or subdomain ranks #4-10

***

### pos\_41\_50?

> `optional` **pos\_41\_50**: `number`

Defined in: main.ts:97573

number of organic SERPs where the domain or subdomain ranks #41-50

***

### pos\_51\_60?

> `optional` **pos\_51\_60**: `number`

Defined in: main.ts:97575

number of organic SERPs where the domain or subdomain ranks #51-60

***

### pos\_61\_70?

> `optional` **pos\_61\_70**: `number`

Defined in: main.ts:97577

number of organic SERPs where the domain or subdomain ranks #61-70

***

### pos\_71\_80?

> `optional` **pos\_71\_80**: `number`

Defined in: main.ts:97579

number of organic SERPs where the domain or subdomain ranks #71-80

***

### pos\_81\_90?

> `optional` **pos\_81\_90**: `number`

Defined in: main.ts:97581

number of organic SERPs where the domain or subdomain ranks #81-90

***

### pos\_91\_100?

> `optional` **pos\_91\_100**: `number`

Defined in: main.ts:97583

number of organic SERPs where the domain or subdomain ranks #91-100
