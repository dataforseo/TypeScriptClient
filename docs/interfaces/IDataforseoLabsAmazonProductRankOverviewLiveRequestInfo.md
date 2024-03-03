[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo

# Interface: IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo

## Implemented by

- [`DataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](../classes/DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [asins](IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#asins)
- [language\_code](IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#language_name)
- [location\_code](IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#location_name)
- [tag](IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#tag)

## Properties

### asins

• `Optional` **asins**: `string`[]

product IDs to compare
required field
product IDs to receive ranking data for;
the maximum number of ASINs you can specify in this array is 1000;
you can receive the asin parameter by making a separate request to the Amazon Products endpoint

#### Defined in

main.ts:100671

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

main.ts:100701

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

main.ts:100694

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

main.ts:100687

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

main.ts:100679

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:100707
