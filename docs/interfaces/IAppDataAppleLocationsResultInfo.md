**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAppDataAppleLocationsResultInfo

# Interface: IAppDataAppleLocationsResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### country\_iso\_code?

> **`optional`** **country\_iso\_code**: `string`

ISO country code of the location

#### Source

main.ts:195262

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code

#### Source

main.ts:195249

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location

#### Source

main.ts:195251

***

### location\_name\_parent?

> **`optional`** **location\_name\_parent**: `number`

the name of the superordinate location
example:
"location_code": 1006473,
"location_name": "Altrincham,England,United Kingdom",
"location_name_parent": "England,United Kingdom", where location_name_parent corresponds to:
"location_code": 20339,
"location_name": "England,United Kingdom"
note: Apple App Data API currently supports countries only, that is why this value will always be null

#### Source

main.ts:195260

***

### location\_type?

> **`optional`** **location\_type**: `string`

location type

#### Source

main.ts:195264
