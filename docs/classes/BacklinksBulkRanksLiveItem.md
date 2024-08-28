[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BacklinksBulkRanksLiveItem

# Class: BacklinksBulkRanksLiveItem

## Implements

- [`IBacklinksBulkRanksLiveItem`](../interfaces/IBacklinksBulkRanksLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkRanksLiveItem()

> **new BacklinksBulkRanksLiveItem**(`data`?): [`BacklinksBulkRanksLiveItem`](BacklinksBulkRanksLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksBulkRanksLiveItem`](../interfaces/IBacklinksBulkRanksLiveItem.md)

#### Returns

[`BacklinksBulkRanksLiveItem`](BacklinksBulkRanksLiveItem.md)

#### Defined in

main.ts:152211

## Properties

### rank?

> `optional` **rank**: `number`

rank of the target
values represent real-time data for the date of the request
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksBulkRanksLiveItem`](../interfaces/IBacklinksBulkRanksLiveItem.md).[`rank`](../interfaces/IBacklinksBulkRanksLiveItem.md#rank)

#### Defined in

main.ts:152207

***

### target?

> `optional` **target**: `string`

domain, subdomain or webpage from a POST array

#### Implementation of

[`IBacklinksBulkRanksLiveItem`](../interfaces/IBacklinksBulkRanksLiveItem.md).[`target`](../interfaces/IBacklinksBulkRanksLiveItem.md#target)

#### Defined in

main.ts:152202

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:152220

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:152238

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkRanksLiveItem`](BacklinksBulkRanksLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkRanksLiveItem`](BacklinksBulkRanksLiveItem.md)

#### Defined in

main.ts:152231
