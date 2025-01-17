[**Documentation**](../README.md)

***

[Documentation](../README.md) / Values

# Class: Values

Defined in: main.ts:136412

## Implements

- [`IValues`](../interfaces/IValues.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new Values()

> **new Values**(`data`?): [`Values`](Values.md)

Defined in: main.ts:136436

#### Parameters

##### data?

[`IValues`](../interfaces/IValues.md)

#### Returns

[`Values`](Values.md)

## Properties

### geo\_id?

> `optional` **geo\_id**: `string`

Defined in: main.ts:136418

location identifier
you can use this field for matching obtained results with location parameters specified in the request
see the full list of available locations with their geo_id here or by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
example:
US-NY

#### Implementation of

[`IValues`](../interfaces/IValues.md).[`geo_id`](../interfaces/IValues.md#geo_id)

***

### geo\_name?

> `optional` **geo\_name**: `string`

Defined in: main.ts:136424

location name
you can use this field for matching obtained results with location parameters specified in the request
see the full list of available locations with their geo_name here or by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
example:
Andorra

#### Implementation of

[`IValues`](../interfaces/IValues.md).[`geo_name`](../interfaces/IValues.md#geo_name)

***

### value?

> `optional` **value**: `number`

Defined in: main.ts:136432

relative keyword popularity rate in a given location
represents location-specific keyword popularity rate over the specified time range;
using this value you can understand how popular a keyword is in one location compared to another location;
calculation: we determine the highest popularity value for the relevant keyword across all locations, and then express all other values as a percentage of that highest value (100);
a value of 100 is the highest popularity for the term
a value of 50 means that the term is half as popular
a value of 0 means there was not enough data for this term

#### Implementation of

[`IValues`](../interfaces/IValues.md).[`value`](../interfaces/IValues.md#value)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:136445

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:136464

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`Values`](Values.md)

Defined in: main.ts:136457

#### Parameters

##### data

`any`

#### Returns

[`Values`](Values.md)
