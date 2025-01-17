[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleSearchIntentLiveRequestInfo

# Class: DataforseoLabsGoogleSearchIntentLiveRequestInfo

Defined in: main.ts:96404

## Implements

- [`IDataforseoLabsGoogleSearchIntentLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleSearchIntentLiveRequestInfo()

> **new DataforseoLabsGoogleSearchIntentLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleSearchIntentLiveRequestInfo`](DataforseoLabsGoogleSearchIntentLiveRequestInfo.md)

Defined in: main.ts:96460

#### Parameters

##### data?

[`IDataforseoLabsGoogleSearchIntentLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleSearchIntentLiveRequestInfo`](DataforseoLabsGoogleSearchIntentLiveRequestInfo.md)

## Properties

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:96411

target keywords
required field
UTF-8 encoding
maximum number of keywords you can specify in this array: 1000;
the keywords will be converted to lowercase format
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveRequestInfo.md).[`keywords`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveRequestInfo.md#keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:96450

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
Note: this endpoint currently supports these languages only;
example:
en

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:96443

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

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveRequestInfo.md#language_name)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:96456

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:96469

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:96493

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleSearchIntentLiveRequestInfo`](DataforseoLabsGoogleSearchIntentLiveRequestInfo.md)

Defined in: main.ts:96486

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleSearchIntentLiveRequestInfo`](DataforseoLabsGoogleSearchIntentLiveRequestInfo.md)
