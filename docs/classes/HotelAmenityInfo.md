**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / HotelAmenityInfo

# Class: HotelAmenityInfo

## Implements

- [`IHotelAmenityInfo`](../interfaces/IHotelAmenityInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HotelAmenityInfo(data)

> **new HotelAmenityInfo**(`data`?): [`HotelAmenityInfo`](HotelAmenityInfo.md)

#### Parameters

• **data?**: [`IHotelAmenityInfo`](../interfaces/IHotelAmenityInfo.md)

#### Returns

[`HotelAmenityInfo`](HotelAmenityInfo.md)

#### Source

main.ts:208430

## Properties

### category?

> **`optional`** **category**: `string`

standardised category of the ammenity

#### Implementation of

[`IHotelAmenityInfo`](../interfaces/IHotelAmenityInfo.md).[`category`](../interfaces/IHotelAmenityInfo.md#category)

#### Source

main.ts:208422

***

### category\_label?

> **`optional`** **category\_label**: `string`

label of the category

#### Implementation of

[`IHotelAmenityInfo`](../interfaces/IHotelAmenityInfo.md).[`category_label`](../interfaces/IHotelAmenityInfo.md#category_label)

#### Source

main.ts:208424

***

### items?

> **`optional`** **items**: [`HotelAmenityItemInfo`](HotelAmenityItemInfo.md)[]

specific amenities and details

#### Implementation of

[`IHotelAmenityInfo`](../interfaces/IHotelAmenityInfo.md).[`items`](../interfaces/IHotelAmenityInfo.md#items)

#### Source

main.ts:208426

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:208439

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:208462

***

### fromJS()

> **`static`** **fromJS**(`data`): [`HotelAmenityInfo`](HotelAmenityInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`HotelAmenityInfo`](HotelAmenityInfo.md)

#### Source

main.ts:208455
