[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo

# Class: DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo

Defined in: main.ts:97918

## Implements

- [`IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo()

> **new DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md)

Defined in: main.ts:97949

#### Parameters

##### data?

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md)

## Properties

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:97925

target keywords
required field
UTF-8 encoding
maximum number of keywords you can specify in this array: 1000
the keywords will be converted to lowercase format
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md).[`keywords`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md#keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:97939

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/google/categories_for_keywords/languages
example:
en

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:97932

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/google/categories_for_keywords/languages
example:
English

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md#language_name)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:97945

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:97958

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:97982

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md)

Defined in: main.ts:97975

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md)
