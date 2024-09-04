[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpSeznamLocationsResultInfo

# Class: SerpSeznamLocationsResultInfo

## Implements

- [`ISerpSeznamLocationsResultInfo`](../interfaces/ISerpSeznamLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamLocationsResultInfo()

> **new SerpSeznamLocationsResultInfo**(`data`?): [`SerpSeznamLocationsResultInfo`](SerpSeznamLocationsResultInfo.md)

#### Parameters

• **data?**: [`ISerpSeznamLocationsResultInfo`](../interfaces/ISerpSeznamLocationsResultInfo.md)

#### Returns

[`SerpSeznamLocationsResultInfo`](SerpSeznamLocationsResultInfo.md)

#### Defined in

main.ts:73835

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`ISerpSeznamLocationsResultInfo`](../interfaces/ISerpSeznamLocationsResultInfo.md).[`country_iso_code`](../interfaces/ISerpSeznamLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:73829

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`ISerpSeznamLocationsResultInfo`](../interfaces/ISerpSeznamLocationsResultInfo.md).[`location_code`](../interfaces/ISerpSeznamLocationsResultInfo.md#location_code)

#### Defined in

main.ts:73821

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API

#### Implementation of

[`ISerpSeznamLocationsResultInfo`](../interfaces/ISerpSeznamLocationsResultInfo.md).[`location_code_parent`](../interfaces/ISerpSeznamLocationsResultInfo.md#location_code_parent)

#### Defined in

main.ts:73827

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`ISerpSeznamLocationsResultInfo`](../interfaces/ISerpSeznamLocationsResultInfo.md).[`location_name`](../interfaces/ISerpSeznamLocationsResultInfo.md#location_name)

#### Defined in

main.ts:73823

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Implementation of

[`ISerpSeznamLocationsResultInfo`](../interfaces/ISerpSeznamLocationsResultInfo.md).[`location_type`](../interfaces/ISerpSeznamLocationsResultInfo.md#location_type)

#### Defined in

main.ts:73831

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:73844

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:73865

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpSeznamLocationsResultInfo`](SerpSeznamLocationsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpSeznamLocationsResultInfo`](SerpSeznamLocationsResultInfo.md)

#### Defined in

main.ts:73858
