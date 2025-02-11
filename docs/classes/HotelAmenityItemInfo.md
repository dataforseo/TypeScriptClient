[**Documentation**](../README.md)

***

[Documentation](../README.md) / HotelAmenityItemInfo

# Class: HotelAmenityItemInfo

Defined in: main.ts:219498

## Implements

- [`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new HotelAmenityItemInfo()

> **new HotelAmenityItemInfo**(`data`?): [`HotelAmenityItemInfo`](HotelAmenityItemInfo.md)

Defined in: main.ts:219512

#### Parameters

##### data?

[`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md)

#### Returns

[`HotelAmenityItemInfo`](HotelAmenityItemInfo.md)

## Properties

### amenity?

> `optional` **amenity**: `string`

Defined in: main.ts:219500

standardised amenity name

#### Implementation of

[`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md).[`amenity`](../interfaces/IHotelAmenityItemInfo.md#amenity)

***

### amenity\_label?

> `optional` **amenity\_label**: `string`

Defined in: main.ts:219502

displayed amenity name

#### Implementation of

[`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md).[`amenity_label`](../interfaces/IHotelAmenityItemInfo.md#amenity_label)

***

### hint?

> `optional` **hint**: `string`

Defined in: main.ts:219504

standardised details about the amenity

#### Implementation of

[`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md).[`hint`](../interfaces/IHotelAmenityItemInfo.md#hint)

***

### hint\_label?

> `optional` **hint\_label**: `string`

Defined in: main.ts:219506

displayed details about the amenity

#### Implementation of

[`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md).[`hint_label`](../interfaces/IHotelAmenityItemInfo.md#hint_label)

***

### is\_available?

> `optional` **is\_available**: `boolean`

Defined in: main.ts:219508

indicates whether the amenity is available in the hotel

#### Implementation of

[`IHotelAmenityItemInfo`](../interfaces/IHotelAmenityItemInfo.md).[`is_available`](../interfaces/IHotelAmenityItemInfo.md#is_available)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:219521

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:219542

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`HotelAmenityItemInfo`](HotelAmenityItemInfo.md)

Defined in: main.ts:219535

#### Parameters

##### data

`any`

#### Returns

[`HotelAmenityItemInfo`](HotelAmenityItemInfo.md)
