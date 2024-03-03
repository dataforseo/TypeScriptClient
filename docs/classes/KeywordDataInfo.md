[Documentation](../README.md) / [Exports](../modules.md) / KeywordDataInfo

# Class: KeywordDataInfo

## Implements

- [`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordDataInfo.md#constructor)

### Properties

- [avg\_backlinks\_info](KeywordDataInfo.md#avg_backlinks_info)
- [impressions\_info](KeywordDataInfo.md#impressions_info)
- [keyword](KeywordDataInfo.md#keyword)
- [keyword\_info](KeywordDataInfo.md#keyword_info)
- [keyword\_properties](KeywordDataInfo.md#keyword_properties)
- [language\_code](KeywordDataInfo.md#language_code)
- [location\_code](KeywordDataInfo.md#location_code)
- [se\_type](KeywordDataInfo.md#se_type)
- [search\_intent\_info](KeywordDataInfo.md#search_intent_info)
- [serp\_info](KeywordDataInfo.md#serp_info)

### Methods

- [init](KeywordDataInfo.md#init)
- [toJSON](KeywordDataInfo.md#tojson)
- [fromJS](KeywordDataInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordDataInfo**(`data?`): [`KeywordDataInfo`](KeywordDataInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md) |

#### Returns

[`KeywordDataInfo`](KeywordDataInfo.md)

#### Defined in

main.ts:79804

## Properties

### avg\_backlinks\_info

• `Optional` **avg\_backlinks\_info**: [`AvgBacklinksInfo`](AvgBacklinksInfo.md)

backlink data for the returned keyword
this object provides the average number of backlinks, referring pages and domains, as well as the average rank values among the top-10 websites ranking organically for the keyword

#### Implementation of

[IKeywordDataInfo](../interfaces/IKeywordDataInfo.md).[avg_backlinks_info](../interfaces/IKeywordDataInfo.md#avg_backlinks_info)

#### Defined in

main.ts:79797

___

### impressions\_info

• `Optional` **impressions\_info**: [`ImpressionsInfo`](ImpressionsInfo.md)

impressions data for the returned keyword idea
daily_impressions values provide a more accurate alternative to Google search volume data;
the 999 bid is used to mitigate account-specific factors Google considers when calculating impressions
learn more about impressions in this help center article

#### Implementation of

[IKeywordDataInfo](../interfaces/IKeywordDataInfo.md).[impressions_info](../interfaces/IKeywordDataInfo.md#impressions_info)

#### Defined in

main.ts:79791

___

### keyword

• `Optional` **keyword**: `string`

returned keyword idea

#### Implementation of

[IKeywordDataInfo](../interfaces/IKeywordDataInfo.md).[keyword](../interfaces/IKeywordDataInfo.md#keyword)

#### Defined in

main.ts:79778

___

### keyword\_info

• `Optional` **keyword\_info**: [`KeywordInfo`](KeywordInfo.md)

keyword data for the returned keyword idea

#### Implementation of

[IKeywordDataInfo](../interfaces/IKeywordDataInfo.md).[keyword_info](../interfaces/IKeywordDataInfo.md#keyword_info)

#### Defined in

main.ts:79784

___

### keyword\_properties

• `Optional` **keyword\_properties**: [`KeywordProperties`](KeywordProperties.md)

additional information about the keyword

#### Implementation of

[IKeywordDataInfo](../interfaces/IKeywordDataInfo.md).[keyword_properties](../interfaces/IKeywordDataInfo.md#keyword_properties)

#### Defined in

main.ts:79786

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IKeywordDataInfo](../interfaces/IKeywordDataInfo.md).[language_code](../interfaces/IKeywordDataInfo.md#language_code)

#### Defined in

main.ts:79782

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IKeywordDataInfo](../interfaces/IKeywordDataInfo.md).[location_code](../interfaces/IKeywordDataInfo.md#location_code)

#### Defined in

main.ts:79780

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IKeywordDataInfo](../interfaces/IKeywordDataInfo.md).[se_type](../interfaces/IKeywordDataInfo.md#se_type)

#### Defined in

main.ts:79776

___

### search\_intent\_info

• `Optional` **search\_intent\_info**: [`SearchIntentInfo`](SearchIntentInfo.md)

search intent info for the returned keyword
learn about search intent in this help center article

#### Implementation of

[IKeywordDataInfo](../interfaces/IKeywordDataInfo.md).[search_intent_info](../interfaces/IKeywordDataInfo.md#search_intent_info)

#### Defined in

main.ts:79800

___

### serp\_info

• `Optional` **serp\_info**: [`SerpInfo`](SerpInfo.md)

SERP data
the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database

#### Implementation of

[IKeywordDataInfo](../interfaces/IKeywordDataInfo.md).[serp_info](../interfaces/IKeywordDataInfo.md#serp_info)

#### Defined in

main.ts:79794

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

main.ts:79813

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

main.ts:79839

___

### fromJS

▸ **fromJS**(`data`): [`KeywordDataInfo`](KeywordDataInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordDataInfo`](KeywordDataInfo.md)

#### Defined in

main.ts:79832
