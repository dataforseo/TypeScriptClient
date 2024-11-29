[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo

# Class: DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo()

> **new DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md)

#### Parameters

##### data?

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md)

#### Defined in

main.ts:97853

## Properties

### keywords?

> `optional` **keywords**: `string`[]

target keywords
required field
UTF-8 encoding
maximum number of keywords you can specify in this array: 1000
the keywords will be converted to lowercase format
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md).[`keywords`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md#keywords)

#### Defined in

main.ts:97829

***

### language\_code?

> `optional` **language\_code**: `string`

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/google/categories_for_keywords/languages
example:
en

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md#language_code)

#### Defined in

main.ts:97843

***

### language\_name?

> `optional` **language\_name**: `string`

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/google/categories_for_keywords/languages
example:
English

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md#language_name)

#### Defined in

main.ts:97836

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md#tag)

#### Defined in

main.ts:97849

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:97862

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:97886

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo.md)

#### Defined in

main.ts:97879
