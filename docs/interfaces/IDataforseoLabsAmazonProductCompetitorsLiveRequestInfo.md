[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo

# Interface: IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo

## Implemented by

- [`DataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../classes/DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [asin](IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#asin)
- [filters](IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#filters)
- [language\_code](IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#language_name)
- [limit](IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#limit)
- [location\_code](IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#location_name)
- [offset](IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#offset)
- [order\_by](IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#order_by)
- [tag](IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#tag)

## Properties

### asin

• `Optional` **asin**: `string`

product ID
required field
unique product identifier (ASIN) on Amazon;
you can receive the asin parameter by making a separate request to the Amazon Products endpoint

#### Defined in

main.ts:101274

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
["full_metrics.amazon_serp.pos_1",">", 20]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Defined in

main.ts:101320

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

main.ts:101304

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

main.ts:101297

___

### limit

• `Optional` **limit**: `number`

the maximum number of products in the results array
optional field
default value: 100;
maximum value: 1000

#### Defined in

main.ts:101309

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

main.ts:101290

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

main.ts:101282

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned product competitors
optional field
default value: 0
if you specify the 10 value, the first ten product competitors in the results array will be omitted and the data will be provided for the successive product competitors

#### Defined in

main.ts:101341

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
["full_metrics.amazon_serp.pos_1,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["full_metrics.amazon_serp.pos_1,desc","avg_position,desc"]
default rule:
["ranked_serp_element.serp_item.rank_group,asc"]

#### Defined in

main.ts:101336

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:101347
