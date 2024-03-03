[Documentation](../README.md) / [Exports](../modules.md) / IMerchantAmazonReviewsTaskPostRequestInfo

# Interface: IMerchantAmazonReviewsTaskPostRequestInfo

## Implemented by

- [`MerchantAmazonReviewsTaskPostRequestInfo`](../classes/MerchantAmazonReviewsTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [asin](IMerchantAmazonReviewsTaskPostRequestInfo.md#asin)
- [depth](IMerchantAmazonReviewsTaskPostRequestInfo.md#depth)
- [filter\_by\_keyword](IMerchantAmazonReviewsTaskPostRequestInfo.md#filter_by_keyword)
- [filter\_by\_star](IMerchantAmazonReviewsTaskPostRequestInfo.md#filter_by_star)
- [format\_type](IMerchantAmazonReviewsTaskPostRequestInfo.md#format_type)
- [language\_code](IMerchantAmazonReviewsTaskPostRequestInfo.md#language_code)
- [language\_name](IMerchantAmazonReviewsTaskPostRequestInfo.md#language_name)
- [location\_code](IMerchantAmazonReviewsTaskPostRequestInfo.md#location_code)
- [location\_coordinate](IMerchantAmazonReviewsTaskPostRequestInfo.md#location_coordinate)
- [location\_name](IMerchantAmazonReviewsTaskPostRequestInfo.md#location_name)
- [media\_type](IMerchantAmazonReviewsTaskPostRequestInfo.md#media_type)
- [pingback\_url](IMerchantAmazonReviewsTaskPostRequestInfo.md#pingback_url)
- [postback\_data](IMerchantAmazonReviewsTaskPostRequestInfo.md#postback_data)
- [postback\_url](IMerchantAmazonReviewsTaskPostRequestInfo.md#postback_url)
- [priority](IMerchantAmazonReviewsTaskPostRequestInfo.md#priority)
- [reviewer\_type](IMerchantAmazonReviewsTaskPostRequestInfo.md#reviewer_type)
- [se\_domain](IMerchantAmazonReviewsTaskPostRequestInfo.md#se_domain)
- [sort\_by](IMerchantAmazonReviewsTaskPostRequestInfo.md#sort_by)
- [tag](IMerchantAmazonReviewsTaskPostRequestInfo.md#tag)

## Properties

### asin

• `Optional` **asin**: `string`

product ID
required field
unique product identifier (ASIN) on Amazon
you can receive the asin parameter by making a separate request to the Amazon Products endpoint

#### Defined in

main.ts:175206

___

### depth

• `Optional` **depth**: `number`

parsing depth
optional field
number of reviews in SERP;
we strongly recommend setting the parsing depth in the multiples of ten, because our system processes ten reviews in a row;
maximum value: 100
default value: 10

#### Defined in

main.ts:175267

___

### filter\_by\_keyword

• `Optional` **filter\_by\_keyword**: `string`

filter reviews by specified keyword
optional field
you can specify up to 300 symbols in this field;
if you use this field, the response will only include reviews that contain the specified keyword

#### Defined in

main.ts:175302

___

### filter\_by\_star

• `Optional` **filter\_by\_star**: `string`

filter reviews by stars
optional field
you can use this field to filter the results;
possible types of filtering:
all_stars — return reviews with any number of stars;
five_star — return five-star reviews only;
four_star — return four-star reviews only;
three_star — return three-star reviews only;
two_star — return two-star reviews only;
one_star — return one-star reviews only;
positive — return positive reviews only;
critical — return critical reviews only;
default rule: all_stars

#### Defined in

main.ts:175297

___

### format\_type

• `Optional` **format\_type**: `string`

filter reviews by product modification
optional field
you can use this field to filter the results;
possible types of filtering:
all_format — return reviews for all product modifications;
current_format — return reviews for the current product modification only;
default rule: all_format;
Note: ASINs vary depending on a product modification. Thus, two modifications of the same product will have two different ASINs. Make sure to specify the right ASIN when setting a task with the current_format parameter

#### Defined in

main.ts:175319

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code parameters by making a separate request to https://api.dataforseo.com/v3/merchant/amazon/languages
example:
en_GB

#### Defined in

main.ts:175253

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name parameters by making a separate request to
https://api.dataforseo.com/v3/merchant/amazon/languages
example:
English (United Kingdom)

#### Defined in

main.ts:175246

___

### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with their location_code parameters by making a separate request to
https://api.dataforseo.com/v3/merchant/amazon/locations
example:
9045969

#### Defined in

main.ts:175229

___

### location\_coordinate

• `Optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9
example:
53.476225,-2.243572,200

#### Defined in

main.ts:175238

___

### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with their location_name parameters by making a separate request to https://api.dataforseo.com/v3/merchant/amazon/locations
example:
HA1,England,United Kingdom

#### Defined in

main.ts:175221

___

### media\_type

• `Optional` **media\_type**: `string`

filter reviews by media type
optional field
you can use this field to filter the results;
possible types of filtering:
all_contents — return text, image, and video reviews;
media_reviews_only — return image and video reviews only;
default rule: all_contents

#### Defined in

main.ts:175310

___

### pingback\_url

• `Optional` **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special symbols in pingback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Defined in

main.ts:175351

___

### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Defined in

main.ts:175341

___

### postback\_url

• `Optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Defined in

main.ts:175335

___

### priority

• `Optional` **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Defined in

main.ts:175214

___

### reviewer\_type

• `Optional` **reviewer\_type**: `string`

filter reviews by reviewer type
optional field
you can use this field to filter the results;
possible types of filtering:
all_reviews — return reviews from all reviewers;
avp_only_reviews — return reviews with the “Verified Purchase” mark only;
default rule: all_reviews

#### Defined in

main.ts:175283

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
amazon.com, amazon.co.uk, amazon.fr, etc.

#### Defined in

main.ts:175260

___

### sort\_by

• `Optional` **sort\_by**: `string`

results sorting parameters
optional field
you can use this field to sort the results;
possible types of sorting:
helpful — sort by helpful reviews;
recent — sort by recent reviews;
default rule: helpful

#### Defined in

main.ts:175275

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:175325
