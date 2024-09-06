[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsBingRankedKeywordsLiveResultInfo

# Class: DataforseoLabsBingRankedKeywordsLiveResultInfo

## Implements

- [`IDataforseoLabsBingRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingRankedKeywordsLiveResultInfo()

> **new DataforseoLabsBingRankedKeywordsLiveResultInfo**(`data`?): [`DataforseoLabsBingRankedKeywordsLiveResultInfo`](DataforseoLabsBingRankedKeywordsLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md)

#### Returns

[`DataforseoLabsBingRankedKeywordsLiveResultInfo`](DataforseoLabsBingRankedKeywordsLiveResultInfo.md)

#### Defined in

main.ts:109052

## Properties

### items?

> `optional` **items**: [`DataforseoLabsBingRankedKeywordsLiveItem`](DataforseoLabsBingRankedKeywordsLiveItem.md)[]

contains ranked keywords and related data

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#items)

#### Defined in

main.ts:109048

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#items_count)

#### Defined in

main.ts:109040

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#language_code)

#### Defined in

main.ts:109036

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#location_code)

#### Defined in

main.ts:109033

***

### metrics?

> `optional` **metrics**: `object`

ranking data relevant to the specified domain
ranking data is provided by the rank_group parameters that show the result’s rank considering only equivalent SERP elements

#### Index Signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[`metrics`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#metrics)

#### Defined in

main.ts:109043

***

### metrics\_absolute?

> `optional` **metrics\_absolute**: `object`

ranking data relevant to the specified domain
ranking data is provided by the rank_absolute parameters that indicate the result’s position among all SERP elements

#### Index Signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[`metrics_absolute`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#metrics_absolute)

#### Defined in

main.ts:109046

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#se_type)

#### Defined in

main.ts:109028

***

### target?

> `optional` **target**: `string`

target domain in a POST array

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#target)

#### Defined in

main.ts:109030

***

### total\_count?

> `optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResultInfo.md#total_count)

#### Defined in

main.ts:109038

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:109061

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:109102

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingRankedKeywordsLiveResultInfo`](DataforseoLabsBingRankedKeywordsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingRankedKeywordsLiveResultInfo`](DataforseoLabsBingRankedKeywordsLiveResultInfo.md)

#### Defined in

main.ts:109095
