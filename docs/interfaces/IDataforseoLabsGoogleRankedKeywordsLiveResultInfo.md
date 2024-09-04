[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDataforseoLabsGoogleRankedKeywordsLiveResultInfo

# Interface: IDataforseoLabsGoogleRankedKeywordsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleRankedKeywordsLiveItem`](../classes/DataforseoLabsGoogleRankedKeywordsLiveItem.md)[]

contains ranked keywords and related data

#### Defined in

main.ts:93252

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:93244

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:93240

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:93237

***

### metrics?

> `optional` **metrics**: `object`

ranking data relevant to the specified domain
ranking data is provided by the rank_group parameters that show the result’s rank considering only equivalent SERP elements

#### Index Signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](../classes/DataforseoLabsMetricsInfo.md)

#### Defined in

main.ts:93247

***

### metrics\_absolute?

> `optional` **metrics\_absolute**: `object`

ranking data relevant to the specified domain
ranking data is provided by the rank_absolute parameters that indicate the result’s position among all SERP elements

#### Index Signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](../classes/DataforseoLabsMetricsInfo.md)

#### Defined in

main.ts:93250

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:93232

***

### target?

> `optional` **target**: `string`

target domain in a POST array

#### Defined in

main.ts:93234

***

### total\_count?

> `optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Defined in

main.ts:93242
