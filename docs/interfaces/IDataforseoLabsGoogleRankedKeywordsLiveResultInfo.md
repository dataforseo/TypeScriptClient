[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleRankedKeywordsLiveResultInfo

# Interface: IDataforseoLabsGoogleRankedKeywordsLiveResultInfo

Defined in: main.ts:101717

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsLiveItem`](../classes/DataforseoLabsLiveItem.md)[]

Defined in: main.ts:101739

contains ranked keywords and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:101731

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:101727

language code in a POST array
if there is no data, then the value is null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:101724

location code in a POST array
if there is no data, then the value is null

***

### metrics?

> `optional` **metrics**: `object`

Defined in: main.ts:101734

ranking data relevant to the specified domain
ranking data is provided by the rank_group parameters that show the result’s rank considering only equivalent SERP elements

#### Index Signature

\[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](../classes/DataforseoLabsMetricsInfo.md)

***

### metrics\_absolute?

> `optional` **metrics\_absolute**: `object`

Defined in: main.ts:101737

ranking data relevant to the specified domain
ranking data is provided by the rank_absolute parameters that indicate the result’s position among all SERP elements

#### Index Signature

\[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](../classes/DataforseoLabsMetricsInfo.md)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:101719

search engine type

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:101721

target domain in a POST array

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:101729

total number of results in our database relevant to your request
