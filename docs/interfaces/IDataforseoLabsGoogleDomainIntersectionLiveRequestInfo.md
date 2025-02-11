[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo

# Interface: IDataforseoLabsGoogleDomainIntersectionLiveRequestInfo

Defined in: main.ts:103460

## Indexable

\[`key`: `string`\]: `any`

## Properties

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:103557

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, match, not_match, ilike, not_ilike, like, not_like
you can use the % operator with like and not_like, as well as ilike and not_ilike to match any string of zero or more characters
example:
["keyword_data.keyword_info.search_volume","in",[100,1000]]
[["first_domain_serp_element.etv",">",0],"and",["first_domain_serp_element.description","like","%goat%"]]
[["keyword_data.keyword_info.search_volume",">",100],
"and",
[["first_domain_serp_element.description","like","%goat%"],
"or",
["second_domain_serp_element.type","=","organic"]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

***

### include\_clickstream\_data?

> `optional` **include\_clickstream\_data**: `boolean`

Defined in: main.ts:103530

include or exclude data from clickstream-based metrics in the result
optional field
if the parameter is set to true, you will receive clickstream_keyword_info, clickstream_etv, keyword_info_normalized_with_clickstream, and keyword_info_normalized_with_bing fields in the response
default value: false
with this parameter enabled, you will be charged double the price for the request
learn more about how clickstream-based metrics are calculated in this help center article

***

### include\_serp\_info?

> `optional` **include\_serp\_info**: `boolean`

Defined in: main.ts:103523

include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false

***

### intersections?

> `optional` **intersections**: `boolean`

Defined in: main.ts:103510

domain intersections in SERP
optional field
if you set intersections to true, you will get the keywords for which both target domains specified as target1 and target2 have results within the same SERP; the corresponding SERP elements for both domains will be provided in the results array
Note: this endpoint will not provide results if the number of intersecting keywords exceeds 10 million
if you specify intersections: false, you will get the keywords for which the domain specified as target1 has results in SERP, and the domain specified as target2 doesn’t;
thus, the corresponding SERP elements and other data will be provided for the domain specified as target1only
default value: true

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:103518

search results type
indicates type of search results included in the response
optional field
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid"]

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:103502

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:103494

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:103535

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:103486

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

Defined in: main.ts:103478

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:103540

offset in the items array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:103573

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting parameter
example:
["keyword_data.keyword_info.competition,desc"]
default rule:
["keyword_data.keyword_info.search_volume,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["keyword_data.keyword_info.search_volume,desc","keyword_data.keyword_info.cpc,desc"]

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:103579

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### target1?

> `optional` **target1**: `string`

Defined in: main.ts:103465

domain
required field
the domain name of the first target website
the domain should be specified without https:// and www.

***

### target2?

> `optional` **target2**: `string`

Defined in: main.ts:103470

domain
required field
the domain name of the second target website
the domain should be specified without https:// and www.
