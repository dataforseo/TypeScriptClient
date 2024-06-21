**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleRankedKeywordsLiveResultInfo

# Class: DataforseoLabsGoogleRankedKeywordsLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleRankedKeywordsLiveResultInfo(data)

> **new DataforseoLabsGoogleRankedKeywordsLiveResultInfo**(`data`?): [`DataforseoLabsGoogleRankedKeywordsLiveResultInfo`](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleRankedKeywordsLiveResultInfo`](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)

#### Source

main.ts:91434

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsGoogleRankedKeywordsLiveItem`](DataforseoLabsGoogleRankedKeywordsLiveItem.md)[]

contains ranked keywords and related data

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#items)

#### Source

main.ts:91430

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#items_count)

#### Source

main.ts:91422

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#language_code)

#### Source

main.ts:91418

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#location_code)

#### Source

main.ts:91415

***

### metrics?

> **`optional`** **metrics**: `Object`

ranking data relevant to the specified domain
ranking data is provided by the rank_group parameters that show the result’s rank considering only equivalent SERP elements

#### Index signature

 \[`key`: `string`\]: [`MetricsInfo`](MetricsInfo.md)

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`metrics`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#metrics)

#### Source

main.ts:91425

***

### metrics\_absolute?

> **`optional`** **metrics\_absolute**: `Object`

ranking data relevant to the specified domain
ranking data is provided by the rank_absolute parameters that indicate the result’s position among all SERP elements

#### Index signature

 \[`key`: `string`\]: [`MetricsInfo`](MetricsInfo.md)

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`metrics_absolute`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#metrics_absolute)

#### Source

main.ts:91428

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#se_type)

#### Source

main.ts:91410

***

### target?

> **`optional`** **target**: `string`

target domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#target)

#### Source

main.ts:91412

***

### total\_count?

> **`optional`** **total\_count**: `number`

total number of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#total_count)

#### Source

main.ts:91420

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:91443

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:91484

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleRankedKeywordsLiveResultInfo`](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleRankedKeywordsLiveResultInfo`](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)

#### Source

main.ts:91477
