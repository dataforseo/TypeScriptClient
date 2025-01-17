[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleLocationsCountryResultInfo

# Class: BusinessDataGoogleLocationsCountryResultInfo

Defined in: main.ts:212630

## Implements

- [`IBusinessDataGoogleLocationsCountryResultInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleLocationsCountryResultInfo()

> **new BusinessDataGoogleLocationsCountryResultInfo**(`data`?): [`BusinessDataGoogleLocationsCountryResultInfo`](BusinessDataGoogleLocationsCountryResultInfo.md)

Defined in: main.ts:212648

#### Parameters

##### data?

[`IBusinessDataGoogleLocationsCountryResultInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md)

#### Returns

[`BusinessDataGoogleLocationsCountryResultInfo`](BusinessDataGoogleLocationsCountryResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:212642

ISO country code of the location

#### Implementation of

[`IBusinessDataGoogleLocationsCountryResultInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:212632

location code

#### Implementation of

[`IBusinessDataGoogleLocationsCountryResultInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:212634

full name of the location

#### Implementation of

[`IBusinessDataGoogleLocationsCountryResultInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md).[`location_name`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md#location_name)

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `string`

Defined in: main.ts:212640

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_name_parent": "Lower Austria,Austria"

#### Implementation of

[`IBusinessDataGoogleLocationsCountryResultInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md).[`location_name_parent`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md#location_name_parent)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:212644

location type

#### Implementation of

[`IBusinessDataGoogleLocationsCountryResultInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md).[`location_type`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:212657

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:212678

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleLocationsCountryResultInfo`](BusinessDataGoogleLocationsCountryResultInfo.md)

Defined in: main.ts:212671

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleLocationsCountryResultInfo`](BusinessDataGoogleLocationsCountryResultInfo.md)
