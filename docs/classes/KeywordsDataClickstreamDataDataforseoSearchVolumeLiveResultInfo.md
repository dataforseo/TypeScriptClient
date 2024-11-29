[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo

# Class: KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo

## Implements

- [`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo()

> **new KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo**(`data`?): [`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md)

#### Parameters

##### data?

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md)

#### Returns

[`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md)

#### Defined in

main.ts:147798

## Properties

### items?

> `optional` **items**: [`KeywordsDataClickstreamDataSearchVolumeLiveItem`](KeywordsDataClickstreamDataSearchVolumeLiveItem.md)[]

array of keywords
contains keywords and their search volume rates

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md).[`items`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md#items)

#### Defined in

main.ts:147794

***

### items\_count?

> `optional` **items\_count**: `string`

ithe number of results returned in the items array

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md).[`items_count`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md#items_count)

#### Defined in

main.ts:147791

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

Note:if the keyword in the POST array appears to be misspelled, data will be returned for the correctly spelled keyword;
we use the functionality of Google Ads API to check and validate the spelling of keywords, learn more by this link

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md#language_code)

#### Defined in

main.ts:147786

***

### location\_code?

> `optional` **location\_code**: `string`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md#location_code)

#### Defined in

main.ts:147781

***

### use\_clickstream?

> `optional` **use\_clickstream**: `boolean`

indicates if the use_clickstream parameter is active
possible values: true, false

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md).[`use_clickstream`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md#use_clickstream)

#### Defined in

main.ts:147789

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:147807

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:147832

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md)

#### Defined in

main.ts:147825
