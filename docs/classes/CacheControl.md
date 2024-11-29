[**Documentation**](../README.md)

***

[Documentation](../README.md) / CacheControl

# Class: CacheControl

## Implements

- [`ICacheControl`](../interfaces/ICacheControl.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CacheControl()

> **new CacheControl**(`data`?): [`CacheControl`](CacheControl.md)

#### Parameters

##### data?

[`ICacheControl`](../interfaces/ICacheControl.md)

#### Returns

[`CacheControl`](CacheControl.md)

#### Defined in

main.ts:166661

## Properties

### cachable?

> `optional` **cachable**: `boolean`

indicates whether the page is cacheable

#### Implementation of

[`ICacheControl`](../interfaces/ICacheControl.md).[`cachable`](../interfaces/ICacheControl.md#cachable)

#### Defined in

main.ts:166654

***

### ttl?

> `optional` **ttl**: `number`

time to live
the amount of time the browser caches a resource

#### Implementation of

[`ICacheControl`](../interfaces/ICacheControl.md).[`ttl`](../interfaces/ICacheControl.md#ttl)

#### Defined in

main.ts:166657

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:166670

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:166688

***

### fromJS()

> `static` **fromJS**(`data`): [`CacheControl`](CacheControl.md)

#### Parameters

##### data

`any`

#### Returns

[`CacheControl`](CacheControl.md)

#### Defined in

main.ts:166681
