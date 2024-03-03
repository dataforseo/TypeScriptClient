[Documentation](../README.md) / [Exports](../modules.md) / KeywordData

# Class: KeywordData

## Implements

- [`IKeywordData`](../interfaces/IKeywordData.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordData.md#constructor)

### Properties

- [avg\_backlinks\_info](KeywordData.md#avg_backlinks_info)
- [impressions\_info](KeywordData.md#impressions_info)
- [keyword](KeywordData.md#keyword)
- [keyword\_info](KeywordData.md#keyword_info)
- [keyword\_properties](KeywordData.md#keyword_properties)
- [language\_code](KeywordData.md#language_code)
- [location\_code](KeywordData.md#location_code)
- [se\_type](KeywordData.md#se_type)
- [search\_intent\_info](KeywordData.md#search_intent_info)
- [serp\_info](KeywordData.md#serp_info)

### Methods

- [init](KeywordData.md#init)
- [toJSON](KeywordData.md#tojson)
- [fromJS](KeywordData.md#fromjs)

## Constructors

### constructor

• **new KeywordData**(`data?`): [`KeywordData`](KeywordData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordData`](../interfaces/IKeywordData.md) |

#### Returns

[`KeywordData`](KeywordData.md)

#### Defined in

main.ts:86537

## Properties

### avg\_backlinks\_info

• `Optional` **avg\_backlinks\_info**: [`AvgBacklinksInfo`](AvgBacklinksInfo.md)

backlink data for the returned keyword
this object provides the average number of backlinks, referring pages and domains, as well as the average rank values among the top-10 websites ranking organically for the keyword

#### Implementation of

[IKeywordData](../interfaces/IKeywordData.md).[avg_backlinks_info](../interfaces/IKeywordData.md#avg_backlinks_info)

#### Defined in

main.ts:86530

___

### impressions\_info

• `Optional` **impressions\_info**: [`ImpressionsInfo`](ImpressionsInfo.md)

impressions data for the returned keyword idea
Note that all data in the impressions_info object is deprecated and provided only as legacy to avoid maintenance issues
daily_impressions values provide a more accurate alternative to Google search volume data;
the 999 bid is used to mitigate account-specific factors Google considers when calculating impressions
learn more about impressions in this help center article

#### Implementation of

[IKeywordData](../interfaces/IKeywordData.md).[impressions_info](../interfaces/IKeywordData.md#impressions_info)

#### Defined in

main.ts:86524

___

### keyword

• `Optional` **keyword**: `string`

returned keyword

#### Implementation of

[IKeywordData](../interfaces/IKeywordData.md).[keyword](../interfaces/IKeywordData.md#keyword)

#### Defined in

main.ts:86510

___

### keyword\_info

• `Optional` **keyword\_info**: [`KeywordInfo`](KeywordInfo.md)

keyword data for the returned keyword

#### Implementation of

[IKeywordData](../interfaces/IKeywordData.md).[keyword_info](../interfaces/IKeywordData.md#keyword_info)

#### Defined in

main.ts:86516

___

### keyword\_properties

• `Optional` **keyword\_properties**: [`KeywordProperties`](KeywordProperties.md)

additional information about the keyword

#### Implementation of

[IKeywordData](../interfaces/IKeywordData.md).[keyword_properties](../interfaces/IKeywordData.md#keyword_properties)

#### Defined in

main.ts:86518

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IKeywordData](../interfaces/IKeywordData.md).[language_code](../interfaces/IKeywordData.md#language_code)

#### Defined in

main.ts:86514

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IKeywordData](../interfaces/IKeywordData.md).[location_code](../interfaces/IKeywordData.md#location_code)

#### Defined in

main.ts:86512

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IKeywordData](../interfaces/IKeywordData.md).[se_type](../interfaces/IKeywordData.md#se_type)

#### Defined in

main.ts:86508

___

### search\_intent\_info

• `Optional` **search\_intent\_info**: [`SearchIntentInfo`](SearchIntentInfo.md)

search intent info for the returned keyword
learn about search intent in this help center article

#### Implementation of

[IKeywordData](../interfaces/IKeywordData.md).[search_intent_info](../interfaces/IKeywordData.md#search_intent_info)

#### Defined in

main.ts:86533

___

### serp\_info

• `Optional` **serp\_info**: [`SerpInfo`](SerpInfo.md)

SERP data
the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database

#### Implementation of

[IKeywordData](../interfaces/IKeywordData.md).[serp_info](../interfaces/IKeywordData.md#serp_info)

#### Defined in

main.ts:86527

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

main.ts:86546

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

main.ts:86572

___

### fromJS

▸ **fromJS**(`data`): [`KeywordData`](KeywordData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordData`](KeywordData.md)

#### Defined in

main.ts:86565
