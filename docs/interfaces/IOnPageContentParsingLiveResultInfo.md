[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPageContentParsingLiveResultInfo

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

[main.ts:152864](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152864)

___


### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

[main.ts:152866](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152866)

___


### items

• `Optional` **items**: [`OnPageContentParsingItem`](../classes/OnPageContentParsingItem.md)[]

items array

#### Defined in

[main.ts:152870](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152870)

___


### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Defined in

[main.ts:152868](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152868)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")