[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsBingRankedKeywordsLiveResultInfo

# Interface: IDataforseoLabsBingRankedKeywordsLiveResultInfo

## Implemented by

- [`DataforseoLabsBingRankedKeywordsLiveResultInfo`](../classes/DataforseoLabsBingRankedKeywordsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#location_code)
- [metrics](IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#metrics)
- [metrics\_absolute](IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#metrics_absolute)
- [se\_type](IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#se_type)
- [target](IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#target)
- [total\_count](IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsBingRankedKeywordsLiveItem`](../classes/DataforseoLabsBingRankedKeywordsLiveItem.md)[]

contains ranked keywords and related data

#### Defined in

main.ts:105649

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:105641

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:105637

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:105634

___

### metrics

• `Optional` **metrics**: `Object`

ranking data relevant to the specified domain
ranking data is provided by the rank_group parameters that show the result’s rank considering only equivalent SERP elements

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](../classes/MetricsInfo.md)

#### Defined in

main.ts:105644

___

### metrics\_absolute

• `Optional` **metrics\_absolute**: `Object`

ranking data relevant to the specified domain
ranking data is provided by the rank_absolute parameters that indicate the result’s position among all SERP elements

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](../classes/MetricsInfo.md)

#### Defined in

main.ts:105647

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:105629

___

### target

• `Optional` **target**: `string`

target domain in a POST array

#### Defined in

main.ts:105631

___

### total\_count

• `Optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Defined in

main.ts:105639
