[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo

# Interface: IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo

## Implemented by

- [`DataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](../classes/DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#se_type)
- [seed\_keywords](IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#seed_keywords)
- [total\_count](IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsSerpCompetitorsLiveItem`](../classes/DataforseoLabsSerpCompetitorsLiveItem.md)[]

contains detected SERP competitors and related data

#### Defined in

main.ts:88035

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:88033

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:88029

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:88026

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:88020

___

### seed\_keywords

• `Optional` **seed\_keywords**: `string`[]

keywords specified in the request
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:88023

___

### total\_count

• `Optional` **total\_count**: `number`

the total amount of results in our database relevant to your request

#### Defined in

main.ts:88031
