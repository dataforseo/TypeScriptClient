[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataGoogleTrendsExploreTaskGetResultInfo

# Class: KeywordsDataGoogleTrendsExploreTaskGetResultInfo

## Implements

- [`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleTrendsExploreTaskGetResultInfo()

> **new KeywordsDataGoogleTrendsExploreTaskGetResultInfo**(`data`?): [`KeywordsDataGoogleTrendsExploreTaskGetResultInfo`](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md)

#### Returns

[`KeywordsDataGoogleTrendsExploreTaskGetResultInfo`](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md)

#### Defined in

main.ts:123764

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to the Google Trends results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[`check_url`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#check_url)

#### Defined in

main.ts:123751

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[`datetime`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#datetime)

#### Defined in

main.ts:123756

***

### items?

> `optional` **items**: [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)[]

items on the Google Trends page

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[`items`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#items)

#### Defined in

main.ts:123760

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[`items_count`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#items_count)

#### Defined in

main.ts:123758

***

### keywords?

> `optional` **keywords**: `string`[]

keywords in a POST array

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[`keywords`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#keywords)

#### Defined in

main.ts:123740

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#language_code)

#### Defined in

main.ts:123748

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#location_code)

#### Defined in

main.ts:123745

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[`type`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#type)

#### Defined in

main.ts:123742

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:123773

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:123805

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleTrendsExploreTaskGetResultInfo`](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataGoogleTrendsExploreTaskGetResultInfo`](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md)

#### Defined in

main.ts:123798
