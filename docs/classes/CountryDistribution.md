[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / CountryDistribution

# Class: CountryDistribution

## Implements

- [`ICountryDistribution`](../interfaces/ICountryDistribution.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CountryDistribution()

> **new CountryDistribution**(`data`?): [`CountryDistribution`](CountryDistribution.md)

#### Parameters

• **data?**: [`ICountryDistribution`](../interfaces/ICountryDistribution.md)

#### Returns

[`CountryDistribution`](CountryDistribution.md)

#### Defined in

main.ts:136135

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

country ISO code

#### Implementation of

[`ICountryDistribution`](../interfaces/ICountryDistribution.md).[`country_iso_code`](../interfaces/ICountryDistribution.md#country_iso_code)

#### Defined in

main.ts:136127

***

### percentage?

> `optional` **percentage**: `number`

percentage of global search volume

#### Implementation of

[`ICountryDistribution`](../interfaces/ICountryDistribution.md).[`percentage`](../interfaces/ICountryDistribution.md#percentage)

#### Defined in

main.ts:136131

***

### search\_volume?

> `optional` **search\_volume**: `number`

search volume in a given country

#### Implementation of

[`ICountryDistribution`](../interfaces/ICountryDistribution.md).[`search_volume`](../interfaces/ICountryDistribution.md#search_volume)

#### Defined in

main.ts:136129

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:136144

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:136163

***

### fromJS()

> `static` **fromJS**(`data`): [`CountryDistribution`](CountryDistribution.md)

#### Parameters

• **data**: `any`

#### Returns

[`CountryDistribution`](CountryDistribution.md)

#### Defined in

main.ts:136156
