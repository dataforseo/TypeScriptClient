[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksBulkNewLostBacklinksLiveItem

# Class: BacklinksBulkNewLostBacklinksLiveItem

## Implements

- [`IBacklinksBulkNewLostBacklinksLiveItem`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkNewLostBacklinksLiveItem()

> **new BacklinksBulkNewLostBacklinksLiveItem**(`data`?): [`BacklinksBulkNewLostBacklinksLiveItem`](BacklinksBulkNewLostBacklinksLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksBulkNewLostBacklinksLiveItem`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md)

#### Returns

[`BacklinksBulkNewLostBacklinksLiveItem`](BacklinksBulkNewLostBacklinksLiveItem.md)

#### Defined in

main.ts:150486

## Properties

### lost\_backlinks?

> `optional` **lost\_backlinks**: `number`

number of lost backlinks
number of lost backlinks of the target

#### Implementation of

[`IBacklinksBulkNewLostBacklinksLiveItem`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md).[`lost_backlinks`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md#lost_backlinks)

#### Defined in

main.ts:150482

***

### new\_backlinks?

> `optional` **new\_backlinks**: `number`

number of new backlinks
number of new backlinks pointing to the target

#### Implementation of

[`IBacklinksBulkNewLostBacklinksLiveItem`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md).[`new_backlinks`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md#new_backlinks)

#### Defined in

main.ts:150479

***

### target?

> `optional` **target**: `string`

domain, subdomain or webpage from a POST array

#### Implementation of

[`IBacklinksBulkNewLostBacklinksLiveItem`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md).[`target`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md#target)

#### Defined in

main.ts:150476

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:150495

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:150514

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkNewLostBacklinksLiveItem`](BacklinksBulkNewLostBacklinksLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkNewLostBacklinksLiveItem`](BacklinksBulkNewLostBacklinksLiveItem.md)

#### Defined in

main.ts:150507
