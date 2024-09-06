[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IValues

# Interface: IValues

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### geo\_id?

> `optional` **geo\_id**: `string`

location identifier
you can use this field for matching obtained results with location parameters specified in the request
see the full list of available locations with their geo_id here or by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
example:
US-NY

#### Defined in

main.ts:126160

***

### geo\_name?

> `optional` **geo\_name**: `string`

location name
you can use this field for matching obtained results with location parameters specified in the request
see the full list of available locations with their geo_name here or by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
example:
Andorra

#### Defined in

main.ts:126166

***

### value?

> `optional` **value**: `number`

relative keyword popularity rate in a given location
represents location-specific keyword popularity rate over the specified time range;
using this value you can understand how popular a keyword is in one location compared to another location;
calculation: we determine the highest popularity value for the relevant keyword across all locations, and then express all other values as a percentage of that highest value (100);
a value of 100 is the highest popularity for the term
a value of 50 means that the term is half as popular
a value of 0 means there was not enough data for this term

#### Defined in

main.ts:126174
