[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo

# Interface: IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo

Defined in: main.ts:147277

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:147344

starting date of the time range
optional field
minimum value: two years back from today’s date
maximum value: one day from today’s date
date format: "yyyy-mm-dd"
example:
"2020-01-01"
Note: we do not recommend using a custom time range
Note 2: if date_from and date_to parameters are not specified, the data will be returned for the past 24 months
if you specify the period parameter:
with value weekly, you will get results for the past 15 weeks
with value daily, you will get results for the past 45 days

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:147357

ending date of the time range
optional field
minimum value: two years back from today’s date;
maximum value: one day from today’s date;
date format: "yyyy-mm-dd"
example:
"2020-03-15"
Note: we do not recommend using a custom time range
Note 2: if date_from and date_to parameters are not specified, the data will be returned for the past 24 months
if you specify the period parameter:
with value weekly, you will get results for the past 15 weeks
with value daily, you will get results for the past 45 days

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:147322

device type
optional field
specify this field if you want to get the data for a particular device type
possible values: mobile, desktop, tablet, non_smartphones
default value:  mobile, desktop, tablet, non_smartphones

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:147284

keywords
required field
The maximum number of keywords you can specify: 1000
The maximum number of characters for each keyword: 100
the specified keywords will be converted to lowercase, data will be provided in a separate array
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:147316

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engines with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:147311

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engines with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:147298

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages
example:
2840

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:147306

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the data will be provided for the country the specified coordinates belong to
example:
52.6178549,-155.352142

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:147291

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages
example:
London,England,United Kingdom

***

### period?

> `optional` **period**: `string`

Defined in: main.ts:147331

aggregates the returned data to a certain time period
optional field
specify this field if you want to get the data in monthly, weekly or daily format
possible values: monthly, weekly, daily
monthly – returns data up to past 24 months
weekly – returns data up to past 15 weeks
daily – returns data up to past 45 days
default value:  monthly

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:147363

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
