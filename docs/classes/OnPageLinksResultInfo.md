[Documentation](../README.md) / [Exports](../modules.md) / OnPageLinksResultInfo

# Class: OnPageLinksResultInfo

## Implements

- [`IOnPageLinksResultInfo`](../interfaces/IOnPageLinksResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageLinksResultInfo.md#constructor)

### Properties

- [crawl\_progress](OnPageLinksResultInfo.md#crawl_progress)
- [crawl\_status](OnPageLinksResultInfo.md#crawl_status)
- [items](OnPageLinksResultInfo.md#items)
- [items\_count](OnPageLinksResultInfo.md#items_count)
- [total\_items\_count](OnPageLinksResultInfo.md#total_items_count)

### Methods

- [init](OnPageLinksResultInfo.md#init)
- [toJSON](OnPageLinksResultInfo.md#tojson)
- [fromJS](OnPageLinksResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageLinksResultInfo**(`data?`): [`OnPageLinksResultInfo`](OnPageLinksResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageLinksResultInfo`](../interfaces/IOnPageLinksResultInfo.md) |

#### Returns

[`OnPageLinksResultInfo`](OnPageLinksResultInfo.md)

#### Defined in

main.ts:148362

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[IOnPageLinksResultInfo](../interfaces/IOnPageLinksResultInfo.md).[crawl_progress](../interfaces/IOnPageLinksResultInfo.md#crawl_progress)

#### Defined in

main.ts:148350

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[IOnPageLinksResultInfo](../interfaces/IOnPageLinksResultInfo.md).[crawl_status](../interfaces/IOnPageLinksResultInfo.md#crawl_status)

#### Defined in

main.ts:148352

___

### items

• `Optional` **items**: [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)[]

items array

#### Implementation of

[IOnPageLinksResultInfo](../interfaces/IOnPageLinksResultInfo.md).[items](../interfaces/IOnPageLinksResultInfo.md#items)

#### Defined in

main.ts:148358

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IOnPageLinksResultInfo](../interfaces/IOnPageLinksResultInfo.md).[items_count](../interfaces/IOnPageLinksResultInfo.md#items_count)

#### Defined in

main.ts:148356

___

### total\_items\_count

• `Optional` **total\_items\_count**: `number`

total number of relevant items in the database

#### Implementation of

[IOnPageLinksResultInfo](../interfaces/IOnPageLinksResultInfo.md).[total_items_count](../interfaces/IOnPageLinksResultInfo.md#total_items_count)

#### Defined in

main.ts:148354

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

main.ts:148371

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

main.ts:148396

___

### fromJS

▸ **fromJS**(`data`): [`OnPageLinksResultInfo`](OnPageLinksResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageLinksResultInfo`](OnPageLinksResultInfo.md)

#### Defined in

main.ts:148389
