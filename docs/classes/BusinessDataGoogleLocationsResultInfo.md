[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleLocationsResultInfo

# Class: BusinessDataGoogleLocationsResultInfo

Defined in: main.ts:212940

## Implements

- [`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleLocationsResultInfo()

> **new BusinessDataGoogleLocationsResultInfo**(`data`?): [`BusinessDataGoogleLocationsResultInfo`](BusinessDataGoogleLocationsResultInfo.md)

Defined in: main.ts:212958

#### Parameters

##### data?

[`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md)

#### Returns

[`BusinessDataGoogleLocationsResultInfo`](BusinessDataGoogleLocationsResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:212952

ISO country code of the location

#### Implementation of

[`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[`country_iso_code`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:212942

location code

#### Implementation of

[`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:212944

full name of the location

#### Implementation of

[`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[`location_name`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#location_name)

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `string`

Defined in: main.ts:212950

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_name_parent": "Lower Austria,Austria"

#### Implementation of

[`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[`location_name_parent`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#location_name_parent)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:212954

location type

#### Implementation of

[`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[`location_type`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:212967

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:212988

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleLocationsResultInfo`](BusinessDataGoogleLocationsResultInfo.md)

Defined in: main.ts:212981

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleLocationsResultInfo`](BusinessDataGoogleLocationsResultInfo.md)
