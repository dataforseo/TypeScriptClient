[Documentation](../README.md) / [Exports](../modules.md) / IOnPageInstantPagesResultInfo

# Interface: IOnPageInstantPagesResultInfo

## Implemented by

- [`OnPageInstantPagesResultInfo`](../classes/OnPageInstantPagesResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [crawl\_gateway\_address](IOnPageInstantPagesResultInfo.md#crawl_gateway_address)
- [crawl\_progress](IOnPageInstantPagesResultInfo.md#crawl_progress)
- [crawl\_status](IOnPageInstantPagesResultInfo.md#crawl_status)
- [items](IOnPageInstantPagesResultInfo.md#items)
- [items\_count](IOnPageInstantPagesResultInfo.md#items_count)

## Properties

### crawl\_gateway\_address

• `Optional` **crawl\_gateway\_address**: `string`

crawler ip address
displays the IP address used by the crawler to initiate the current crawling session
you can find the full list of IPs used by our crawler in the Overview section

#### Defined in

main.ts:158817

___

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

main.ts:158810

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session
in this case the value will be null

#### Defined in

main.ts:158813

___

### items

• `Optional` **items**: [`BaseOnPageResourceItemInfo`](../classes/BaseOnPageResourceItemInfo.md)[]

items array

#### Defined in

main.ts:158821

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Defined in

main.ts:158819
