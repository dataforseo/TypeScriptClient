[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsAmazonProductCompetitorsLiveResultInfo

# Interface: IDataforseoLabsAmazonProductCompetitorsLiveResultInfo

## Implemented by

- [`DataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../classes/DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [asin](IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#asin)
- [items](IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#se_type)
- [total\_count](IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#total_count)

## Properties

### asin

• `Optional` **asin**: `string`

ASIN in a POST array

#### Defined in

main.ts:101537

___

### items

• `Optional` **items**: [`DataforseoLabsAmazonProductCompetitorsLiveItem`](../classes/DataforseoLabsAmazonProductCompetitorsLiveItem.md)[]

contains detected Amazon product competitors and related data

#### Defined in

main.ts:101549

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:101547

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:101543

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:101540

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:101535

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:101545
