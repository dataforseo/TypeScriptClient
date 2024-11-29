[**Documentation**](../README.md)

***

[Documentation](../README.md) / AvailableLocations

# Class: AvailableLocations

## Implements

- [`IAvailableLocations`](../interfaces/IAvailableLocations.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AvailableLocations()

> **new AvailableLocations**(`data`?): [`AvailableLocations`](AvailableLocations.md)

#### Parameters

##### data?

[`IAvailableLocations`](../interfaces/IAvailableLocations.md)

#### Returns

[`AvailableLocations`](AvailableLocations.md)

#### Defined in

main.ts:144138

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IAvailableLocations`](../interfaces/IAvailableLocations.md).[`country_iso_code`](../interfaces/IAvailableLocations.md#country_iso_code)

#### Defined in

main.ts:144130

***

### location\_code?

> `optional` **location\_code**: `string`

location code

#### Implementation of

[`IAvailableLocations`](../interfaces/IAvailableLocations.md).[`location_code`](../interfaces/IAvailableLocations.md#location_code)

#### Defined in

main.ts:144126

***

### location\_name?

> `optional` **location\_name**: `string`

location name

#### Implementation of

[`IAvailableLocations`](../interfaces/IAvailableLocations.md).[`location_name`](../interfaces/IAvailableLocations.md#location_name)

#### Defined in

main.ts:144128

***

### location\_type?

> `optional` **location\_type**: `string`

location type
possible values:
Country, Region

#### Implementation of

[`IAvailableLocations`](../interfaces/IAvailableLocations.md).[`location_type`](../interfaces/IAvailableLocations.md#location_type)

#### Defined in

main.ts:144134

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:144147

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:144167

***

### fromJS()

> `static` **fromJS**(`data`): [`AvailableLocations`](AvailableLocations.md)

#### Parameters

##### data

`any`

#### Returns

[`AvailableLocations`](AvailableLocations.md)

#### Defined in

main.ts:144160
