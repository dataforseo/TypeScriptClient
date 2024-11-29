[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTripadvisorLocationsResultInfo

# Class: BusinessDataTripadvisorLocationsResultInfo

## Implements

- [`IBusinessDataTripadvisorLocationsResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorLocationsResultInfo()

> **new BusinessDataTripadvisorLocationsResultInfo**(`data`?): [`BusinessDataTripadvisorLocationsResultInfo`](BusinessDataTripadvisorLocationsResultInfo.md)

#### Parameters

##### data?

[`IBusinessDataTripadvisorLocationsResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md)

#### Returns

[`BusinessDataTripadvisorLocationsResultInfo`](BusinessDataTripadvisorLocationsResultInfo.md)

#### Defined in

main.ts:227102

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IBusinessDataTripadvisorLocationsResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md).[`country_iso_code`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:227096

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`IBusinessDataTripadvisorLocationsResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md).[`location_code`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md#location_code)

#### Defined in

main.ts:227086

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`IBusinessDataTripadvisorLocationsResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md).[`location_name`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md#location_name)

#### Defined in

main.ts:227088

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_name_parent": "Lower Austria,Austria"

#### Implementation of

[`IBusinessDataTripadvisorLocationsResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md).[`location_name_parent`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md#location_name_parent)

#### Defined in

main.ts:227094

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Implementation of

[`IBusinessDataTripadvisorLocationsResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md).[`location_type`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md#location_type)

#### Defined in

main.ts:227098

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:227111

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:227132

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTripadvisorLocationsResultInfo`](BusinessDataTripadvisorLocationsResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataTripadvisorLocationsResultInfo`](BusinessDataTripadvisorLocationsResultInfo.md)

#### Defined in

main.ts:227125
