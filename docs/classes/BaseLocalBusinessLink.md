[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BaseLocalBusinessLink

# Class: BaseLocalBusinessLink

## Extended by

- [`LocalBusinessReservationLink`](LocalBusinessReservationLink.md)
- [`LocalBusinessOrderLink`](LocalBusinessOrderLink.md)
- [`LocalBusinessMenuLink`](LocalBusinessMenuLink.md)

## Implements

- [`IBaseLocalBusinessLink`](../interfaces/IBaseLocalBusinessLink.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BaseLocalBusinessLink()

> **new BaseLocalBusinessLink**(`data`?): [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

#### Parameters

• **data?**: [`IBaseLocalBusinessLink`](../interfaces/IBaseLocalBusinessLink.md)

#### Returns

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

#### Defined in

main.ts:23530

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:23528

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:23540

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:23571

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

#### Defined in

main.ts:23549
