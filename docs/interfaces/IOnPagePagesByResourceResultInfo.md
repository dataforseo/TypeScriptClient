**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IOnPagePagesByResourceResultInfo

# Interface: IOnPagePagesByResourceResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### crawl\_progress?

> **`optional`** **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Source

main.ts:157147

***

### crawl\_status?

> **`optional`** **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Source

main.ts:157149

***

### items?

> **`optional`** **items**: [`BaseOnPageResourceItemInfo`](../classes/BaseOnPageResourceItemInfo.md)[]

items array

#### Source

main.ts:157155

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the results array

#### Source

main.ts:157153

***

### total\_items\_count?

> **`optional`** **total\_items\_count**: `number`

total number of relevant items in the database

#### Source

main.ts:157151
