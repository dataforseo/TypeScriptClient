[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsBingSerpCompetitorsLiveResultInfo

# Interface: IDataforseoLabsBingSerpCompetitorsLiveResultInfo

## Implemented by

- [`DataforseoLabsBingSerpCompetitorsLiveResultInfo`](../classes/DataforseoLabsBingSerpCompetitorsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#se_type)
- [seed\_keywords](IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#seed_keywords)
- [total\_count](IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsSerpCompetitorsLiveItem`](../classes/DataforseoLabsSerpCompetitorsLiveItem.md)[]

contains detected SERP competitors and related data

#### Defined in

[main.ts:107157](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107157)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:107155](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107155)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:107151](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107151)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:107148](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107148)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:107142](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107142)

___

### seed\_keywords

• `Optional` **seed\_keywords**: `string`[]

keywords specified in the request
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:107145](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107145)

___

### total\_count

• `Optional` **total\_count**: `number`

the total amount of results in our database relevant to your request

#### Defined in

[main.ts:107153](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107153)
