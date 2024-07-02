**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsBingDomainRankOverviewLiveResultInfo

# Class: DataforseoLabsBingDomainRankOverviewLiveResultInfo

## Implements

- [`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingDomainRankOverviewLiveResultInfo(data)

> **new DataforseoLabsBingDomainRankOverviewLiveResultInfo**(`data`?): [`DataforseoLabsBingDomainRankOverviewLiveResultInfo`](DataforseoLabsBingDomainRankOverviewLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md)

#### Returns

[`DataforseoLabsBingDomainRankOverviewLiveResultInfo`](DataforseoLabsBingDomainRankOverviewLiveResultInfo.md)

#### Source

main.ts:108876

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsDomainRankOverviewLiveItem`](DataforseoLabsDomainRankOverviewLiveItem.md)[]

contains ranking and traffic data

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#items)

#### Source

main.ts:108872

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#items_count)

#### Source

main.ts:108870

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#language_code)

#### Source

main.ts:108866

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#location_code)

#### Source

main.ts:108864

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#se_type)

#### Source

main.ts:108860

***

### target?

> **`optional`** **target**: `string`

target domain in a POST array

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#target)

#### Source

main.ts:108862

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#total_count)

#### Source

main.ts:108868

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:108885

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:108912

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsBingDomainRankOverviewLiveResultInfo`](DataforseoLabsBingDomainRankOverviewLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingDomainRankOverviewLiveResultInfo`](DataforseoLabsBingDomainRankOverviewLiveResultInfo.md)

#### Source

main.ts:108905
