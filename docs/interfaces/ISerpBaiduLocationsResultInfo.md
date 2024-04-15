**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ISerpBaiduLocationsResultInfo

# Interface: ISerpBaiduLocationsResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### country\_iso\_code?

> **`optional`** **country\_iso\_code**: `string`

ISO country code of the location

#### Source

main.ts:67669

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code

#### Source

main.ts:67661

***

### location\_code\_parent?

> **`optional`** **location\_code\_parent**: `number`

the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API

#### Source

main.ts:67667

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location

#### Source

main.ts:67663

***

### location\_type?

> **`optional`** **location\_type**: `string`

location type
only City is supported for all countries except China (where Country is also supported)

#### Source

main.ts:67672
