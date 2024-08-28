[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / HotelAmenityInfo

# Class: HotelAmenityInfo

## Implements

- [`IHotelAmenityInfo`](../interfaces/IHotelAmenityInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HotelAmenityInfo()

> **new HotelAmenityInfo**(`data`?): [`HotelAmenityInfo`](HotelAmenityInfo.md)

#### Parameters

• **data?**: [`IHotelAmenityInfo`](../interfaces/IHotelAmenityInfo.md)

#### Returns

[`HotelAmenityInfo`](HotelAmenityInfo.md)

#### Defined in

main.ts:210280

## Properties

### category?

> `optional` **category**: `string`

standardised category of the ammenity

#### Implementation of

[`IHotelAmenityInfo`](../interfaces/IHotelAmenityInfo.md).[`category`](../interfaces/IHotelAmenityInfo.md#category)

#### Defined in

main.ts:210272

***

### category\_label?

> `optional` **category\_label**: `string`

label of the category

#### Implementation of

[`IHotelAmenityInfo`](../interfaces/IHotelAmenityInfo.md).[`category_label`](../interfaces/IHotelAmenityInfo.md#category_label)

#### Defined in

main.ts:210274

***

### items?

> `optional` **items**: [`HotelAmenityItemInfo`](HotelAmenityItemInfo.md)[]

specific amenities and details

#### Implementation of

[`IHotelAmenityInfo`](../interfaces/IHotelAmenityInfo.md).[`items`](../interfaces/IHotelAmenityInfo.md#items)

#### Defined in

main.ts:210276

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:210289

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:210312

***

### fromJS()

> `static` **fromJS**(`data`): [`HotelAmenityInfo`](HotelAmenityInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`HotelAmenityInfo`](HotelAmenityInfo.md)

#### Defined in

main.ts:210305
