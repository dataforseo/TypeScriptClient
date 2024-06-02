**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AvailableLocations

# Class: AvailableLocations

## Implements

- [`IAvailableLocations`](../interfaces/IAvailableLocations.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AvailableLocations(data)

> **new AvailableLocations**(`data`?): [`AvailableLocations`](AvailableLocations.md)

#### Parameters

• **data?**: [`IAvailableLocations`](../interfaces/IAvailableLocations.md)

#### Returns

[`AvailableLocations`](AvailableLocations.md)

#### Source

main.ts:132979

## Properties

### country\_iso\_code?

> **`optional`** **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IAvailableLocations`](../interfaces/IAvailableLocations.md).[`country_iso_code`](../interfaces/IAvailableLocations.md#country_iso_code)

#### Source

main.ts:132971

***

### location\_code?

> **`optional`** **location\_code**: `string`

location code

#### Implementation of

[`IAvailableLocations`](../interfaces/IAvailableLocations.md).[`location_code`](../interfaces/IAvailableLocations.md#location_code)

#### Source

main.ts:132967

***

### location\_name?

> **`optional`** **location\_name**: `string`

location name

#### Implementation of

[`IAvailableLocations`](../interfaces/IAvailableLocations.md).[`location_name`](../interfaces/IAvailableLocations.md#location_name)

#### Source

main.ts:132969

***

### location\_type?

> **`optional`** **location\_type**: `string`

location type
possible values:
Country, Region

#### Implementation of

[`IAvailableLocations`](../interfaces/IAvailableLocations.md).[`location_type`](../interfaces/IAvailableLocations.md#location_type)

#### Source

main.ts:132975

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:132988

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:133008

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AvailableLocations`](AvailableLocations.md)

#### Parameters

• **data**: `any`

#### Returns

[`AvailableLocations`](AvailableLocations.md)

#### Source

main.ts:133001
