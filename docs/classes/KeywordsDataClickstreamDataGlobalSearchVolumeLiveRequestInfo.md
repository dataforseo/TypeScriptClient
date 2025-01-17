[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo

# Class: KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo

Defined in: main.ts:148050

## Implements

- [`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo()

> **new KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo**(`data`?): [`KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo.md)

Defined in: main.ts:148070

#### Parameters

##### data?

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo.md)

#### Returns

[`KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo.md)

## Properties

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:148060

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

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo.md#keywords)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:148066

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo.md).[`tag`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:148079

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:148101

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo.md)

Defined in: main.ts:148094

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo.md)
