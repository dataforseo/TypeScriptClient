[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / LocalBusinessReservationLink

# Class: LocalBusinessReservationLink

## Extends

- [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

## Implements

- [`ILocalBusinessReservationLink`](../interfaces/ILocalBusinessReservationLink.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new LocalBusinessReservationLink()

> **new LocalBusinessReservationLink**(`data`?): [`LocalBusinessReservationLink`](LocalBusinessReservationLink.md)

#### Parameters

• **data?**: [`ILocalBusinessReservationLink`](../interfaces/ILocalBusinessReservationLink.md)

#### Returns

[`LocalBusinessReservationLink`](LocalBusinessReservationLink.md)

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`constructor`](BaseLocalBusinessLink.md#constructors)

#### Defined in

main.ts:23912

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`_discriminator`](BaseLocalBusinessLink.md#_discriminator)

#### Defined in

main.ts:23850

***

### title?

> `optional` **title**: `string`

title of the element
domain of the reservation software

#### Implementation of

[`ILocalBusinessReservationLink`](../interfaces/ILocalBusinessReservationLink.md).[`title`](../interfaces/ILocalBusinessReservationLink.md#title)

#### Defined in

main.ts:23906

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ILocalBusinessReservationLink`](../interfaces/ILocalBusinessReservationLink.md).[`type`](../interfaces/ILocalBusinessReservationLink.md#type)

#### Inherited from

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`type`](BaseLocalBusinessLink.md#type)

#### Defined in

main.ts:23848

***

### url?

> `optional` **url**: `string`

URL to make a reservation

#### Implementation of

[`ILocalBusinessReservationLink`](../interfaces/ILocalBusinessReservationLink.md).[`url`](../interfaces/ILocalBusinessReservationLink.md#url)

#### Defined in

main.ts:23908

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`init`](BaseLocalBusinessLink.md#init)

#### Defined in

main.ts:23917

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`toJSON`](BaseLocalBusinessLink.md#tojson)

#### Defined in

main.ts:23936

***

### fromJS()

> `static` **fromJS**(`data`): [`LocalBusinessReservationLink`](LocalBusinessReservationLink.md)

#### Parameters

• **data**: `any`

#### Returns

[`LocalBusinessReservationLink`](LocalBusinessReservationLink.md)

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`fromJS`](BaseLocalBusinessLink.md#fromjs)

#### Defined in

main.ts:23929
