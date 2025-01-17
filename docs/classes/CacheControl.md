[**Documentation**](../README.md)

***

[Documentation](../README.md) / CacheControl

# Class: CacheControl

Defined in: main.ts:166720

## Implements

- [`ICacheControl`](../interfaces/ICacheControl.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new CacheControl()

> **new CacheControl**(`data`?): [`CacheControl`](CacheControl.md)

Defined in: main.ts:166729

#### Parameters

##### data?

[`ICacheControl`](../interfaces/ICacheControl.md)

#### Returns

[`CacheControl`](CacheControl.md)

## Properties

### cachable?

> `optional` **cachable**: `boolean`

Defined in: main.ts:166722

indicates whether the page is cacheable

#### Implementation of

[`ICacheControl`](../interfaces/ICacheControl.md).[`cachable`](../interfaces/ICacheControl.md#cachable)

***

### ttl?

> `optional` **ttl**: `number`

Defined in: main.ts:166725

time to live
the amount of time the browser caches a resource

#### Implementation of

[`ICacheControl`](../interfaces/ICacheControl.md).[`ttl`](../interfaces/ICacheControl.md#ttl)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:166738

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:166756

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`CacheControl`](CacheControl.md)

Defined in: main.ts:166749

#### Parameters

##### data

`any`

#### Returns

[`CacheControl`](CacheControl.md)
