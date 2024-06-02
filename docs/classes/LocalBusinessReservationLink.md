**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / LocalBusinessReservationLink

# Class: LocalBusinessReservationLink

## Extends

- [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

## Implements

- [`ILocalBusinessReservationLink`](../interfaces/ILocalBusinessReservationLink.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new LocalBusinessReservationLink(data)

> **new LocalBusinessReservationLink**(`data`?): [`LocalBusinessReservationLink`](LocalBusinessReservationLink.md)

#### Parameters

• **data?**: [`ILocalBusinessReservationLink`](../interfaces/ILocalBusinessReservationLink.md)

#### Returns

[`LocalBusinessReservationLink`](LocalBusinessReservationLink.md)

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`constructor`](BaseLocalBusinessLink.md#constructors)

#### Source

main.ts:22825

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`_discriminator`](BaseLocalBusinessLink.md#_discriminator)

#### Source

main.ts:22757

***

### title?

> **`optional`** **title**: `string`

title of the element
domain of the reservation software

#### Implementation of

[`ILocalBusinessReservationLink`](../interfaces/ILocalBusinessReservationLink.md).[`title`](../interfaces/ILocalBusinessReservationLink.md#title)

#### Source

main.ts:22819

***

### url?

> **`optional`** **url**: `string`

URL to make a reservation

#### Implementation of

[`ILocalBusinessReservationLink`](../interfaces/ILocalBusinessReservationLink.md).[`url`](../interfaces/ILocalBusinessReservationLink.md#url)

#### Source

main.ts:22821

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`init`](BaseLocalBusinessLink.md#init)

#### Source

main.ts:22830

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`toJSON`](BaseLocalBusinessLink.md#tojson)

#### Source

main.ts:22849

***

### fromJS()

> **`static`** **fromJS**(`data`): [`LocalBusinessReservationLink`](LocalBusinessReservationLink.md)

#### Parameters

• **data**: `any`

#### Returns

[`LocalBusinessReservationLink`](LocalBusinessReservationLink.md)

#### Overrides

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md).[`fromJS`](BaseLocalBusinessLink.md#fromjs)

#### Source

main.ts:22842
