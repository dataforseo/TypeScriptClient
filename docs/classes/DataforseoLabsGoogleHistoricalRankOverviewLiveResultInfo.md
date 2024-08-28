[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo

# Class: DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo()

> **new DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo**(`data`?): [`DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)

#### Defined in

main.ts:102709

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleHistoricalRankOverviewLiveItem`](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)[]

contains historical ranking and traffic data

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#items)

#### Defined in

main.ts:102705

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#items_count)

#### Defined in

main.ts:102703

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#language_code)

#### Defined in

main.ts:102699

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#location_code)

#### Defined in

main.ts:102697

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#se_type)

#### Defined in

main.ts:102693

***

### target?

> `optional` **target**: `string`

target domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#target)

#### Defined in

main.ts:102695

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#total_count)

#### Defined in

main.ts:102701

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:102718

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:102745

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)

#### Defined in

main.ts:102738
