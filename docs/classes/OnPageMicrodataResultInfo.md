[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageMicrodataResultInfo

# Class: OnPageMicrodataResultInfo

## Implements

- [`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageMicrodataResultInfo.md#constructor)

### Properties

- [crawl\_progress](OnPageMicrodataResultInfo.md#crawl_progress)
- [crawl\_status](OnPageMicrodataResultInfo.md#crawl_status)
- [items](OnPageMicrodataResultInfo.md#items)
- [items\_count](OnPageMicrodataResultInfo.md#items_count)
- [test\_summary](OnPageMicrodataResultInfo.md#test_summary)

### Methods

- [init](OnPageMicrodataResultInfo.md#init)
- [toJSON](OnPageMicrodataResultInfo.md#tojson)
- [fromJS](OnPageMicrodataResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageMicrodataResultInfo**(`data?`): [`OnPageMicrodataResultInfo`](OnPageMicrodataResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md) |

#### Returns

[`OnPageMicrodataResultInfo`](OnPageMicrodataResultInfo.md)

#### Defined in

[main.ts:150954](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150954)

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[IOnPageMicrodataResultInfo](../interfaces/IOnPageMicrodataResultInfo.md).[crawl_progress](../interfaces/IOnPageMicrodataResultInfo.md#crawl_progress)

#### Defined in

[main.ts:150942](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150942)

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[IOnPageMicrodataResultInfo](../interfaces/IOnPageMicrodataResultInfo.md).[crawl_status](../interfaces/IOnPageMicrodataResultInfo.md#crawl_status)

#### Defined in

[main.ts:150944](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150944)

___

### items

• `Optional` **items**: [`OnPageMicrodataItem`](OnPageMicrodataItem.md)[]

items array

#### Implementation of

[IOnPageMicrodataResultInfo](../interfaces/IOnPageMicrodataResultInfo.md).[items](../interfaces/IOnPageMicrodataResultInfo.md#items)

#### Defined in

[main.ts:150950](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150950)

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IOnPageMicrodataResultInfo](../interfaces/IOnPageMicrodataResultInfo.md).[items_count](../interfaces/IOnPageMicrodataResultInfo.md#items_count)

#### Defined in

[main.ts:150948](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150948)

___

### test\_summary

• `Optional` **test\_summary**: [`TestSummary`](TestSummary.md)

microdata validation test results

#### Implementation of

[IOnPageMicrodataResultInfo](../interfaces/IOnPageMicrodataResultInfo.md).[test_summary](../interfaces/IOnPageMicrodataResultInfo.md#test_summary)

#### Defined in

[main.ts:150946](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150946)

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

[main.ts:150963](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150963)

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

[main.ts:150988](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150988)

___

### fromJS

▸ **fromJS**(`data`): [`OnPageMicrodataResultInfo`](OnPageMicrodataResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageMicrodataResultInfo`](OnPageMicrodataResultInfo.md)

#### Defined in

[main.ts:150981](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150981)
