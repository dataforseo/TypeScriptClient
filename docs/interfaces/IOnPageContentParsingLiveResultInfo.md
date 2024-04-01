[Documentation](../README.md) / [Exports](../modules.md) / IOnPageContentParsingLiveResultInfo

# Interface: IOnPageContentParsingLiveResultInfo

## Implemented by

- [`OnPageContentParsingLiveResultInfo`](../classes/OnPageContentParsingLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [crawl\_progress](IOnPageContentParsingLiveResultInfo.md#crawl_progress)
- [crawl\_status](IOnPageContentParsingLiveResultInfo.md#crawl_status)
- [items](IOnPageContentParsingLiveResultInfo.md#items)
- [items\_count](IOnPageContentParsingLiveResultInfo.md#items_count)

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

main.ts:158291

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

main.ts:158293

___

### items

• `Optional` **items**: [`OnPageContentParsingItem`](../classes/OnPageContentParsingItem.md)[]

items array

#### Defined in

main.ts:158297

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:158295
