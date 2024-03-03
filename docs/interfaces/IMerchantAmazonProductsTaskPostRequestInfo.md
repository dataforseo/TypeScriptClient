[Documentation](../README.md) / [Exports](../modules.md) / IMerchantAmazonProductsTaskPostRequestInfo

# Interface: IMerchantAmazonProductsTaskPostRequestInfo

## Hierarchy

- [`IMerchantTaskRequestInfo`](IMerchantTaskRequestInfo.md)

  ↳ **`IMerchantAmazonProductsTaskPostRequestInfo`**

## Implemented by

- [`MerchantAmazonProductsTaskPostRequestInfo`](../classes/MerchantAmazonProductsTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [department](IMerchantAmazonProductsTaskPostRequestInfo.md#department)
- [depth](IMerchantAmazonProductsTaskPostRequestInfo.md#depth)
- [keyword](IMerchantAmazonProductsTaskPostRequestInfo.md#keyword)
- [language\_code](IMerchantAmazonProductsTaskPostRequestInfo.md#language_code)
- [language\_name](IMerchantAmazonProductsTaskPostRequestInfo.md#language_name)
- [location\_code](IMerchantAmazonProductsTaskPostRequestInfo.md#location_code)
- [location\_coordinate](IMerchantAmazonProductsTaskPostRequestInfo.md#location_coordinate)
- [location\_name](IMerchantAmazonProductsTaskPostRequestInfo.md#location_name)
- [max\_crawl\_pages](IMerchantAmazonProductsTaskPostRequestInfo.md#max_crawl_pages)
- [pingback\_url](IMerchantAmazonProductsTaskPostRequestInfo.md#pingback_url)
- [postback\_data](IMerchantAmazonProductsTaskPostRequestInfo.md#postback_data)
- [postback\_url](IMerchantAmazonProductsTaskPostRequestInfo.md#postback_url)
- [price\_max](IMerchantAmazonProductsTaskPostRequestInfo.md#price_max)
- [price\_min](IMerchantAmazonProductsTaskPostRequestInfo.md#price_min)
- [priority](IMerchantAmazonProductsTaskPostRequestInfo.md#priority)
- [se\_domain](IMerchantAmazonProductsTaskPostRequestInfo.md#se_domain)
- [search\_param](IMerchantAmazonProductsTaskPostRequestInfo.md#search_param)
- [sort\_by](IMerchantAmazonProductsTaskPostRequestInfo.md#sort_by)
- [tag](IMerchantAmazonProductsTaskPostRequestInfo.md#tag)
- [url](IMerchantAmazonProductsTaskPostRequestInfo.md#url)

## Properties

### department

• `Optional` **department**: `string`

amazon product department
optional field
specify one of the following amazon departments for extracting product listings:
"Arts & Crafts", "Automotive", "Baby", "Beauty & Personal Care", "Books", "Computers", "Digital Music", "Electronics", "Kindle Store", "Prime Video", "Women's Fashion", "Men's Fashion", "Girls' Fashion", "Boys' Fashion", "Deals", "Health & Household", "Home & Kitchen", "Industrial & Scientific", "Luggage", "Movies & TV", "Music, CDs & Vinyl", "Pet Supplies", "Software", "Sports & Outdoors", "Tools & Home Improvement", "Toys & Games", "Video Games"

#### Defined in

main.ts:170465

___

### depth

• `Optional` **depth**: `number`

parsing depth
optional field
number of results to be retrieved from the Google Shopping results page
default value: 100
max value: 700
Note: your account will be billed per each results page containing up to 100 results;
thus, setting a depth above 100 may result in additional charges if the search engine returns more than 100 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Inherited from

[IMerchantTaskRequestInfo](IMerchantTaskRequestInfo.md).[depth](IMerchantTaskRequestInfo.md#depth)

#### Defined in

main.ts:142987

___

### keyword

• `Optional` **keyword**: `string`

keyword
required field
you can also specify UPC/EAN in this field and we will return the results Google Shopping provides for the specified barcode number;
you can specify up to 700 symbols in the keyword filed
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;

#### Inherited from

[IMerchantTaskRequestInfo](IMerchantTaskRequestInfo.md).[keyword](IMerchantTaskRequestInfo.md#keyword)

#### Defined in

main.ts:142920

___

### language\_code

• `Optional` **language\_code**: `string`

language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available Google Shopping languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/merchant/google/languages
example:
en

#### Inherited from

[IMerchantTaskRequestInfo](IMerchantTaskRequestInfo.md).[language_code](IMerchantTaskRequestInfo.md#language_code)

#### Defined in

main.ts:142971

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available Google Shopping languages with their language_name by making a separate request to the https://api.dataforseo.com/v3/merchant/google/languages
example:
English

#### Inherited from

[IMerchantTaskRequestInfo](IMerchantTaskRequestInfo.md).[language_name](IMerchantTaskRequestInfo.md#language_name)

#### Defined in

main.ts:142964

___

### location\_code

• `Optional` **location\_code**: `number`

location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available Google Shopping locations with their location_code by making a separate request to the https://api.dataforseo.com/v3/merchant/google/locations
example:
2840

#### Inherited from

[IMerchantTaskRequestInfo](IMerchantTaskRequestInfo.md).[location_code](IMerchantTaskRequestInfo.md#location_code)

#### Defined in

main.ts:142948

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

#### Inherited from

[IMerchantTaskRequestInfo](IMerchantTaskRequestInfo.md).[location_coordinate](IMerchantTaskRequestInfo.md#location_coordinate)

#### Defined in

main.ts:142957

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available Google Shopping locations with their location_name by making a separate request to the https://api.dataforseo.com/v3/merchant/google/locations
example:
London,England,United Kingdom

#### Inherited from

[IMerchantTaskRequestInfo](IMerchantTaskRequestInfo.md).[location_name](IMerchantTaskRequestInfo.md#location_name)

#### Defined in

main.ts:142941

___

### max\_crawl\_pages

• `Optional` **max\_crawl\_pages**: `number`

page crawl limit
optional field
number of search results pages to crawl
max value: 7
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Inherited from

[IMerchantTaskRequestInfo](IMerchantTaskRequestInfo.md).[max_crawl_pages](IMerchantTaskRequestInfo.md#max_crawl_pages)

#### Defined in

main.ts:142994

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

#### Inherited from

[IMerchantTaskRequestInfo](IMerchantTaskRequestInfo.md).[pingback_url](IMerchantTaskRequestInfo.md#pingback_url)

#### Defined in

main.ts:143056

___

### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Inherited from

[IMerchantTaskRequestInfo](IMerchantTaskRequestInfo.md).[postback_data](IMerchantTaskRequestInfo.md#postback_data)

#### Defined in

main.ts:143046

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

#### Inherited from

[IMerchantTaskRequestInfo](IMerchantTaskRequestInfo.md).[postback_url](IMerchantTaskRequestInfo.md#postback_url)

#### Defined in

main.ts:143040

___

### price\_max

• `Optional` **price\_max**: `number`

maximum product price
optional field
maximum price of the returned products listed on Google Shopping for the specified query
example:
100

#### Inherited from

[IMerchantTaskRequestInfo](IMerchantTaskRequestInfo.md).[price_max](IMerchantTaskRequestInfo.md#price_max)

#### Defined in

main.ts:143017

___

### price\_min

• `Optional` **price\_min**: `number`

minimum product price
optional field
minimum price of the returned products listed on Google Shopping for the specified query
example:
5

#### Inherited from

[IMerchantTaskRequestInfo](IMerchantTaskRequestInfo.md).[price_min](IMerchantTaskRequestInfo.md#price_min)

#### Defined in

main.ts:143011

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

#### Inherited from

[IMerchantTaskRequestInfo](IMerchantTaskRequestInfo.md).[priority](IMerchantTaskRequestInfo.md#priority)

#### Defined in

main.ts:142934

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

#### Inherited from

[IMerchantTaskRequestInfo](IMerchantTaskRequestInfo.md).[se_domain](IMerchantTaskRequestInfo.md#se_domain)

#### Defined in

main.ts:142978

___

### search\_param

• `Optional` **search\_param**: `string`

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

#### Inherited from

[IMerchantTaskRequestInfo](IMerchantTaskRequestInfo.md).[search_param](IMerchantTaskRequestInfo.md#search_param)

#### Defined in

main.ts:143005

___

### sort\_by

• `Optional` **sort\_by**: `string`

results sorting rules
optional field
the following sorting rules are supported:
review_score, price_low_to_high, price_high_to_low
example:
sort_by:"review_score"

#### Inherited from

[IMerchantTaskRequestInfo](IMerchantTaskRequestInfo.md).[sort_by](IMerchantTaskRequestInfo.md#sort_by)

#### Defined in

main.ts:143024

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Inherited from

[IMerchantTaskRequestInfo](IMerchantTaskRequestInfo.md).[tag](IMerchantTaskRequestInfo.md#tag)

#### Defined in

main.ts:143030

___

### url

• `Optional` **url**: `string`

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://www.google.com/search?q=iphone&num=100&tbm=shop&ie=UTF-8&oe=UTF-8&tbs=vw%3A1%2Cmr%3A1%2Cprice%3A1%2Cppr_min%3A5&hl=en&gl=US&gws_rd=cr&uule=w+CAIQIFISCQs2MuSEtepUEUK33kOSuTsc

#### Inherited from

[IMerchantTaskRequestInfo](IMerchantTaskRequestInfo.md).[url](IMerchantTaskRequestInfo.md#url)

#### Defined in

main.ts:142926
