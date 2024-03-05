[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo

# Interface: IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo

## Implemented by

- [`DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo`](../classes/DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_from](IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#date_from)
- [date\_to](IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#date_to)
- [keyword](IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#keyword)
- [language\_code](IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#language_name)
- [location\_code](IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#location_name)
- [tag](IDataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md#tag)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
optional field
if you don’t specify this field, the API will return all SERPs collected for 365 days starting from the current datetime value;
minimal possible value: 365 days from the current datetime value;
date format: "yyyy-mm-dd"

#### Defined in

[main.ts:91076](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91076)

___

### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default;
date format: "yyyy-mm-dd";
example:
"2021-09-01"

#### Defined in

[main.ts:91083](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91083)

___

### keyword

• `Optional` **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field;
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character);
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”

#### Defined in

[main.ts:91070](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91070)

___

### language\_code

• `Optional` **language\_code**: `string`

language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Defined in

[main.ts:91113](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91113)

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Defined in

[main.ts:91105](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91105)

___

### location\_code

• `Optional` **location\_code**: `number`

unique location identifier
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Defined in

[main.ts:91097](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91097)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Defined in

[main.ts:91090](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91090)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:91119](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91119)
