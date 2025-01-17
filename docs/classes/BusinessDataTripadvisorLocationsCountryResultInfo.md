[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTripadvisorLocationsCountryResultInfo

# Class: BusinessDataTripadvisorLocationsCountryResultInfo

Defined in: main.ts:227344

## Implements

- [`IBusinessDataTripadvisorLocationsCountryResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorLocationsCountryResultInfo()

> **new BusinessDataTripadvisorLocationsCountryResultInfo**(`data`?): [`BusinessDataTripadvisorLocationsCountryResultInfo`](BusinessDataTripadvisorLocationsCountryResultInfo.md)

Defined in: main.ts:227362

#### Parameters

##### data?

[`IBusinessDataTripadvisorLocationsCountryResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md)

#### Returns

[`BusinessDataTripadvisorLocationsCountryResultInfo`](BusinessDataTripadvisorLocationsCountryResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:227356

ISO country code of the location

#### Implementation of

[`IBusinessDataTripadvisorLocationsCountryResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:227346

location code

#### Implementation of

[`IBusinessDataTripadvisorLocationsCountryResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md).[`location_code`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:227348

full name of the location

#### Implementation of

[`IBusinessDataTripadvisorLocationsCountryResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md).[`location_name`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md#location_name)

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `string`

Defined in: main.ts:227354

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_name_parent": "Lower Austria,Austria"

#### Implementation of

[`IBusinessDataTripadvisorLocationsCountryResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md).[`location_name_parent`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md#location_name_parent)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:227358

location type

#### Implementation of

[`IBusinessDataTripadvisorLocationsCountryResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md).[`location_type`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:227371

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:227392

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTripadvisorLocationsCountryResultInfo`](BusinessDataTripadvisorLocationsCountryResultInfo.md)

Defined in: main.ts:227385

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataTripadvisorLocationsCountryResultInfo`](BusinessDataTripadvisorLocationsCountryResultInfo.md)
