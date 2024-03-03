[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsAppleKeywordsForAppLiveResultInfo

# Interface: IDataforseoLabsAppleKeywordsForAppLiveResultInfo

## Implemented by

- [`DataforseoLabsAppleKeywordsForAppLiveResultInfo`](../classes/DataforseoLabsAppleKeywordsForAppLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [app\_id](IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#app_id)
- [items](IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#se_type)
- [total\_count](IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#total_count)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

id of the app in a POST array

#### Defined in

main.ts:111123

___

### items

• `Optional` **items**: [`DataforseoLabsleKeywordsForAppLiveItem`](../classes/DataforseoLabsleKeywordsForAppLiveItem.md)[]

contains data related to the ranking keywords for the app specified in the app_id field

#### Defined in

main.ts:111133

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:111131

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:111127

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:111125

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:111121

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:111129
