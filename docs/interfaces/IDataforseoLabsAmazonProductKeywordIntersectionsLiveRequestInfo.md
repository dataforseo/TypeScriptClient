[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo

# Interface: IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo

Defined in: main.ts:114967

## Indexable

\[`key`: `string`\]: `any`

## Properties

### asins?

> `optional` **asins**: `object`

Defined in: main.ts:114978

asins of target products
required field
product IDs of the products for which you need to find keyword intersections;
specify the ASINs as in the following example:
"asins": {
"1": "019005476X",
"2": "0190074442"
}
the maximum number of ASINs you can specify in this object is 20;
learn more about the parameter on this help center page

#### Index Signature

\[`key`: `string`\]: `string`

***

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:115030

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, ilike, not_ilike, like, not_like, match, not_match
you can use the % operator with like and not_like, as well as ilike and not_ilike to match any string of zero or more characters
example:
["avg_position","<", 10]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

***

### intersection\_mode?

> `optional` **intersection\_mode**: `string`

Defined in: main.ts:115019

mode for finding asin intersections
optional field
possible values: union, intersect;
default value: intersect;
learn more about the parameter in this help center guide

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:115008

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:115001

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:115013

the maximum number of products in the results array
optional field
default value: 100;
maximum value: 1000

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:114994

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
2840

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:114986

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
United Kingdom

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:115051

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:115046

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting parameter
example:
["sum_position,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["intersections,desc","avg_position,asc"]
default rule:
["intersections,desc"]

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:115057

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
