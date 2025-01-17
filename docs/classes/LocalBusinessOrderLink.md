[**Documentation**](../README.md)

***

[Documentation](../README.md) / LocalBusinessOrderLink

# Class: LocalBusinessOrderLink

Defined in: main.ts:25029

## Extends

- [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

## Implements

- [`ILocalBusinessOrderLink`](../interfaces/ILocalBusinessOrderLink.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new LocalBusinessOrderLink()

> **new LocalBusinessOrderLink**(`data`?): [`LocalBusinessOrderLink`](LocalBusinessOrderLink.md)

Defined in: main.ts:25035

#### Parameters

##### data?

[`ILocalBusinessOrderLink`](../interfaces/ILocalBusinessOrderLink.md)

#### Returns

[`LocalBusinessOrderLink`](LocalBusinessOrderLink.md)

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`constructor`](BaseLocalBusinessLink.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:24920

#### Inherited from

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`_discriminator`](BaseLocalBusinessLink.md#_discriminator)

***

### delivery\_services?

> `optional` **delivery\_services**: [`LocalBusinessDeliveryServiceInfo`](LocalBusinessDeliveryServiceInfo.md)[]

Defined in: main.ts:25031

lists available delivery services

#### Implementation of

[`ILocalBusinessOrderLink`](../interfaces/ILocalBusinessOrderLink.md).[`delivery_services`](../interfaces/ILocalBusinessOrderLink.md#delivery_services)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24918

type of element

#### Implementation of

[`ILocalBusinessOrderLink`](../interfaces/ILocalBusinessOrderLink.md).[`type`](../interfaces/ILocalBusinessOrderLink.md#type)

#### Inherited from

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`type`](BaseLocalBusinessLink.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:25040

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`init`](BaseLocalBusinessLink.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:25062

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`toJSON`](BaseLocalBusinessLink.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`LocalBusinessOrderLink`](LocalBusinessOrderLink.md)

Defined in: main.ts:25055

#### Parameters

##### data

`any`

#### Returns

[`LocalBusinessOrderLink`](LocalBusinessOrderLink.md)

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`fromJS`](BaseLocalBusinessLink.md#fromjs)
