[**Documentation**](../README.md)

***

[Documentation](../README.md) / LocalBusinessReservationLink

# Class: LocalBusinessReservationLink

Defined in: main.ts:24973

## Extends

- [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

## Implements

- [`ILocalBusinessReservationLink`](../interfaces/ILocalBusinessReservationLink.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new LocalBusinessReservationLink()

> **new LocalBusinessReservationLink**(`data`?): [`LocalBusinessReservationLink`](LocalBusinessReservationLink.md)

Defined in: main.ts:24982

#### Parameters

##### data?

[`ILocalBusinessReservationLink`](../interfaces/ILocalBusinessReservationLink.md)

#### Returns

[`LocalBusinessReservationLink`](LocalBusinessReservationLink.md)

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`constructor`](BaseLocalBusinessLink.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:24920

#### Inherited from

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`_discriminator`](BaseLocalBusinessLink.md#_discriminator)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:24976

title of the element
domain of the reservation software

#### Implementation of

[`ILocalBusinessReservationLink`](../interfaces/ILocalBusinessReservationLink.md).[`title`](../interfaces/ILocalBusinessReservationLink.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24918

type of element

#### Implementation of

[`ILocalBusinessReservationLink`](../interfaces/ILocalBusinessReservationLink.md).[`type`](../interfaces/ILocalBusinessReservationLink.md#type)

#### Inherited from

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`type`](BaseLocalBusinessLink.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:24978

URL to make a reservation

#### Implementation of

[`ILocalBusinessReservationLink`](../interfaces/ILocalBusinessReservationLink.md).[`url`](../interfaces/ILocalBusinessReservationLink.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:24987

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

Defined in: main.ts:25006

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`toJSON`](BaseLocalBusinessLink.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`LocalBusinessReservationLink`](LocalBusinessReservationLink.md)

Defined in: main.ts:24999

#### Parameters

##### data

`any`

#### Returns

[`LocalBusinessReservationLink`](LocalBusinessReservationLink.md)

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`fromJS`](BaseLocalBusinessLink.md#fromjs)
