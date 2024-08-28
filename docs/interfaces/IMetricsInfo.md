[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IMetricsInfo

# Interface: IMetricsInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### count?

> `optional` **count**: `number`

total count of organic SERPs that contain the domain

#### Defined in

main.ts:80989

***

### estimated\_paid\_traffic\_cost?

> `optional` **estimated\_paid\_traffic\_cost**: `number`

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost of running ads (USD) for all keywords a domain ranks for
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:80994

***

### etv?

> `optional` **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:80982

***

### impressions\_etv?

> `optional` **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:80987

***

### is\_down?

> `optional` **is\_down**: `number`

rank went down
indicates how many ranked elements of this domain went down in Google Search

#### Defined in

main.ts:81003

***

### is\_lost?

> `optional` **is\_lost**: `number`

lost ranked elements
indicates how many ranked elements of this domain were previously presented in SERPs, but weren’t found during the last check

#### Defined in

main.ts:81006

***

### is\_new?

> `optional` **is\_new**: `number`

number of new ranked elements
indicates how many new ranked elements were found for this domain

#### Defined in

main.ts:80997

***

### is\_up?

> `optional` **is\_up**: `number`

rank went up
indicates how many ranked elements of this domain went up in Google Search

#### Defined in

main.ts:81000

***

### pos\_1?

> `optional` **pos\_1**: `number`

number of organic SERPs where the domain ranks #1

#### Defined in

main.ts:80955

***

### pos\_11\_20?

> `optional` **pos\_11\_20**: `number`

number of organic SERPs where the domain ranks #11-20

#### Defined in

main.ts:80961

***

### pos\_21\_30?

> `optional` **pos\_21\_30**: `number`

number of organic SERPs where the domain ranks #21-30

#### Defined in

main.ts:80963

***

### pos\_2\_3?

> `optional` **pos\_2\_3**: `number`

number of organic SERPs where the domain ranks #2-3

#### Defined in

main.ts:80957

***

### pos\_31\_40?

> `optional` **pos\_31\_40**: `number`

number of organic SERPs where the domain ranks #31-40

#### Defined in

main.ts:80965

***

### pos\_41\_50?

> `optional` **pos\_41\_50**: `number`

number of organic SERPs where the domain ranks #41-50

#### Defined in

main.ts:80967

***

### pos\_4\_10?

> `optional` **pos\_4\_10**: `number`

number of organic SERPs where the domain ranks #4-10

#### Defined in

main.ts:80959

***

### pos\_51\_60?

> `optional` **pos\_51\_60**: `number`

number of organic SERPs where the domain ranks #51-60

#### Defined in

main.ts:80969

***

### pos\_61\_70?

> `optional` **pos\_61\_70**: `number`

number of organic SERPs where the domain ranks #61-70

#### Defined in

main.ts:80971

***

### pos\_71\_80?

> `optional` **pos\_71\_80**: `number`

number of organic SERPs where the domain ranks #71-80

#### Defined in

main.ts:80973

***

### pos\_81\_90?

> `optional` **pos\_81\_90**: `number`

number of organic SERPs where the domain ranks #81-90

#### Defined in

main.ts:80975

***

### pos\_91\_100?

> `optional` **pos\_91\_100**: `number`

number of organic SERPs where the domain ranks #91-100

#### Defined in

main.ts:80977
