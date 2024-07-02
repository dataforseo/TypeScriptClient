**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo

# Class: DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo(data)

> **new DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo**(`data`?): [`DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)

#### Source

main.ts:101086

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsGoogleHistoricalRankOverviewLiveItem`](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)[]

contains historical ranking and traffic data

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#items)

#### Source

main.ts:101082

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#items_count)

#### Source

main.ts:101080

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#language_code)

#### Source

main.ts:101076

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#location_code)

#### Source

main.ts:101074

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#se_type)

#### Source

main.ts:101070

***

### target?

> **`optional`** **target**: `string`

target domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#target)

#### Source

main.ts:101072

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#total_count)

#### Source

main.ts:101078

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:101095

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:101122

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)

#### Source

main.ts:101115
