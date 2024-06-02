**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo

# Interface: IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsBBulkKeywordDifficultyLiveItem`](../classes/DataforseoLabsBBulkKeywordDifficultyLiveItem.md)[]

contains keywords and related keyword difficulty scores

#### Source

main.ts:105893

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:105891

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Source

main.ts:105887

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Source

main.ts:105884

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:105881

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Source

main.ts:105889
