**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksIndexResultInfo

# Class: BacklinksIndexResultInfo

## Implements

- [`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksIndexResultInfo(data)

> **new BacklinksIndexResultInfo**(`data`?): [`BacklinksIndexResultInfo`](BacklinksIndexResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md)

#### Returns

[`BacklinksIndexResultInfo`](BacklinksIndexResultInfo.md)

#### Source

main.ts:135653

## Properties

### index\_history?

> **`optional`** **index\_history**: [`IndexHistory`](IndexHistory.md)[]

index volume data for the past 12 months

#### Implementation of

[`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md).[`index_history`](../interfaces/IBacklinksIndexResultInfo.md#index_history)

#### Source

main.ts:135649

***

### total\_backlinks?

> **`optional`** **total\_backlinks**: `number`

total number of backlinks our database contains for the moment of checking

#### Implementation of

[`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md).[`total_backlinks`](../interfaces/IBacklinksIndexResultInfo.md#total_backlinks)

#### Source

main.ts:135643

***

### total\_domains?

> **`optional`** **total\_domains**: `number`

total number of domains our database contains for the moment of checking

#### Implementation of

[`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md).[`total_domains`](../interfaces/IBacklinksIndexResultInfo.md#total_domains)

#### Source

main.ts:135647

***

### total\_pages?

> **`optional`** **total\_pages**: `number`

total number of pages our database contains for the moment of checking

#### Implementation of

[`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md).[`total_pages`](../interfaces/IBacklinksIndexResultInfo.md#total_pages)

#### Source

main.ts:135645

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:135662

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:135686

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksIndexResultInfo`](BacklinksIndexResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksIndexResultInfo`](BacklinksIndexResultInfo.md)

#### Source

main.ts:135679
