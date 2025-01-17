[**Documentation**](../README.md)

***

[Documentation](../README.md) / IndexHistory

# Class: IndexHistory

Defined in: main.ts:149754

## Implements

- [`IIndexHistory`](../interfaces/IIndexHistory.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new IndexHistory()

> **new IndexHistory**(`data`?): [`IndexHistory`](IndexHistory.md)

Defined in: main.ts:149769

#### Parameters

##### data?

[`IIndexHistory`](../interfaces/IIndexHistory.md)

#### Returns

[`IndexHistory`](IndexHistory.md)

## Properties

### date?

> `optional` **date**: `string`

Defined in: main.ts:149759

date for which index volume data is provided
in the UTC format: “yyyy-mm-dd”
example:
2021-10-01

#### Implementation of

[`IIndexHistory`](../interfaces/IIndexHistory.md).[`date`](../interfaces/IIndexHistory.md#date)

***

### total\_backlinks?

> `optional` **total\_backlinks**: `number`

Defined in: main.ts:149761

total number of backlinks our database contained on the given date

#### Implementation of

[`IIndexHistory`](../interfaces/IIndexHistory.md).[`total_backlinks`](../interfaces/IIndexHistory.md#total_backlinks)

***

### total\_domains?

> `optional` **total\_domains**: `number`

Defined in: main.ts:149765

total number of domains our database contained on the given date

#### Implementation of

[`IIndexHistory`](../interfaces/IIndexHistory.md).[`total_domains`](../interfaces/IIndexHistory.md#total_domains)

***

### total\_pages?

> `optional` **total\_pages**: `number`

Defined in: main.ts:149763

total number of pages our database contained on the given date

#### Implementation of

[`IIndexHistory`](../interfaces/IIndexHistory.md).[`total_pages`](../interfaces/IIndexHistory.md#total_pages)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:149778

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:149798

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`IndexHistory`](IndexHistory.md)

Defined in: main.ts:149791

#### Parameters

##### data

`any`

#### Returns

[`IndexHistory`](IndexHistory.md)
