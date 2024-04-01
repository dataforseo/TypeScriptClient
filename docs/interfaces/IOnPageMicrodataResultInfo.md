[Documentation](../README.md) / [Exports](../modules.md) / IOnPageMicrodataResultInfo

# Interface: IOnPageMicrodataResultInfo

## Implemented by

- [`OnPageMicrodataResultInfo`](../classes/OnPageMicrodataResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [crawl\_progress](IOnPageMicrodataResultInfo.md#crawl_progress)
- [crawl\_status](IOnPageMicrodataResultInfo.md#crawl_status)
- [items](IOnPageMicrodataResultInfo.md#items)
- [items\_count](IOnPageMicrodataResultInfo.md#items_count)
- [test\_summary](IOnPageMicrodataResultInfo.md#test_summary)

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

main.ts:156437

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

main.ts:156439

___

### items

• `Optional` **items**: [`OnPageMicrodataItem`](../classes/OnPageMicrodataItem.md)[]

items array

#### Defined in

main.ts:156445

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:156443

___

### test\_summary

• `Optional` **test\_summary**: [`TestSummary`](../classes/TestSummary.md)

microdata validation test results

#### Defined in

main.ts:156441
