[Documentation](../README.md) / [Exports](../modules.md) / OnPageDuplicateContentResultInfo

# Class: OnPageDuplicateContentResultInfo

## Implements

- [`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageDuplicateContentResultInfo.md#constructor)

### Properties

- [crawl\_progress](OnPageDuplicateContentResultInfo.md#crawl_progress)
- [crawl\_status](OnPageDuplicateContentResultInfo.md#crawl_status)
- [items](OnPageDuplicateContentResultInfo.md#items)
- [items\_count](OnPageDuplicateContentResultInfo.md#items_count)

### Methods

- [init](OnPageDuplicateContentResultInfo.md#init)
- [toJSON](OnPageDuplicateContentResultInfo.md#tojson)
- [fromJS](OnPageDuplicateContentResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageDuplicateContentResultInfo**(`data?`): [`OnPageDuplicateContentResultInfo`](OnPageDuplicateContentResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md) |

#### Returns

[`OnPageDuplicateContentResultInfo`](OnPageDuplicateContentResultInfo.md)

#### Defined in

main.ts:147840

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[IOnPageDuplicateContentResultInfo](../interfaces/IOnPageDuplicateContentResultInfo.md).[crawl_progress](../interfaces/IOnPageDuplicateContentResultInfo.md#crawl_progress)

#### Defined in

main.ts:147830

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[IOnPageDuplicateContentResultInfo](../interfaces/IOnPageDuplicateContentResultInfo.md).[crawl_status](../interfaces/IOnPageDuplicateContentResultInfo.md#crawl_status)

#### Defined in

main.ts:147832

___

### items

• `Optional` **items**: [`OnPageDuplicateContentItem`](OnPageDuplicateContentItem.md)[]

items array

#### Implementation of

[IOnPageDuplicateContentResultInfo](../interfaces/IOnPageDuplicateContentResultInfo.md).[items](../interfaces/IOnPageDuplicateContentResultInfo.md#items)

#### Defined in

main.ts:147836

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IOnPageDuplicateContentResultInfo](../interfaces/IOnPageDuplicateContentResultInfo.md).[items_count](../interfaces/IOnPageDuplicateContentResultInfo.md#items_count)

#### Defined in

main.ts:147834

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

main.ts:147849

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

main.ts:147873

___

### fromJS

▸ **fromJS**(`data`): [`OnPageDuplicateContentResultInfo`](OnPageDuplicateContentResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageDuplicateContentResultInfo`](OnPageDuplicateContentResultInfo.md)

#### Defined in

main.ts:147866
