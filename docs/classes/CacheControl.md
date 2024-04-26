**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / CacheControl

# Class: CacheControl

## Implements

- [`ICacheControl`](../interfaces/ICacheControl.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CacheControl(data)

> **new CacheControl**(`data`?): [`CacheControl`](CacheControl.md)

#### Parameters

• **data?**: [`ICacheControl`](../interfaces/ICacheControl.md)

#### Returns

[`CacheControl`](CacheControl.md)

#### Source

main.ts:151275

## Properties

### cachable?

> **`optional`** **cachable**: `boolean`

indicates whether the page is cacheable

#### Implementation of

[`ICacheControl`](../interfaces/ICacheControl.md).[`cachable`](../interfaces/ICacheControl.md#cachable)

#### Source

main.ts:151268

***

### ttl?

> **`optional`** **ttl**: `number`

time to live
the amount of time the browser caches a resource

#### Implementation of

[`ICacheControl`](../interfaces/ICacheControl.md).[`ttl`](../interfaces/ICacheControl.md#ttl)

#### Source

main.ts:151271

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:151284

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:151302

***

### fromJS()

> **`static`** **fromJS**(`data`): [`CacheControl`](CacheControl.md)

#### Parameters

• **data**: `any`

#### Returns

[`CacheControl`](CacheControl.md)

#### Source

main.ts:151295
