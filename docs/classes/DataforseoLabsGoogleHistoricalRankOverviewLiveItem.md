[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalRankOverviewLiveItem

# Class: DataforseoLabsGoogleHistoricalRankOverviewLiveItem

Defined in: main.ts:109656

## Implements

- [`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalRankOverviewLiveItem()

> **new DataforseoLabsGoogleHistoricalRankOverviewLiveItem**(`data`?): [`DataforseoLabsGoogleHistoricalRankOverviewLiveItem`](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)

Defined in: main.ts:109668

#### Parameters

##### data?

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveItem`](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)

## Properties

### metrics?

> `optional` **metrics**: `object`

Defined in: main.ts:109664

ranking data relevant to the specified domain

#### Index Signature

\[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#metrics)

***

### month?

> `optional` **month**: `number`

Defined in: main.ts:109662

month for which the data is provided

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md).[`month`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#month)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:109658

search engine type

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#se_type)

***

### year?

> `optional` **year**: `number`

Defined in: main.ts:109660

year for which the data is provided

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md).[`year`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#year)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:109677

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:109703

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalRankOverviewLiveItem`](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)

Defined in: main.ts:109696

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveItem`](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)
