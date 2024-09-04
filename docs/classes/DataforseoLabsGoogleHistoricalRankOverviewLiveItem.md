[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleHistoricalRankOverviewLiveItem

# Class: DataforseoLabsGoogleHistoricalRankOverviewLiveItem

## Implements

- [`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalRankOverviewLiveItem()

> **new DataforseoLabsGoogleHistoricalRankOverviewLiveItem**(`data`?): [`DataforseoLabsGoogleHistoricalRankOverviewLiveItem`](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveItem`](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)

#### Defined in

main.ts:99773

## Properties

### metrics?

> `optional` **metrics**: `object`

ranking data relevant to the specified domain

#### Index Signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#metrics)

#### Defined in

main.ts:99769

***

### month?

> `optional` **month**: `number`

month for which the data is provided

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md).[`month`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#month)

#### Defined in

main.ts:99767

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#se_type)

#### Defined in

main.ts:99763

***

### year?

> `optional` **year**: `number`

year for which the data is provided

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md).[`year`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#year)

#### Defined in

main.ts:99765

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:99782

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:99808

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalRankOverviewLiveItem`](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveItem`](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)

#### Defined in

main.ts:99801
