[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsBingDomainRankOverviewLiveResultInfo

# Class: DataforseoLabsBingDomainRankOverviewLiveResultInfo

## Implements

- [`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingDomainRankOverviewLiveResultInfo()

> **new DataforseoLabsBingDomainRankOverviewLiveResultInfo**(`data`?): [`DataforseoLabsBingDomainRankOverviewLiveResultInfo`](DataforseoLabsBingDomainRankOverviewLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md)

#### Returns

[`DataforseoLabsBingDomainRankOverviewLiveResultInfo`](DataforseoLabsBingDomainRankOverviewLiveResultInfo.md)

#### Defined in

main.ts:107655

## Properties

### items?

> `optional` **items**: [`DataforseoLabsDomainRankOverviewLiveItem`](DataforseoLabsDomainRankOverviewLiveItem.md)[]

contains ranking and traffic data

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#items)

#### Defined in

main.ts:107651

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#items_count)

#### Defined in

main.ts:107649

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#language_code)

#### Defined in

main.ts:107645

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#location_code)

#### Defined in

main.ts:107643

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#se_type)

#### Defined in

main.ts:107639

***

### target?

> `optional` **target**: `string`

target domain in a POST array

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#target)

#### Defined in

main.ts:107641

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResultInfo.md#total_count)

#### Defined in

main.ts:107647

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:107664

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:107691

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingDomainRankOverviewLiveResultInfo`](DataforseoLabsBingDomainRankOverviewLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingDomainRankOverviewLiveResultInfo`](DataforseoLabsBingDomainRankOverviewLiveResultInfo.md)

#### Defined in

main.ts:107684
