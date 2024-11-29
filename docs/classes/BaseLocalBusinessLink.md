[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseLocalBusinessLink

# Class: BaseLocalBusinessLink

## Extended by

- [`LocalBusinessReservationLink`](LocalBusinessReservationLink.md)
- [`LocalBusinessOrderLink`](LocalBusinessOrderLink.md)
- [`LocalBusinessMenuLink`](LocalBusinessMenuLink.md)

## Implements

- [`IBaseLocalBusinessLink`](../interfaces/IBaseLocalBusinessLink.md)

## Constructors

### new BaseLocalBusinessLink()

> **new BaseLocalBusinessLink**(`data`?): [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

#### Parameters

##### data?

[`IBaseLocalBusinessLink`](../interfaces/IBaseLocalBusinessLink.md)

#### Returns

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

#### Defined in

main.ts:24922

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:24920

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBaseLocalBusinessLink`](../interfaces/IBaseLocalBusinessLink.md).[`type`](../interfaces/IBaseLocalBusinessLink.md#type)

#### Defined in

main.ts:24918

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:24932

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:24960

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

#### Parameters

##### data

`any`

#### Returns

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

#### Defined in

main.ts:24938
