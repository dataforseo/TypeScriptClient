[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsBingPageIntersectionLiveRequestInfo

# Interface: IDataforseoLabsBingPageIntersectionLiveRequestInfo

Defined in: main.ts:117862

## Indexable

\[`key`: `string`\]: `any`

## Properties

### exclude\_pages?

> `optional` **exclude\_pages**: `string`[]

Defined in: main.ts:117896

URLs of pages you want to exclude
optional field
you can set up to 10 pages in this array
if you use this array, results will contain the keywords for which URLs from the pages object rank, but URLs from exclude_pages array do not;
note that if you specify this field, the results will be based on the keywords any URL from pages ranks for regardless of intersections between them. However, you can set intersection_mode to intersect and results will contain the keywords all URLs from pages rank for in the same SERP and URLs from exclude_pages do not.
use a wildcard (‘*’) character to specify the search pattern
example:
"exclude_pages": [
"https://www.apple.com/iphone/*",
"https://dataforseo.com/apis/*",
"https://www.microsoft.com/en-us/industry/services/"
]

***

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:117991

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, ilike, not_ilike, like, not_like, match, not_match
you can use the % operator with like and not_like, as well as ilike and not_ilike to match any string of zero or more characters
note that if you want to filter by any field in the intersection_result array you need to specify the number of corresponding page
for instance, if you want to filter results by the ranking of the first specified URL, you should set the following filter:
[intersection_result.1.rank_absolute,"=",1]
if you want to filter results and receive only organic listings for the third specified URL, you should set the following filter:
[intersection_result.3.type,"=","organic"] , etc.example:
["keyword_data.keyword_info.search_volume","in",[100,1000]]
[["intersection_result.1.etv",">",0],"and",["intersection_result.1.description","like","%goat%"]][["keyword_data.keyword_info.search_volume",">",100],
"and",
[["intersection_result.2.description","like","%goat%"],
"or",
["intersection_result.2.type","=","organic"]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

***

### ignore\_synonyms?

> `optional` **ignore\_synonyms**: `boolean`

Defined in: main.ts:117943

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

***

### include\_serp\_info?

> `optional` **include\_serp\_info**: `boolean`

Defined in: main.ts:117971

include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false

***

### include\_subdomains?

> `optional` **include\_subdomains**: `boolean`

Defined in: main.ts:117958

indicates if the subdomains will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

***

### intersection\_mode?

> `optional` **intersection\_mode**: `string`

Defined in: main.ts:117966

indicates whether to intersect keywords
optional field
use this field to intersect or merge results for the specified URLs
possible values: union, intersect
union – results are based on all keywords any URL from pages rank for;
intersect – results are based on the keywords all URLs from pages rank for in the same SERP:
by default, results are based on the intersect mode if you specify only pages array. If you specify exclude_pages as well, results are based on the union mode

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:117938

search results type
indicates type of search results included in the response
optional field
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid", "featured_snippet", "local_pack"]

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:117930

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

Defined in: main.ts:117922

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

Defined in: main.ts:117948

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:117914

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:117905

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:117953

offset in the items array of returned keywords
optional field
default value: 0
if you specify 10 here, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:118007

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
["intersection_result.1.rank_group,asc","intersection_result.2.rank_absolute,asc"]

***

### pages?

> `optional` **pages**: `object`

Defined in: main.ts:117883

target URLs of pages
required field
you can set up to 20 pages in this object
the pages should be specified with absolute URLs (including http:// or https://)
example:
"pages": {
"1":"https://www.apple.com/mac/*",
"2":"https://dataforseo.com/*",
"3":"https://support.microsoft.com/"
}if you specify a single page here, we will return results only for this page;
you can also use a wildcard (‘*’) character to specify the search pattern
example:
"example.com"
search for the exact URL
"example.com/eng/*"
search for the example.com page and all its related URLs which start with ‘/eng/’, such as “example.com/eng/index.html” and “example.com/eng/help/”, etc.
note: a wilcard should be placed after the slash (‘/’) character in the end of the URL, it is not possible to place it after the domain in the following way:
https://dataforseo.com*
use https://dataforseo.com/* instead
Note: this endpoint will not provide results if the number of intersecting keywords exceeds 10 million

#### Index Signature

\[`key`: `string`\]: `string`

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:118013

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
