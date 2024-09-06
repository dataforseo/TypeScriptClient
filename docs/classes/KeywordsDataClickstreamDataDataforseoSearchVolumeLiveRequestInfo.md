[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo

# Class: KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo

## Implements

- [`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo()

> **new KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo**(`data`?): [`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md)

#### Returns

[`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md)

#### Defined in

main.ts:135736

## Properties

### keywords?

> `optional` **keywords**: `string`[]

target keywords
required field
UTF-8 encoding
maximum number of keywords you can specify in this array: 1000
the keywords will be converted to lowercase format
Note: certain symbols and characters (e.g., UTF symbols, emojis) are not allowed
to learn more about which symbols can be used, please refer to this article

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md#keywords)

#### Defined in

main.ts:135697

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages
example:
en

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md).[`language_code`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md#language_code)

#### Defined in

main.ts:135721

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages
example:
English

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md).[`language_name`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md#language_name)

#### Defined in

main.ts:135715

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name
if you use this field, you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages
example:
2840

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md#location_code)

#### Defined in

main.ts:135709

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code 
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages
example:
London,England,United Kingdom

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md#location_name)

#### Defined in

main.ts:135703

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md).[`tag`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md#tag)

#### Defined in

main.ts:135732

***

### use\_clickstream?

> `optional` **use\_clickstream**: `boolean`

use clickstream data to provide results
optional field
if this parameter set to true, you will get search volume rate based on clickstream data
otherwise, Bing search volume data will be used to calculate search volume

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md).[`use_clickstream`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md#use_clickstream)

#### Defined in

main.ts:135726

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:135745

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:135772

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md)

#### Defined in

main.ts:135765
