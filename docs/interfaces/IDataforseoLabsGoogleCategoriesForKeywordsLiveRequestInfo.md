[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo

# Interface: IDataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### keywords?

> `optional` **keywords**: `string`[]

target keywords
required field
UTF-8 encoding
maximum number of keywords you can specify in this array: 1000
each keyword should be at least 3 characters long;
the keywords will be converted to lowercase format

#### Defined in

main.ts:89488

***

### language\_code?

> `optional` **language\_code**: `string`

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/google/categories_for_keywords/languages
example:
en

#### Defined in

main.ts:89502

***

### language\_name?

> `optional` **language\_name**: `string`

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/google/categories_for_keywords/languages
example:
English

#### Defined in

main.ts:89495

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:89508
