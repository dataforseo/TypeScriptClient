[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleLocationsResultInfo

# Class: BusinessDataGoogleLocationsResultInfo

## Implements

- [`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleLocationsResultInfo()

> **new BusinessDataGoogleLocationsResultInfo**(`data`?): [`BusinessDataGoogleLocationsResultInfo`](BusinessDataGoogleLocationsResultInfo.md)

#### Parameters

##### data?

[`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md)

#### Returns

[`BusinessDataGoogleLocationsResultInfo`](BusinessDataGoogleLocationsResultInfo.md)

#### Defined in

main.ts:212388

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[`country_iso_code`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:212382

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#location_code)

#### Defined in

main.ts:212372

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[`location_name`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#location_name)

#### Defined in

main.ts:212374

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_name_parent": "Lower Austria,Austria"

#### Implementation of

[`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[`location_name_parent`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#location_name_parent)

#### Defined in

main.ts:212380

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Implementation of

[`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[`location_type`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#location_type)

#### Defined in

main.ts:212384

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:212397

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:212418

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleLocationsResultInfo`](BusinessDataGoogleLocationsResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleLocationsResultInfo`](BusinessDataGoogleLocationsResultInfo.md)

#### Defined in

main.ts:212411
