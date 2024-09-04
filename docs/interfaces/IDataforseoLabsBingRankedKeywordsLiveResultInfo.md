[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDataforseoLabsBingRankedKeywordsLiveResultInfo

# Interface: IDataforseoLabsBingRankedKeywordsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsBingRankedKeywordsLiveItem`](../classes/DataforseoLabsBingRankedKeywordsLiveItem.md)[]

contains ranked keywords and related data

#### Defined in

main.ts:111992

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:111984

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:111980

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:111977

***

### metrics?

> `optional` **metrics**: `object`

ranking data relevant to the specified domain
ranking data is provided by the rank_group parameters that show the result’s rank considering only equivalent SERP elements

#### Index Signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](../classes/DataforseoLabsMetricsInfo.md)

#### Defined in

main.ts:111987

***

### metrics\_absolute?

> `optional` **metrics\_absolute**: `object`

ranking data relevant to the specified domain
ranking data is provided by the rank_absolute parameters that indicate the result’s position among all SERP elements

#### Index Signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](../classes/DataforseoLabsMetricsInfo.md)

#### Defined in

main.ts:111990

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:111972

***

### target?

> `optional` **target**: `string`

target domain in a POST array

#### Defined in

main.ts:111974

***

### total\_count?

> `optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Defined in

main.ts:111982
