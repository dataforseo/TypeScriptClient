[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleRelevantPagesLiveResultInfo

# Interface: IDataforseoLabsGoogleRelevantPagesLiveResultInfo

## Implemented by

- [`DataforseoLabsGoogleRelevantPagesLiveResultInfo`](../classes/DataforseoLabsGoogleRelevantPagesLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#se_type)
- [target](IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#target)
- [total\_count](IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsRelevantPagesLiveItem`](../classes/DataforseoLabsRelevantPagesLiveItem.md)[]

relevant pages and related data

#### Defined in

main.ts:92744

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:92742

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:92738

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:92735

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:92730

___

### target

• `Optional` **target**: `string`

target domain in a POST array

#### Defined in

main.ts:92732

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:92740
