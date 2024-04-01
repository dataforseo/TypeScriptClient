[Documentation](../README.md) / [Exports](../modules.md) / IOnPageRawHtmlResultInfo

# Interface: IOnPageRawHtmlResultInfo

## Implemented by

- [`OnPageRawHtmlResultInfo`](../classes/OnPageRawHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [crawl\_progress](IOnPageRawHtmlResultInfo.md#crawl_progress)
- [crawl\_status](IOnPageRawHtmlResultInfo.md#crawl_status)
- [items](IOnPageRawHtmlResultInfo.md#items)
- [items\_count](IOnPageRawHtmlResultInfo.md#items_count)

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

main.ts:156739

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

main.ts:156741

___

### items

• `Optional` **items**: [`OnPageRawHtmlItem`](../classes/OnPageRawHtmlItem.md)

items array

#### Defined in

main.ts:156745

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:156743
