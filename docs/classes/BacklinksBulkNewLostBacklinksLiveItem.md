[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkNewLostBacklinksLiveItem

# Class: BacklinksBulkNewLostBacklinksLiveItem

Defined in: main.ts:161780

## Implements

- [`IBacklinksBulkNewLostBacklinksLiveItem`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkNewLostBacklinksLiveItem()

> **new BacklinksBulkNewLostBacklinksLiveItem**(`data`?): [`BacklinksBulkNewLostBacklinksLiveItem`](BacklinksBulkNewLostBacklinksLiveItem.md)

Defined in: main.ts:161792

#### Parameters

##### data?

[`IBacklinksBulkNewLostBacklinksLiveItem`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md)

#### Returns

[`BacklinksBulkNewLostBacklinksLiveItem`](BacklinksBulkNewLostBacklinksLiveItem.md)

## Properties

### lost\_backlinks?

> `optional` **lost\_backlinks**: `number`

Defined in: main.ts:161788

number of lost backlinks
number of lost backlinks of the target

#### Implementation of

[`IBacklinksBulkNewLostBacklinksLiveItem`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md).[`lost_backlinks`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md#lost_backlinks)

***

### new\_backlinks?

> `optional` **new\_backlinks**: `number`

Defined in: main.ts:161785

number of new backlinks
number of new backlinks pointing to the target

#### Implementation of

[`IBacklinksBulkNewLostBacklinksLiveItem`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md).[`new_backlinks`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md#new_backlinks)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:161782

domain, subdomain or webpage from a POST array

#### Implementation of

[`IBacklinksBulkNewLostBacklinksLiveItem`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md).[`target`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md#target)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:161801

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:161820

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkNewLostBacklinksLiveItem`](BacklinksBulkNewLostBacklinksLiveItem.md)

Defined in: main.ts:161813

#### Parameters

##### data

`any`

#### Returns

[`BacklinksBulkNewLostBacklinksLiveItem`](BacklinksBulkNewLostBacklinksLiveItem.md)
