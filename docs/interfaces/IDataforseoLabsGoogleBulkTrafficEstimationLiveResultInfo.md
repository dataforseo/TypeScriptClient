[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo

# Interface: IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo

## Implemented by

- [`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../classes/DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#se_type)
- [total\_count](IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsBulkTrafficEstimationLiveItem`](../classes/DataforseoLabsBulkTrafficEstimationLiveItem.md)[]

array of items with relevant traffic estimation data

#### Defined in

main.ts:100228

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:100226

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:100222

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:100219

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:100216

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:100224
