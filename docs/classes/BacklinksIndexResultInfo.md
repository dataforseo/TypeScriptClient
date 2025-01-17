[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksIndexResultInfo

# Class: BacklinksIndexResultInfo

Defined in: main.ts:149828

## Implements

- [`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksIndexResultInfo()

> **new BacklinksIndexResultInfo**(`data`?): [`BacklinksIndexResultInfo`](BacklinksIndexResultInfo.md)

Defined in: main.ts:149840

#### Parameters

##### data?

[`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md)

#### Returns

[`BacklinksIndexResultInfo`](BacklinksIndexResultInfo.md)

## Properties

### index\_history?

> `optional` **index\_history**: [`IndexHistory`](IndexHistory.md)[]

Defined in: main.ts:149836

index volume data for the past 12 months

#### Implementation of

[`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md).[`index_history`](../interfaces/IBacklinksIndexResultInfo.md#index_history)

***

### total\_backlinks?

> `optional` **total\_backlinks**: `number`

Defined in: main.ts:149830

total number of backlinks our database contains for the moment of checking

#### Implementation of

[`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md).[`total_backlinks`](../interfaces/IBacklinksIndexResultInfo.md#total_backlinks)

***

### total\_domains?

> `optional` **total\_domains**: `number`

Defined in: main.ts:149834

total number of domains our database contains for the moment of checking

#### Implementation of

[`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md).[`total_domains`](../interfaces/IBacklinksIndexResultInfo.md#total_domains)

***

### total\_pages?

> `optional` **total\_pages**: `number`

Defined in: main.ts:149832

total number of pages our database contains for the moment of checking

#### Implementation of

[`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md).[`total_pages`](../interfaces/IBacklinksIndexResultInfo.md#total_pages)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:149849

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:149873

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksIndexResultInfo`](BacklinksIndexResultInfo.md)

Defined in: main.ts:149866

#### Parameters

##### data

`any`

#### Returns

[`BacklinksIndexResultInfo`](BacklinksIndexResultInfo.md)
