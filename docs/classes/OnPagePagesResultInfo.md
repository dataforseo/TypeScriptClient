[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPagePagesResultInfo

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

[main.ts:145150](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145150)

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[IOnPagePagesResultInfo](../interfaces/IOnPagePagesResultInfo.md).[crawl_progress](../interfaces/IOnPagePagesResultInfo.md#crawl_progress)

#### Defined in

[main.ts:145138](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145138)

___


### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[IOnPagePagesResultInfo](../interfaces/IOnPagePagesResultInfo.md).[crawl_status](../interfaces/IOnPagePagesResultInfo.md#crawl_status)

#### Defined in

[main.ts:145140](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145140)

___


### items

• `Optional` **items**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

items array

#### Implementation of

[IOnPagePagesResultInfo](../interfaces/IOnPagePagesResultInfo.md).[items](../interfaces/IOnPagePagesResultInfo.md#items)

#### Defined in

[main.ts:145146](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145146)

___


### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IOnPagePagesResultInfo](../interfaces/IOnPagePagesResultInfo.md).[items_count](../interfaces/IOnPagePagesResultInfo.md#items_count)

#### Defined in

[main.ts:145144](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145144)

___


### total\_items\_count

• `Optional` **total\_items\_count**: `number`

total number of relevant items in the database

#### Implementation of

[IOnPagePagesResultInfo](../interfaces/IOnPagePagesResultInfo.md).[total_items_count](../interfaces/IOnPagePagesResultInfo.md#total_items_count)

#### Defined in

[main.ts:145142](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145142)

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

[main.ts:145159](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145159)

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

[main.ts:145184](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145184)

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

[main.ts:145177](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145177)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")