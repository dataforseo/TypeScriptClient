[Documentation](../README.md) / [Exports](../modules.md) / OnPageRedirectChainsResultInfo

# Class: OnPageRedirectChainsResultInfo

## Implements

- [`IOnPageRedirectChainsResultInfo`](../interfaces/IOnPageRedirectChainsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageRedirectChainsResultInfo.md#constructor)

### Properties

- [crawl\_progress](OnPageRedirectChainsResultInfo.md#crawl_progress)
- [crawl\_status](OnPageRedirectChainsResultInfo.md#crawl_status)
- [items](OnPageRedirectChainsResultInfo.md#items)
- [items\_count](OnPageRedirectChainsResultInfo.md#items_count)
- [total\_items\_count](OnPageRedirectChainsResultInfo.md#total_items_count)

### Methods

- [init](OnPageRedirectChainsResultInfo.md#init)
- [toJSON](OnPageRedirectChainsResultInfo.md#tojson)
- [fromJS](OnPageRedirectChainsResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageRedirectChainsResultInfo**(`data?`): [`OnPageRedirectChainsResultInfo`](OnPageRedirectChainsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageRedirectChainsResultInfo`](../interfaces/IOnPageRedirectChainsResultInfo.md) |

#### Returns

[`OnPageRedirectChainsResultInfo`](OnPageRedirectChainsResultInfo.md)

#### Defined in

main.ts:149218

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[IOnPageRedirectChainsResultInfo](../interfaces/IOnPageRedirectChainsResultInfo.md).[crawl_progress](../interfaces/IOnPageRedirectChainsResultInfo.md#crawl_progress)

#### Defined in

main.ts:149206

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[IOnPageRedirectChainsResultInfo](../interfaces/IOnPageRedirectChainsResultInfo.md).[crawl_status](../interfaces/IOnPageRedirectChainsResultInfo.md#crawl_status)

#### Defined in

main.ts:149208

___

### items

• `Optional` **items**: [`OnPageRedirectChainsItem`](OnPageRedirectChainsItem.md)[]

items array

#### Implementation of

[IOnPageRedirectChainsResultInfo](../interfaces/IOnPageRedirectChainsResultInfo.md).[items](../interfaces/IOnPageRedirectChainsResultInfo.md#items)

#### Defined in

main.ts:149214

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IOnPageRedirectChainsResultInfo](../interfaces/IOnPageRedirectChainsResultInfo.md).[items_count](../interfaces/IOnPageRedirectChainsResultInfo.md#items_count)

#### Defined in

main.ts:149212

___

### total\_items\_count

• `Optional` **total\_items\_count**: `number`

total number of relevant items in the database

#### Implementation of

[IOnPageRedirectChainsResultInfo](../interfaces/IOnPageRedirectChainsResultInfo.md).[total_items_count](../interfaces/IOnPageRedirectChainsResultInfo.md#total_items_count)

#### Defined in

main.ts:149210

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

main.ts:149227

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

main.ts:149252

___

### fromJS

▸ **fromJS**(`data`): [`OnPageRedirectChainsResultInfo`](OnPageRedirectChainsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageRedirectChainsResultInfo`](OnPageRedirectChainsResultInfo.md)

#### Defined in

main.ts:149245
