[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleTrendsExploreLiveResultInfo

# Class: KeywordsDataGoogleTrendsExploreLiveResultInfo

Defined in: main.ts:134910

## Implements

- [`IKeywordsDataGoogleTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleTrendsExploreLiveResultInfo()

> **new KeywordsDataGoogleTrendsExploreLiveResultInfo**(`data`?): [`KeywordsDataGoogleTrendsExploreLiveResultInfo`](KeywordsDataGoogleTrendsExploreLiveResultInfo.md)

Defined in: main.ts:134936

#### Parameters

##### data?

[`IKeywordsDataGoogleTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md)

#### Returns

[`KeywordsDataGoogleTrendsExploreLiveResultInfo`](KeywordsDataGoogleTrendsExploreLiveResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:134923

direct URL to the Google Trends results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md).[`check_url`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:134928

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md).[`datetime`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)[]

Defined in: main.ts:134932

items on the Google Trends page

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md).[`items`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:134930

the number of results returned in the items array

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md).[`items_count`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#items_count)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:134912

keywords in a POST array

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md).[`keywords`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:134920

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:134917

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#location_code)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:134914

type of element

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md).[`type`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:134945

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:134977

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleTrendsExploreLiveResultInfo`](KeywordsDataGoogleTrendsExploreLiveResultInfo.md)

Defined in: main.ts:134970

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleTrendsExploreLiveResultInfo`](KeywordsDataGoogleTrendsExploreLiveResultInfo.md)
