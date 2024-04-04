**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksCompetitorsLiveResultInfo

# Class: BacklinksCompetitorsLiveResultInfo

## Implements

- [`IBacklinksCompetitorsLiveResultInfo`](../interfaces/IBacklinksCompetitorsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksCompetitorsLiveResultInfo(data)

> **new BacklinksCompetitorsLiveResultInfo**(`data`?): [`BacklinksCompetitorsLiveResultInfo`](BacklinksCompetitorsLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksCompetitorsLiveResultInfo`](../interfaces/IBacklinksCompetitorsLiveResultInfo.md)

#### Returns

[`BacklinksCompetitorsLiveResultInfo`](BacklinksCompetitorsLiveResultInfo.md)

#### Source

main.ts:141626

## Properties

### items?

> **`optional`** **items**: [`BacklinksCompetitorsLiveItem`](BacklinksCompetitorsLiveItem.md)[]

items array

#### Implementation of

[`IBacklinksCompetitorsLiveResultInfo`](../interfaces/IBacklinksCompetitorsLiveResultInfo.md).[`items`](../interfaces/IBacklinksCompetitorsLiveResultInfo.md#items)

#### Source

main.ts:141622

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the items array

#### Implementation of

[`IBacklinksCompetitorsLiveResultInfo`](../interfaces/IBacklinksCompetitorsLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksCompetitorsLiveResultInfo.md#items_count)

#### Source

main.ts:141620

***

### total\_count?

> **`optional`** **total\_count**: `number`

total number of relevant items in the database

#### Implementation of

[`IBacklinksCompetitorsLiveResultInfo`](../interfaces/IBacklinksCompetitorsLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksCompetitorsLiveResultInfo.md#total_count)

#### Source

main.ts:141618

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:141635

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:141658

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksCompetitorsLiveResultInfo`](BacklinksCompetitorsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksCompetitorsLiveResultInfo`](BacklinksCompetitorsLiveResultInfo.md)

#### Source

main.ts:141651
