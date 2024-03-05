[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleKeywordIdeasLiveResultInfo

# Interface: IDataforseoLabsGoogleKeywordIdeasLiveResultInfo

## Implemented by

- [`DataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../classes/DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#location_code)
- [offset](IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#offset)
- [offset\_token](IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#offset_token)
- [se\_type](IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#se_type)
- [seed\_keywords](IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#seed_keywords)
- [total\_count](IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)[]

contains keyword ideas and related data

#### Defined in

[main.ts:81621](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81621)

___

### items\_count

• `Optional` **items\_count**: `number`

number of results returned in the items array

#### Defined in

[main.ts:81613](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81613)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:81609](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81609)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:81607](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81607)

___

### offset

• `Optional` **offset**: `number`

current offset value

#### Defined in

[main.ts:81615](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81615)

___

### offset\_token

• `Optional` **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Defined in

[main.ts:81619](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81619)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:81602](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81602)

___

### seed\_keywords

• `Optional` **seed\_keywords**: `string`[]

keywords in a POST array
keywords are returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:81605](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81605)

___

### total\_count

• `Optional` **total\_count**: `number`

total number of results relevant to your request in our database

#### Defined in

[main.ts:81611](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81611)
