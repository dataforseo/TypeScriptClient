[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMerchantAmazonReviewsTaskPostRequestInfo

# Interface: IMerchantAmazonReviewsTaskPostRequestInfo

Defined in: main.ts:196909

## Indexable

\[`key`: `string`\]: `any`

## Properties

### asin?

> `optional` **asin**: `string`

Defined in: main.ts:196914

product ID
required field
unique product identifier (ASIN) on Amazon
you can receive the asin parameter by making a separate request to the Amazon Products endpoint

***

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:196975

parsing depth
optional field
number of reviews in SERP;
we strongly recommend setting the parsing depth in the multiples of ten, because our system processes ten reviews in a row;
maximum value: 50
default value: 10

***

### filter\_by\_keyword?

> `optional` **filter\_by\_keyword**: `string`

Defined in: main.ts:197008

filter reviews by specified keyword
optional field
you can specify up to 300 characters in this field;
if you use this field, the response will only include reviews that contain the specified keyword

***

### filter\_by\_star?

> `optional` **filter\_by\_star**: `string`

Defined in: main.ts:197003

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

***

### format\_type?

> `optional` **format\_type**: `string`

Defined in: main.ts:197025

filter reviews by product modification
optional field
you can use this field to filter the results;
possible types of filtering:
all_format — return reviews for all product modifications;
current_format — return reviews for the current product modification only;
default rule: all_format;
Note: ASINs vary depending on a product modification. Thus, two modifications of the same product will have two different ASINs. Make sure to specify the right ASIN when setting a task with the current_format parameter

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:196961

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code parameters by making a separate request to https://api.dataforseo.com/v3/merchant/amazon/languages
example:
en_GB

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:196954

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name parameters by making a separate request to
https://api.dataforseo.com/v3/merchant/amazon/languages
example:
English (United Kingdom)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:196937

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with their location_code parameters by making a separate request to
https://api.dataforseo.com/v3/merchant/amazon/locations
example:
9045969

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:196946

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9
example:
53.476225,-2.243572,200

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:196929

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with their location_name parameters by making a separate request to https://api.dataforseo.com/v3/merchant/amazon/locations
example:
HA1,England,United Kingdom

***

### media\_type?

> `optional` **media\_type**: `string`

Defined in: main.ts:197016

filter reviews by media type
optional field
you can use this field to filter the results;
possible types of filtering:
all_contents — return text, image, and video reviews;
media_reviews_only — return image and video reviews only;
default rule: all_contents

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:197059

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:197048

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:197042

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:196922

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

***

### reviewer\_type?

> `optional` **reviewer\_type**: `string`

Defined in: main.ts:196989

filter reviews by reviewer type
optional field
you can use this field to filter the results;
possible types of filtering:
all_reviews — return reviews from all reviewers;
avp_only_reviews — return reviews with the “Verified Purchase” mark only;
default rule: all_reviews

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:196968

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
amazon.com, amazon.co.uk, amazon.fr, etc.

***

### sort\_by?

> `optional` **sort\_by**: `string`

Defined in: main.ts:196981

results sorting parameters
optional field
possible types of sorting:
helpful — for now, the only available sorting value;
default rule: helpful

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:197031

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
