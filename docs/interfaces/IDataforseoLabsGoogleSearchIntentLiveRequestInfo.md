**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleSearchIntentLiveRequestInfo

# Interface: IDataforseoLabsGoogleSearchIntentLiveRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### keywords?

> **`optional`** **keywords**: `string`[]

target keywords
required field
UTF-8 encoding
maximum number of keywords you can specify in this array: 1000;
the keywords will be converted to lowercase format

#### Source

main.ts:86824

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
Note: this endpoint currently supports these languages only;
example:
en

#### Source

main.ts:86863

***

### language\_name?

> **`optional`** **language\_name**: `string`

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

#### Source

main.ts:86856

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Source

main.ts:86869
