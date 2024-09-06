[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpBingLocationsResultInfo

# Class: SerpBingLocationsResultInfo

## Implements

- [`ISerpBingLocationsResultInfo`](../interfaces/ISerpBingLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocationsResultInfo()

> **new SerpBingLocationsResultInfo**(`data`?): [`SerpBingLocationsResultInfo`](SerpBingLocationsResultInfo.md)

#### Parameters

• **data?**: [`ISerpBingLocationsResultInfo`](../interfaces/ISerpBingLocationsResultInfo.md)

#### Returns

[`SerpBingLocationsResultInfo`](SerpBingLocationsResultInfo.md)

#### Defined in

main.ts:56714

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`ISerpBingLocationsResultInfo`](../interfaces/ISerpBingLocationsResultInfo.md).[`country_iso_code`](../interfaces/ISerpBingLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:56708

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`ISerpBingLocationsResultInfo`](../interfaces/ISerpBingLocationsResultInfo.md).[`location_code`](../interfaces/ISerpBingLocationsResultInfo.md#location_code)

#### Defined in

main.ts:56695

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

[`ISerpBingLocationsResultInfo`](../interfaces/ISerpBingLocationsResultInfo.md).[`location_code_parent`](../interfaces/ISerpBingLocationsResultInfo.md#location_code_parent)

#### Defined in

main.ts:56706

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`ISerpBingLocationsResultInfo`](../interfaces/ISerpBingLocationsResultInfo.md).[`location_name`](../interfaces/ISerpBingLocationsResultInfo.md#location_name)

#### Defined in

main.ts:56697

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Implementation of

[`ISerpBingLocationsResultInfo`](../interfaces/ISerpBingLocationsResultInfo.md).[`location_type`](../interfaces/ISerpBingLocationsResultInfo.md#location_type)

#### Defined in

main.ts:56710

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:56723

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:56744

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingLocationsResultInfo`](SerpBingLocationsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingLocationsResultInfo`](SerpBingLocationsResultInfo.md)

#### Defined in

main.ts:56737
