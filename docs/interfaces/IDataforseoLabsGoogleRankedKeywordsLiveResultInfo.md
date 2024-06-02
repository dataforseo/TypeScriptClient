**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleRankedKeywordsLiveResultInfo

# Interface: IDataforseoLabsGoogleRankedKeywordsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsGoogleRankedKeywordsLiveItem`](../classes/DataforseoLabsGoogleRankedKeywordsLiveItem.md)[]

contains ranked keywords and related data

#### Source

main.ts:90891

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:90883

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Source

main.ts:90879

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Source

main.ts:90876

***

### metrics?

> **`optional`** **metrics**: `Object`

ranking data relevant to the specified domain
ranking data is provided by the rank_group parameters that show the result’s rank considering only equivalent SERP elements

#### Index signature

 \[`key`: `string`\]: [`MetricsInfo`](../classes/MetricsInfo.md)

#### Source

main.ts:90886

***

### metrics\_absolute?

> **`optional`** **metrics\_absolute**: `Object`

ranking data relevant to the specified domain
ranking data is provided by the rank_absolute parameters that indicate the result’s position among all SERP elements

#### Index signature

 \[`key`: `string`\]: [`MetricsInfo`](../classes/MetricsInfo.md)

#### Source

main.ts:90889

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:90871

***

### target?

> **`optional`** **target**: `string`

target domain in a POST array

#### Source

main.ts:90873

***

### total\_count?

> **`optional`** **total\_count**: `number`

total number of results in our database relevant to your request

#### Source

main.ts:90881
