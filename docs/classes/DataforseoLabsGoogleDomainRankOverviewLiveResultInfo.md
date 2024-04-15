**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleDomainRankOverviewLiveResultInfo

# Class: DataforseoLabsGoogleDomainRankOverviewLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleDomainRankOverviewLiveResultInfo(data)

> **new DataforseoLabsGoogleDomainRankOverviewLiveResultInfo**(`data`?): [`DataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)

#### Source

main.ts:93037

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsDomainRankOverviewLiveItem`](DataforseoLabsDomainRankOverviewLiveItem.md)[]

contains ranking and traffic data

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#items)

#### Source

main.ts:93033

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#items_count)

#### Source

main.ts:93031

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#language_code)

#### Source

main.ts:93027

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#location_code)

#### Source

main.ts:93025

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#se_type)

#### Source

main.ts:93021

***

### target?

> **`optional`** **target**: `string`

target domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#target)

#### Source

main.ts:93023

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#total_count)

#### Source

main.ts:93029

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:93046

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:93073

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)

#### Source

main.ts:93066
