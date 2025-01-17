[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsSerpCompetitorsLiveItem

# Interface: IDataforseoLabsSerpCompetitorsLiveItem

Defined in: main.ts:102230

## Indexable

\[`key`: `string`\]: `any`

## Properties

### avg\_position?

> `optional` **avg\_position**: `number`

Defined in: main.ts:102237

the average position of the domain for the specified keywords
the arithmetic mean of values in the keywords_positions array

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:102234

domain name of the detected SERP competitor

***

### etv?

> `optional` **etv**: `number`

Defined in: main.ts:102249

estimated traffic volume
represents the estimated monthly traffic that specified keywords are driving to the website
calculated as the sum of the products of the specified keywords’ search volume values and CTR (click-through-rate) rates at certain positions in SERP
learn more about how the metric is calculated in this help center article

***

### keywords\_count?

> `optional` **keywords\_count**: `number`

Defined in: main.ts:102251

the number of specified keywords the domain has positions for in SERPs

***

### keywords\_positions?

> `optional` **keywords\_positions**: `object`

Defined in: main.ts:102263

keyword positions
SERP positions the related domain holds in SERP for the specified keywords

#### Index Signature

\[`key`: `string`\]: `number`[]

***

### median\_position?

> `optional` **median\_position**: `number`

Defined in: main.ts:102240

the median position of the domain for the specified keywords
the median of the values in the keywords_positions array

***

### rating?

> `optional` **rating**: `number`

Defined in: main.ts:102244

the margin between the greatest possible and actual keyword positions
represents the relative visibility rate of the domain in SERP for the specified keywords
calculated as sum(100-keywords_positions)

***

### relevant\_serp\_items?

> `optional` **relevant\_serp\_items**: `number`

Defined in: main.ts:102260

the number of SERP elements relevant to the domain
represents the number of search results in SERP relevant to the domain for the specified keywords

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:102232

search engine type

***

### visibility?

> `optional` **visibility**: `number`

Defined in: main.ts:102257

SERP visibility rate
represents the website visibility rate based on the SERP positions of the specified keywords
Keywords with positions in the range from 1 to 10 are assigned the visibility index from 1 to 0.1, respectively
Keywords with positions in the range from 11 to 20 have the fixed visibility index of 0.05
keywords with positions from 20 to 100 have the visibility index equal to 0
