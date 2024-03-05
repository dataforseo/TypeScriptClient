[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsBingRelatedKeywordsLiveResultInfo

# Interface: IDataforseoLabsBingRelatedKeywordsLiveResultInfo

## Implemented by

- [`DataforseoLabsBingRelatedKeywordsLiveResultInfo`](../classes/DataforseoLabsBingRelatedKeywordsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#se_type)
- [seed\_keyword](IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#seed_keyword)
- [seed\_keyword\_data](IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#seed_keyword_data)
- [total\_count](IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsBingRelatedKeywordsLiveItem`](../classes/DataforseoLabsBingRelatedKeywordsLiveItem.md)[]

contains keywords and related data

#### Defined in

[main.ts:106119](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106119)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:106117](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106117)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:106113](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106113)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:106111](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106111)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:106104](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106104)

___

### seed\_keyword

• `Optional` **seed\_keyword**: `string`

keyword in a POST array

#### Defined in

[main.ts:106106](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106106)

___

### seed\_keyword\_data

• `Optional` **seed\_keyword\_data**: [`KeywordData`](../classes/KeywordData.md)

keyword data for the seed keyword
fields in the array are identical to that of keyword_data

#### Defined in

[main.ts:106109](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106109)

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

[main.ts:106115](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106115)
