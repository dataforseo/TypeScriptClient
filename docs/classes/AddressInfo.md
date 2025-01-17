[**Documentation**](../README.md)

***

[Documentation](../README.md) / AddressInfo

# Class: AddressInfo

Defined in: main.ts:41413

## Implements

- [`IAddressInfo`](../interfaces/IAddressInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AddressInfo()

> **new AddressInfo**(`data`?): [`AddressInfo`](AddressInfo.md)

Defined in: main.ts:41429

#### Parameters

##### data?

[`IAddressInfo`](../interfaces/IAddressInfo.md)

#### Returns

[`AddressInfo`](AddressInfo.md)

## Properties

### address?

> `optional` **address**: `string`

Defined in: main.ts:41417

street address of the local establishment

#### Implementation of

[`IAddressInfo`](../interfaces/IAddressInfo.md).[`address`](../interfaces/IAddressInfo.md#address)

***

### borough?

> `optional` **borough**: `string`

Defined in: main.ts:41415

administrative unit or district the local establishment belongs to

#### Implementation of

[`IAddressInfo`](../interfaces/IAddressInfo.md).[`borough`](../interfaces/IAddressInfo.md#borough)

***

### city?

> `optional` **city**: `string`

Defined in: main.ts:41419

name of the city where the local establishment is located

#### Implementation of

[`IAddressInfo`](../interfaces/IAddressInfo.md).[`city`](../interfaces/IAddressInfo.md#city)

***

### country\_code?

> `optional` **country\_code**: `string`

Defined in: main.ts:41425

ISO country code of the local establishment

#### Implementation of

[`IAddressInfo`](../interfaces/IAddressInfo.md).[`country_code`](../interfaces/IAddressInfo.md#country_code)

***

### region?

> `optional` **region**: `string`

Defined in: main.ts:41423

DMA region the local establishment belongs to

#### Implementation of

[`IAddressInfo`](../interfaces/IAddressInfo.md).[`region`](../interfaces/IAddressInfo.md#region)

***

### zip?

> `optional` **zip**: `string`

Defined in: main.ts:41421

ZIP code of the local establishment

#### Implementation of

[`IAddressInfo`](../interfaces/IAddressInfo.md).[`zip`](../interfaces/IAddressInfo.md#zip)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:41438

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:41460

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AddressInfo`](AddressInfo.md)

Defined in: main.ts:41453

#### Parameters

##### data

`any`

#### Returns

[`AddressInfo`](AddressInfo.md)
