[**Documentation**](../README.md)

***

[Documentation](../README.md) / LocalBusinessOrderLink

# Class: LocalBusinessOrderLink

## Extends

- [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

## Implements

- [`ILocalBusinessOrderLink`](../interfaces/ILocalBusinessOrderLink.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new LocalBusinessOrderLink()

> **new LocalBusinessOrderLink**(`data`?): [`LocalBusinessOrderLink`](LocalBusinessOrderLink.md)

#### Parameters

##### data?

[`ILocalBusinessOrderLink`](../interfaces/ILocalBusinessOrderLink.md)

#### Returns

[`LocalBusinessOrderLink`](LocalBusinessOrderLink.md)

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`constructor`](BaseLocalBusinessLink.md#constructors)

#### Defined in

main.ts:25035

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`_discriminator`](BaseLocalBusinessLink.md#_discriminator)

#### Defined in

main.ts:24920

***

### delivery\_services?

> `optional` **delivery\_services**: [`LocalBusinessDeliveryServiceInfo`](LocalBusinessDeliveryServiceInfo.md)[]

lists available delivery services

#### Implementation of

[`ILocalBusinessOrderLink`](../interfaces/ILocalBusinessOrderLink.md).[`delivery_services`](../interfaces/ILocalBusinessOrderLink.md#delivery_services)

#### Defined in

main.ts:25031

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ILocalBusinessOrderLink`](../interfaces/ILocalBusinessOrderLink.md).[`type`](../interfaces/ILocalBusinessOrderLink.md#type)

#### Inherited from

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`type`](BaseLocalBusinessLink.md#type)

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

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`init`](BaseLocalBusinessLink.md#init)

#### Defined in

main.ts:25040

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`toJSON`](BaseLocalBusinessLink.md#tojson)

#### Defined in

main.ts:25062

***

### fromJS()

> `static` **fromJS**(`data`): [`LocalBusinessOrderLink`](LocalBusinessOrderLink.md)

#### Parameters

##### data

`any`

#### Returns

[`LocalBusinessOrderLink`](LocalBusinessOrderLink.md)

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`fromJS`](BaseLocalBusinessLink.md#fromjs)

#### Defined in

main.ts:25055
