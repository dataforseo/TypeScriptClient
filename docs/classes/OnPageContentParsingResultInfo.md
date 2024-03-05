[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageContentParsingResultInfo

# Class: OnPageContentParsingResultInfo

## Implements

- [`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageContentParsingResultInfo.md#constructor)

### Properties

- [crawl\_progress](OnPageContentParsingResultInfo.md#crawl_progress)
- [crawl\_status](OnPageContentParsingResultInfo.md#crawl_status)
- [items](OnPageContentParsingResultInfo.md#items)
- [items\_count](OnPageContentParsingResultInfo.md#items_count)

### Methods

- [init](OnPageContentParsingResultInfo.md#init)
- [toJSON](OnPageContentParsingResultInfo.md#tojson)
- [fromJS](OnPageContentParsingResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageContentParsingResultInfo**(`data?`): [`OnPageContentParsingResultInfo`](OnPageContentParsingResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md) |

#### Returns

[`OnPageContentParsingResultInfo`](OnPageContentParsingResultInfo.md)

#### Defined in

[main.ts:152366](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152366)

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[IOnPageContentParsingResultInfo](../interfaces/IOnPageContentParsingResultInfo.md).[crawl_progress](../interfaces/IOnPageContentParsingResultInfo.md#crawl_progress)

#### Defined in

[main.ts:152356](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152356)

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[IOnPageContentParsingResultInfo](../interfaces/IOnPageContentParsingResultInfo.md).[crawl_status](../interfaces/IOnPageContentParsingResultInfo.md#crawl_status)

#### Defined in

[main.ts:152358](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152358)

___

### items

• `Optional` **items**: [`OnPageContentParsingItem`](OnPageContentParsingItem.md)[]

items array

#### Implementation of

[IOnPageContentParsingResultInfo](../interfaces/IOnPageContentParsingResultInfo.md).[items](../interfaces/IOnPageContentParsingResultInfo.md#items)

#### Defined in

[main.ts:152362](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152362)

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IOnPageContentParsingResultInfo](../interfaces/IOnPageContentParsingResultInfo.md).[items_count](../interfaces/IOnPageContentParsingResultInfo.md#items_count)

#### Defined in

[main.ts:152360](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152360)

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

[main.ts:152375](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152375)

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

[main.ts:152399](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152399)

___

### fromJS

▸ **fromJS**(`data`): [`OnPageContentParsingResultInfo`](OnPageContentParsingResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageContentParsingResultInfo`](OnPageContentParsingResultInfo.md)

#### Defined in

[main.ts:152392](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152392)
