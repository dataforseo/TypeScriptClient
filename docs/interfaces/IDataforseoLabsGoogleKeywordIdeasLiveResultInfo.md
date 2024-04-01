[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleKeywordIdeasLiveResultInfo

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

main.ts:83998

___

### items\_count

• `Optional` **items\_count**: `number`

number of results returned in the items array

#### Defined in

main.ts:83990

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:83986

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:83984

___

### offset

• `Optional` **offset**: `number`

current offset value

#### Defined in

main.ts:83992

___

### offset\_token

• `Optional` **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Defined in

main.ts:83996

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:83979

___

### seed\_keywords

• `Optional` **seed\_keywords**: `string`[]

keywords in a POST array
keywords are returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:83982

___

### total\_count

• `Optional` **total\_count**: `number`

total number of results relevant to your request in our database

#### Defined in

main.ts:83988
