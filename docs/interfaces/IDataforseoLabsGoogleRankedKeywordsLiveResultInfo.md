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

main.ts:91541

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:91533

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Source

main.ts:91529

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Source

main.ts:91526

***

### metrics?

> **`optional`** **metrics**: `Object`

ranking data relevant to the specified domain
ranking data is provided by the rank_group parameters that show the result’s rank considering only equivalent SERP elements

#### Index signature

 \[`key`: `string`\]: [`MetricsInfo`](../classes/MetricsInfo.md)

#### Source

main.ts:91536

***

### metrics\_absolute?

> **`optional`** **metrics\_absolute**: `Object`

ranking data relevant to the specified domain
ranking data is provided by the rank_absolute parameters that indicate the result’s position among all SERP elements

#### Index signature

 \[`key`: `string`\]: [`MetricsInfo`](../classes/MetricsInfo.md)

#### Source

main.ts:91539

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:91521

***

### target?

> **`optional`** **target**: `string`

target domain in a POST array

#### Source

main.ts:91523

***

### total\_count?

> **`optional`** **total\_count**: `number`

total number of results in our database relevant to your request

#### Source

main.ts:91531
