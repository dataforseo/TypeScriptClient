**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ServiceOfferingsElement

# Class: ServiceOfferingsElement

## Implements

- [`IServiceOfferingsElement`](../interfaces/IServiceOfferingsElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ServiceOfferingsElement(data)

> **new ServiceOfferingsElement**(`data`?): [`ServiceOfferingsElement`](ServiceOfferingsElement.md)

#### Parameters

• **data?**: [`IServiceOfferingsElement`](../interfaces/IServiceOfferingsElement.md)

#### Returns

[`ServiceOfferingsElement`](ServiceOfferingsElement.md)

#### Source

main.ts:209565

## Properties

### is\_available?

> **`optional`** **is\_available**: `boolean`

availability of the offering
if the value is false, the offering is not available

#### Implementation of

[`IServiceOfferingsElement`](../interfaces/IServiceOfferingsElement.md).[`is_available`](../interfaces/IServiceOfferingsElement.md#is_available)

#### Source

main.ts:209561

***

### name?

> **`optional`** **name**: `string`

name of the label
example: Delivery

#### Implementation of

[`IServiceOfferingsElement`](../interfaces/IServiceOfferingsElement.md).[`name`](../interfaces/IServiceOfferingsElement.md#name)

#### Source

main.ts:209558

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IServiceOfferingsElement`](../interfaces/IServiceOfferingsElement.md).[`type`](../interfaces/IServiceOfferingsElement.md#type)

#### Source

main.ts:209555

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:209574

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:209593

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ServiceOfferingsElement`](ServiceOfferingsElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`ServiceOfferingsElement`](ServiceOfferingsElement.md)

#### Source

main.ts:209586
