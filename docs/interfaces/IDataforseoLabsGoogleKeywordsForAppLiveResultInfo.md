[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleKeywordsForAppLiveResultInfo

# Interface: IDataforseoLabsGoogleKeywordsForAppLiveResultInfo

## Implemented by

- [`DataforseoLabsGoogleKeywordsForAppLiveResultInfo`](../classes/DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [app\_id](IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#app_id)
- [items](IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#se_type)
- [total\_count](IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#total_count)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

id of the app in a POST array

#### Defined in

main.ts:111224

___

### items

• `Optional` **items**: [`DataforseoLabsleKeywordsForAppLiveItem`](../classes/DataforseoLabsleKeywordsForAppLiveItem.md)[]

contains data related to the ranking keywords for the app specified in the app_id field

#### Defined in

main.ts:111234

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:111232

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:111228

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:111226

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:111222

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:111230
