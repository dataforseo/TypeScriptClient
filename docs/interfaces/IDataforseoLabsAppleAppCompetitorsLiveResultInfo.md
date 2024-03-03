[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsAppleAppCompetitorsLiveResultInfo

# Interface: IDataforseoLabsAppleAppCompetitorsLiveResultInfo

## Implemented by

- [`DataforseoLabsAppleAppCompetitorsLiveResultInfo`](../classes/DataforseoLabsAppleAppCompetitorsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [app\_id](IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#app_id)
- [items](IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#se_type)
- [total\_count](IDataforseoLabsAppleAppCompetitorsLiveResultInfo.md#total_count)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

id of the app in a POST array

#### Defined in

main.ts:111739

___

### items

• `Optional` **items**: [`DataforseoLabsAppleAppCompetitorsLiveItem`](../classes/DataforseoLabsAppleAppCompetitorsLiveItem.md)[]

contains data related to the app_id and competitor applications

#### Defined in

main.ts:111749

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:111747

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:111743

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:111741

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:111737

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:111745
