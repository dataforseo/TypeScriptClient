[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo

# Class: DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo

Defined in: main.ts:109680

## Implements

- [`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo()

> **new DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo**(`data`?): [`DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)

Defined in: main.ts:109698

#### Parameters

##### data?

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleHistoricalRankOverviewLiveItem`](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)[]

Defined in: main.ts:109694

contains historical ranking and traffic data

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:109692

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:109688

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:109686

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:109682

search engine type

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#se_type)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:109684

target domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#target)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:109690

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:109707

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:109734

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)

Defined in: main.ts:109727

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)
