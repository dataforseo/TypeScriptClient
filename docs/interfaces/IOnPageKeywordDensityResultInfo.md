[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IOnPageKeywordDensityResultInfo

# Interface: IOnPageKeywordDensityResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

main.ts:159692

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

main.ts:159694

***

### items?

> `optional` **items**: [`OnPageKeywordDensityItem`](../classes/OnPageKeywordDensityItem.md)[]

items array

#### Defined in

main.ts:159701

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:159699

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

total number of relevant items
total number of keywords on the specified website or web page matching the set keyword_length and filters

#### Defined in

main.ts:159697
