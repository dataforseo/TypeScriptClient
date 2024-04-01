[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo

# Interface: IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo

## Implemented by

- [`DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](../classes/DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [depth](IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#depth)
- [ignore\_synonyms](IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#ignore_synonyms)
- [include\_seed\_keyword](IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#include_seed_keyword)
- [keyword](IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#keyword)
- [language\_code](IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#language_name)
- [limit](IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#limit)
- [location\_code](IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#location_name)
- [offset](IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#offset)
- [tag](IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#tag)

## Properties

### depth

• `Optional` **depth**: `number`

keyword search depth
optional field
default value: 1;
number of the returned results depends on the value you set in this field;
you can specify a level from 0 to 4;
estimated number of keywords for each level (maximum):
0 – the keyword set in the keyword field
1 – 6 keywords
2 – 42 keywords
3 – 258 keywords
4 – 1554 keywords

#### Defined in

main.ts:101628

___

### ignore\_synonyms

• `Optional` **ignore\_synonyms**: `boolean`

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Defined in

main.ts:101638

___

### include\_seed\_keyword

• `Optional` **include\_seed\_keyword**: `boolean`

include data for the seed keyword
optional field
if set to true, data for the seed keyword specified in the keyword field will be provided in the seed_keyword_data array of the response
default value: false

#### Defined in

main.ts:101633

___

### keyword

• `Optional` **keyword**: `string`

keyword
required field
UTF-8 encoding
a keyword should be at least 3 characters long;
the keywords should be specified in the lowercase format

#### Defined in

main.ts:101584

___

### language\_code

• `Optional` **language\_code**: `string`

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Defined in

main.ts:101616

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_name by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Defined in

main.ts:101609

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Defined in

main.ts:101643

___

### location\_code

• `Optional` **location\_code**: `number`

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
2840

#### Defined in

main.ts:101602

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
United States

#### Defined in

main.ts:101593

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Defined in

main.ts:101648

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:101654
