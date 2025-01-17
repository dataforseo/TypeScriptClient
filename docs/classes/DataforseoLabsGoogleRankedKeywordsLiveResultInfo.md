[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleRankedKeywordsLiveResultInfo

# Class: DataforseoLabsGoogleRankedKeywordsLiveResultInfo

Defined in: main.ts:101578

## Implements

- [`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleRankedKeywordsLiveResultInfo()

> **new DataforseoLabsGoogleRankedKeywordsLiveResultInfo**(`data`?): [`DataforseoLabsGoogleRankedKeywordsLiveResultInfo`](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)

Defined in: main.ts:101604

#### Parameters

##### data?

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleRankedKeywordsLiveResultInfo`](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DataforseoLabsLiveItem`](DataforseoLabsLiveItem.md)[]

Defined in: main.ts:101600

contains ranked keywords and related data

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:101592

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:101588

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:101585

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#location_code)

***

### metrics?

> `optional` **metrics**: `object`

Defined in: main.ts:101595

ranking data relevant to the specified domain
ranking data is provided by the rank_group parameters that show the result’s rank considering only equivalent SERP elements

#### Index Signature

\[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`metrics`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#metrics)

***

### metrics\_absolute?

> `optional` **metrics\_absolute**: `object`

Defined in: main.ts:101598

ranking data relevant to the specified domain
ranking data is provided by the rank_absolute parameters that indicate the result’s position among all SERP elements

#### Index Signature

\[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`metrics_absolute`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#metrics_absolute)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:101580

search engine type

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#se_type)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:101582

target domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#target)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:101590

total number of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:101613

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:101654

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleRankedKeywordsLiveResultInfo`](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)

Defined in: main.ts:101647

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleRankedKeywordsLiveResultInfo`](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)
