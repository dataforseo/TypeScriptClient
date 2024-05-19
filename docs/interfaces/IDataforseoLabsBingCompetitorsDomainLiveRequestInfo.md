**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsBingCompetitorsDomainLiveRequestInfo

# Interface: IDataforseoLabsBingCompetitorsDomainLiveRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### exclude\_top\_domains?

> **`optional`** **exclude\_top\_domains**: `boolean`

indicates whether to exclude world’s largest websites
optional field
default value: false
set to true if you want to get highly-relevant competitors excluding the websites listed below:
wikipedia.org
pinterest.com
amazon.com
google.com
facebook.com
wordpress.com
medium.com
quora.com
reddit.com
youtube.com
ebay.com
uol.com.br
instagram.com
olx.com
twitter.com
linkedin.com
slideshare.net

#### Source

main.ts:106628

***

### filters?

> **`optional`** **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, `<=, >`, >=, =, `<>`, in, not_in
example:
["metrics.organic.count",">`",50]
[["metrics.organic.pos_1","`<>`",0],"and",["metrics.organic.etv",">`=","10"]]
[[["metrics.organic.count",">=",50],"and",["metrics.organic.pos_1","in",[1,5]]],
"or",
["metrics.organic.etv",">=","100"]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Source

main.ts:106574

***

### intersecting\_domains?

> **`optional`** **intersecting\_domains**: `string`[]

additional domains for improving results accuracy
optional field
to improve the accuracy of the result, you can specify domains that are known to intersect with the target in SERPs;
if you use this array, metrics in the result will be based on SERPs where both target website and intersecting_domains appear;
Note: you can specify up to 20 domains in this array

#### Source

main.ts:106634

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

display results by item type
optional field
indicates the type of search results included in the response
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array; you will not be able to sort and filter results by the types of search results not included in the response;
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid", "featured_snippet", "local_pack"]

#### Source

main.ts:106560

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Source

main.ts:106551

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Source

main.ts:106543

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned domains
optional field
default value: 100
maximum value: 1000

#### Source

main.ts:106596

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

#### Source

main.ts:106535

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

#### Source

main.ts:106526

***

### max\_rank\_group?

> **`optional`** **max\_rank\_group**: `number`

maximum rank up to which competitors will be considered
optional field
default value: 100
if you specify 10 here, we will extract competitors from the top 10 Bing search results only

#### Source

main.ts:106606

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned domains
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Source

main.ts:106601

***

### order\_by?

> **`optional`** **order\_by**: `string`[]

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to specify a sorting type
example:
["metrics.paid.etv,asc"]
Note: you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["metrics.organic.etv,desc","metrics.paid.count,asc"]
default rule:
["metrics.organic.count,desc"]
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array

#### Source

main.ts:106591

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Source

main.ts:106640

***

### target?

> **`optional`** **target**: `string`

domain
required field
the domain name of the target website
the domain should be specified without https:// and www.

#### Source

main.ts:106517
