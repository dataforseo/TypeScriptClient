[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BaseLocalBusinessLink

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

• **data?**: [`IBaseLocalBusinessLink`](../interfaces/IBaseLocalBusinessLink.md)

#### Returns

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

#### Defined in

main.ts:23852

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:23850

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBaseLocalBusinessLink`](../interfaces/IBaseLocalBusinessLink.md).[`type`](../interfaces/IBaseLocalBusinessLink.md#type)

#### Defined in

main.ts:23848

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:23862

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:23890

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

#### Defined in

main.ts:23868
