[**Documentation**](../README.md)

***

[Documentation](../README.md) / IndexHistory

# Class: IndexHistory

## Implements

- [`IIndexHistory`](../interfaces/IIndexHistory.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new IndexHistory()

> **new IndexHistory**(`data`?): [`IndexHistory`](IndexHistory.md)

#### Parameters

##### data?

[`IIndexHistory`](../interfaces/IIndexHistory.md)

#### Returns

[`IndexHistory`](IndexHistory.md)

#### Defined in

main.ts:149701

## Properties

### date?

> `optional` **date**: `string`

date for which index volume data is provided
in the UTC format: “yyyy-mm-dd”
example:
2021-10-01

#### Implementation of

[`IIndexHistory`](../interfaces/IIndexHistory.md).[`date`](../interfaces/IIndexHistory.md#date)

#### Defined in

main.ts:149691

***

### total\_backlinks?

> `optional` **total\_backlinks**: `number`

total number of backlinks our database contained on the given date

#### Implementation of

[`IIndexHistory`](../interfaces/IIndexHistory.md).[`total_backlinks`](../interfaces/IIndexHistory.md#total_backlinks)

#### Defined in

main.ts:149693

***

### total\_domains?

> `optional` **total\_domains**: `number`

total number of domains our database contained on the given date

#### Implementation of

[`IIndexHistory`](../interfaces/IIndexHistory.md).[`total_domains`](../interfaces/IIndexHistory.md#total_domains)

#### Defined in

main.ts:149697

***

### total\_pages?

> `optional` **total\_pages**: `number`

total number of pages our database contained on the given date

#### Implementation of

[`IIndexHistory`](../interfaces/IIndexHistory.md).[`total_pages`](../interfaces/IIndexHistory.md#total_pages)

#### Defined in

main.ts:149695

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:149710

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:149730

***

### fromJS()

> `static` **fromJS**(`data`): [`IndexHistory`](IndexHistory.md)

#### Parameters

##### data

`any`

#### Returns

[`IndexHistory`](IndexHistory.md)

#### Defined in

main.ts:149723
