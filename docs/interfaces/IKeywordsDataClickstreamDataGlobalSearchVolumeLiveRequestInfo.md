[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo

# Interface: IKeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo

Defined in: main.ts:148281

## Indexable

\[`key`: `string`\]: `any`

## Properties

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:148291

target keywords
required field
UTF-8 encoding
maximum number of keywords you can specify in this array: 1000;
each keyword should be at least 3 characters long;
the keywords will be converted to lowercase format;
Note: certain symbols and characters (e.g., UTF symbols, emojis) are not allowed
to learn more about which symbols and characters can be used, please refer to this article
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:148297

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
