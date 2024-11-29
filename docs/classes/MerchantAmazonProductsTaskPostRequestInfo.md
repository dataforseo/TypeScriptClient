[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonProductsTaskPostRequestInfo

# Class: MerchantAmazonProductsTaskPostRequestInfo

## Implements

- [`IMerchantAmazonProductsTaskPostRequestInfo`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonProductsTaskPostRequestInfo()

> **new MerchantAmazonProductsTaskPostRequestInfo**(`data`?): [`MerchantAmazonProductsTaskPostRequestInfo`](MerchantAmazonProductsTaskPostRequestInfo.md)

#### Parameters

##### data?

[`IMerchantAmazonProductsTaskPostRequestInfo`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md)

#### Returns

[`MerchantAmazonProductsTaskPostRequestInfo`](MerchantAmazonProductsTaskPostRequestInfo.md)

#### Defined in

main.ts:191822

## Properties

### department?

> `optional` **department**: `string`

amazon product department
optional field
specify one of the following amazon departments for extracting product listings:
"Arts & Crafts", "Automotive", "Baby", "Beauty & Personal Care", "Books", "Computers", "Digital Music", "Electronics", "Kindle Store", "Prime Video", "Women's Fashion", "Men's Fashion", "Girls' Fashion", "Boys' Fashion", "Deals", "Health & Household", "Home & Kitchen", "Industrial & Scientific", "Luggage", "Movies & TV", "Music, CDs & Vinyl", "Pet Supplies", "Software", "Sports & Outdoors", "Tools & Home Improvement", "Toys & Games", "Video Games"

#### Implementation of

[`IMerchantAmazonProductsTaskPostRequestInfo`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[`department`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#department)

#### Defined in

main.ts:191748

***

### depth?

> `optional` **depth**: `number`

parsing depth
optional field
number of results to be retrieved from the Amazon results page
default value: 100
max value: 700
Note: your account will be billed per each results page containing up to 100 results;
thus, setting a depth above 100 may result in additional charges if the search engine returns more than 100 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`IMerchantAmazonProductsTaskPostRequestInfo`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[`depth`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#depth)

#### Defined in

main.ts:191736

***

### keyword?

> `optional` **keyword**: `string`

keyword
required field
you can specify up to 700 characters in this field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IMerchantAmazonProductsTaskPostRequestInfo`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[`keyword`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#keyword)

#### Defined in

main.ts:191667

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code parameters by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/languages
example:
en_GB

#### Implementation of

[`IMerchantAmazonProductsTaskPostRequestInfo`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[`language_code`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#language_code)

#### Defined in

main.ts:191720

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name parameters by making a separate request to the
https://api.dataforseo.com/v3/merchant/amazon/languages
example:
English (United Kingdom)

#### Implementation of

[`IMerchantAmazonProductsTaskPostRequestInfo`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[`language_name`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#language_name)

#### Defined in

main.ts:191713

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with their location_code parameters by making a separate request to the
https://api.dataforseo.com/v3/merchant/amazon/locations
example:
9045969

#### Implementation of

[`IMerchantAmazonProductsTaskPostRequestInfo`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[`location_code`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#location_code)

#### Defined in

main.ts:191696

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

[`IMerchantAmazonProductsTaskPostRequestInfo`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#location_coordinate)

#### Defined in

main.ts:191705

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with their location_name parameters by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/locations
example:
HA1,England,United Kingdom

#### Implementation of

[`IMerchantAmazonProductsTaskPostRequestInfo`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[`location_name`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#location_name)

#### Defined in

main.ts:191688

***

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

page crawl limit
optional field
number of search results pages to crawl
max value: 7
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Implementation of

[`IMerchantAmazonProductsTaskPostRequestInfo`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[`max_crawl_pages`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#max_crawl_pages)

#### Defined in

main.ts:191743

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
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`IMerchantAmazonProductsTaskPostRequestInfo`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#pingback_url)

#### Defined in

main.ts:191818

***

### postback\_data?

> `optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Implementation of

[`IMerchantAmazonProductsTaskPostRequestInfo`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[`postback_data`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#postback_data)

#### Defined in

main.ts:191807

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
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`IMerchantAmazonProductsTaskPostRequestInfo`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[`postback_url`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#postback_url)

#### Defined in

main.ts:191801

***

### price\_max?

> `optional` **price\_max**: `number`

maximum product price
optional field
maximum price of the returned products listed on Amazon for the specified query
example:
100
Note: if you specify price_max, the search_param parameter will be ignored

#### Implementation of

[`IMerchantAmazonProductsTaskPostRequestInfo`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[`price_max`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#price_max)

#### Defined in

main.ts:191776

***

### price\_min?

> `optional` **price\_min**: `number`

minimum product price
optional field
minimum price of the returned products listed on Amazon for the specified query
example:
5
Note: if you specify price_min, the search_param parameter will be ignored

#### Implementation of

[`IMerchantAmazonProductsTaskPostRequestInfo`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[`price_min`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#price_min)

#### Defined in

main.ts:191769

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

[`IMerchantAmazonProductsTaskPostRequestInfo`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[`priority`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#priority)

#### Defined in

main.ts:191681

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

[`IMerchantAmazonProductsTaskPostRequestInfo`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[`se_domain`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#se_domain)

#### Defined in

main.ts:191727

***

### search\_param?

> `optional` **search\_param**: `string`

additional parameters of the search query
optional field
you can use the following Amazon search URL parameters for customizing the search
example:
&low-price=52 – search for products that cost more than 52 USD;
&high-price=45 – search for products that cost less than 45 USD;
&sort=relevancerank – sort results by relevance;
&sort=featured-rank – sort results by featured products;
&sort=price-asc-rank – sort by ascending price;
&sort=price-desc-rank – sort by descending price;
&sort=review-rank – sort by the average customer reviews value;
&sort=date-desc-rank – sort by the newest arrival
Note that search_param values will be ignored if any of the following parameters is used: price_min, price_max, sort_by

#### Implementation of

[`IMerchantAmazonProductsTaskPostRequestInfo`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[`search_param`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#search_param)

#### Defined in

main.ts:191762

***

### sort\_by?

> `optional` **sort\_by**: `string`

results sorting rules
optional field
the following sorting rules are supported:
relevance, price_low_to_high, price_high_to_low, featured, avg_customer_review, newest_arrival
example:
sort_by:"relevance"
Note: if you specify sort_by, the search_param parameter will be ignored

#### Implementation of

[`IMerchantAmazonProductsTaskPostRequestInfo`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[`sort_by`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#sort_by)

#### Defined in

main.ts:191784

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IMerchantAmazonProductsTaskPostRequestInfo`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[`tag`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#tag)

#### Defined in

main.ts:191790

***

### url?

> `optional` **url**: `string`

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://www.amazon.com/s/?field-keywords=shoes&language=en_US

#### Implementation of

[`IMerchantAmazonProductsTaskPostRequestInfo`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[`url`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#url)

#### Defined in

main.ts:191673

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:191831

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:191867

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonProductsTaskPostRequestInfo`](MerchantAmazonProductsTaskPostRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonProductsTaskPostRequestInfo`](MerchantAmazonProductsTaskPostRequestInfo.md)

#### Defined in

main.ts:191860
