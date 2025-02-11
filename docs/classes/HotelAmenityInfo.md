[**Documentation**](../README.md)

***

[Documentation](../README.md) / HotelAmenityInfo

# Class: HotelAmenityInfo

Defined in: main.ts:219572

## Implements

- [`IHotelAmenityInfo`](../interfaces/IHotelAmenityInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new HotelAmenityInfo()

> **new HotelAmenityInfo**(`data`?): [`HotelAmenityInfo`](HotelAmenityInfo.md)

Defined in: main.ts:219582

#### Parameters

##### data?

[`IHotelAmenityInfo`](../interfaces/IHotelAmenityInfo.md)

#### Returns

[`HotelAmenityInfo`](HotelAmenityInfo.md)

## Properties

### category?

> `optional` **category**: `string`

Defined in: main.ts:219574

standardised category of the ammenity

#### Implementation of

[`IHotelAmenityInfo`](../interfaces/IHotelAmenityInfo.md).[`category`](../interfaces/IHotelAmenityInfo.md#category)

***

### category\_label?

> `optional` **category\_label**: `string`

Defined in: main.ts:219576

label of the category

#### Implementation of

[`IHotelAmenityInfo`](../interfaces/IHotelAmenityInfo.md).[`category_label`](../interfaces/IHotelAmenityInfo.md#category_label)

***

### items?

> `optional` **items**: [`HotelAmenityItemInfo`](HotelAmenityItemInfo.md)[]

Defined in: main.ts:219578

specific amenities and details

#### Implementation of

[`IHotelAmenityInfo`](../interfaces/IHotelAmenityInfo.md).[`items`](../interfaces/IHotelAmenityInfo.md#items)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:219591

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:219614

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`HotelAmenityInfo`](HotelAmenityInfo.md)

Defined in: main.ts:219607

#### Parameters

##### data

`any`

#### Returns

[`HotelAmenityInfo`](HotelAmenityInfo.md)
