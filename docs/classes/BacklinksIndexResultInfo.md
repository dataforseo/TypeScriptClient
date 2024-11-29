[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksIndexResultInfo

# Class: BacklinksIndexResultInfo

## Implements

- [`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksIndexResultInfo()

> **new BacklinksIndexResultInfo**(`data`?): [`BacklinksIndexResultInfo`](BacklinksIndexResultInfo.md)

#### Parameters

##### data?

[`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md)

#### Returns

[`BacklinksIndexResultInfo`](BacklinksIndexResultInfo.md)

#### Defined in

main.ts:149772

## Properties

### index\_history?

> `optional` **index\_history**: [`IndexHistory`](IndexHistory.md)[]

index volume data for the past 12 months

#### Implementation of

[`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md).[`index_history`](../interfaces/IBacklinksIndexResultInfo.md#index_history)

#### Defined in

main.ts:149768

***

### total\_backlinks?

> `optional` **total\_backlinks**: `number`

total number of backlinks our database contains for the moment of checking

#### Implementation of

[`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md).[`total_backlinks`](../interfaces/IBacklinksIndexResultInfo.md#total_backlinks)

#### Defined in

main.ts:149762

***

### total\_domains?

> `optional` **total\_domains**: `number`

total number of domains our database contains for the moment of checking

#### Implementation of

[`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md).[`total_domains`](../interfaces/IBacklinksIndexResultInfo.md#total_domains)

#### Defined in

main.ts:149766

***

### total\_pages?

> `optional` **total\_pages**: `number`

total number of pages our database contains for the moment of checking

#### Implementation of

[`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md).[`total_pages`](../interfaces/IBacklinksIndexResultInfo.md#total_pages)

#### Defined in

main.ts:149764

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:149781

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:149805

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksIndexResultInfo`](BacklinksIndexResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BacklinksIndexResultInfo`](BacklinksIndexResultInfo.md)

#### Defined in

main.ts:149798
