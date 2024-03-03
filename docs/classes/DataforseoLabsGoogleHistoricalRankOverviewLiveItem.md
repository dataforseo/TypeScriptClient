[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleHistoricalRankOverviewLiveItem

# Class: DataforseoLabsGoogleHistoricalRankOverviewLiveItem

## Implements

- [`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#constructor)

### Properties

- [metrics](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#metrics)
- [month](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#month)
- [se\_type](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#se_type)
- [year](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#year)

### Methods

- [init](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#init)
- [toJSON](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#tojson)
- [fromJS](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleHistoricalRankOverviewLiveItem**(`data?`): [`DataforseoLabsGoogleHistoricalRankOverviewLiveItem`](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleHistoricalRankOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md) |

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveItem`](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)

#### Defined in

main.ts:96592

## Properties

### metrics

• `Optional` **metrics**: `Object`

ranking data relevant to the specified domain

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](MetricsInfo.md)

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md).[metrics](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#metrics)

#### Defined in

main.ts:96588

___

### month

• `Optional` **month**: `number`

month for which the data is provided

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md).[month](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#month)

#### Defined in

main.ts:96586

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md).[se_type](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#se_type)

#### Defined in

main.ts:96582

___

### year

• `Optional` **year**: `number`

year for which the data is provided

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md).[year](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveItem.md#year)

#### Defined in

main.ts:96584

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:96601

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:96627

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalRankOverviewLiveItem`](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveItem`](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)

#### Defined in

main.ts:96620
