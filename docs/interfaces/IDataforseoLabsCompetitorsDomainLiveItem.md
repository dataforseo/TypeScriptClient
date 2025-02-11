[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsCompetitorsDomainLiveItem

# Interface: IDataforseoLabsCompetitorsDomainLiveItem

Defined in: main.ts:103014

## Indexable

\[`key`: `string`\]: `any`

## Properties

### avg\_position?

> `optional` **avg\_position**: `number`

Defined in: main.ts:103022

average position of the domain in SERP
Note: average position is calculated for intersected keywords only;
the value for a given domain may differ when combined with different target websites

***

### competitor\_metrics?

> `optional` **competitor\_metrics**: `object`

Defined in: main.ts:103039

metrics for intersecting keywords
ranking and traffic data relevant to the keywords that the provided domain shares with the target domain
note: in this array ranking and traffic data is provided for the returned competitor’s domain

#### Index Signature

\[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](../classes/DataforseoLabsMetricsInfo.md)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:103018

domain name

***

### full\_domain\_metrics?

> `optional` **full\_domain\_metrics**: `object`

Defined in: main.ts:103031

metrics for all keywords of the domain
full overview of ranking and traffic data relevant to all keywords that the provided domain is ranking for

#### Index Signature

\[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](../classes/DataforseoLabsMetricsInfo.md)

***

### intersections?

> `optional` **intersections**: `number`

Defined in: main.ts:103028

number of intersecting keywords

***

### metrics?

> `optional` **metrics**: `object`

Defined in: main.ts:103035

metrics for intersecting keywords
ranking and traffic data relevant to the keywords that the provided domain shares with the target domain
note: in this array ranking and traffic data is provided for the target considering the keywords target shares in search with the competitor’s domain

#### Index Signature

\[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](../classes/DataforseoLabsMetricsInfo.md)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:103016

search engine type

***

### sum\_position?

> `optional` **sum\_position**: `number`

Defined in: main.ts:103026

sum of all domain positions in SERP
Note: average position is calculated for intersected keywords only;
the value for a given domain may differ when combined with different target websites
