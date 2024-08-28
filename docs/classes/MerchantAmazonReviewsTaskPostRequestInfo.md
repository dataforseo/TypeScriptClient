[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / MerchantAmazonReviewsTaskPostRequestInfo

# Class: MerchantAmazonReviewsTaskPostRequestInfo

## Implements

- [`IMerchantAmazonReviewsTaskPostRequestInfo`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonReviewsTaskPostRequestInfo()

> **new MerchantAmazonReviewsTaskPostRequestInfo**(`data`?): [`MerchantAmazonReviewsTaskPostRequestInfo`](MerchantAmazonReviewsTaskPostRequestInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonReviewsTaskPostRequestInfo`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md)

#### Returns

[`MerchantAmazonReviewsTaskPostRequestInfo`](MerchantAmazonReviewsTaskPostRequestInfo.md)

#### Defined in

main.ts:188873

## Properties

### asin?

> `optional` **asin**: `string`

product ID
required field
unique product identifier (ASIN) on Amazon
you can receive the asin parameter by making a separate request to the Amazon Products endpoint

#### Implementation of

[`IMerchantAmazonReviewsTaskPostRequestInfo`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md).[`asin`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md#asin)

#### Defined in

main.ts:188724

***

### depth?

> `optional` **depth**: `number`

parsing depth
optional field
number of reviews in SERP;
we strongly recommend setting the parsing depth in the multiples of ten, because our system processes ten reviews in a row;
maximum value: 100
default value: 10

#### Implementation of

[`IMerchantAmazonReviewsTaskPostRequestInfo`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md).[`depth`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md#depth)

#### Defined in

main.ts:188785

***

### filter\_by\_keyword?

> `optional` **filter\_by\_keyword**: `string`

filter reviews by specified keyword
optional field
you can specify up to 300 symbols in this field;
if you use this field, the response will only include reviews that contain the specified keyword

#### Implementation of

[`IMerchantAmazonReviewsTaskPostRequestInfo`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md).[`filter_by_keyword`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md#filter_by_keyword)

#### Defined in

main.ts:188820

***

### filter\_by\_star?

> `optional` **filter\_by\_star**: `string`

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

#### Implementation of

[`IMerchantAmazonReviewsTaskPostRequestInfo`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md).[`filter_by_star`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md#filter_by_star)

#### Defined in

main.ts:188815

***

### format\_type?

> `optional` **format\_type**: `string`

filter reviews by product modification
optional field
you can use this field to filter the results;
possible types of filtering:
all_format — return reviews for all product modifications;
current_format — return reviews for the current product modification only;
default rule: all_format;
Note: ASINs vary depending on a product modification. Thus, two modifications of the same product will have two different ASINs. Make sure to specify the right ASIN when setting a task with the current_format parameter

#### Implementation of

[`IMerchantAmazonReviewsTaskPostRequestInfo`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md).[`format_type`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md#format_type)

#### Defined in

main.ts:188837

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code parameters by making a separate request to https://api.dataforseo.com/v3/merchant/amazon/languages
example:
en_GB

#### Implementation of

[`IMerchantAmazonReviewsTaskPostRequestInfo`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md).[`language_code`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md#language_code)

#### Defined in

main.ts:188771

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name parameters by making a separate request to
https://api.dataforseo.com/v3/merchant/amazon/languages
example:
English (United Kingdom)

#### Implementation of

[`IMerchantAmazonReviewsTaskPostRequestInfo`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md).[`language_name`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md#language_name)

#### Defined in

main.ts:188764

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with their location_code parameters by making a separate request to
https://api.dataforseo.com/v3/merchant/amazon/locations
example:
9045969

#### Implementation of

[`IMerchantAmazonReviewsTaskPostRequestInfo`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md).[`location_code`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md#location_code)

#### Defined in

main.ts:188747

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9
example:
53.476225,-2.243572,200

#### Implementation of

[`IMerchantAmazonReviewsTaskPostRequestInfo`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md#location_coordinate)

#### Defined in

main.ts:188756

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with their location_name parameters by making a separate request to https://api.dataforseo.com/v3/merchant/amazon/locations
example:
HA1,England,United Kingdom

#### Implementation of

[`IMerchantAmazonReviewsTaskPostRequestInfo`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md).[`location_name`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md#location_name)

#### Defined in

main.ts:188739

***

### media\_type?

> `optional` **media\_type**: `string`

filter reviews by media type
optional field
you can use this field to filter the results;
possible types of filtering:
all_contents — return text, image, and video reviews;
media_reviews_only — return image and video reviews only;
default rule: all_contents

#### Implementation of

[`IMerchantAmazonReviewsTaskPostRequestInfo`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md).[`media_type`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md#media_type)

#### Defined in

main.ts:188828

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special symbols in pingback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[`IMerchantAmazonReviewsTaskPostRequestInfo`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md#pingback_url)

#### Defined in

main.ts:188869

***

### postback\_data?

> `optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Implementation of

[`IMerchantAmazonReviewsTaskPostRequestInfo`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md).[`postback_data`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md#postback_data)

#### Defined in

main.ts:188859

***

### postback\_url?

> `optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[`IMerchantAmazonReviewsTaskPostRequestInfo`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md).[`postback_url`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md#postback_url)

#### Defined in

main.ts:188853

***

### priority?

> `optional` **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IMerchantAmazonReviewsTaskPostRequestInfo`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md).[`priority`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md#priority)

#### Defined in

main.ts:188732

***

### reviewer\_type?

> `optional` **reviewer\_type**: `string`

filter reviews by reviewer type
optional field
you can use this field to filter the results;
possible types of filtering:
all_reviews — return reviews from all reviewers;
avp_only_reviews — return reviews with the “Verified Purchase” mark only;
default rule: all_reviews

#### Implementation of

[`IMerchantAmazonReviewsTaskPostRequestInfo`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md).[`reviewer_type`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md#reviewer_type)

#### Defined in

main.ts:188801

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
amazon.com, amazon.co.uk, amazon.fr, etc.

#### Implementation of

[`IMerchantAmazonReviewsTaskPostRequestInfo`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md).[`se_domain`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md#se_domain)

#### Defined in

main.ts:188778

***

### sort\_by?

> `optional` **sort\_by**: `string`

results sorting parameters
optional field
you can use this field to sort the results;
possible types of sorting:
helpful — sort by helpful reviews;
recent — sort by recent reviews;
default rule: helpful

#### Implementation of

[`IMerchantAmazonReviewsTaskPostRequestInfo`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md).[`sort_by`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md#sort_by)

#### Defined in

main.ts:188793

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IMerchantAmazonReviewsTaskPostRequestInfo`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md).[`tag`](../interfaces/IMerchantAmazonReviewsTaskPostRequestInfo.md#tag)

#### Defined in

main.ts:188843

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:188882

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:188917

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonReviewsTaskPostRequestInfo`](MerchantAmazonReviewsTaskPostRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonReviewsTaskPostRequestInfo`](MerchantAmazonReviewsTaskPostRequestInfo.md)

#### Defined in

main.ts:188910
