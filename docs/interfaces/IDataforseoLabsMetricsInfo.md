[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDataforseoLabsMetricsInfo

# Interface: IDataforseoLabsMetricsInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### clickstream\_age\_distribution?

> `optional` **clickstream\_age\_distribution**: `object`

distribution of clickstream-based metrics by age
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:89106

***

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:89098

***

### clickstream\_gender\_distribution?

> `optional` **clickstream\_gender\_distribution**: `object`

distribution of estimated clickstream-based metrics by gender
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:89102

***

### count?

> `optional` **count**: `number`

total count of organic SERPs that contain the domain or subdomain

#### Defined in

main.ts:89076

***

### estimated\_paid\_traffic\_cost?

> `optional` **estimated\_paid\_traffic\_cost**: `number`

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost (USD) of running ads for all keywords in the category that the domain or subdomain ranks for
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:89081

***

### etv?

> `optional` **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain or subdomain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain or subdomain ranks for
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:89069

***

### impressions\_etv?

> `optional` **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain or subdomain
calculated as the product of CTR (click-through-rate) and impressions values of all keywords in the category that the domain or subdomain ranks for
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:89074

***

### is\_down?

> `optional` **is\_down**: `number`

rank went down
indicates how many ranked elements of the indicated target went down

#### Defined in

main.ts:89090

***

### is\_lost?

> `optional` **is\_lost**: `number`

lost ranked elements
indicates how many ranked elements of the indicated target were previously presented in SERPs, but weren’t found during the last check

#### Defined in

main.ts:89093

***

### is\_new?

> `optional` **is\_new**: `number`

number of new ranked elements
indicates how many new ranked elements were found for the indicated target

#### Defined in

main.ts:89084

***

### is\_up?

> `optional` **is\_up**: `number`

rank went up
indicates how many ranked elements of the indicated target went up

#### Defined in

main.ts:89087

***

### pos\_1?

> `optional` **pos\_1**: `number`

number of organic SERPs where the domain or subdomain ranks #1

#### Defined in

main.ts:89042

***

### pos\_11\_20?

> `optional` **pos\_11\_20**: `number`

number of organic SERPs where the domain or subdomain ranks #11-20

#### Defined in

main.ts:89048

***

### pos\_21\_30?

> `optional` **pos\_21\_30**: `number`

number of organic SERPs where the domain or subdomain ranks #21-30

#### Defined in

main.ts:89050

***

### pos\_2\_3?

> `optional` **pos\_2\_3**: `number`

number of organic SERPs where the domain or subdomain ranks #2-3

#### Defined in

main.ts:89044

***

### pos\_31\_40?

> `optional` **pos\_31\_40**: `number`

number of organic SERPs where the domain or subdomain ranks #31-40

#### Defined in

main.ts:89052

***

### pos\_41\_50?

> `optional` **pos\_41\_50**: `number`

number of organic SERPs where the domain or subdomain ranks #41-50

#### Defined in

main.ts:89054

***

### pos\_4\_10?

> `optional` **pos\_4\_10**: `number`

number of organic SERPs where the domain or subdomain ranks #4-10

#### Defined in

main.ts:89046

***

### pos\_51\_60?

> `optional` **pos\_51\_60**: `number`

number of organic SERPs where the domain or subdomain ranks #51-60

#### Defined in

main.ts:89056

***

### pos\_61\_70?

> `optional` **pos\_61\_70**: `number`

number of organic SERPs where the domain or subdomain ranks #61-70

#### Defined in

main.ts:89058

***

### pos\_71\_80?

> `optional` **pos\_71\_80**: `number`

number of organic SERPs where the domain or subdomain ranks #71-80

#### Defined in

main.ts:89060

***

### pos\_81\_90?

> `optional` **pos\_81\_90**: `number`

number of organic SERPs where the domain or subdomain ranks #81-90

#### Defined in

main.ts:89062

***

### pos\_91\_100?

> `optional` **pos\_91\_100**: `number`

number of organic SERPs where the domain or subdomain ranks #91-100

#### Defined in

main.ts:89064
