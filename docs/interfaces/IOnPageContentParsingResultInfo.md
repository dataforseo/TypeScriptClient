[Documentation](../README.md) / [Exports](../modules.md) / IOnPageContentParsingResultInfo

# Interface: IOnPageContentParsingResultInfo

## Implemented by

- [`OnPageContentParsingResultInfo`](../classes/OnPageContentParsingResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [crawl\_progress](IOnPageContentParsingResultInfo.md#crawl_progress)
- [crawl\_status](IOnPageContentParsingResultInfo.md#crawl_status)
- [items](IOnPageContentParsingResultInfo.md#items)
- [items\_count](IOnPageContentParsingResultInfo.md#items_count)

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

main.ts:157847

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

main.ts:157849

___

### items

• `Optional` **items**: [`OnPageContentParsingItem`](../classes/OnPageContentParsingItem.md)[]

items array

#### Defined in

main.ts:157853

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:157851
