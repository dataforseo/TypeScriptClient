[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageRawHtmlResultInfo

# Class: OnPageRawHtmlResultInfo

## Implements

- [`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageRawHtmlResultInfo.md#constructor)

### Properties

- [crawl\_progress](OnPageRawHtmlResultInfo.md#crawl_progress)
- [crawl\_status](OnPageRawHtmlResultInfo.md#crawl_status)
- [items](OnPageRawHtmlResultInfo.md#items)
- [items\_count](OnPageRawHtmlResultInfo.md#items_count)

### Methods

- [init](OnPageRawHtmlResultInfo.md#init)
- [toJSON](OnPageRawHtmlResultInfo.md#tojson)
- [fromJS](OnPageRawHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageRawHtmlResultInfo**(`data?`): [`OnPageRawHtmlResultInfo`](OnPageRawHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md) |

#### Returns

[`OnPageRawHtmlResultInfo`](OnPageRawHtmlResultInfo.md)

#### Defined in

[main.ts:151266](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151266)

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[IOnPageRawHtmlResultInfo](../interfaces/IOnPageRawHtmlResultInfo.md).[crawl_progress](../interfaces/IOnPageRawHtmlResultInfo.md#crawl_progress)

#### Defined in

[main.ts:151256](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151256)

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[IOnPageRawHtmlResultInfo](../interfaces/IOnPageRawHtmlResultInfo.md).[crawl_status](../interfaces/IOnPageRawHtmlResultInfo.md#crawl_status)

#### Defined in

[main.ts:151258](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151258)

___

### items

• `Optional` **items**: [`OnPageRawHtmlItem`](OnPageRawHtmlItem.md)

items array

#### Implementation of

[IOnPageRawHtmlResultInfo](../interfaces/IOnPageRawHtmlResultInfo.md).[items](../interfaces/IOnPageRawHtmlResultInfo.md#items)

#### Defined in

[main.ts:151262](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151262)

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IOnPageRawHtmlResultInfo](../interfaces/IOnPageRawHtmlResultInfo.md).[items_count](../interfaces/IOnPageRawHtmlResultInfo.md#items_count)

#### Defined in

[main.ts:151260](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151260)

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

[main.ts:151275](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151275)

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

[main.ts:151295](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151295)

___

### fromJS

▸ **fromJS**(`data`): [`OnPageRawHtmlResultInfo`](OnPageRawHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageRawHtmlResultInfo`](OnPageRawHtmlResultInfo.md)

#### Defined in

[main.ts:151288](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151288)
