**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AbsoluteItems

# Class: AbsoluteItems

## Implements

- [`IAbsoluteItems`](../interfaces/IAbsoluteItems.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AbsoluteItems(data)

> **new AbsoluteItems**(`data`?): [`AbsoluteItems`](AbsoluteItems.md)

#### Parameters

• **data?**: [`IAbsoluteItems`](../interfaces/IAbsoluteItems.md)

#### Returns

[`AbsoluteItems`](AbsoluteItems.md)

#### Source

main.ts:128324

## Properties

### geo\_id?

> **`optional`** **geo\_id**: `string`

location identifier
you can use this field for matching obtained results with location parameters specified in the request
see the full list of available locations with their geo_id here or by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
example:
US-NY

#### Implementation of

[`IAbsoluteItems`](../interfaces/IAbsoluteItems.md).[`geo_id`](../interfaces/IAbsoluteItems.md#geo_id)

#### Source

main.ts:128305

***

### geo\_name?

> **`optional`** **geo\_name**: `string`

location name
you can use this field for matching obtained results with location parameters specified in the request
see the full list of available locations with their geo_name here or by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
example:
Andorra

#### Implementation of

[`IAbsoluteItems`](../interfaces/IAbsoluteItems.md).[`geo_name`](../interfaces/IAbsoluteItems.md#geo_name)

#### Source

main.ts:128311

***

### values?

> **`optional`** **values**: `number`[]

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

#### Source

main.ts:128320

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:128333

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:128356

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AbsoluteItems`](AbsoluteItems.md)

#### Parameters

• **data**: `any`

#### Returns

[`AbsoluteItems`](AbsoluteItems.md)

#### Source

main.ts:128349
