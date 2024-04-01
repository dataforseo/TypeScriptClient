[Documentation](../README.md) / [Exports](../modules.md) / IKeywordsDataGoogleTrendsExploreLiveResultInfo

# Interface: IKeywordsDataGoogleTrendsExploreLiveResultInfo

## Implemented by

- [`KeywordsDataGoogleTrendsExploreLiveResultInfo`](../classes/KeywordsDataGoogleTrendsExploreLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#check_url)
- [datetime](IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#datetime)
- [items](IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#items)
- [items\_count](IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#items_count)
- [keywords](IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#keywords)
- [language\_code](IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#language_code)
- [location\_code](IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#location_code)
- [type](IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to the Google Trends results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:123950

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:123955

___

### items

• `Optional` **items**: [`BaseGoogleTrendsItem`](../classes/BaseGoogleTrendsItem.md)[]

items on the Google Trends page

#### Defined in

main.ts:123959

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:123957

___

### keywords

• `Optional` **keywords**: `string`[]

keywords in a POST array

#### Defined in

main.ts:123939

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:123947

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:123944

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:123941
