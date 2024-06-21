**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalRankOverviewLiveItem

# Class: DataforseoLabsGoogleHistoricalRankOverviewLiveItem

## Implements

- [`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalRankOverviewLiveItem(data)

> **new DataforseoLabsGoogleHistoricalRankOverviewLiveItem**(`data`?): [`DataforseoLabsGoogleHistoricalRankOverviewLiveItem`](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveItem`](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)

#### Source

main.ts:100644

## Properties

### metrics?

> **`optional`** **metrics**: `Object`

ranking data relevant to the specified domain

#### Index signature

 \[`key`: `string`\]: [`MetricsInfo`](MetricsInfo.md)

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#metrics)

#### Source

main.ts:100640

***

### month?

> **`optional`** **month**: `number`

month for which the data is provided

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md).[`month`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#month)

#### Source

main.ts:100638

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#se_type)

#### Source

main.ts:100634

***

### year?

> **`optional`** **year**: `number`

year for which the data is provided

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md).[`year`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#year)

#### Source

main.ts:100636

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:100653

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:100679

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalRankOverviewLiveItem`](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveItem`](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)

#### Source

main.ts:100672
