[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksBulkBacklinksLiveItem

# Class: BacklinksBulkBacklinksLiveItem

## Implements

- [`IBacklinksBulkBacklinksLiveItem`](../interfaces/IBacklinksBulkBacklinksLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkBacklinksLiveItem()

> **new BacklinksBulkBacklinksLiveItem**(`data`?): [`BacklinksBulkBacklinksLiveItem`](BacklinksBulkBacklinksLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksBulkBacklinksLiveItem`](../interfaces/IBacklinksBulkBacklinksLiveItem.md)

#### Returns

[`BacklinksBulkBacklinksLiveItem`](BacklinksBulkBacklinksLiveItem.md)

#### Defined in

main.ts:149449

## Properties

### backlinks?

> `optional` **backlinks**: `number`

number of backlinks pointing to the target

#### Implementation of

[`IBacklinksBulkBacklinksLiveItem`](../interfaces/IBacklinksBulkBacklinksLiveItem.md).[`backlinks`](../interfaces/IBacklinksBulkBacklinksLiveItem.md#backlinks)

#### Defined in

main.ts:149445

***

### target?

> `optional` **target**: `string`

domain, subdomain or webpage from a POST array

#### Implementation of

[`IBacklinksBulkBacklinksLiveItem`](../interfaces/IBacklinksBulkBacklinksLiveItem.md).[`target`](../interfaces/IBacklinksBulkBacklinksLiveItem.md#target)

#### Defined in

main.ts:149443

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:149458

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:149476

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkBacklinksLiveItem`](BacklinksBulkBacklinksLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkBacklinksLiveItem`](BacklinksBulkBacklinksLiveItem.md)

#### Defined in

main.ts:149469
