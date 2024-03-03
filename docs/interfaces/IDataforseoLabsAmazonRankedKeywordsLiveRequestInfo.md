[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo

# Interface: IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo

## Implemented by

- [`DataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](../classes/DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [asin](IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#asin)
- [filters](IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#filters)
- [ignore\_synonyms](IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#ignore_synonyms)
- [language\_code](IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#language_name)
- [limit](IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#limit)
- [location\_code](IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#location_name)
- [offset](IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#offset)
- [order\_by](IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#order_by)
- [tag](IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#tag)

## Properties

### asin

• `Optional` **asin**: `string`

product ID
required field
unique product identifier (ASIN) on Amazon;
you can receive the asin parameter by making a separate request to the Amazon Products endpoint

#### Defined in

main.ts:99881

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
["keyword_data.keyword_info.search_volume","in",[100,1000]];
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Defined in

main.ts:99932

___

### ignore\_synonyms

• `Optional` **ignore\_synonyms**: `boolean`

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Defined in

main.ts:99921

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

main.ts:99911

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

main.ts:99904

___

### limit

• `Optional` **limit**: `number`

the maximum number of products in the results array
optional field
default value: 100;
maximum value: 1000

#### Defined in

main.ts:99916

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

main.ts:99897

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
United States

#### Defined in

main.ts:99889

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Defined in

main.ts:99953

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
["keyword_data.keyword_info.competition,desc"]
default rule:
["ranked_serp_element.serp_item.rank_group,asc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["keyword_data.keyword_info.search_volume,desc","keyword_data.keyword_info.cpc,desc"]

#### Defined in

main.ts:99948

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:99959
