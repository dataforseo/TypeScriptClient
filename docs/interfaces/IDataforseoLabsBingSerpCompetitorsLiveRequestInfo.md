[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsBingSerpCompetitorsLiveRequestInfo

# Interface: IDataforseoLabsBingSerpCompetitorsLiveRequestInfo

Defined in: main.ts:120105

## Indexable

\[`key`: `string`\]: `any`

## Properties

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:120185

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, ilike, not_ilike, like, not_like, match, not_match
you can use the % operator with like and not_like, as well as ilike and not_ilike to match any string of zero or more characters
example:
["median_position","in",[1,10]]
[["median_position","in",[1,10]],"and",["domain","not_like","%wikipedia.org%"]]
[["domain","not_like","%wikipedia.org%"],
"and",
[["relevant_serp_items",">",0],"or",["median_position","in",[1,10]]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

***

### include\_subdomains?

> `optional` **include\_subdomains**: `boolean`

Defined in: main.ts:120152

indicates if the subdomains will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:120160

search results type
indicates type of search results included in the response
optional field
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid", "featured_snippet", "local_pack"]

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:120113

keywords array
required field
the results will be based on the keywords you specify in this array
UTF-8 encoding;
the keywords will be converted to lowercase format;
you can specify the maximum of 200 keywords
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:120147

unique language identifier
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:120139

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:120165

the maximum number of returned domains
optional field
default value: 100
maximum value: 1000

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:120131

unique location identifier
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code parameters by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:120122

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with location_name parameters by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:120170

offset in the results array of returned domains
optional field
default value: 0
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive domains

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:120201

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
the comma is used as a separator
example:
["avg_position,asc"]
default rule:
["rating,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["avg_position,asc","etv,desc"]

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:120207

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
