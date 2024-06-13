**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AddressInfo

# Class: AddressInfo

## Implements

- [`IAddressInfo`](../interfaces/IAddressInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AddressInfo(data)

> **new AddressInfo**(`data`?): [`AddressInfo`](AddressInfo.md)

#### Parameters

• **data?**: [`IAddressInfo`](../interfaces/IAddressInfo.md)

#### Returns

[`AddressInfo`](AddressInfo.md)

#### Source

main.ts:40300

## Properties

### address?

> **`optional`** **address**: `string`

street address of the local establishment

#### Implementation of

[`IAddressInfo`](../interfaces/IAddressInfo.md).[`address`](../interfaces/IAddressInfo.md#address)

#### Source

main.ts:40288

***

### borough?

> **`optional`** **borough**: `string`

administrative unit or district the local establishment belongs to

#### Implementation of

[`IAddressInfo`](../interfaces/IAddressInfo.md).[`borough`](../interfaces/IAddressInfo.md#borough)

#### Source

main.ts:40286

***

### city?

> **`optional`** **city**: `string`

name of the city where the local establishment is located

#### Implementation of

[`IAddressInfo`](../interfaces/IAddressInfo.md).[`city`](../interfaces/IAddressInfo.md#city)

#### Source

main.ts:40290

***

### country\_code?

> **`optional`** **country\_code**: `string`

ISO country code of the local establishment

#### Implementation of

[`IAddressInfo`](../interfaces/IAddressInfo.md).[`country_code`](../interfaces/IAddressInfo.md#country_code)

#### Source

main.ts:40296

***

### region?

> **`optional`** **region**: `string`

DMA region the local establishment belongs to

#### Implementation of

[`IAddressInfo`](../interfaces/IAddressInfo.md).[`region`](../interfaces/IAddressInfo.md#region)

#### Source

main.ts:40294

***

### zip?

> **`optional`** **zip**: `string`

ZIP code of the local establishment

#### Implementation of

[`IAddressInfo`](../interfaces/IAddressInfo.md).[`zip`](../interfaces/IAddressInfo.md#zip)

#### Source

main.ts:40292

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:40309

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:40331

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AddressInfo`](AddressInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AddressInfo`](AddressInfo.md)

#### Source

main.ts:40324
