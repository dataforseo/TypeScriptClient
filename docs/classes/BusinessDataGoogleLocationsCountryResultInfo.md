[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BusinessDataGoogleLocationsCountryResultInfo

# Class: BusinessDataGoogleLocationsCountryResultInfo

## Implements

- [`IBusinessDataGoogleLocationsCountryResultInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleLocationsCountryResultInfo()

> **new BusinessDataGoogleLocationsCountryResultInfo**(`data`?): [`BusinessDataGoogleLocationsCountryResultInfo`](BusinessDataGoogleLocationsCountryResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleLocationsCountryResultInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md)

#### Returns

[`BusinessDataGoogleLocationsCountryResultInfo`](BusinessDataGoogleLocationsCountryResultInfo.md)

#### Defined in

main.ts:204815

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IBusinessDataGoogleLocationsCountryResultInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

main.ts:204809

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`IBusinessDataGoogleLocationsCountryResultInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md#location_code)

#### Defined in

main.ts:204799

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`IBusinessDataGoogleLocationsCountryResultInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md).[`location_name`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md#location_name)

#### Defined in

main.ts:204801

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_name_parent": "Lower Austria,Austria"

#### Implementation of

[`IBusinessDataGoogleLocationsCountryResultInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md).[`location_name_parent`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md#location_name_parent)

#### Defined in

main.ts:204807

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Implementation of

[`IBusinessDataGoogleLocationsCountryResultInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md).[`location_type`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md#location_type)

#### Defined in

main.ts:204811

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:204824

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:204845

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleLocationsCountryResultInfo`](BusinessDataGoogleLocationsCountryResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleLocationsCountryResultInfo`](BusinessDataGoogleLocationsCountryResultInfo.md)

#### Defined in

main.ts:204838
