[Documentation](../README.md) / [Exports](../modules.md) / RankedKeywordsInfo

# Class: RankedKeywordsInfo

## Implements

- [`IRankedKeywordsInfo`](../interfaces/IRankedKeywordsInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](RankedKeywordsInfo.md#constructor)

### Properties

- [page\_from\_keywords\_count\_top\_10](RankedKeywordsInfo.md#page_from_keywords_count_top_10)
- [page\_from\_keywords\_count\_top\_100](RankedKeywordsInfo.md#page_from_keywords_count_top_100)
- [page\_from\_keywords\_count\_top\_3](RankedKeywordsInfo.md#page_from_keywords_count_top_3)

### Methods

- [init](RankedKeywordsInfo.md#init)
- [toJSON](RankedKeywordsInfo.md#tojson)
- [fromJS](RankedKeywordsInfo.md#fromjs)

## Constructors

### constructor

• **new RankedKeywordsInfo**(`data?`): [`RankedKeywordsInfo`](RankedKeywordsInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IRankedKeywordsInfo`](../interfaces/IRankedKeywordsInfo.md) |

#### Returns

[`RankedKeywordsInfo`](RankedKeywordsInfo.md)

#### Defined in

main.ts:136278

## Properties

### page\_from\_keywords\_count\_top\_10

• `Optional` **page\_from\_keywords\_count\_top\_10**: `number`

number of keywords for which the page is ranked in top 10 search results

#### Implementation of

[IRankedKeywordsInfo](../interfaces/IRankedKeywordsInfo.md).[page_from_keywords_count_top_10](../interfaces/IRankedKeywordsInfo.md#page_from_keywords_count_top_10)

#### Defined in

main.ts:136272

___

### page\_from\_keywords\_count\_top\_100

• `Optional` **page\_from\_keywords\_count\_top\_100**: `number`

number of keywords for which the page is ranked in top 100 search results

#### Implementation of

[IRankedKeywordsInfo](../interfaces/IRankedKeywordsInfo.md).[page_from_keywords_count_top_100](../interfaces/IRankedKeywordsInfo.md#page_from_keywords_count_top_100)

#### Defined in

main.ts:136274

___

### page\_from\_keywords\_count\_top\_3

• `Optional` **page\_from\_keywords\_count\_top\_3**: `number`

number of keywords for which the page is ranked in top 3 search results

#### Implementation of

[IRankedKeywordsInfo](../interfaces/IRankedKeywordsInfo.md).[page_from_keywords_count_top_3](../interfaces/IRankedKeywordsInfo.md#page_from_keywords_count_top_3)

#### Defined in

main.ts:136270

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

main.ts:136287

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

main.ts:136306

___

### fromJS

▸ **fromJS**(`data`): [`RankedKeywordsInfo`](RankedKeywordsInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`RankedKeywordsInfo`](RankedKeywordsInfo.md)

#### Defined in

main.ts:136299
