[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsDomainRankOverviewLiveItem

# Interface: IDataforseoLabsDomainRankOverviewLiveItem

## Implemented by

- [`DataforseoLabsDomainRankOverviewLiveItem`](../classes/DataforseoLabsDomainRankOverviewLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [language\_code](IDataforseoLabsDomainRankOverviewLiveItem.md#language_code)
- [location\_code](IDataforseoLabsDomainRankOverviewLiveItem.md#location_code)
- [metrics](IDataforseoLabsDomainRankOverviewLiveItem.md#metrics)
- [se\_type](IDataforseoLabsDomainRankOverviewLiveItem.md#se_type)

## Properties

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:93118

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:93116

___

### metrics

• `Optional` **metrics**: `Object`

ranking data relevant to the specified domain

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](../classes/MetricsInfo.md)

#### Defined in

main.ts:93120

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:93114
