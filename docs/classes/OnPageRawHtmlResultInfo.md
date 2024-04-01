[Documentation](../README.md) / [Exports](../modules.md) / OnPageRawHtmlResultInfo

# Class: OnPageRawHtmlResultInfo

## Implements

- [`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageRawHtmlResultInfo.md#constructor)

### Properties

- [crawl\_progress](OnPageRawHtmlResultInfo.md#crawl_progress)
- [crawl\_status](OnPageRawHtmlResultInfo.md#crawl_status)
- [items](OnPageRawHtmlResultInfo.md#items)
- [items\_count](OnPageRawHtmlResultInfo.md#items_count)

### Methods

- [init](OnPageRawHtmlResultInfo.md#init)
- [toJSON](OnPageRawHtmlResultInfo.md#tojson)
- [fromJS](OnPageRawHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageRawHtmlResultInfo**(`data?`): [`OnPageRawHtmlResultInfo`](OnPageRawHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md) |

#### Returns

[`OnPageRawHtmlResultInfo`](OnPageRawHtmlResultInfo.md)

#### Defined in

main.ts:156693

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[IOnPageRawHtmlResultInfo](../interfaces/IOnPageRawHtmlResultInfo.md).[crawl_progress](../interfaces/IOnPageRawHtmlResultInfo.md#crawl_progress)

#### Defined in

main.ts:156683

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[IOnPageRawHtmlResultInfo](../interfaces/IOnPageRawHtmlResultInfo.md).[crawl_status](../interfaces/IOnPageRawHtmlResultInfo.md#crawl_status)

#### Defined in

main.ts:156685

___

### items

• `Optional` **items**: [`OnPageRawHtmlItem`](OnPageRawHtmlItem.md)

items array

#### Implementation of

[IOnPageRawHtmlResultInfo](../interfaces/IOnPageRawHtmlResultInfo.md).[items](../interfaces/IOnPageRawHtmlResultInfo.md#items)

#### Defined in

main.ts:156689

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IOnPageRawHtmlResultInfo](../interfaces/IOnPageRawHtmlResultInfo.md).[items_count](../interfaces/IOnPageRawHtmlResultInfo.md#items_count)

#### Defined in

main.ts:156687

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

main.ts:156702

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

main.ts:156722

___

### fromJS

▸ **fromJS**(`data`): [`OnPageRawHtmlResultInfo`](OnPageRawHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageRawHtmlResultInfo`](OnPageRawHtmlResultInfo.md)

#### Defined in

main.ts:156715
