[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleLocationsCountryResultInfo

# Class: SerpGoogleLocationsCountryResultInfo

## Implements

- [`ISerpGoogleLocationsCountryResultInfo`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleLocationsCountryResultInfo()

> **new SerpGoogleLocationsCountryResultInfo**(`data`?): [`SerpGoogleLocationsCountryResultInfo`](SerpGoogleLocationsCountryResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleLocationsCountryResultInfo`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md)

#### Returns

[`SerpGoogleLocationsCountryResultInfo`](SerpGoogleLocationsCountryResultInfo.md)

#### Defined in

main.ts:25600

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`ISerpGoogleLocationsCountryResultInfo`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

main.ts:25594

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`ISerpGoogleLocationsCountryResultInfo`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md).[`location_code`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md#location_code)

#### Defined in

main.ts:25581

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Implementation of

[`ISerpGoogleLocationsCountryResultInfo`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md).[`location_code_parent`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md#location_code_parent)

#### Defined in

main.ts:25592

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`ISerpGoogleLocationsCountryResultInfo`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md).[`location_name`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md#location_name)

#### Defined in

main.ts:25583

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Implementation of

[`ISerpGoogleLocationsCountryResultInfo`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md).[`location_type`](../interfaces/ISerpGoogleLocationsCountryResultInfo.md#location_type)

#### Defined in

main.ts:25596

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:25609

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:25630

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleLocationsCountryResultInfo`](SerpGoogleLocationsCountryResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleLocationsCountryResultInfo`](SerpGoogleLocationsCountryResultInfo.md)

#### Defined in

main.ts:25623
