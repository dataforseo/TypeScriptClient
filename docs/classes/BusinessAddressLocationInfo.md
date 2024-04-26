**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessAddressLocationInfo

# Class: BusinessAddressLocationInfo

## Implements

- [`IBusinessAddressLocationInfo`](../interfaces/IBusinessAddressLocationInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessAddressLocationInfo(data)

> **new BusinessAddressLocationInfo**(`data`?): [`BusinessAddressLocationInfo`](BusinessAddressLocationInfo.md)

#### Parameters

• **data?**: [`IBusinessAddressLocationInfo`](../interfaces/IBusinessAddressLocationInfo.md)

#### Returns

[`BusinessAddressLocationInfo`](BusinessAddressLocationInfo.md)

#### Source

main.ts:210352

## Properties

### address\_lines?

> **`optional`** **address\_lines**: `string`[]

business address
contains few address lines specified by the business entity

#### Implementation of

[`IBusinessAddressLocationInfo`](../interfaces/IBusinessAddressLocationInfo.md).[`address_lines`](../interfaces/IBusinessAddressLocationInfo.md#address_lines)

#### Source

main.ts:210344

***

### latitude?

> **`optional`** **latitude**: `string`

latitude in GPS coordinates

#### Implementation of

[`IBusinessAddressLocationInfo`](../interfaces/IBusinessAddressLocationInfo.md).[`latitude`](../interfaces/IBusinessAddressLocationInfo.md#latitude)

#### Source

main.ts:210346

***

### longitude?

> **`optional`** **longitude**: `string`

longitude in GPS coordinates

#### Implementation of

[`IBusinessAddressLocationInfo`](../interfaces/IBusinessAddressLocationInfo.md).[`longitude`](../interfaces/IBusinessAddressLocationInfo.md#longitude)

#### Source

main.ts:210348

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:210361

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:210384

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessAddressLocationInfo`](BusinessAddressLocationInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessAddressLocationInfo`](BusinessAddressLocationInfo.md)

#### Source

main.ts:210377
