[Documentation](../README.md) / [Exports](../modules.md) / OnPageContentParsingResultInfo

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

main.ts:157793

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[IOnPageContentParsingResultInfo](../interfaces/IOnPageContentParsingResultInfo.md).[crawl_progress](../interfaces/IOnPageContentParsingResultInfo.md#crawl_progress)

#### Defined in

main.ts:157783

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[IOnPageContentParsingResultInfo](../interfaces/IOnPageContentParsingResultInfo.md).[crawl_status](../interfaces/IOnPageContentParsingResultInfo.md#crawl_status)

#### Defined in

main.ts:157785

___

### items

• `Optional` **items**: [`OnPageContentParsingItem`](OnPageContentParsingItem.md)[]

items array

#### Implementation of

[IOnPageContentParsingResultInfo](../interfaces/IOnPageContentParsingResultInfo.md).[items](../interfaces/IOnPageContentParsingResultInfo.md#items)

#### Defined in

main.ts:157789

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IOnPageContentParsingResultInfo](../interfaces/IOnPageContentParsingResultInfo.md).[items_count](../interfaces/IOnPageContentParsingResultInfo.md#items_count)

#### Defined in

main.ts:157787

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

main.ts:157802

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

main.ts:157826

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

main.ts:157819
