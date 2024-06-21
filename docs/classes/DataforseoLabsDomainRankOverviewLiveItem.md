**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsDomainRankOverviewLiveItem

# Class: DataforseoLabsDomainRankOverviewLiveItem

## Implements

- [`IDataforseoLabsDomainRankOverviewLiveItem`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsDomainRankOverviewLiveItem(data)

> **new DataforseoLabsDomainRankOverviewLiveItem**(`data`?): [`DataforseoLabsDomainRankOverviewLiveItem`](DataforseoLabsDomainRankOverviewLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsDomainRankOverviewLiveItem`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md)

#### Returns

[`DataforseoLabsDomainRankOverviewLiveItem`](DataforseoLabsDomainRankOverviewLiveItem.md)

#### Source

main.ts:95062

## Properties

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsDomainRankOverviewLiveItem`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md).[`language_code`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md#language_code)

#### Source

main.ts:95056

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsDomainRankOverviewLiveItem`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md).[`location_code`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md#location_code)

#### Source

main.ts:95054

***

### metrics?

> **`optional`** **metrics**: `Object`

ranking data relevant to the specified domain

#### Index signature

 \[`key`: `string`\]: [`MetricsInfo`](MetricsInfo.md)

#### Implementation of

[`IDataforseoLabsDomainRankOverviewLiveItem`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md#metrics)

#### Source

main.ts:95058

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsDomainRankOverviewLiveItem`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md#se_type)

#### Source

main.ts:95052

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:95071

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:95097

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsDomainRankOverviewLiveItem`](DataforseoLabsDomainRankOverviewLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsDomainRankOverviewLiveItem`](DataforseoLabsDomainRankOverviewLiveItem.md)

#### Source

main.ts:95090
