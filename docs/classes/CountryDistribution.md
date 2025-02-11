[**Documentation**](../README.md)

***

[Documentation](../README.md) / CountryDistribution

# Class: CountryDistribution

Defined in: main.ts:148302

## Implements

- [`ICountryDistribution`](../interfaces/ICountryDistribution.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new CountryDistribution()

> **new CountryDistribution**(`data`?): [`CountryDistribution`](CountryDistribution.md)

Defined in: main.ts:148312

#### Parameters

##### data?

[`ICountryDistribution`](../interfaces/ICountryDistribution.md)

#### Returns

[`CountryDistribution`](CountryDistribution.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:148304

country ISO code

#### Implementation of

[`ICountryDistribution`](../interfaces/ICountryDistribution.md).[`country_iso_code`](../interfaces/ICountryDistribution.md#country_iso_code)

***

### percentage?

> `optional` **percentage**: `number`

Defined in: main.ts:148308

percentage of global search volume

#### Implementation of

[`ICountryDistribution`](../interfaces/ICountryDistribution.md).[`percentage`](../interfaces/ICountryDistribution.md#percentage)

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:148306

search volume in a given country

#### Implementation of

[`ICountryDistribution`](../interfaces/ICountryDistribution.md).[`search_volume`](../interfaces/ICountryDistribution.md#search_volume)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:148321

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:148340

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`CountryDistribution`](CountryDistribution.md)

Defined in: main.ts:148333

#### Parameters

##### data

`any`

#### Returns

[`CountryDistribution`](CountryDistribution.md)
