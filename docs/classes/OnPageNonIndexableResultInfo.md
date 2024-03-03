[Documentation](../README.md) / [Exports](../modules.md) / OnPageNonIndexableResultInfo

# Class: OnPageNonIndexableResultInfo

## Implements

- [`IOnPageNonIndexableResultInfo`](../interfaces/IOnPageNonIndexableResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageNonIndexableResultInfo.md#constructor)

### Properties

- [crawl\_progress](OnPageNonIndexableResultInfo.md#crawl_progress)
- [crawl\_status](OnPageNonIndexableResultInfo.md#crawl_status)
- [items](OnPageNonIndexableResultInfo.md#items)
- [items\_count](OnPageNonIndexableResultInfo.md#items_count)
- [total\_items\_count](OnPageNonIndexableResultInfo.md#total_items_count)

### Methods

- [init](OnPageNonIndexableResultInfo.md#init)
- [toJSON](OnPageNonIndexableResultInfo.md#tojson)
- [fromJS](OnPageNonIndexableResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageNonIndexableResultInfo**(`data?`): [`OnPageNonIndexableResultInfo`](OnPageNonIndexableResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageNonIndexableResultInfo`](../interfaces/IOnPageNonIndexableResultInfo.md) |

#### Returns

[`OnPageNonIndexableResultInfo`](OnPageNonIndexableResultInfo.md)

#### Defined in

main.ts:149594

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[IOnPageNonIndexableResultInfo](../interfaces/IOnPageNonIndexableResultInfo.md).[crawl_progress](../interfaces/IOnPageNonIndexableResultInfo.md#crawl_progress)

#### Defined in

main.ts:149582

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[IOnPageNonIndexableResultInfo](../interfaces/IOnPageNonIndexableResultInfo.md).[crawl_status](../interfaces/IOnPageNonIndexableResultInfo.md#crawl_status)

#### Defined in

main.ts:149584

___

### items

• `Optional` **items**: [`OnPageNonIndexableItem`](OnPageNonIndexableItem.md)[]

items array

#### Implementation of

[IOnPageNonIndexableResultInfo](../interfaces/IOnPageNonIndexableResultInfo.md).[items](../interfaces/IOnPageNonIndexableResultInfo.md#items)

#### Defined in

main.ts:149590

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IOnPageNonIndexableResultInfo](../interfaces/IOnPageNonIndexableResultInfo.md).[items_count](../interfaces/IOnPageNonIndexableResultInfo.md#items_count)

#### Defined in

main.ts:149588

___

### total\_items\_count

• `Optional` **total\_items\_count**: `number`

total number of relevant items in the database

#### Implementation of

[IOnPageNonIndexableResultInfo](../interfaces/IOnPageNonIndexableResultInfo.md).[total_items_count](../interfaces/IOnPageNonIndexableResultInfo.md#total_items_count)

#### Defined in

main.ts:149586

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

main.ts:149603

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

main.ts:149628

___

### fromJS

▸ **fromJS**(`data`): [`OnPageNonIndexableResultInfo`](OnPageNonIndexableResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageNonIndexableResultInfo`](OnPageNonIndexableResultInfo.md)

#### Defined in

main.ts:149621
