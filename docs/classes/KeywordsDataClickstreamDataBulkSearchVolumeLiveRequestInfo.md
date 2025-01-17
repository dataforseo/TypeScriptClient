[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo

# Class: KeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo

Defined in: main.ts:148452

## Implements

- [`IKeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo()

> **new KeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo**(`data`?): [`KeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo.md)

Defined in: main.ts:148488

#### Parameters

##### data?

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo.md)

#### Returns

[`KeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo.md)

## Properties

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:148462

target keywords
required field
UTF-8 encoding
maximum number of keywords you can specify in this array: 1000;
each keyword should be at least 3 characters long;
the keywords will be converted to lowercase format;
Note: certain symbols and characters (e.g., UTF symbols, emojis) are not allowed
to learn more about which symbols and characters can be used, please refer to this article
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo.md#keywords)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:148478

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages
example:
2840

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:148470

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages
example:
United Kingdom

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo.md#location_name)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:148484

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo.md).[`tag`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:148497

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:148521

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo.md)

Defined in: main.ts:148514

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo.md)
