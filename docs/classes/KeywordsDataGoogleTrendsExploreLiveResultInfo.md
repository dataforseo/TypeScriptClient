[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleTrendsExploreLiveResultInfo

# Class: KeywordsDataGoogleTrendsExploreLiveResultInfo

## Implements

- [`IKeywordsDataGoogleTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleTrendsExploreLiveResultInfo()

> **new KeywordsDataGoogleTrendsExploreLiveResultInfo**(`data`?): [`KeywordsDataGoogleTrendsExploreLiveResultInfo`](KeywordsDataGoogleTrendsExploreLiveResultInfo.md)

#### Parameters

##### data?

[`IKeywordsDataGoogleTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md)

#### Returns

[`KeywordsDataGoogleTrendsExploreLiveResultInfo`](KeywordsDataGoogleTrendsExploreLiveResultInfo.md)

#### Defined in

main.ts:134868

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to the Google Trends results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md).[`check_url`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#check_url)

#### Defined in

main.ts:134855

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md).[`datetime`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#datetime)

#### Defined in

main.ts:134860

***

### items?

> `optional` **items**: [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)[]

items on the Google Trends page

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md).[`items`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#items)

#### Defined in

main.ts:134864

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md).[`items_count`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#items_count)

#### Defined in

main.ts:134862

***

### keywords?

> `optional` **keywords**: `string`[]

keywords in a POST array

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md).[`keywords`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#keywords)

#### Defined in

main.ts:134844

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#language_code)

#### Defined in

main.ts:134852

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#location_code)

#### Defined in

main.ts:134849

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md).[`type`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#type)

#### Defined in

main.ts:134846

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:134877

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:134909

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleTrendsExploreLiveResultInfo`](KeywordsDataGoogleTrendsExploreLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleTrendsExploreLiveResultInfo`](KeywordsDataGoogleTrendsExploreLiveResultInfo.md)

#### Defined in

main.ts:134902
