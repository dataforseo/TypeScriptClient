[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkBacklinksLiveItem

# Class: BacklinksBulkBacklinksLiveItem

Defined in: main.ts:160714

## Implements

- [`IBacklinksBulkBacklinksLiveItem`](../interfaces/IBacklinksBulkBacklinksLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkBacklinksLiveItem()

> **new BacklinksBulkBacklinksLiveItem**(`data`?): [`BacklinksBulkBacklinksLiveItem`](BacklinksBulkBacklinksLiveItem.md)

Defined in: main.ts:160722

#### Parameters

##### data?

[`IBacklinksBulkBacklinksLiveItem`](../interfaces/IBacklinksBulkBacklinksLiveItem.md)

#### Returns

[`BacklinksBulkBacklinksLiveItem`](BacklinksBulkBacklinksLiveItem.md)

## Properties

### backlinks?

> `optional` **backlinks**: `number`

Defined in: main.ts:160718

number of backlinks pointing to the target

#### Implementation of

[`IBacklinksBulkBacklinksLiveItem`](../interfaces/IBacklinksBulkBacklinksLiveItem.md).[`backlinks`](../interfaces/IBacklinksBulkBacklinksLiveItem.md#backlinks)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:160716

domain, subdomain or webpage from a POST array

#### Implementation of

[`IBacklinksBulkBacklinksLiveItem`](../interfaces/IBacklinksBulkBacklinksLiveItem.md).[`target`](../interfaces/IBacklinksBulkBacklinksLiveItem.md#target)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:160731

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:160749

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkBacklinksLiveItem`](BacklinksBulkBacklinksLiveItem.md)

Defined in: main.ts:160742

#### Parameters

##### data

`any`

#### Returns

[`BacklinksBulkBacklinksLiveItem`](BacklinksBulkBacklinksLiveItem.md)
