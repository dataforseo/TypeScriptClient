[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataTripadvisorLocationsCountryResultInfo

# Class: BusinessDataTripadvisorLocationsCountryResultInfo

## Implements

- [`IBusinessDataTripadvisorLocationsCountryResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorLocationsCountryResultInfo()

> **new BusinessDataTripadvisorLocationsCountryResultInfo**(`data`?): [`BusinessDataTripadvisorLocationsCountryResultInfo`](BusinessDataTripadvisorLocationsCountryResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTripadvisorLocationsCountryResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md)

#### Returns

[`BusinessDataTripadvisorLocationsCountryResultInfo`](BusinessDataTripadvisorLocationsCountryResultInfo.md)

#### Defined in

main.ts:212361

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IBusinessDataTripadvisorLocationsCountryResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

main.ts:212355

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`IBusinessDataTripadvisorLocationsCountryResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md).[`location_code`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md#location_code)

#### Defined in

main.ts:212345

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`IBusinessDataTripadvisorLocationsCountryResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md).[`location_name`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md#location_name)

#### Defined in

main.ts:212347

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_name_parent": "Lower Austria,Austria"

#### Implementation of

[`IBusinessDataTripadvisorLocationsCountryResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md).[`location_name_parent`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md#location_name_parent)

#### Defined in

main.ts:212353

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Implementation of

[`IBusinessDataTripadvisorLocationsCountryResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md).[`location_type`](../interfaces/IBusinessDataTripadvisorLocationsCountryResultInfo.md#location_type)

#### Defined in

main.ts:212357

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:212370

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:212391

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTripadvisorLocationsCountryResultInfo`](BusinessDataTripadvisorLocationsCountryResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTripadvisorLocationsCountryResultInfo`](BusinessDataTripadvisorLocationsCountryResultInfo.md)

#### Defined in

main.ts:212384
