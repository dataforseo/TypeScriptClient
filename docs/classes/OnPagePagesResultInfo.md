[Documentation](../README.md) / [Exports](../modules.md) / OnPagePagesResultInfo

# Class: OnPagePagesResultInfo

## Implements

- [`IOnPagePagesResultInfo`](../interfaces/IOnPagePagesResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPagePagesResultInfo.md#constructor)

### Properties

- [crawl\_progress](OnPagePagesResultInfo.md#crawl_progress)
- [crawl\_status](OnPagePagesResultInfo.md#crawl_status)
- [items](OnPagePagesResultInfo.md#items)
- [items\_count](OnPagePagesResultInfo.md#items_count)
- [total\_items\_count](OnPagePagesResultInfo.md#total_items_count)

### Methods

- [init](OnPagePagesResultInfo.md#init)
- [toJSON](OnPagePagesResultInfo.md#tojson)
- [fromJS](OnPagePagesResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPagePagesResultInfo**(`data?`): [`OnPagePagesResultInfo`](OnPagePagesResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPagePagesResultInfo`](../interfaces/IOnPagePagesResultInfo.md) |

#### Returns

[`OnPagePagesResultInfo`](OnPagePagesResultInfo.md)

#### Defined in

main.ts:145294

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[IOnPagePagesResultInfo](../interfaces/IOnPagePagesResultInfo.md).[crawl_progress](../interfaces/IOnPagePagesResultInfo.md#crawl_progress)

#### Defined in

main.ts:145282

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[IOnPagePagesResultInfo](../interfaces/IOnPagePagesResultInfo.md).[crawl_status](../interfaces/IOnPagePagesResultInfo.md#crawl_status)

#### Defined in

main.ts:145284

___

### items

• `Optional` **items**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

items array

#### Implementation of

[IOnPagePagesResultInfo](../interfaces/IOnPagePagesResultInfo.md).[items](../interfaces/IOnPagePagesResultInfo.md#items)

#### Defined in

main.ts:145290

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IOnPagePagesResultInfo](../interfaces/IOnPagePagesResultInfo.md).[items_count](../interfaces/IOnPagePagesResultInfo.md#items_count)

#### Defined in

main.ts:145288

___

### total\_items\_count

• `Optional` **total\_items\_count**: `number`

total number of relevant items in the database

#### Implementation of

[IOnPagePagesResultInfo](../interfaces/IOnPagePagesResultInfo.md).[total_items_count](../interfaces/IOnPagePagesResultInfo.md#total_items_count)

#### Defined in

main.ts:145286

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

main.ts:145303

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

main.ts:145328

___

### fromJS

▸ **fromJS**(`data`): [`OnPagePagesResultInfo`](OnPagePagesResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPagePagesResultInfo`](OnPagePagesResultInfo.md)

#### Defined in

main.ts:145321
