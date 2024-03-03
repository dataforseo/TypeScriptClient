[Documentation](../README.md) / [Exports](../modules.md) / OnPageDuplicateTagsResultInfo

# Class: OnPageDuplicateTagsResultInfo

## Implements

- [`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageDuplicateTagsResultInfo.md#constructor)

### Properties

- [crawl\_progress](OnPageDuplicateTagsResultInfo.md#crawl_progress)
- [crawl\_status](OnPageDuplicateTagsResultInfo.md#crawl_status)
- [items](OnPageDuplicateTagsResultInfo.md#items)
- [items\_count](OnPageDuplicateTagsResultInfo.md#items_count)
- [pages\_count](OnPageDuplicateTagsResultInfo.md#pages_count)
- [total\_pages\_count](OnPageDuplicateTagsResultInfo.md#total_pages_count)

### Methods

- [init](OnPageDuplicateTagsResultInfo.md#init)
- [toJSON](OnPageDuplicateTagsResultInfo.md#tojson)
- [fromJS](OnPageDuplicateTagsResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageDuplicateTagsResultInfo**(`data?`): [`OnPageDuplicateTagsResultInfo`](OnPageDuplicateTagsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md) |

#### Returns

[`OnPageDuplicateTagsResultInfo`](OnPageDuplicateTagsResultInfo.md)

#### Defined in

main.ts:147388

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[IOnPageDuplicateTagsResultInfo](../interfaces/IOnPageDuplicateTagsResultInfo.md).[crawl_progress](../interfaces/IOnPageDuplicateTagsResultInfo.md#crawl_progress)

#### Defined in

main.ts:147372

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[IOnPageDuplicateTagsResultInfo](../interfaces/IOnPageDuplicateTagsResultInfo.md).[crawl_status](../interfaces/IOnPageDuplicateTagsResultInfo.md#crawl_status)

#### Defined in

main.ts:147374

___

### items

• `Optional` **items**: [`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)[]

items array

#### Implementation of

[IOnPageDuplicateTagsResultInfo](../interfaces/IOnPageDuplicateTagsResultInfo.md).[items](../interfaces/IOnPageDuplicateTagsResultInfo.md#items)

#### Defined in

main.ts:147384

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IOnPageDuplicateTagsResultInfo](../interfaces/IOnPageDuplicateTagsResultInfo.md).[items_count](../interfaces/IOnPageDuplicateTagsResultInfo.md#items_count)

#### Defined in

main.ts:147382

___

### pages\_count

• `Optional` **pages\_count**: `number`

number of pages with duplicate tags in the response
displays the number of pages with duplicate tags returned in the response

#### Implementation of

[IOnPageDuplicateTagsResultInfo](../interfaces/IOnPageDuplicateTagsResultInfo.md).[pages_count](../interfaces/IOnPageDuplicateTagsResultInfo.md#pages_count)

#### Defined in

main.ts:147380

___

### total\_pages\_count

• `Optional` **total\_pages\_count**: `number`

total number of pages with duplicate tags
displays the total number of pages with duplicate tags of the target website

#### Implementation of

[IOnPageDuplicateTagsResultInfo](../interfaces/IOnPageDuplicateTagsResultInfo.md).[total_pages_count](../interfaces/IOnPageDuplicateTagsResultInfo.md#total_pages_count)

#### Defined in

main.ts:147377

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

main.ts:147397

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

main.ts:147423

___

### fromJS

▸ **fromJS**(`data`): [`OnPageDuplicateTagsResultInfo`](OnPageDuplicateTagsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageDuplicateTagsResultInfo`](OnPageDuplicateTagsResultInfo.md)

#### Defined in

main.ts:147416
