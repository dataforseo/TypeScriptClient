[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkRanksLiveItem

# Class: BacklinksBulkRanksLiveItem

Defined in: main.ts:160372

## Implements

- [`IBacklinksBulkRanksLiveItem`](../interfaces/IBacklinksBulkRanksLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkRanksLiveItem()

> **new BacklinksBulkRanksLiveItem**(`data`?): [`BacklinksBulkRanksLiveItem`](BacklinksBulkRanksLiveItem.md)

Defined in: main.ts:160383

#### Parameters

##### data?

[`IBacklinksBulkRanksLiveItem`](../interfaces/IBacklinksBulkRanksLiveItem.md)

#### Returns

[`BacklinksBulkRanksLiveItem`](BacklinksBulkRanksLiveItem.md)

## Properties

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:160379

rank of the target
values represent real-time data for the date of the request
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksBulkRanksLiveItem`](../interfaces/IBacklinksBulkRanksLiveItem.md).[`rank`](../interfaces/IBacklinksBulkRanksLiveItem.md#rank)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:160374

domain, subdomain or webpage from a POST array

#### Implementation of

[`IBacklinksBulkRanksLiveItem`](../interfaces/IBacklinksBulkRanksLiveItem.md).[`target`](../interfaces/IBacklinksBulkRanksLiveItem.md#target)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:160392

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:160410

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkRanksLiveItem`](BacklinksBulkRanksLiveItem.md)

Defined in: main.ts:160403

#### Parameters

##### data

`any`

#### Returns

[`BacklinksBulkRanksLiveItem`](BacklinksBulkRanksLiveItem.md)
