[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo

# Interface: IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo

## Implemented by

- [`DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](../classes/DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [keywords](IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#keywords)
- [language\_code](IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#language_name)
- [location\_code](IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#location_name)
- [tag](IDataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md#tag)

## Properties

### keywords

• `Optional` **keywords**: `string`[]

target keywords
required field
UTF-8 encoding
maximum number of keywords you can specify in this array: 1000
each keyword should be at least 3 characters long;
the keywords will be converted to lowercase format

#### Defined in

main.ts:104574

___

### language\_code

• `Optional` **language\_code**: `string`

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Defined in

main.ts:104604

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Defined in

main.ts:104597

___

### location\_code

• `Optional` **location\_code**: `number`

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

#### Defined in

main.ts:104590

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

#### Defined in

main.ts:104582

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:104610
