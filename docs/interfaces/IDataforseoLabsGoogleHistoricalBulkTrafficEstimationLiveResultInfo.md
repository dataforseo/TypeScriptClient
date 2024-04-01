[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo

# Interface: IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo

## Implemented by

- [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](../classes/DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#se_type)
- [total\_count](IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem`](../classes/DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem.md)[]

array of items with relevant traffic estimation data

#### Defined in

main.ts:100876

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:100874

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:100870

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:100867

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:100864

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:100872
