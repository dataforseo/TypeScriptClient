[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleRankedKeywordsLiveResultInfo

# Class: DataforseoLabsGoogleRankedKeywordsLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleRankedKeywordsLiveResultInfo()

> **new DataforseoLabsGoogleRankedKeywordsLiveResultInfo**(`data`?): [`DataforseoLabsGoogleRankedKeywordsLiveResultInfo`](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleRankedKeywordsLiveResultInfo`](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)

#### Defined in

main.ts:91785

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleRankedKeywordsLiveItem`](DataforseoLabsGoogleRankedKeywordsLiveItem.md)[]

contains ranked keywords and related data

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#items)

#### Defined in

main.ts:91781

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#items_count)

#### Defined in

main.ts:91773

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#language_code)

#### Defined in

main.ts:91769

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#location_code)

#### Defined in

main.ts:91766

***

### metrics?

> `optional` **metrics**: `object`

ranking data relevant to the specified domain
ranking data is provided by the rank_group parameters that show the result’s rank considering only equivalent SERP elements

#### Index Signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`metrics`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#metrics)

#### Defined in

main.ts:91776

***

### metrics\_absolute?

> `optional` **metrics\_absolute**: `object`

ranking data relevant to the specified domain
ranking data is provided by the rank_absolute parameters that indicate the result’s position among all SERP elements

#### Index Signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`metrics_absolute`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#metrics_absolute)

#### Defined in

main.ts:91779

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#se_type)

#### Defined in

main.ts:91761

***

### target?

> `optional` **target**: `string`

target domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#target)

#### Defined in

main.ts:91763

***

### total\_count?

> `optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#total_count)

#### Defined in

main.ts:91771

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:91794

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:91835

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleRankedKeywordsLiveResultInfo`](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleRankedKeywordsLiveResultInfo`](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)

#### Defined in

main.ts:91828
