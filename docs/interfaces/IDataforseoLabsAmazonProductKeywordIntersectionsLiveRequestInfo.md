[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo

# Interface: IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo

## Implemented by

- [`DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](../classes/DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [asins](IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#asins)
- [filters](IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#filters)
- [intersection\_mode](IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#intersection_mode)
- [language\_code](IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#language_name)
- [limit](IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#limit)
- [location\_code](IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#location_name)
- [offset](IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#offset)
- [order\_by](IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#order_by)
- [tag](IDataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md#tag)

## Properties

### asins

• `Optional` **asins**: `Object`

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

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

main.ts:104087

___

### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["avg_position","<", 10]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Defined in

main.ts:104139

___

### intersection\_mode

• `Optional` **intersection\_mode**: `string`

mode for finding asin intersections
optional field
possible values: union, intersect;
default value: intersect;
learn more about the parameter in this help center guide

#### Defined in

main.ts:104128

___

### language\_code

• `Optional` **language\_code**: `string`

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Defined in

main.ts:104117

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Defined in

main.ts:104110

___

### limit

• `Optional` **limit**: `number`

the maximum number of products in the results array
optional field
default value: 100;
maximum value: 1000

#### Defined in

main.ts:104122

___

### location\_code

• `Optional` **location\_code**: `number`

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
2840

#### Defined in

main.ts:104103

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
United Kingdom

#### Defined in

main.ts:104095

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Defined in

main.ts:104160

___

### order\_by

• `Optional` **order\_by**: `string`[]

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

#### Defined in

main.ts:104155

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:104166
