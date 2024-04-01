[Documentation](../README.md) / [Exports](../modules.md) / OnPagePagesByResourceResultInfo

# Class: OnPagePagesByResourceResultInfo

## Implements

- [`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPagePagesByResourceResultInfo.md#constructor)

### Properties

- [crawl\_progress](OnPagePagesByResourceResultInfo.md#crawl_progress)
- [crawl\_status](OnPagePagesByResourceResultInfo.md#crawl_status)
- [items](OnPagePagesByResourceResultInfo.md#items)
- [items\_count](OnPagePagesByResourceResultInfo.md#items_count)
- [total\_items\_count](OnPagePagesByResourceResultInfo.md#total_items_count)

### Methods

- [init](OnPagePagesByResourceResultInfo.md#init)
- [toJSON](OnPagePagesByResourceResultInfo.md#tojson)
- [fromJS](OnPagePagesByResourceResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPagePagesByResourceResultInfo**(`data?`): [`OnPagePagesByResourceResultInfo`](OnPagePagesByResourceResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPagePagesByResourceResultInfo`](../interfaces/IOnPagePagesByResourceResultInfo.md) |

#### Returns

[`OnPagePagesByResourceResultInfo`](OnPagePagesByResourceResultInfo.md)

#### Defined in

main.ts:150957

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[IOnPagePagesByResourceResultInfo](../interfaces/IOnPagePagesByResourceResultInfo.md).[crawl_progress](../interfaces/IOnPagePagesByResourceResultInfo.md#crawl_progress)

#### Defined in

main.ts:150945

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[IOnPagePagesByResourceResultInfo](../interfaces/IOnPagePagesByResourceResultInfo.md).[crawl_status](../interfaces/IOnPagePagesByResourceResultInfo.md#crawl_status)

#### Defined in

main.ts:150947

___

### items

• `Optional` **items**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

items array

#### Implementation of

[IOnPagePagesByResourceResultInfo](../interfaces/IOnPagePagesByResourceResultInfo.md).[items](../interfaces/IOnPagePagesByResourceResultInfo.md#items)

#### Defined in

main.ts:150953

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IOnPagePagesByResourceResultInfo](../interfaces/IOnPagePagesByResourceResultInfo.md).[items_count](../interfaces/IOnPagePagesByResourceResultInfo.md#items_count)

#### Defined in

main.ts:150951

___

### total\_items\_count

• `Optional` **total\_items\_count**: `number`

total number of relevant items in the database

#### Implementation of

[IOnPagePagesByResourceResultInfo](../interfaces/IOnPagePagesByResourceResultInfo.md).[total_items_count](../interfaces/IOnPagePagesByResourceResultInfo.md#total_items_count)

#### Defined in

main.ts:150949

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

main.ts:150966

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

main.ts:150991

___

### fromJS

▸ **fromJS**(`data`): [`OnPagePagesByResourceResultInfo`](OnPagePagesByResourceResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPagePagesByResourceResultInfo`](OnPagePagesByResourceResultInfo.md)

#### Defined in

main.ts:150984
