[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleLocationsResultInfo

# Class: SerpGoogleLocationsResultInfo

## Implements

- [`ISerpGoogleLocationsResultInfo`](../interfaces/ISerpGoogleLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleLocationsResultInfo()

> **new SerpGoogleLocationsResultInfo**(`data`?): [`SerpGoogleLocationsResultInfo`](SerpGoogleLocationsResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleLocationsResultInfo`](../interfaces/ISerpGoogleLocationsResultInfo.md)

#### Returns

[`SerpGoogleLocationsResultInfo`](SerpGoogleLocationsResultInfo.md)

#### Defined in

main.ts:26788

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`ISerpGoogleLocationsResultInfo`](../interfaces/ISerpGoogleLocationsResultInfo.md).[`country_iso_code`](../interfaces/ISerpGoogleLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:26782

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`ISerpGoogleLocationsResultInfo`](../interfaces/ISerpGoogleLocationsResultInfo.md).[`location_code`](../interfaces/ISerpGoogleLocationsResultInfo.md#location_code)

#### Defined in

main.ts:26769

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

[`ISerpGoogleLocationsResultInfo`](../interfaces/ISerpGoogleLocationsResultInfo.md).[`location_code_parent`](../interfaces/ISerpGoogleLocationsResultInfo.md#location_code_parent)

#### Defined in

main.ts:26780

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`ISerpGoogleLocationsResultInfo`](../interfaces/ISerpGoogleLocationsResultInfo.md).[`location_name`](../interfaces/ISerpGoogleLocationsResultInfo.md#location_name)

#### Defined in

main.ts:26771

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Implementation of

[`ISerpGoogleLocationsResultInfo`](../interfaces/ISerpGoogleLocationsResultInfo.md).[`location_type`](../interfaces/ISerpGoogleLocationsResultInfo.md#location_type)

#### Defined in

main.ts:26784

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:26797

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:26818

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleLocationsResultInfo`](SerpGoogleLocationsResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleLocationsResultInfo`](SerpGoogleLocationsResultInfo.md)

#### Defined in

main.ts:26811
