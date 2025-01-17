[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingRankedKeywordsLiveResultInfo

# Class: DataforseoLabsBingRankedKeywordsLiveResultInfo

Defined in: main.ts:118504

## Implements

- [`IDataforseoLabsBingRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingRankedKeywordsLiveResultInfo()

> **new DataforseoLabsBingRankedKeywordsLiveResultInfo**(`data`?): [`DataforseoLabsBingRankedKeywordsLiveResultInfo`](DataforseoLabsBingRankedKeywordsLiveResultInfo.md)

Defined in: main.ts:118530

#### Parameters

##### data?

[`IDataforseoLabsBingRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md)

#### Returns

[`DataforseoLabsBingRankedKeywordsLiveResultInfo`](DataforseoLabsBingRankedKeywordsLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DataforseoLabsLiveItem`](DataforseoLabsLiveItem.md)[]

Defined in: main.ts:118526

contains ranked keywords and related data

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:118518

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:118514

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:118511

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#location_code)

***

### metrics?

> `optional` **metrics**: `object`

Defined in: main.ts:118521

ranking data relevant to the specified domain
ranking data is provided by the rank_group parameters that show the result’s rank considering only equivalent SERP elements

#### Index Signature

\[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[`metrics`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#metrics)

***

### metrics\_absolute?

> `optional` **metrics\_absolute**: `object`

Defined in: main.ts:118524

ranking data relevant to the specified domain
ranking data is provided by the rank_absolute parameters that indicate the result’s position among all SERP elements

#### Index Signature

\[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[`metrics_absolute`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#metrics_absolute)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:118506

search engine type

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#se_type)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:118508

target domain in a POST array

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#target)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:118516

total number of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:118539

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:118580

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingRankedKeywordsLiveResultInfo`](DataforseoLabsBingRankedKeywordsLiveResultInfo.md)

Defined in: main.ts:118573

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsBingRankedKeywordsLiveResultInfo`](DataforseoLabsBingRankedKeywordsLiveResultInfo.md)
