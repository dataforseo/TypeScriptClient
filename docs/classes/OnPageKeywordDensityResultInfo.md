[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageKeywordDensityResultInfo

# Class: OnPageKeywordDensityResultInfo

## Implements

- [`IOnPageKeywordDensityResultInfo`](../interfaces/IOnPageKeywordDensityResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageKeywordDensityResultInfo.md#constructor)

### Properties

- [crawl\_progress](OnPageKeywordDensityResultInfo.md#crawl_progress)
- [crawl\_status](OnPageKeywordDensityResultInfo.md#crawl_status)
- [items](OnPageKeywordDensityResultInfo.md#items)
- [items\_count](OnPageKeywordDensityResultInfo.md#items_count)
- [total\_items\_count](OnPageKeywordDensityResultInfo.md#total_items_count)

### Methods

- [init](OnPageKeywordDensityResultInfo.md#init)
- [toJSON](OnPageKeywordDensityResultInfo.md#tojson)
- [fromJS](OnPageKeywordDensityResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageKeywordDensityResultInfo**(`data?`): [`OnPageKeywordDensityResultInfo`](OnPageKeywordDensityResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageKeywordDensityResultInfo`](../interfaces/IOnPageKeywordDensityResultInfo.md) |

#### Returns

[`OnPageKeywordDensityResultInfo`](OnPageKeywordDensityResultInfo.md)

#### Defined in

[main.ts:150313](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150313)

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[IOnPageKeywordDensityResultInfo](../interfaces/IOnPageKeywordDensityResultInfo.md).[crawl_progress](../interfaces/IOnPageKeywordDensityResultInfo.md#crawl_progress)

#### Defined in

[main.ts:150300](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150300)

___


### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[IOnPageKeywordDensityResultInfo](../interfaces/IOnPageKeywordDensityResultInfo.md).[crawl_status](../interfaces/IOnPageKeywordDensityResultInfo.md#crawl_status)

#### Defined in

[main.ts:150302](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150302)

___


### items

• `Optional` **items**: [`OnPageKeywordDensityItem`](OnPageKeywordDensityItem.md)[]

items array

#### Implementation of

[IOnPageKeywordDensityResultInfo](../interfaces/IOnPageKeywordDensityResultInfo.md).[items](../interfaces/IOnPageKeywordDensityResultInfo.md#items)

#### Defined in

[main.ts:150309](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150309)

___


### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IOnPageKeywordDensityResultInfo](../interfaces/IOnPageKeywordDensityResultInfo.md).[items_count](../interfaces/IOnPageKeywordDensityResultInfo.md#items_count)

#### Defined in

[main.ts:150307](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150307)

___


### total\_items\_count

• `Optional` **total\_items\_count**: `number`

total number of relevant items
total number of keywords on the specified website or web page matching the set keyword_length and filters

#### Implementation of

[IOnPageKeywordDensityResultInfo](../interfaces/IOnPageKeywordDensityResultInfo.md).[total_items_count](../interfaces/IOnPageKeywordDensityResultInfo.md#total_items_count)

#### Defined in

[main.ts:150305](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150305)

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

[main.ts:150322](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150322)

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

[main.ts:150347](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150347)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageKeywordDensityResultInfo`](OnPageKeywordDensityResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageKeywordDensityResultInfo`](OnPageKeywordDensityResultInfo.md)

#### Defined in

[main.ts:150340](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150340)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")