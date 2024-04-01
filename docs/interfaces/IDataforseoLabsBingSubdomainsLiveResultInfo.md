[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsBingSubdomainsLiveResultInfo

# Interface: IDataforseoLabsBingSubdomainsLiveResultInfo

## Implemented by

- [`DataforseoLabsBingSubdomainsLiveResultInfo`](../classes/DataforseoLabsBingSubdomainsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsBingSubdomainsLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsBingSubdomainsLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsBingSubdomainsLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsBingSubdomainsLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsBingSubdomainsLiveResultInfo.md#se_type)
- [target](IDataforseoLabsBingSubdomainsLiveResultInfo.md#target)
- [total\_count](IDataforseoLabsBingSubdomainsLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsSubdomainsLiveItem`](../classes/DataforseoLabsSubdomainsLiveItem.md)[]

contains subdomains and related data

#### Defined in

main.ts:110046

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:110044

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:110040

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:110038

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:110034

___

### target

• `Optional` **target**: `string`

domain in a POST array

#### Defined in

main.ts:110036

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:110042
