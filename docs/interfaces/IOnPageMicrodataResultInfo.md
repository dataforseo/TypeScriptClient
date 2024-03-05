[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPageMicrodataResultInfo

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

[main.ts:151010](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151010)

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

[main.ts:151012](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151012)

___

### items

• `Optional` **items**: [`OnPageMicrodataItem`](../classes/OnPageMicrodataItem.md)[]

items array

#### Defined in

[main.ts:151018](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151018)

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Defined in

[main.ts:151016](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151016)

___

### test\_summary

• `Optional` **test\_summary**: [`TestSummary`](../classes/TestSummary.md)

microdata validation test results

#### Defined in

[main.ts:151014](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151014)
