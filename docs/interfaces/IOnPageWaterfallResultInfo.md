[Documentation](../README.md) / [Exports](../modules.md) / IOnPageWaterfallResultInfo

# Interface: IOnPageWaterfallResultInfo

## Implemented by

- [`OnPageWaterfallResultInfo`](../classes/OnPageWaterfallResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [crawl\_progress](IOnPageWaterfallResultInfo.md#crawl_progress)
- [crawl\_status](IOnPageWaterfallResultInfo.md#crawl_status)
- [items](IOnPageWaterfallResultInfo.md#items)
- [items\_count](IOnPageWaterfallResultInfo.md#items_count)

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

main.ts:155345

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

main.ts:155347

___

### items

• `Optional` **items**: [`OnPageWaterfallItem`](../classes/OnPageWaterfallItem.md)[]

items array

#### Defined in

main.ts:155351

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:155349
