[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo

# Class: KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo

Defined in: main.ts:147780

## Implements

- [`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo()

> **new KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo**(`data`?): [`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md)

Defined in: main.ts:147830

#### Parameters

##### data?

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md)

#### Returns

[`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md)

## Properties

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:147789

target keywords
required field
UTF-8 encoding
maximum number of keywords you can specify in this array: 1000
the keywords will be converted to lowercase format
Note: certain symbols and characters (e.g., UTF symbols, emojis) are not allowed
to learn more about which symbols and characters can be used, please refer to this article
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md#keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:147813

search engine language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages
example:
en

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md).[`language_code`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:147807

full name of search engine language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages
example:
English

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md).[`language_name`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:147801

search engine location code
required field if you don’t specify location_name
if you use this field, you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages
example:
2840

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:147795

full name of search engine location
required field if you don’t specify location_code 
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages
example:
London,England,United Kingdom

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md#location_name)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:147826

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md).[`tag`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md#tag)

***

### use\_clickstream?

> `optional` **use\_clickstream**: `boolean`

Defined in: main.ts:147820

use clickstream data to provide results
optional field
if set to true, you will get DataForSEO search volume values based on clickstream data;
if set to false, Bing search volume data will be used to calculate DataForSEO search volume;
default value: true;
Note: some locations may not be available for calculating Bing search volume, in this case search volume will be calculated based on clickstream data even if you set this parameter to false

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md).[`use_clickstream`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md#use_clickstream)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:147839

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:147866

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md)

Defined in: main.ts:147859

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md)
