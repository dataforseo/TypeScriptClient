**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksBulkSpamScoreLiveItem

# Class: BacklinksBulkSpamScoreLiveItem

## Implements

- [`IBacklinksBulkSpamScoreLiveItem`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkSpamScoreLiveItem(data)

> **new BacklinksBulkSpamScoreLiveItem**(`data`?): [`BacklinksBulkSpamScoreLiveItem`](BacklinksBulkSpamScoreLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksBulkSpamScoreLiveItem`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md)

#### Returns

[`BacklinksBulkSpamScoreLiveItem`](BacklinksBulkSpamScoreLiveItem.md)

#### Source

main.ts:151063

## Properties

### spam\_score?

> **`optional`** **spam\_score**: `number`

average spam score the target
learn more about how the metric is calculated

#### Implementation of

[`IBacklinksBulkSpamScoreLiveItem`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md).[`spam_score`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md#spam_score)

#### Source

main.ts:151059

***

### target?

> **`optional`** **target**: `string`

domain, subdomain or webpage from a POST array

#### Implementation of

[`IBacklinksBulkSpamScoreLiveItem`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md).[`target`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md#target)

#### Source

main.ts:151056

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IBacklinksBulkSpamScoreLiveItem`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md).[`type`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md#type)

#### Source

main.ts:151054

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:151072

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:151091

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksBulkSpamScoreLiveItem`](BacklinksBulkSpamScoreLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkSpamScoreLiveItem`](BacklinksBulkSpamScoreLiveItem.md)

#### Source

main.ts:151084
