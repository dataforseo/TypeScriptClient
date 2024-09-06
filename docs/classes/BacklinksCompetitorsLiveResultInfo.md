[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksCompetitorsLiveResultInfo

# Class: BacklinksCompetitorsLiveResultInfo

## Implements

- [`IBacklinksCompetitorsLiveResultInfo`](../interfaces/IBacklinksCompetitorsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksCompetitorsLiveResultInfo()

> **new BacklinksCompetitorsLiveResultInfo**(`data`?): [`BacklinksCompetitorsLiveResultInfo`](BacklinksCompetitorsLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksCompetitorsLiveResultInfo`](../interfaces/IBacklinksCompetitorsLiveResultInfo.md)

#### Returns

[`BacklinksCompetitorsLiveResultInfo`](BacklinksCompetitorsLiveResultInfo.md)

#### Defined in

main.ts:145845

## Properties

### items?

> `optional` **items**: [`BacklinksCompetitorsLiveItem`](BacklinksCompetitorsLiveItem.md)[]

items array

#### Implementation of

[`IBacklinksCompetitorsLiveResultInfo`](../interfaces/IBacklinksCompetitorsLiveResultInfo.md).[`items`](../interfaces/IBacklinksCompetitorsLiveResultInfo.md#items)

#### Defined in

main.ts:145841

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the items array

#### Implementation of

[`IBacklinksCompetitorsLiveResultInfo`](../interfaces/IBacklinksCompetitorsLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksCompetitorsLiveResultInfo.md#items_count)

#### Defined in

main.ts:145839

***

### total\_count?

> `optional` **total\_count**: `number`

total number of relevant items in the database

#### Implementation of

[`IBacklinksCompetitorsLiveResultInfo`](../interfaces/IBacklinksCompetitorsLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksCompetitorsLiveResultInfo.md#total_count)

#### Defined in

main.ts:145837

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:145854

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:145877

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksCompetitorsLiveResultInfo`](BacklinksCompetitorsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksCompetitorsLiveResultInfo`](BacklinksCompetitorsLiveResultInfo.md)

#### Defined in

main.ts:145870
