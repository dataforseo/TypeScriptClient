[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo

# Interface: IDataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo

Defined in: main.ts:109575

## Indexable

\[`key`: `string`\]: `any`

## Properties

### correlate?

> `optional` **correlate**: `boolean`

Defined in: main.ts:109632

correlate data with previously obtained datasets
optional field
default value: true
if you use this parameter, our system will correlate data you obtain now with previously obtained datasets
this parameter is intended to mitigate any inconsistencies that may result from changes to our database
we recommend always setting correlate to true

***

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:109618

starting date of the time range
optional field
if you don’t specify this field, the data will be provided for the previous 6 months
minimal possible value: 2020-10-01
date format: "yyyy-mm-dd"

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:109625

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2021-04-01"

***

### ignore\_synonyms?

> `optional` **ignore\_synonyms**: `boolean`

Defined in: main.ts:109637

ignore highly similar keywords
optional field
if set to true, only data based on core keywords will be returned, data for all highly similar keywords will be excluded;
default value: false

***

### include\_clickstream\_data?

> `optional` **include\_clickstream\_data**: `boolean`

Defined in: main.ts:109645

include or exclude data from clickstream-based metrics in the result
optional field
if the parameter is set to true, you will receive clickstream_etv, clickstream_gender_distribution, and clickstream_age_distribution fields with clickstream data in the response;
default value: false;
Note: historical clickstream data is available from 2024/05 (May, 2024);
with this parameter enabled, you will be charged double the price for the request;
learn more about how clickstream-based metrics are calculated in this help center article

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:109612

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:109604

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:109596

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:109588

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:109651

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:109580

domain
required field
the domain name of the target website
the domain should be specified without https:// and www.
