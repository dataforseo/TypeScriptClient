[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageContentParsingLiveResultInfo

# Class: OnPageContentParsingLiveResultInfo

## Implements

- [`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageContentParsingLiveResultInfo.md#constructor)

### Properties

- [crawl\_progress](OnPageContentParsingLiveResultInfo.md#crawl_progress)
- [crawl\_status](OnPageContentParsingLiveResultInfo.md#crawl_status)
- [items](OnPageContentParsingLiveResultInfo.md#items)
- [items\_count](OnPageContentParsingLiveResultInfo.md#items_count)

### Methods

- [init](OnPageContentParsingLiveResultInfo.md#init)
- [toJSON](OnPageContentParsingLiveResultInfo.md#tojson)
- [fromJS](OnPageContentParsingLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageContentParsingLiveResultInfo**(`data?`): [`OnPageContentParsingLiveResultInfo`](OnPageContentParsingLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md) |

#### Returns

[`OnPageContentParsingLiveResultInfo`](OnPageContentParsingLiveResultInfo.md)

#### Defined in

[main.ts:152810](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152810)

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[IOnPageContentParsingLiveResultInfo](../interfaces/IOnPageContentParsingLiveResultInfo.md).[crawl_progress](../interfaces/IOnPageContentParsingLiveResultInfo.md#crawl_progress)

#### Defined in

[main.ts:152800](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152800)

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[IOnPageContentParsingLiveResultInfo](../interfaces/IOnPageContentParsingLiveResultInfo.md).[crawl_status](../interfaces/IOnPageContentParsingLiveResultInfo.md#crawl_status)

#### Defined in

[main.ts:152802](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152802)

___

### items

• `Optional` **items**: [`OnPageContentParsingItem`](OnPageContentParsingItem.md)[]

items array

#### Implementation of

[IOnPageContentParsingLiveResultInfo](../interfaces/IOnPageContentParsingLiveResultInfo.md).[items](../interfaces/IOnPageContentParsingLiveResultInfo.md#items)

#### Defined in

[main.ts:152806](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152806)

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IOnPageContentParsingLiveResultInfo](../interfaces/IOnPageContentParsingLiveResultInfo.md).[items_count](../interfaces/IOnPageContentParsingLiveResultInfo.md#items_count)

#### Defined in

[main.ts:152804](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152804)

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

[main.ts:152819](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152819)

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

[main.ts:152843](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152843)

___

### fromJS

▸ **fromJS**(`data`): [`OnPageContentParsingLiveResultInfo`](OnPageContentParsingLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageContentParsingLiveResultInfo`](OnPageContentParsingLiveResultInfo.md)

#### Defined in

[main.ts:152836](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152836)
