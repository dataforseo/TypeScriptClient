[Documentation](../README.md) / [Exports](../modules.md) / CrawlStatusInfo

# Class: CrawlStatusInfo

## Implements

- [`ICrawlStatusInfo`](../interfaces/ICrawlStatusInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](CrawlStatusInfo.md#constructor)

### Properties

- [max\_crawl\_pages](CrawlStatusInfo.md#max_crawl_pages)
- [pages\_crawled](CrawlStatusInfo.md#pages_crawled)
- [pages\_in\_queue](CrawlStatusInfo.md#pages_in_queue)

### Methods

- [init](CrawlStatusInfo.md#init)
- [toJSON](CrawlStatusInfo.md#tojson)
- [fromJS](CrawlStatusInfo.md#fromjs)

## Constructors

### constructor

• **new CrawlStatusInfo**(`data?`): [`CrawlStatusInfo`](CrawlStatusInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ICrawlStatusInfo`](../interfaces/ICrawlStatusInfo.md) |

#### Returns

[`CrawlStatusInfo`](CrawlStatusInfo.md)

#### Defined in

main.ts:20928

## Properties

### max\_crawl\_pages

• `Optional` **max\_crawl\_pages**: `number`

maximum number of pages to crawl
indicates the max_crawl_pages limit you specified when setting a task

#### Implementation of

[ICrawlStatusInfo](../interfaces/ICrawlStatusInfo.md).[max_crawl_pages](../interfaces/ICrawlStatusInfo.md#max_crawl_pages)

#### Defined in

main.ts:20920

___

### pages\_crawled

• `Optional` **pages\_crawled**: `number`

number of crawled pages

#### Implementation of

[ICrawlStatusInfo](../interfaces/ICrawlStatusInfo.md).[pages_crawled](../interfaces/ICrawlStatusInfo.md#pages_crawled)

#### Defined in

main.ts:20924

___

### pages\_in\_queue

• `Optional` **pages\_in\_queue**: `number`

number of pages that are currently in the crawling queue

#### Implementation of

[ICrawlStatusInfo](../interfaces/ICrawlStatusInfo.md).[pages_in_queue](../interfaces/ICrawlStatusInfo.md#pages_in_queue)

#### Defined in

main.ts:20922

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:20937

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:20956

___

### fromJS

▸ **fromJS**(`data`): [`CrawlStatusInfo`](CrawlStatusInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`CrawlStatusInfo`](CrawlStatusInfo.md)

#### Defined in

main.ts:20949
