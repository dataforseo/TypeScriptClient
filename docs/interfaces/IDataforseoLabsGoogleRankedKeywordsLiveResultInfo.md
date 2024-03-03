[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleRankedKeywordsLiveResultInfo

# Interface: IDataforseoLabsGoogleRankedKeywordsLiveResultInfo

## Implemented by

- [`DataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../classes/DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#location_code)
- [metrics](IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#metrics)
- [metrics\_absolute](IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#metrics_absolute)
- [se\_type](IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#se_type)
- [target](IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#target)
- [total\_count](IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsGoogleRankedKeywordsLiveItem`](../classes/DataforseoLabsGoogleRankedKeywordsLiveItem.md)[]

contains ranked keywords and related data

#### Defined in

main.ts:87375

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:87367

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:87363

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:87360

___

### metrics

• `Optional` **metrics**: `Object`

ranking data relevant to the specified domain
ranking data is provided by the rank_group parameters that show the result’s rank considering only equivalent SERP elements

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](../classes/MetricsInfo.md)

#### Defined in

main.ts:87370

___

### metrics\_absolute

• `Optional` **metrics\_absolute**: `Object`

ranking data relevant to the specified domain
ranking data is provided by the rank_absolute parameters that indicate the result’s position among all SERP elements

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](../classes/MetricsInfo.md)

#### Defined in

main.ts:87373

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:87355

___

### target

• `Optional` **target**: `string`

target domain in a POST array

#### Defined in

main.ts:87357

___

### total\_count

• `Optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Defined in

main.ts:87365
