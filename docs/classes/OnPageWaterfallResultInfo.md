[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageWaterfallResultInfo

# Class: OnPageWaterfallResultInfo

## Implements

- [`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageWaterfallResultInfo.md#constructor)

### Properties

- [crawl\_progress](OnPageWaterfallResultInfo.md#crawl_progress)
- [crawl\_status](OnPageWaterfallResultInfo.md#crawl_status)
- [items](OnPageWaterfallResultInfo.md#items)
- [items\_count](OnPageWaterfallResultInfo.md#items_count)

### Methods

- [init](OnPageWaterfallResultInfo.md#init)
- [toJSON](OnPageWaterfallResultInfo.md#tojson)
- [fromJS](OnPageWaterfallResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageWaterfallResultInfo**(`data?`): [`OnPageWaterfallResultInfo`](OnPageWaterfallResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageWaterfallResultInfo`](../interfaces/IOnPageWaterfallResultInfo.md) |

#### Returns

[`OnPageWaterfallResultInfo`](OnPageWaterfallResultInfo.md)

#### Defined in

[main.ts:149864](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149864)

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[IOnPageWaterfallResultInfo](../interfaces/IOnPageWaterfallResultInfo.md).[crawl_progress](../interfaces/IOnPageWaterfallResultInfo.md#crawl_progress)

#### Defined in

[main.ts:149854](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149854)

___


### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[IOnPageWaterfallResultInfo](../interfaces/IOnPageWaterfallResultInfo.md).[crawl_status](../interfaces/IOnPageWaterfallResultInfo.md#crawl_status)

#### Defined in

[main.ts:149856](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149856)

___


### items

• `Optional` **items**: [`OnPageWaterfallItem`](OnPageWaterfallItem.md)[]

items array

#### Implementation of

[IOnPageWaterfallResultInfo](../interfaces/IOnPageWaterfallResultInfo.md).[items](../interfaces/IOnPageWaterfallResultInfo.md#items)

#### Defined in

[main.ts:149860](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149860)

___


### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IOnPageWaterfallResultInfo](../interfaces/IOnPageWaterfallResultInfo.md).[items_count](../interfaces/IOnPageWaterfallResultInfo.md#items_count)

#### Defined in

[main.ts:149858](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149858)

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

[main.ts:149873](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149873)

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

[main.ts:149897](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149897)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageWaterfallResultInfo`](OnPageWaterfallResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageWaterfallResultInfo`](OnPageWaterfallResultInfo.md)

#### Defined in

[main.ts:149890](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149890)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")