[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksIndexResultInfo

# Class: BacklinksIndexResultInfo

## Implements

- [`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksIndexResultInfo()

> **new BacklinksIndexResultInfo**(`data`?): [`BacklinksIndexResultInfo`](BacklinksIndexResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md)

#### Returns

[`BacklinksIndexResultInfo`](BacklinksIndexResultInfo.md)

#### Defined in

main.ts:141668

## Properties

### index\_history?

> `optional` **index\_history**: [`IndexHistory`](IndexHistory.md)[]

index volume data for the past 12 months

#### Implementation of

[`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md).[`index_history`](../interfaces/IBacklinksIndexResultInfo.md#index_history)

#### Defined in

main.ts:141664

***

### total\_backlinks?

> `optional` **total\_backlinks**: `number`

total number of backlinks our database contains for the moment of checking

#### Implementation of

[`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md).[`total_backlinks`](../interfaces/IBacklinksIndexResultInfo.md#total_backlinks)

#### Defined in

main.ts:141658

***

### total\_domains?

> `optional` **total\_domains**: `number`

total number of domains our database contains for the moment of checking

#### Implementation of

[`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md).[`total_domains`](../interfaces/IBacklinksIndexResultInfo.md#total_domains)

#### Defined in

main.ts:141662

***

### total\_pages?

> `optional` **total\_pages**: `number`

total number of pages our database contains for the moment of checking

#### Implementation of

[`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md).[`total_pages`](../interfaces/IBacklinksIndexResultInfo.md#total_pages)

#### Defined in

main.ts:141660

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:141677

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:141701

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksIndexResultInfo`](BacklinksIndexResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksIndexResultInfo`](BacklinksIndexResultInfo.md)

#### Defined in

main.ts:141694
