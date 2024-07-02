**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsCompetitorsDomainLiveItem

# Interface: IDataforseoLabsCompetitorsDomainLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### avg\_position?

> **`optional`** **avg\_position**: `number`

average position of the domain in SERP
Note: average position is calculated for intersected keywords only;
the value for a given domain may differ when combined with different target websites

#### Source

main.ts:93170

***

### competitor\_metrics?

> **`optional`** **competitor\_metrics**: `Object`

metrics for intersecting keywords
ranking and traffic data relevant to the keywords that the provided domain shares with the target domain
note: in this array ranking and traffic data is provided for the returned competitor’s domain

#### Index signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](../classes/DataforseoLabsMetricsInfo.md)

#### Source

main.ts:93187

***

### domain?

> **`optional`** **domain**: `string`

domain name

#### Source

main.ts:93166

***

### full\_domain\_metrics?

> **`optional`** **full\_domain\_metrics**: `Object`

metrics for all keywords of the domain
full overview of ranking and traffic data relevant to all keywords that the provided domain is ranking for

#### Index signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](../classes/DataforseoLabsMetricsInfo.md)

#### Source

main.ts:93179

***

### intersections?

> **`optional`** **intersections**: `number`

number of intersecting keywords

#### Source

main.ts:93176

***

### metrics?

> **`optional`** **metrics**: `Object`

metrics for intersecting keywords
ranking and traffic data relevant to the keywords that the provided domain shares with the target domain
note: in this array ranking and traffic data is provided for the target considering the keywords target shares in search with the competitor’s domain

#### Index signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](../classes/DataforseoLabsMetricsInfo.md)

#### Source

main.ts:93183

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:93164

***

### sum\_position?

> **`optional`** **sum\_position**: `number`

sum of all domain positions in SERP
Note: average position is calculated for intersected keywords only;
the value for a given domain may differ when combined with different target websites

#### Source

main.ts:93174
