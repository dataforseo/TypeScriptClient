[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IKeywordsDataGoogleTrendsExploreTaskGetResultInfo

# Interface: IKeywordsDataGoogleTrendsExploreTaskGetResultInfo

## Implemented by

- [`KeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../classes/KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#check_url)
- [datetime](IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#datetime)
- [items](IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#items)
- [items\_count](IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#items_count)
- [keywords](IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#keywords)
- [language\_code](IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#language_code)
- [location\_code](IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#location_code)
- [type](IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to the Google Trends results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:121307](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121307)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:121312](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121312)

___


### items

• `Optional` **items**: [`BaseGoogleTrendsItem`](../classes/BaseGoogleTrendsItem.md)[]

items on the Google Trends page

#### Defined in

[main.ts:121316](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121316)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:121314](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121314)

___


### keywords

• `Optional` **keywords**: `string`[]

keywords in a POST array

#### Defined in

[main.ts:121296](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121296)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:121304](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121304)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:121301](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121301)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:121298](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121298)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")