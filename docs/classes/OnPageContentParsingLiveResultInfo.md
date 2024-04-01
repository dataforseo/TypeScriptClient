[Documentation](../README.md) / [Exports](../modules.md) / OnPageContentParsingLiveResultInfo

# Class: OnPageContentParsingLiveResultInfo

## Implements

- [`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageContentParsingLiveResultInfo.md#constructor)

### Properties

- [crawl\_progress](OnPageContentParsingLiveResultInfo.md#crawl_progress)
- [crawl\_status](OnPageContentParsingLiveResultInfo.md#crawl_status)
- [items](OnPageContentParsingLiveResultInfo.md#items)
- [items\_count](OnPageContentParsingLiveResultInfo.md#items_count)

### Methods

- [init](OnPageContentParsingLiveResultInfo.md#init)
- [toJSON](OnPageContentParsingLiveResultInfo.md#tojson)
- [fromJS](OnPageContentParsingLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageContentParsingLiveResultInfo**(`data?`): [`OnPageContentParsingLiveResultInfo`](OnPageContentParsingLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md) |

#### Returns

[`OnPageContentParsingLiveResultInfo`](OnPageContentParsingLiveResultInfo.md)

#### Defined in

main.ts:158237

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[IOnPageContentParsingLiveResultInfo](../interfaces/IOnPageContentParsingLiveResultInfo.md).[crawl_progress](../interfaces/IOnPageContentParsingLiveResultInfo.md#crawl_progress)

#### Defined in

main.ts:158227

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[IOnPageContentParsingLiveResultInfo](../interfaces/IOnPageContentParsingLiveResultInfo.md).[crawl_status](../interfaces/IOnPageContentParsingLiveResultInfo.md#crawl_status)

#### Defined in

main.ts:158229

___

### items

• `Optional` **items**: [`OnPageContentParsingItem`](OnPageContentParsingItem.md)[]

items array

#### Implementation of

[IOnPageContentParsingLiveResultInfo](../interfaces/IOnPageContentParsingLiveResultInfo.md).[items](../interfaces/IOnPageContentParsingLiveResultInfo.md#items)

#### Defined in

main.ts:158233

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IOnPageContentParsingLiveResultInfo](../interfaces/IOnPageContentParsingLiveResultInfo.md).[items_count](../interfaces/IOnPageContentParsingLiveResultInfo.md#items_count)

#### Defined in

main.ts:158231

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

main.ts:158246

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

main.ts:158270

___

### fromJS

▸ **fromJS**(`data`): [`OnPageContentParsingLiveResultInfo`](OnPageContentParsingLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageContentParsingLiveResultInfo`](OnPageContentParsingLiveResultInfo.md)

#### Defined in

main.ts:158263
