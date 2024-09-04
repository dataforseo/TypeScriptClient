[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksBulkSpamScoreLiveItem

# Class: BacklinksBulkSpamScoreLiveItem

## Implements

- [`IBacklinksBulkSpamScoreLiveItem`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkSpamScoreLiveItem()

> **new BacklinksBulkSpamScoreLiveItem**(`data`?): [`BacklinksBulkSpamScoreLiveItem`](BacklinksBulkSpamScoreLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksBulkSpamScoreLiveItem`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md)

#### Returns

[`BacklinksBulkSpamScoreLiveItem`](BacklinksBulkSpamScoreLiveItem.md)

#### Defined in

main.ts:149755

## Properties

### spam\_score?

> `optional` **spam\_score**: `number`

average spam score the target
learn more about how the metric is calculated

#### Implementation of

[`IBacklinksBulkSpamScoreLiveItem`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md).[`spam_score`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md#spam_score)

#### Defined in

main.ts:149751

***

### target?

> `optional` **target**: `string`

domain, subdomain or webpage from a POST array

#### Implementation of

[`IBacklinksBulkSpamScoreLiveItem`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md).[`target`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md#target)

#### Defined in

main.ts:149748

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBacklinksBulkSpamScoreLiveItem`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md).[`type`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md#type)

#### Defined in

main.ts:149746

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:149764

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:149783

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkSpamScoreLiveItem`](BacklinksBulkSpamScoreLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkSpamScoreLiveItem`](BacklinksBulkSpamScoreLiveItem.md)

#### Defined in

main.ts:149776
