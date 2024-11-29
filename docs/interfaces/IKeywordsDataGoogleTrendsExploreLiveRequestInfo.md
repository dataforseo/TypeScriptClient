[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataGoogleTrendsExploreLiveRequestInfo

# Interface: IKeywordsDataGoogleTrendsExploreLiveRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### category\_code?

> `optional` **category\_code**: `number`

google trends search category
optional field
if you don’t specify this field, the 0 value will be applied by default and the search will be carried out across all available categories
you can receive the list of available categories with their category_code by making a separate request to the https://api.dataforseo.com/v3/keywords_data/google_trends/categories

#### Defined in

main.ts:134797

***

### date\_from?

> `optional` **date\_from**: `string`

starting date of the time range
optional field
if you don’t specify this field, the current day and month of the preceding year will be used by default
minimal value for the web type: 2004-01-01
minimal value for other types: 2008-01-01
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Defined in

main.ts:134806

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Defined in

main.ts:134813

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of items returned
optional field
to speed up the execution of the request, specify one item at a time;
possible values:
"google_trends_graph", "google_trends_map", "google_trends_topics_list","google_trends_queries_list"
default value:
"google_trends_graph"

#### Defined in

main.ts:134831

***

### keywords?

> `optional` **keywords**: `string`[]

keywords
optional field
if keywords are not specified, the results will not contain keyword-related data;
The maximum number of keywords you can specify: 5
Note: the comma characters (,) in the specified keywords will be unset and ignored
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Defined in

main.ts:134758

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
optional field
default value: en
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/languages
example:
en

#### Defined in

main.ts:134790

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
optional field
default value: English
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/languages
example:
English

#### Defined in

main.ts:134782

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/locations
example:
2840

#### Defined in

main.ts:134774

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/locations
example:
United Kingdom

#### Defined in

main.ts:134766

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:134837

***

### time\_range?

> `optional` **time\_range**: `string`

preset time ranges
optional field
if you specify date_from or date_to parameters, this field will be ignored when setting a task
possible values for all type parameters:
past_hour, past_4_hours, past_day, past_7_days, past_30_days, past_90_days, past_12_months, past_5_years
possible values for web only:
2004_present
possible values for news, youtube, images, froogle:
2008_present

#### Defined in

main.ts:134823

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:134792
