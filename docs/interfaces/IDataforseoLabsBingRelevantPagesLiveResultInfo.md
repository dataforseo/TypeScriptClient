[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsBingRelevantPagesLiveResultInfo

# Interface: IDataforseoLabsBingRelevantPagesLiveResultInfo

## Implemented by

- [`DataforseoLabsBingRelevantPagesLiveResultInfo`](../classes/DataforseoLabsBingRelevantPagesLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsBingRelevantPagesLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsBingRelevantPagesLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsBingRelevantPagesLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsBingRelevantPagesLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsBingRelevantPagesLiveResultInfo.md#se_type)
- [target](IDataforseoLabsBingRelevantPagesLiveResultInfo.md#target)
- [total\_count](IDataforseoLabsBingRelevantPagesLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsRelevantPagesLiveItem`](../classes/DataforseoLabsRelevantPagesLiveItem.md)[]

relevant pages and related data

#### Defined in

main.ts:109012

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:109010

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:109006

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:109003

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:108998

___

### target

• `Optional` **target**: `string`

target domain in a POST array

#### Defined in

main.ts:109000

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:109008
