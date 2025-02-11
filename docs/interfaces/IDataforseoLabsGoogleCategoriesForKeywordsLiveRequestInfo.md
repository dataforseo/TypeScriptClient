[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo

# Interface: IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo

Defined in: main.ts:98000

## Indexable

\[`key`: `string`\]: `any`

## Properties

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:98007

target keywords
required field
UTF-8 encoding
maximum number of keywords you can specify in this array: 1000
the keywords will be converted to lowercase format
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:98021

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/google/categories_for_keywords/languages
example:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:98014

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/google/categories_for_keywords/languages
example:
English

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:98027

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
