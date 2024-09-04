[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / CacheControl

# Class: CacheControl

## Implements

- [`ICacheControl`](../interfaces/ICacheControl.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CacheControl()

> **new CacheControl**(`data`?): [`CacheControl`](CacheControl.md)

#### Parameters

• **data?**: [`ICacheControl`](../interfaces/ICacheControl.md)

#### Returns

[`CacheControl`](CacheControl.md)

#### Defined in

main.ts:155001

## Properties

### cachable?

> `optional` **cachable**: `boolean`

indicates whether the page is cacheable

#### Implementation of

[`ICacheControl`](../interfaces/ICacheControl.md).[`cachable`](../interfaces/ICacheControl.md#cachable)

#### Defined in

main.ts:154994

***

### ttl?

> `optional` **ttl**: `number`

time to live
the amount of time the browser caches a resource

#### Implementation of

[`ICacheControl`](../interfaces/ICacheControl.md).[`ttl`](../interfaces/ICacheControl.md#ttl)

#### Defined in

main.ts:154997

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:155010

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:155028

***

### fromJS()

> `static` **fromJS**(`data`): [`CacheControl`](CacheControl.md)

#### Parameters

• **data**: `any`

#### Returns

[`CacheControl`](CacheControl.md)

#### Defined in

main.ts:155021
