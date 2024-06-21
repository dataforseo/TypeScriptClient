**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksBulkBacklinksLiveItem

# Class: BacklinksBulkBacklinksLiveItem

## Implements

- [`IBacklinksBulkBacklinksLiveItem`](../interfaces/IBacklinksBulkBacklinksLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkBacklinksLiveItem(data)

> **new BacklinksBulkBacklinksLiveItem**(`data`?): [`BacklinksBulkBacklinksLiveItem`](BacklinksBulkBacklinksLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksBulkBacklinksLiveItem`](../interfaces/IBacklinksBulkBacklinksLiveItem.md)

#### Returns

[`BacklinksBulkBacklinksLiveItem`](BacklinksBulkBacklinksLiveItem.md)

#### Source

main.ts:147609

## Properties

### backlinks?

> **`optional`** **backlinks**: `number`

number of backlinks pointing to the target

#### Implementation of

[`IBacklinksBulkBacklinksLiveItem`](../interfaces/IBacklinksBulkBacklinksLiveItem.md).[`backlinks`](../interfaces/IBacklinksBulkBacklinksLiveItem.md#backlinks)

#### Source

main.ts:147605

***

### target?

> **`optional`** **target**: `string`

domain, subdomain or webpage from a POST array

#### Implementation of

[`IBacklinksBulkBacklinksLiveItem`](../interfaces/IBacklinksBulkBacklinksLiveItem.md).[`target`](../interfaces/IBacklinksBulkBacklinksLiveItem.md#target)

#### Source

main.ts:147603

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:147618

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:147636

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksBulkBacklinksLiveItem`](BacklinksBulkBacklinksLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkBacklinksLiveItem`](BacklinksBulkBacklinksLiveItem.md)

#### Source

main.ts:147629
