[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseLocalBusinessLink

# Class: BaseLocalBusinessLink

Defined in: main.ts:24916

## Extended by

- [`LocalBusinessReservationLink`](LocalBusinessReservationLink.md)
- [`LocalBusinessOrderLink`](LocalBusinessOrderLink.md)
- [`LocalBusinessMenuLink`](LocalBusinessMenuLink.md)

## Implements

- [`IBaseLocalBusinessLink`](../interfaces/IBaseLocalBusinessLink.md)

## Constructors

### new BaseLocalBusinessLink()

> **new BaseLocalBusinessLink**(`data`?): [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

Defined in: main.ts:24922

#### Parameters

##### data?

[`IBaseLocalBusinessLink`](../interfaces/IBaseLocalBusinessLink.md)

#### Returns

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:24920

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24918

type of element

#### Implementation of

[`IBaseLocalBusinessLink`](../interfaces/IBaseLocalBusinessLink.md).[`type`](../interfaces/IBaseLocalBusinessLink.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:24932

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:24960

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

Defined in: main.ts:24938

#### Parameters

##### data

`any`

#### Returns

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)
