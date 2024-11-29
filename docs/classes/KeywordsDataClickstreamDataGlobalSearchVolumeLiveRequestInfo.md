[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo

# Class: KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo

## Implements

- [`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo()

> **new KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo**(`data`?): [`KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo.md)

#### Parameters

##### data?

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo.md)

#### Returns

[`KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo.md)

#### Defined in

main.ts:148002

## Properties

### keywords?

> `optional` **keywords**: `string`[]

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

#### Defined in

main.ts:147992

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo.md).[`tag`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo.md#tag)

#### Defined in

main.ts:147998

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:148011

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:148033

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo.md)

#### Defined in

main.ts:148026
