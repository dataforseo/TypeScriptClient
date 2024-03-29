[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo

# Interface: IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo

## Implemented by

- [`DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../classes/DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#location_code)
- [offset](IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#offset)
- [offset\_token](IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#offset_token)
- [se\_type](IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#se_type)
- [seed\_keyword](IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#seed_keyword)
- [seed\_keyword\_data](IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#seed_keyword_data)
- [total\_count](IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)[]

contains keywords and related data

#### Defined in

[main.ts:81059](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81059)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:81051](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81051)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:81047](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81047)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:81045](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81045)

___


### offset

• `Optional` **offset**: `number`

current offset value

#### Defined in

[main.ts:81053](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81053)

___


### offset\_token

• `Optional` **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Defined in

[main.ts:81057](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81057)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:81038](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81038)

___


### seed\_keyword

• `Optional` **seed\_keyword**: `string`

keyword in a POST array

#### Defined in

[main.ts:81040](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81040)

___


### seed\_keyword\_data

• `Optional` **seed\_keyword\_data**: `Object`

keyword data for the seed keyword
fields in this object are identical to those of the items array

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[main.ts:81043](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81043)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

[main.ts:81049](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81049)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")