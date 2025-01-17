[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleLocationsResultInfo

# Class: SerpGoogleLocationsResultInfo

Defined in: main.ts:26767

## Implements

- [`ISerpGoogleLocationsResultInfo`](../interfaces/ISerpGoogleLocationsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleLocationsResultInfo()

> **new SerpGoogleLocationsResultInfo**(`data`?): [`SerpGoogleLocationsResultInfo`](SerpGoogleLocationsResultInfo.md)

Defined in: main.ts:26788

#### Parameters

##### data?

[`ISerpGoogleLocationsResultInfo`](../interfaces/ISerpGoogleLocationsResultInfo.md)

#### Returns

[`SerpGoogleLocationsResultInfo`](SerpGoogleLocationsResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:26782

ISO country code of the location

#### Implementation of

[`ISerpGoogleLocationsResultInfo`](../interfaces/ISerpGoogleLocationsResultInfo.md).[`country_iso_code`](../interfaces/ISerpGoogleLocationsResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:26769

location code

#### Implementation of

[`ISerpGoogleLocationsResultInfo`](../interfaces/ISerpGoogleLocationsResultInfo.md).[`location_code`](../interfaces/ISerpGoogleLocationsResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:26780

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Implementation of

[`ISerpGoogleLocationsResultInfo`](../interfaces/ISerpGoogleLocationsResultInfo.md).[`location_code_parent`](../interfaces/ISerpGoogleLocationsResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:26771

full name of the location

#### Implementation of

[`ISerpGoogleLocationsResultInfo`](../interfaces/ISerpGoogleLocationsResultInfo.md).[`location_name`](../interfaces/ISerpGoogleLocationsResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:26784

location type

#### Implementation of

[`ISerpGoogleLocationsResultInfo`](../interfaces/ISerpGoogleLocationsResultInfo.md).[`location_type`](../interfaces/ISerpGoogleLocationsResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:26797

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:26818

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleLocationsResultInfo`](SerpGoogleLocationsResultInfo.md)

Defined in: main.ts:26811

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleLocationsResultInfo`](SerpGoogleLocationsResultInfo.md)
