**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / HotelAmenityItemInfo

# Class: HotelAmenityItemInfo

## Implements

- [`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HotelAmenityItemInfo(data)

> **new HotelAmenityItemInfo**(`data`?): [`HotelAmenityItemInfo`](HotelAmenityItemInfo.md)

#### Parameters

• **data?**: [`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md)

#### Returns

[`HotelAmenityItemInfo`](HotelAmenityItemInfo.md)

#### Source

main.ts:205417

## Properties

### amenity?

> **`optional`** **amenity**: `string`

standardised amenity name

#### Implementation of

[`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md).[`amenity`](../interfaces/IHotelAmenityItemInfo.md#amenity)

#### Source

main.ts:205407

***

### amenity\_label?

> **`optional`** **amenity\_label**: `string`

displayed amenity name

#### Implementation of

[`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md).[`amenity_label`](../interfaces/IHotelAmenityItemInfo.md#amenity_label)

#### Source

main.ts:205409

***

### hint?

> **`optional`** **hint**: `string`

standardised details about the amenity

#### Implementation of

[`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md).[`hint`](../interfaces/IHotelAmenityItemInfo.md#hint)

#### Source

main.ts:205411

***

### hint\_label?

> **`optional`** **hint\_label**: `string`

displayed details about the amenity

#### Implementation of

[`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md).[`hint_label`](../interfaces/IHotelAmenityItemInfo.md#hint_label)

#### Source

main.ts:205413

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:205426

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:205446

***

### fromJS()

> **`static`** **fromJS**(`data`): [`HotelAmenityItemInfo`](HotelAmenityItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`HotelAmenityItemInfo`](HotelAmenityItemInfo.md)

#### Source

main.ts:205439
