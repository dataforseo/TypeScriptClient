[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo

# Interface: IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### keywords?

> `optional` **keywords**: `string`[]

target keywords
required field
UTF-8 encoding
maximum number of keywords you can specify in this array: 1000
the keywords will be converted to lowercase format
Note: certain symbols and characters (e.g., UTF symbols, emojis) are not allowed
to learn more about which symbols and characters can be used, please refer to this article
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Defined in

main.ts:147664

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages
example:
en

#### Defined in

main.ts:147688

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages
example:
English

#### Defined in

main.ts:147682

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name
if you use this field, you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages
example:
2840

#### Defined in

main.ts:147676

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code 
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages
example:
London,England,United Kingdom

#### Defined in

main.ts:147670

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:147701

***

### use\_clickstream?

> `optional` **use\_clickstream**: `boolean`

use clickstream data to provide results
optional field
if set to true, you will get DataForSEO search volume values based on clickstream data;
if set to false, Bing search volume data will be used to calculate DataForSEO search volume;
default value: true;
Note: some locations may not be available for calculating Bing search volume, in this case search volume will be calculated based on clickstream data even if you set this parameter to false

#### Defined in

main.ts:147695
