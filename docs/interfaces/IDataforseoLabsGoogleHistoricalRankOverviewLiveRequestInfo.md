[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo

# Interface: IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo

## Implemented by

- [`DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](../classes/DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [correlate](IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#correlate)
- [date\_from](IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#date_from)
- [date\_to](IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#date_to)
- [language\_code](IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#language_name)
- [location\_code](IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#location_name)
- [tag](IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#tag)
- [target](IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md#target)

## Properties

### correlate

• `Optional` **correlate**: `boolean`

correlate data with previously obtained datasets
optional field
default value: true
if you use this parameter, our system will correlate data you obtain now with previously obtained datasets
this parameter is intended to mitigate any inconsistencies that may result from changes to our database
we recommend always setting correlate to true

#### Defined in

main.ts:96569

___

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
optional field
if you don’t specify this field, the data will be provided for the previous 6 months
minimal possible value: 2020-10-01
date format: "yyyy-mm-dd"

#### Defined in

main.ts:96555

___

### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2021-04-01"

#### Defined in

main.ts:96562

___

### language\_code

• `Optional` **language\_code**: `string`

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Defined in

main.ts:96549

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Defined in

main.ts:96541

___

### location\_code

• `Optional` **location\_code**: `number`

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Defined in

main.ts:96533

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Defined in

main.ts:96525

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:96575

___

### target

• `Optional` **target**: `string`

domain
required field
the domain name of the target website
the domain should be specified without https:// and www.

#### Defined in

main.ts:96517
