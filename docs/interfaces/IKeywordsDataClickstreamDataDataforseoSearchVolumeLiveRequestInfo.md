[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo

# Interface: IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo

Defined in: main.ts:147887

## Indexable

\[`key`: `string`\]: `any`

## Properties

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:147896

target keywords
required field
UTF-8 encoding
maximum number of keywords you can specify in this array: 1000
the keywords will be converted to lowercase format
Note: certain symbols and characters (e.g., UTF symbols, emojis) are not allowed
to learn more about which symbols and characters can be used, please refer to this article
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:147920

search engine language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages
example:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:147914

full name of search engine language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages
example:
English

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:147908

search engine location code
required field if you don’t specify location_name
if you use this field, you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages
example:
2840

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:147902

full name of search engine location
required field if you don’t specify location_code 
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages
example:
London,England,United Kingdom

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:147933

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### use\_clickstream?

> `optional` **use\_clickstream**: `boolean`

Defined in: main.ts:147927

use clickstream data to provide results
optional field
if set to true, you will get DataForSEO search volume values based on clickstream data;
if set to false, Bing search volume data will be used to calculate DataForSEO search volume;
default value: true;
Note: some locations may not be available for calculating Bing search volume, in this case search volume will be calculated based on clickstream data even if you set this parameter to false
