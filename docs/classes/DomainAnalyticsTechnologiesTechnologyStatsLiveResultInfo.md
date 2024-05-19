**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo

# Class: DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo

## Implements

- [`IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo(data)

> **new DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo**(`data`?): [`DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md)

#### Parameters

• **data?**: [`IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md)

#### Returns

[`DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md)

#### Source

main.ts:77201

## Properties

### date\_from?

> **`optional`** **date\_from**: `string`

starting date of the time range

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md).[`date_from`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md#date_from)

#### Source

main.ts:77191

***

### date\_to?

> **`optional`** **date\_to**: `string`

ending date of the time range

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md).[`date_to`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md#date_to)

#### Source

main.ts:77193

***

### items?

> **`optional`** **items**: [`DomainAnalyticsTechnologiesTechnologyStatsLiveItem`](DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md)[]

items array

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md).[`items`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md#items)

#### Source

main.ts:77197

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md).[`items_count`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md#items_count)

#### Source

main.ts:77195

***

### technology?

> **`optional`** **technology**: `string`

target technology

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md).[`technology`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md#technology)

#### Source

main.ts:77189

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:77210

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:77235

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md)

#### Source

main.ts:77228
