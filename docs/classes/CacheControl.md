[Documentation](../README.md) / [Exports](../modules.md) / CacheControl

# Class: CacheControl

## Implements

- [`ICacheControl`](../interfaces/ICacheControl.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](CacheControl.md#constructor)

### Properties

- [cachable](CacheControl.md#cachable)
- [ttl](CacheControl.md#ttl)

### Methods

- [init](CacheControl.md#init)
- [toJSON](CacheControl.md#tojson)
- [fromJS](CacheControl.md#fromjs)

## Constructors

### constructor

• **new CacheControl**(`data?`): [`CacheControl`](CacheControl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ICacheControl`](../interfaces/ICacheControl.md) |

#### Returns

[`CacheControl`](CacheControl.md)

#### Defined in

main.ts:150173

## Properties

### cachable

• `Optional` **cachable**: `boolean`

indicates whether the page is cacheable

#### Implementation of

[ICacheControl](../interfaces/ICacheControl.md).[cachable](../interfaces/ICacheControl.md#cachable)

#### Defined in

main.ts:150166

___

### ttl

• `Optional` **ttl**: `number`

time to live
the amount of time the browser caches a resource

#### Implementation of

[ICacheControl](../interfaces/ICacheControl.md).[ttl](../interfaces/ICacheControl.md#ttl)

#### Defined in

main.ts:150169

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:150182

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:150200

___

### fromJS

▸ **fromJS**(`data`): [`CacheControl`](CacheControl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`CacheControl`](CacheControl.md)

#### Defined in

main.ts:150193
