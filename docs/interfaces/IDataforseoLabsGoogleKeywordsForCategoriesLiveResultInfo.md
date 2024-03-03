[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo

# Interface: IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo

## Implemented by

- [`DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../classes/DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#location_code)
- [offset](IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#offset)
- [offset\_token](IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#offset_token)
- [se\_type](IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#se_type)
- [seed\_categories](IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#seed_categories)
- [total\_count](IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)[]

contains keyword ideas and related data

#### Defined in

main.ts:84263

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:84255

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:84251

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:84249

___

### offset

• `Optional` **offset**: `number`

current offset value

#### Defined in

main.ts:84257

___

### offset\_token

• `Optional` **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Defined in

main.ts:84261

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:84245

___

### seed\_categories

• `Optional` **seed\_categories**: `number`[]

categories in a POST array

#### Defined in

main.ts:84247

___

### total\_count

• `Optional` **total\_count**: `number`

the total amount of results in our database relevant to your request

#### Defined in

main.ts:84253
