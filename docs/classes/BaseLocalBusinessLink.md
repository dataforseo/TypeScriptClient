**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new BaseLocalBusinessLink(data)

> **new BaseLocalBusinessLink**(`data`?): [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

#### Parameters

• **data?**: [`IBaseLocalBusinessLink`](../interfaces/IBaseLocalBusinessLink.md)

#### Returns

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

#### Source

main.ts:22951

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Source

main.ts:22949

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:22961

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:22992

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

#### Source

main.ts:22970
