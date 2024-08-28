[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / MerchantTaskRequestInfo

# Class: MerchantTaskRequestInfo

## Extended by

- [`MerchantAmazonProductsTaskPostRequestInfo`](MerchantAmazonProductsTaskPostRequestInfo.md)

## Implements

- [`IMerchantTaskRequestInfo`](../interfaces/IMerchantTaskRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantTaskRequestInfo()

> **new MerchantTaskRequestInfo**(`data`?): [`MerchantTaskRequestInfo`](MerchantTaskRequestInfo.md)

#### Parameters

• **data?**: [`IMerchantTaskRequestInfo`](../interfaces/IMerchantTaskRequestInfo.md)

#### Returns

[`MerchantTaskRequestInfo`](MerchantTaskRequestInfo.md)

#### Defined in

main.ts:156083

## Properties

### depth?

> `optional` **depth**: `number`

parsing depth
optional field
number of results to be retrieved from the Google Shopping results page
default value: 100
max value: 700
Note: your account will be billed per each results page containing up to 100 results;
thus, setting a depth above 100 may result in additional charges if the search engine returns more than 100 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`IMerchantTaskRequestInfo`](../interfaces/IMerchantTaskRequestInfo.md).[`depth`](../interfaces/IMerchantTaskRequestInfo.md#depth)

#### Defined in

main.ts:156010

***

### keyword?

> `optional` **keyword**: `string`

keyword
required field
you can also specify UPC/EAN in this field and we will return the results Google Shopping provides for the specified barcode number;
you can specify up to 700 symbols in the keyword filed
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;

#### Implementation of

[`IMerchantTaskRequestInfo`](../interfaces/IMerchantTaskRequestInfo.md).[`keyword`](../interfaces/IMerchantTaskRequestInfo.md#keyword)

#### Defined in

main.ts:155943

***

### language\_code?

> `optional` **language\_code**: `string`

language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available Google Shopping languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/merchant/google/languages
example:
en

#### Implementation of

[`IMerchantTaskRequestInfo`](../interfaces/IMerchantTaskRequestInfo.md).[`language_code`](../interfaces/IMerchantTaskRequestInfo.md#language_code)

#### Defined in

main.ts:155994

***

### language\_name?

> `optional` **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available Google Shopping languages with their language_name by making a separate request to the https://api.dataforseo.com/v3/merchant/google/languages
example:
English

#### Implementation of

[`IMerchantTaskRequestInfo`](../interfaces/IMerchantTaskRequestInfo.md).[`language_name`](../interfaces/IMerchantTaskRequestInfo.md#language_name)

#### Defined in

main.ts:155987

***

### location\_code?

> `optional` **location\_code**: `number`

location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available Google Shopping locations with their location_code by making a separate request to the https://api.dataforseo.com/v3/merchant/google/locations
example:
2840

#### Implementation of

[`IMerchantTaskRequestInfo`](../interfaces/IMerchantTaskRequestInfo.md).[`location_code`](../interfaces/IMerchantTaskRequestInfo.md#location_code)

#### Defined in

main.ts:155971

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

[`IMerchantTaskRequestInfo`](../interfaces/IMerchantTaskRequestInfo.md).[`location_coordinate`](../interfaces/IMerchantTaskRequestInfo.md#location_coordinate)

#### Defined in

main.ts:155980

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available Google Shopping locations with their location_name by making a separate request to the https://api.dataforseo.com/v3/merchant/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`IMerchantTaskRequestInfo`](../interfaces/IMerchantTaskRequestInfo.md).[`location_name`](../interfaces/IMerchantTaskRequestInfo.md#location_name)

#### Defined in

main.ts:155964

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

[`IMerchantTaskRequestInfo`](../interfaces/IMerchantTaskRequestInfo.md).[`max_crawl_pages`](../interfaces/IMerchantTaskRequestInfo.md#max_crawl_pages)

#### Defined in

main.ts:156017

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

[`IMerchantTaskRequestInfo`](../interfaces/IMerchantTaskRequestInfo.md).[`pingback_url`](../interfaces/IMerchantTaskRequestInfo.md#pingback_url)

#### Defined in

main.ts:156079

***

### postback\_data?

> `optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Implementation of

[`IMerchantTaskRequestInfo`](../interfaces/IMerchantTaskRequestInfo.md).[`postback_data`](../interfaces/IMerchantTaskRequestInfo.md#postback_data)

#### Defined in

main.ts:156069

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

[`IMerchantTaskRequestInfo`](../interfaces/IMerchantTaskRequestInfo.md).[`postback_url`](../interfaces/IMerchantTaskRequestInfo.md#postback_url)

#### Defined in

main.ts:156063

***

### price\_max?

> `optional` **price\_max**: `number`

maximum product price
optional field
maximum price of the returned products listed on Google Shopping for the specified query
example:
100

#### Implementation of

[`IMerchantTaskRequestInfo`](../interfaces/IMerchantTaskRequestInfo.md).[`price_max`](../interfaces/IMerchantTaskRequestInfo.md#price_max)

#### Defined in

main.ts:156040

***

### price\_min?

> `optional` **price\_min**: `number`

minimum product price
optional field
minimum price of the returned products listed on Google Shopping for the specified query
example:
5

#### Implementation of

[`IMerchantTaskRequestInfo`](../interfaces/IMerchantTaskRequestInfo.md).[`price_min`](../interfaces/IMerchantTaskRequestInfo.md#price_min)

#### Defined in

main.ts:156034

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

[`IMerchantTaskRequestInfo`](../interfaces/IMerchantTaskRequestInfo.md).[`priority`](../interfaces/IMerchantTaskRequestInfo.md#priority)

#### Defined in

main.ts:155957

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

#### Implementation of

[`IMerchantTaskRequestInfo`](../interfaces/IMerchantTaskRequestInfo.md).[`se_domain`](../interfaces/IMerchantTaskRequestInfo.md#se_domain)

#### Defined in

main.ts:156001

***

### search\_param?

> `optional` **search\_param**: `string`

additional parameters of the search query
optional field
you can use the following search URL parameters for customizing the search
example:
&tbs=ppr_min:45 – search for products that cost more than 45 USD;
&tbs=ppr_max:50 – search for products that cost less than 50 USD;
&tbs=p_ord:p – sort by ascending price;
&tbs=p_ord:pd – sort by descending price;
&tbs=p_ord:rv – sort by review score;
&tbs=ppr_max:50,p_ord:rv – sort by review score with the maximum price of 50 USD

#### Implementation of

[`IMerchantTaskRequestInfo`](../interfaces/IMerchantTaskRequestInfo.md).[`search_param`](../interfaces/IMerchantTaskRequestInfo.md#search_param)

#### Defined in

main.ts:156028

***

### sort\_by?

> `optional` **sort\_by**: `string`

results sorting rules
optional field
the following sorting rules are supported:
review_score, price_low_to_high, price_high_to_low
example:
sort_by:"review_score"

#### Implementation of

[`IMerchantTaskRequestInfo`](../interfaces/IMerchantTaskRequestInfo.md).[`sort_by`](../interfaces/IMerchantTaskRequestInfo.md#sort_by)

#### Defined in

main.ts:156047

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IMerchantTaskRequestInfo`](../interfaces/IMerchantTaskRequestInfo.md).[`tag`](../interfaces/IMerchantTaskRequestInfo.md#tag)

#### Defined in

main.ts:156053

***

### url?

> `optional` **url**: `string`

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://www.google.com/search?q=iphone&num=100&tbm=shop&ie=UTF-8&oe=UTF-8&tbs=vw%3A1%2Cmr%3A1%2Cprice%3A1%2Cppr_min%3A5&hl=en&gl=US&gws_rd=cr&uule=w+CAIQIFISCQs2MuSEtepUEUK33kOSuTsc

#### Implementation of

[`IMerchantTaskRequestInfo`](../interfaces/IMerchantTaskRequestInfo.md).[`url`](../interfaces/IMerchantTaskRequestInfo.md#url)

#### Defined in

main.ts:155949

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:156092

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:156127

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantTaskRequestInfo`](MerchantTaskRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantTaskRequestInfo`](MerchantTaskRequestInfo.md)

#### Defined in

main.ts:156120
