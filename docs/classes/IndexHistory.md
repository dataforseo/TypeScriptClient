**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IndexHistory

# Class: IndexHistory

## Implements

- [`IIndexHistory`](../interfaces/IIndexHistory.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new IndexHistory(data)

> **new IndexHistory**(`data`?): [`IndexHistory`](IndexHistory.md)

#### Parameters

• **data?**: [`IIndexHistory`](../interfaces/IIndexHistory.md)

#### Returns

[`IndexHistory`](IndexHistory.md)

#### Source

main.ts:139771

## Properties

### date?

> **`optional`** **date**: `string`

date for which index volume data is provided
in the UTC format: “yyyy-mm-dd”
example:
2021-10-01

#### Implementation of

[`IIndexHistory`](../interfaces/IIndexHistory.md).[`date`](../interfaces/IIndexHistory.md#date)

#### Source

main.ts:139761

***

### total\_backlinks?

> **`optional`** **total\_backlinks**: `number`

total number of backlinks our database contained on the given date

#### Implementation of

[`IIndexHistory`](../interfaces/IIndexHistory.md).[`total_backlinks`](../interfaces/IIndexHistory.md#total_backlinks)

#### Source

main.ts:139763

***

### total\_domains?

> **`optional`** **total\_domains**: `number`

total number of domains our database contained on the given date

#### Implementation of

[`IIndexHistory`](../interfaces/IIndexHistory.md).[`total_domains`](../interfaces/IIndexHistory.md#total_domains)

#### Source

main.ts:139767

***

### total\_pages?

> **`optional`** **total\_pages**: `number`

total number of pages our database contained on the given date

#### Implementation of

[`IIndexHistory`](../interfaces/IIndexHistory.md).[`total_pages`](../interfaces/IIndexHistory.md#total_pages)

#### Source

main.ts:139765

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:139780

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:139800

***

### fromJS()

> **`static`** **fromJS**(`data`): [`IndexHistory`](IndexHistory.md)

#### Parameters

• **data**: `any`

#### Returns

[`IndexHistory`](IndexHistory.md)

#### Source

main.ts:139793
