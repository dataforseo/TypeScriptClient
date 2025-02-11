[**Documentation**](../README.md)

***

[Documentation](../README.md) / AbsoluteItems

# Class: AbsoluteItems

Defined in: main.ts:136732

## Implements

- [`IAbsoluteItems`](../interfaces/IAbsoluteItems.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AbsoluteItems()

> **new AbsoluteItems**(`data`?): [`AbsoluteItems`](AbsoluteItems.md)

Defined in: main.ts:136757

#### Parameters

##### data?

[`IAbsoluteItems`](../interfaces/IAbsoluteItems.md)

#### Returns

[`AbsoluteItems`](AbsoluteItems.md)

## Properties

### geo\_id?

> `optional` **geo\_id**: `string`

Defined in: main.ts:136738

location identifier
you can use this field for matching obtained results with location parameters specified in the request
see the full list of available locations with their geo_id here or by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
example:
US-NY

#### Implementation of

[`IAbsoluteItems`](../interfaces/IAbsoluteItems.md).[`geo_id`](../interfaces/IAbsoluteItems.md#geo_id)

***

### geo\_name?

> `optional` **geo\_name**: `string`

Defined in: main.ts:136744

location name
you can use this field for matching obtained results with location parameters specified in the request
see the full list of available locations with their geo_name here or by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
example:
Andorra

#### Implementation of

[`IAbsoluteItems`](../interfaces/IAbsoluteItems.md).[`geo_name`](../interfaces/IAbsoluteItems.md#geo_name)

***

### values?

> `optional` **values**: `number`[]

Defined in: main.ts:136753

keyword popularity rates within a given location
represents location-specific keyword popularity rate over the specified time range;
using these values, you can understand which of the specified keywords is more popular in the related location;
the first value in the array is provided for the first term from the keywords array, the second value is provided for the second keyword, and so on;
calculation: we determine the highest popularity value across all specified keywords within a given location, and then express the popularity values of each keyword as a percentage of the highest value (100);
a value of 100 is the peak popularity for the term
a value of 50 means that the term is half as popular
a value of 0 means there was not enough data for this term

#### Implementation of

[`IAbsoluteItems`](../interfaces/IAbsoluteItems.md).[`values`](../interfaces/IAbsoluteItems.md#values)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:136766

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:136789

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AbsoluteItems`](AbsoluteItems.md)

Defined in: main.ts:136782

#### Parameters

##### data

`any`

#### Returns

[`AbsoluteItems`](AbsoluteItems.md)
