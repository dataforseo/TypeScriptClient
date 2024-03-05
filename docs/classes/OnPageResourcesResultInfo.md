[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageResourcesResultInfo

# Class: OnPageResourcesResultInfo

## Implements

- [`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageResourcesResultInfo.md#constructor)

### Properties

- [crawl\_progress](OnPageResourcesResultInfo.md#crawl_progress)
- [crawl\_status](OnPageResourcesResultInfo.md#crawl_status)
- [items](OnPageResourcesResultInfo.md#items)
- [items\_count](OnPageResourcesResultInfo.md#items_count)
- [total\_items\_count](OnPageResourcesResultInfo.md#total_items_count)

### Methods

- [init](OnPageResourcesResultInfo.md#init)
- [toJSON](OnPageResourcesResultInfo.md#tojson)
- [fromJS](OnPageResourcesResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageResourcesResultInfo**(`data?`): [`OnPageResourcesResultInfo`](OnPageResourcesResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md) |

#### Returns

[`OnPageResourcesResultInfo`](OnPageResourcesResultInfo.md)

#### Defined in

[main.ts:146498](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146498)

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[IOnPageResourcesResultInfo](../interfaces/IOnPageResourcesResultInfo.md).[crawl_progress](../interfaces/IOnPageResourcesResultInfo.md#crawl_progress)

#### Defined in

[main.ts:146486](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146486)

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[IOnPageResourcesResultInfo](../interfaces/IOnPageResourcesResultInfo.md).[crawl_status](../interfaces/IOnPageResourcesResultInfo.md#crawl_status)

#### Defined in

[main.ts:146488](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146488)

___

### items

• `Optional` **items**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

items array

#### Implementation of

[IOnPageResourcesResultInfo](../interfaces/IOnPageResourcesResultInfo.md).[items](../interfaces/IOnPageResourcesResultInfo.md#items)

#### Defined in

[main.ts:146494](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146494)

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IOnPageResourcesResultInfo](../interfaces/IOnPageResourcesResultInfo.md).[items_count](../interfaces/IOnPageResourcesResultInfo.md#items_count)

#### Defined in

[main.ts:146492](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146492)

___

### total\_items\_count

• `Optional` **total\_items\_count**: `number`

total number of relevant items crawled

#### Implementation of

[IOnPageResourcesResultInfo](../interfaces/IOnPageResourcesResultInfo.md).[total_items_count](../interfaces/IOnPageResourcesResultInfo.md#total_items_count)

#### Defined in

[main.ts:146490](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146490)

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

[main.ts:146507](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146507)

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

[main.ts:146532](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146532)

___

### fromJS

▸ **fromJS**(`data`): [`OnPageResourcesResultInfo`](OnPageResourcesResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageResourcesResultInfo`](OnPageResourcesResultInfo.md)

#### Defined in

[main.ts:146525](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146525)
