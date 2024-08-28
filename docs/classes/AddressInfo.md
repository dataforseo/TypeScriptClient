[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / AddressInfo

# Class: AddressInfo

## Implements

- [`IAddressInfo`](../interfaces/IAddressInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AddressInfo()

> **new AddressInfo**(`data`?): [`AddressInfo`](AddressInfo.md)

#### Parameters

• **data?**: [`IAddressInfo`](../interfaces/IAddressInfo.md)

#### Returns

[`AddressInfo`](AddressInfo.md)

#### Defined in

main.ts:41427

## Properties

### address?

> `optional` **address**: `string`

street address of the local establishment

#### Implementation of

[`IAddressInfo`](../interfaces/IAddressInfo.md).[`address`](../interfaces/IAddressInfo.md#address)

#### Defined in

main.ts:41415

***

### borough?

> `optional` **borough**: `string`

administrative unit or district the local establishment belongs to

#### Implementation of

[`IAddressInfo`](../interfaces/IAddressInfo.md).[`borough`](../interfaces/IAddressInfo.md#borough)

#### Defined in

main.ts:41413

***

### city?

> `optional` **city**: `string`

name of the city where the local establishment is located

#### Implementation of

[`IAddressInfo`](../interfaces/IAddressInfo.md).[`city`](../interfaces/IAddressInfo.md#city)

#### Defined in

main.ts:41417

***

### country\_code?

> `optional` **country\_code**: `string`

ISO country code of the local establishment

#### Implementation of

[`IAddressInfo`](../interfaces/IAddressInfo.md).[`country_code`](../interfaces/IAddressInfo.md#country_code)

#### Defined in

main.ts:41423

***

### region?

> `optional` **region**: `string`

DMA region the local establishment belongs to

#### Implementation of

[`IAddressInfo`](../interfaces/IAddressInfo.md).[`region`](../interfaces/IAddressInfo.md#region)

#### Defined in

main.ts:41421

***

### zip?

> `optional` **zip**: `string`

ZIP code of the local establishment

#### Implementation of

[`IAddressInfo`](../interfaces/IAddressInfo.md).[`zip`](../interfaces/IAddressInfo.md#zip)

#### Defined in

main.ts:41419

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:41436

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:41458

***

### fromJS()

> `static` **fromJS**(`data`): [`AddressInfo`](AddressInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AddressInfo`](AddressInfo.md)

#### Defined in

main.ts:41451
