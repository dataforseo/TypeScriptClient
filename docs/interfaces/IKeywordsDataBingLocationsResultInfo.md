**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKeywordsDataBingLocationsResultInfo

# Interface: IKeywordsDataBingLocationsResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### country\_iso\_code?

> **`optional`** **country\_iso\_code**: `string`

ISO country code of the location

#### Source

main.ts:131205

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code

#### Source

main.ts:131193

***

### location\_code\_parent?

> **`optional`** **location\_code\_parent**: `number`

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Source

main.ts:131203

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location

#### Source

main.ts:131195

***

### location\_type?

> **`optional`** **location\_type**: `string`

location type

#### Source

main.ts:131207
