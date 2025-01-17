[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleTrendsExploreTaskGetResultInfo

# Class: KeywordsDataGoogleTrendsExploreTaskGetResultInfo

Defined in: main.ts:134088

## Implements

- [`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleTrendsExploreTaskGetResultInfo()

> **new KeywordsDataGoogleTrendsExploreTaskGetResultInfo**(`data`?): [`KeywordsDataGoogleTrendsExploreTaskGetResultInfo`](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md)

Defined in: main.ts:134114

#### Parameters

##### data?

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md)

#### Returns

[`KeywordsDataGoogleTrendsExploreTaskGetResultInfo`](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:134101

direct URL to the Google Trends results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[`check_url`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:134106

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[`datetime`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)[]

Defined in: main.ts:134110

items on the Google Trends page

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[`items`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:134108

the number of results returned in the items array

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[`items_count`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#items_count)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:134090

keywords in a POST array

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[`keywords`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:134098

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:134095

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#location_code)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:134092

type of element

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[`type`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:134123

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:134155

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleTrendsExploreTaskGetResultInfo`](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md)

Defined in: main.ts:134148

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleTrendsExploreTaskGetResultInfo`](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md)
