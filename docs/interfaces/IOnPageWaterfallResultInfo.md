[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPageWaterfallResultInfo

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

[main.ts:149918](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149918)

___


### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

[main.ts:149920](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149920)

___


### items

• `Optional` **items**: [`OnPageWaterfallItem`](../classes/OnPageWaterfallItem.md)[]

items array

#### Defined in

[main.ts:149924](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149924)

___


### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Defined in

[main.ts:149922](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149922)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")