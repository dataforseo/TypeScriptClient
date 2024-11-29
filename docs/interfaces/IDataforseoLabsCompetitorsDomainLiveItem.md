[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsCompetitorsDomainLiveItem

# Interface: IDataforseoLabsCompetitorsDomainLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### avg\_position?

> `optional` **avg\_position**: `number`

average position of the domain in SERP
Note: average position is calculated for intersected keywords only;
the value for a given domain may differ when combined with different target websites

#### Defined in

main.ts:102914

***

### competitor\_metrics?

> `optional` **competitor\_metrics**: `object`

metrics for intersecting keywords
ranking and traffic data relevant to the keywords that the provided domain shares with the target domain
note: in this array ranking and traffic data is provided for the returned competitor’s domain

#### Index Signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](../classes/DataforseoLabsMetricsInfo.md)

#### Defined in

main.ts:102931

***

### domain?

> `optional` **domain**: `string`

domain name

#### Defined in

main.ts:102910

***

### full\_domain\_metrics?

> `optional` **full\_domain\_metrics**: `object`

metrics for all keywords of the domain
full overview of ranking and traffic data relevant to all keywords that the provided domain is ranking for

#### Index Signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](../classes/DataforseoLabsMetricsInfo.md)

#### Defined in

main.ts:102923

***

### intersections?

> `optional` **intersections**: `number`

number of intersecting keywords

#### Defined in

main.ts:102920

***

### metrics?

> `optional` **metrics**: `object`

metrics for intersecting keywords
ranking and traffic data relevant to the keywords that the provided domain shares with the target domain
note: in this array ranking and traffic data is provided for the target considering the keywords target shares in search with the competitor’s domain

#### Index Signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](../classes/DataforseoLabsMetricsInfo.md)

#### Defined in

main.ts:102927

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:102908

***

### sum\_position?

> `optional` **sum\_position**: `number`

sum of all domain positions in SERP
Note: average position is calculated for intersected keywords only;
the value for a given domain may differ when combined with different target websites

#### Defined in

main.ts:102918
