[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo

# Interface: IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo

Defined in: main.ts:137148

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:137184

starting date of the time range
optional field
if you don’t specify this field, the current day and month of the preceding year will be used by default
minimal value for the web type: 2004-01-01
minimal value for other types: 2008-01-01
date format: "yyyy-mm-dd"
example:
"2019-01-15"

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:137191

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:137155

keywords
required field
the maximum number of keywords you can specify: 5
avoid symbols and special characters (e.g., UTF symbols, emojis);
specifying non-Latin characters, you’ll get data for the countries where they are used
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:137173

search engine location code
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
note that the data will be provided for the country the specified location_code belongs to;
example:
2840

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:137164

full name of search engine location
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
note that the data will be provided for the country the specified location_name belongs to;
example:
United Kingdom

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:137203

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### time\_range?

> `optional` **time\_range**: `string`

Defined in: main.ts:137197

preset time ranges
optional field
if you specify date_from or date_to parameters, this field will be ignored when setting a task
possible values for all type parameters:
past_4_hours, past_day, past_7_days, past_30_days, past_90_days, past_12_months, past_5_years

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:137175

type of element
