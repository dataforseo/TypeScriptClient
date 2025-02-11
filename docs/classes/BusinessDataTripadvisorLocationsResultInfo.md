[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTripadvisorLocationsResultInfo

# Class: BusinessDataTripadvisorLocationsResultInfo

Defined in: main.ts:227660

## Implements

- [`IBusinessDataTripadvisorLocationsResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorLocationsResultInfo()

> **new BusinessDataTripadvisorLocationsResultInfo**(`data`?): [`BusinessDataTripadvisorLocationsResultInfo`](BusinessDataTripadvisorLocationsResultInfo.md)

Defined in: main.ts:227678

#### Parameters

##### data?

[`IBusinessDataTripadvisorLocationsResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md)

#### Returns

[`BusinessDataTripadvisorLocationsResultInfo`](BusinessDataTripadvisorLocationsResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:227672

ISO country code of the location

#### Implementation of

[`IBusinessDataTripadvisorLocationsResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md).[`country_iso_code`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:227662

location code

#### Implementation of

[`IBusinessDataTripadvisorLocationsResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md).[`location_code`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:227664

full name of the location

#### Implementation of

[`IBusinessDataTripadvisorLocationsResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md).[`location_name`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md#location_name)

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `string`

Defined in: main.ts:227670

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_name_parent": "Lower Austria,Austria"

#### Implementation of

[`IBusinessDataTripadvisorLocationsResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md).[`location_name_parent`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md#location_name_parent)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:227674

location type

#### Implementation of

[`IBusinessDataTripadvisorLocationsResultInfo`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md).[`location_type`](../interfaces/IBusinessDataTripadvisorLocationsResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:227687

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:227708

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTripadvisorLocationsResultInfo`](BusinessDataTripadvisorLocationsResultInfo.md)

Defined in: main.ts:227701

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataTripadvisorLocationsResultInfo`](BusinessDataTripadvisorLocationsResultInfo.md)
