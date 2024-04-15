**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksBulkRanksLiveItem

# Class: BacklinksBulkRanksLiveItem

## Implements

- [`IBacklinksBulkRanksLiveItem`](../interfaces/IBacklinksBulkRanksLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkRanksLiveItem(data)

> **new BacklinksBulkRanksLiveItem**(`data`?): [`BacklinksBulkRanksLiveItem`](BacklinksBulkRanksLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksBulkRanksLiveItem`](../interfaces/IBacklinksBulkRanksLiveItem.md)

#### Returns

[`BacklinksBulkRanksLiveItem`](BacklinksBulkRanksLiveItem.md)

#### Source

main.ts:144998

## Properties

### rank?

> **`optional`** **rank**: `number`

rank of the target
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksBulkRanksLiveItem`](../interfaces/IBacklinksBulkRanksLiveItem.md).[`rank`](../interfaces/IBacklinksBulkRanksLiveItem.md#rank)

#### Source

main.ts:144994

***

### target?

> **`optional`** **target**: `string`

domain, subdomain or webpage from a POST array

#### Implementation of

[`IBacklinksBulkRanksLiveItem`](../interfaces/IBacklinksBulkRanksLiveItem.md).[`target`](../interfaces/IBacklinksBulkRanksLiveItem.md#target)

#### Source

main.ts:144990

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:145007

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:145025

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksBulkRanksLiveItem`](BacklinksBulkRanksLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkRanksLiveItem`](BacklinksBulkRanksLiveItem.md)

#### Source

main.ts:145018
