[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsDomainRankOverviewLiveItem

# Class: DataforseoLabsDomainRankOverviewLiveItem

## Implements

- [`IDataforseoLabsDomainRankOverviewLiveItem`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsDomainRankOverviewLiveItem()

> **new DataforseoLabsDomainRankOverviewLiveItem**(`data`?): [`DataforseoLabsDomainRankOverviewLiveItem`](DataforseoLabsDomainRankOverviewLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsDomainRankOverviewLiveItem`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md)

#### Returns

[`DataforseoLabsDomainRankOverviewLiveItem`](DataforseoLabsDomainRankOverviewLiveItem.md)

#### Defined in

main.ts:96765

## Properties

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsDomainRankOverviewLiveItem`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md).[`language_code`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md#language_code)

#### Defined in

main.ts:96759

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsDomainRankOverviewLiveItem`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md).[`location_code`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md#location_code)

#### Defined in

main.ts:96757

***

### metrics?

> `optional` **metrics**: `object`

ranking data relevant to the specified domain

#### Index Signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsDomainRankOverviewLiveItem`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md#metrics)

#### Defined in

main.ts:96761

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsDomainRankOverviewLiveItem`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md#se_type)

#### Defined in

main.ts:96755

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:96774

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:96800

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsDomainRankOverviewLiveItem`](DataforseoLabsDomainRankOverviewLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsDomainRankOverviewLiveItem`](DataforseoLabsDomainRankOverviewLiveItem.md)

#### Defined in

main.ts:96793
