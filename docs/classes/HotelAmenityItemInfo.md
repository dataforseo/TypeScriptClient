[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / HotelAmenityItemInfo

# Class: HotelAmenityItemInfo

## Implements

- [`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HotelAmenityItemInfo()

> **new HotelAmenityItemInfo**(`data`?): [`HotelAmenityItemInfo`](HotelAmenityItemInfo.md)

#### Parameters

• **data?**: [`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md)

#### Returns

[`HotelAmenityItemInfo`](HotelAmenityItemInfo.md)

#### Defined in

main.ts:210214

## Properties

### amenity?

> `optional` **amenity**: `string`

standardised amenity name

#### Implementation of

[`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md).[`amenity`](../interfaces/IHotelAmenityItemInfo.md#amenity)

#### Defined in

main.ts:210204

***

### amenity\_label?

> `optional` **amenity\_label**: `string`

displayed amenity name

#### Implementation of

[`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md).[`amenity_label`](../interfaces/IHotelAmenityItemInfo.md#amenity_label)

#### Defined in

main.ts:210206

***

### hint?

> `optional` **hint**: `string`

standardised details about the amenity

#### Implementation of

[`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md).[`hint`](../interfaces/IHotelAmenityItemInfo.md#hint)

#### Defined in

main.ts:210208

***

### hint\_label?

> `optional` **hint\_label**: `string`

displayed details about the amenity

#### Implementation of

[`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md).[`hint_label`](../interfaces/IHotelAmenityItemInfo.md#hint_label)

#### Defined in

main.ts:210210

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:210223

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:210243

***

### fromJS()

> `static` **fromJS**(`data`): [`HotelAmenityItemInfo`](HotelAmenityItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`HotelAmenityItemInfo`](HotelAmenityItemInfo.md)

#### Defined in

main.ts:210236
