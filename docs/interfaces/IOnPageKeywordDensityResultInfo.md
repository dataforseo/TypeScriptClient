**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IOnPageKeywordDensityResultInfo

# Interface: IOnPageKeywordDensityResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> **`optional`** **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Source

main.ts:158815

***

### crawl\_status?

> **`optional`** **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Source

main.ts:158817

***

### items?

> **`optional`** **items**: [`OnPageKeywordDensityItem`](../classes/OnPageKeywordDensityItem.md)[]

items array

#### Source

main.ts:158824

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the results array

#### Source

main.ts:158822

***

### total\_items\_count?

> **`optional`** **total\_items\_count**: `number`

total number of relevant items
total number of keywords on the specified website or web page matching the set keyword_length and filters

#### Source

main.ts:158820
