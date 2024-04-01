[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleSearchIntentLiveRequestInfo

# Interface: IDataforseoLabsGoogleSearchIntentLiveRequestInfo

## Implemented by

- [`DataforseoLabsGoogleSearchIntentLiveRequestInfo`](../classes/DataforseoLabsGoogleSearchIntentLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [keywords](IDataforseoLabsGoogleSearchIntentLiveRequestInfo.md#keywords)
- [language\_code](IDataforseoLabsGoogleSearchIntentLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsGoogleSearchIntentLiveRequestInfo.md#language_name)
- [tag](IDataforseoLabsGoogleSearchIntentLiveRequestInfo.md#tag)

## Properties

### keywords

• `Optional` **keywords**: `string`[]

target keywords
required field
UTF-8 encoding
maximum number of keywords you can specify in this array: 1000;
the keywords will be converted to lowercase format

#### Defined in

main.ts:85119

___

### language\_code

• `Optional` **language\_code**: `string`

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
Note: this endpoint currently supports these languages only;
example:
en

#### Defined in

main.ts:85158

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages

Note: this endpoint currently supports the following languages only:
Arabic, ar,
Chinese(Traditional), zh-TW,
Czech, cs,
Danish, da,
Dutch, nl,
English, en,
Finnish, fi,
French, fr,
German, de,
Hebrew, he,
Hindi, hi,
Italian, it,
Japanese, ja,
Korean, ko,
Malay, ms,
Norwegian(Bokmål), nb,
Polish, pl,
Portuguese, pt,
Russian, ru,
Spanish, es,
Swedish, sv,
Thai, th,
Ukrainian, uk,
Vietnamese, vi
example:
English

#### Defined in

main.ts:85151

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:85164
