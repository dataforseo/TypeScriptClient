[Documentation](../README.md) / [Exports](../modules.md) / MerchantAmazonProductsTaskPostRequestInfo

# Class: MerchantAmazonProductsTaskPostRequestInfo

## Hierarchy

- [`MerchantTaskRequestInfo`](MerchantTaskRequestInfo.md)

  ↳ **`MerchantAmazonProductsTaskPostRequestInfo`**

## Implements

- [`IMerchantAmazonProductsTaskPostRequestInfo`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonProductsTaskPostRequestInfo.md#constructor)

### Properties

- [department](MerchantAmazonProductsTaskPostRequestInfo.md#department)
- [depth](MerchantAmazonProductsTaskPostRequestInfo.md#depth)
- [keyword](MerchantAmazonProductsTaskPostRequestInfo.md#keyword)
- [language\_code](MerchantAmazonProductsTaskPostRequestInfo.md#language_code)
- [language\_name](MerchantAmazonProductsTaskPostRequestInfo.md#language_name)
- [location\_code](MerchantAmazonProductsTaskPostRequestInfo.md#location_code)
- [location\_coordinate](MerchantAmazonProductsTaskPostRequestInfo.md#location_coordinate)
- [location\_name](MerchantAmazonProductsTaskPostRequestInfo.md#location_name)
- [max\_crawl\_pages](MerchantAmazonProductsTaskPostRequestInfo.md#max_crawl_pages)
- [pingback\_url](MerchantAmazonProductsTaskPostRequestInfo.md#pingback_url)
- [postback\_data](MerchantAmazonProductsTaskPostRequestInfo.md#postback_data)
- [postback\_url](MerchantAmazonProductsTaskPostRequestInfo.md#postback_url)
- [price\_max](MerchantAmazonProductsTaskPostRequestInfo.md#price_max)
- [price\_min](MerchantAmazonProductsTaskPostRequestInfo.md#price_min)
- [priority](MerchantAmazonProductsTaskPostRequestInfo.md#priority)
- [se\_domain](MerchantAmazonProductsTaskPostRequestInfo.md#se_domain)
- [search\_param](MerchantAmazonProductsTaskPostRequestInfo.md#search_param)
- [sort\_by](MerchantAmazonProductsTaskPostRequestInfo.md#sort_by)
- [tag](MerchantAmazonProductsTaskPostRequestInfo.md#tag)
- [url](MerchantAmazonProductsTaskPostRequestInfo.md#url)

### Methods

- [init](MerchantAmazonProductsTaskPostRequestInfo.md#init)
- [toJSON](MerchantAmazonProductsTaskPostRequestInfo.md#tojson)
- [fromJS](MerchantAmazonProductsTaskPostRequestInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonProductsTaskPostRequestInfo**(`data?`): [`MerchantAmazonProductsTaskPostRequestInfo`](MerchantAmazonProductsTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonProductsTaskPostRequestInfo`](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md) |

#### Returns

[`MerchantAmazonProductsTaskPostRequestInfo`](MerchantAmazonProductsTaskPostRequestInfo.md)

#### Overrides

[MerchantTaskRequestInfo](MerchantTaskRequestInfo.md).[constructor](MerchantTaskRequestInfo.md#constructor)

#### Defined in

main.ts:175759

## Properties

### department

• `Optional` **department**: `string`

amazon product department
optional field
specify one of the following amazon departments for extracting product listings:
"Arts & Crafts", "Automotive", "Baby", "Beauty & Personal Care", "Books", "Computers", "Digital Music", "Electronics", "Kindle Store", "Prime Video", "Women's Fashion", "Men's Fashion", "Girls' Fashion", "Boys' Fashion", "Deals", "Health & Household", "Home & Kitchen", "Industrial & Scientific", "Luggage", "Movies & TV", "Music, CDs & Vinyl", "Pet Supplies", "Software", "Sports & Outdoors", "Tools & Home Improvement", "Toys & Games", "Video Games"

#### Implementation of

[IMerchantAmazonProductsTaskPostRequestInfo](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[department](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#department)

#### Defined in

main.ts:175755

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

#### Implementation of

[IMerchantAmazonProductsTaskPostRequestInfo](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[depth](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#depth)

#### Inherited from

[MerchantTaskRequestInfo](MerchantTaskRequestInfo.md).[depth](MerchantTaskRequestInfo.md#depth)

#### Defined in

main.ts:148050

___

### keyword

• `Optional` **keyword**: `string`

keyword
required field
you can also specify UPC/EAN in this field and we will return the results Google Shopping provides for the specified barcode number;
you can specify up to 700 symbols in the keyword filed
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;

#### Implementation of

[IMerchantAmazonProductsTaskPostRequestInfo](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[keyword](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#keyword)

#### Inherited from

[MerchantTaskRequestInfo](MerchantTaskRequestInfo.md).[keyword](MerchantTaskRequestInfo.md#keyword)

#### Defined in

main.ts:147983

___

### language\_code

• `Optional` **language\_code**: `string`

language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available Google Shopping languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/merchant/google/languages
example:
en

#### Implementation of

[IMerchantAmazonProductsTaskPostRequestInfo](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[language_code](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#language_code)

#### Inherited from

[MerchantTaskRequestInfo](MerchantTaskRequestInfo.md).[language_code](MerchantTaskRequestInfo.md#language_code)

#### Defined in

main.ts:148034

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available Google Shopping languages with their language_name by making a separate request to the https://api.dataforseo.com/v3/merchant/google/languages
example:
English

#### Implementation of

[IMerchantAmazonProductsTaskPostRequestInfo](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[language_name](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#language_name)

#### Inherited from

[MerchantTaskRequestInfo](MerchantTaskRequestInfo.md).[language_name](MerchantTaskRequestInfo.md#language_name)

#### Defined in

main.ts:148027

___

### location\_code

• `Optional` **location\_code**: `number`

location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available Google Shopping locations with their location_code by making a separate request to the https://api.dataforseo.com/v3/merchant/google/locations
example:
2840

#### Implementation of

[IMerchantAmazonProductsTaskPostRequestInfo](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[location_code](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#location_code)

#### Inherited from

[MerchantTaskRequestInfo](MerchantTaskRequestInfo.md).[location_code](MerchantTaskRequestInfo.md#location_code)

#### Defined in

main.ts:148011

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

#### Implementation of

[IMerchantAmazonProductsTaskPostRequestInfo](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[location_coordinate](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#location_coordinate)

#### Inherited from

[MerchantTaskRequestInfo](MerchantTaskRequestInfo.md).[location_coordinate](MerchantTaskRequestInfo.md#location_coordinate)

#### Defined in

main.ts:148020

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available Google Shopping locations with their location_name by making a separate request to the https://api.dataforseo.com/v3/merchant/google/locations
example:
London,England,United Kingdom

#### Implementation of

[IMerchantAmazonProductsTaskPostRequestInfo](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[location_name](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#location_name)

#### Inherited from

[MerchantTaskRequestInfo](MerchantTaskRequestInfo.md).[location_name](MerchantTaskRequestInfo.md#location_name)

#### Defined in

main.ts:148004

___

### max\_crawl\_pages

• `Optional` **max\_crawl\_pages**: `number`

page crawl limit
optional field
number of search results pages to crawl
max value: 7
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Implementation of

[IMerchantAmazonProductsTaskPostRequestInfo](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[max_crawl_pages](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#max_crawl_pages)

#### Inherited from

[MerchantTaskRequestInfo](MerchantTaskRequestInfo.md).[max_crawl_pages](MerchantTaskRequestInfo.md#max_crawl_pages)

#### Defined in

main.ts:148057

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

#### Implementation of

[IMerchantAmazonProductsTaskPostRequestInfo](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[pingback_url](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#pingback_url)

#### Inherited from

[MerchantTaskRequestInfo](MerchantTaskRequestInfo.md).[pingback_url](MerchantTaskRequestInfo.md#pingback_url)

#### Defined in

main.ts:148119

___

### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Implementation of

[IMerchantAmazonProductsTaskPostRequestInfo](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[postback_data](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#postback_data)

#### Inherited from

[MerchantTaskRequestInfo](MerchantTaskRequestInfo.md).[postback_data](MerchantTaskRequestInfo.md#postback_data)

#### Defined in

main.ts:148109

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

#### Implementation of

[IMerchantAmazonProductsTaskPostRequestInfo](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[postback_url](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#postback_url)

#### Inherited from

[MerchantTaskRequestInfo](MerchantTaskRequestInfo.md).[postback_url](MerchantTaskRequestInfo.md#postback_url)

#### Defined in

main.ts:148103

___

### price\_max

• `Optional` **price\_max**: `number`

maximum product price
optional field
maximum price of the returned products listed on Google Shopping for the specified query
example:
100

#### Implementation of

[IMerchantAmazonProductsTaskPostRequestInfo](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[price_max](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#price_max)

#### Inherited from

[MerchantTaskRequestInfo](MerchantTaskRequestInfo.md).[price_max](MerchantTaskRequestInfo.md#price_max)

#### Defined in

main.ts:148080

___

### price\_min

• `Optional` **price\_min**: `number`

minimum product price
optional field
minimum price of the returned products listed on Google Shopping for the specified query
example:
5

#### Implementation of

[IMerchantAmazonProductsTaskPostRequestInfo](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[price_min](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#price_min)

#### Inherited from

[MerchantTaskRequestInfo](MerchantTaskRequestInfo.md).[price_min](MerchantTaskRequestInfo.md#price_min)

#### Defined in

main.ts:148074

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

#### Implementation of

[IMerchantAmazonProductsTaskPostRequestInfo](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[priority](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#priority)

#### Inherited from

[MerchantTaskRequestInfo](MerchantTaskRequestInfo.md).[priority](MerchantTaskRequestInfo.md#priority)

#### Defined in

main.ts:147997

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

#### Implementation of

[IMerchantAmazonProductsTaskPostRequestInfo](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[se_domain](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#se_domain)

#### Inherited from

[MerchantTaskRequestInfo](MerchantTaskRequestInfo.md).[se_domain](MerchantTaskRequestInfo.md#se_domain)

#### Defined in

main.ts:148041

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

#### Implementation of

[IMerchantAmazonProductsTaskPostRequestInfo](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[search_param](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#search_param)

#### Inherited from

[MerchantTaskRequestInfo](MerchantTaskRequestInfo.md).[search_param](MerchantTaskRequestInfo.md#search_param)

#### Defined in

main.ts:148068

___

### sort\_by

• `Optional` **sort\_by**: `string`

results sorting rules
optional field
the following sorting rules are supported:
review_score, price_low_to_high, price_high_to_low
example:
sort_by:"review_score"

#### Implementation of

[IMerchantAmazonProductsTaskPostRequestInfo](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[sort_by](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#sort_by)

#### Inherited from

[MerchantTaskRequestInfo](MerchantTaskRequestInfo.md).[sort_by](MerchantTaskRequestInfo.md#sort_by)

#### Defined in

main.ts:148087

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IMerchantAmazonProductsTaskPostRequestInfo](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[tag](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#tag)

#### Inherited from

[MerchantTaskRequestInfo](MerchantTaskRequestInfo.md).[tag](MerchantTaskRequestInfo.md#tag)

#### Defined in

main.ts:148093

___

### url

• `Optional` **url**: `string`

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://www.google.com/search?q=iphone&num=100&tbm=shop&ie=UTF-8&oe=UTF-8&tbs=vw%3A1%2Cmr%3A1%2Cprice%3A1%2Cppr_min%3A5&hl=en&gl=US&gws_rd=cr&uule=w+CAIQIFISCQs2MuSEtepUEUK33kOSuTsc

#### Implementation of

[IMerchantAmazonProductsTaskPostRequestInfo](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md).[url](../interfaces/IMerchantAmazonProductsTaskPostRequestInfo.md#url)

#### Inherited from

[MerchantTaskRequestInfo](MerchantTaskRequestInfo.md).[url](MerchantTaskRequestInfo.md#url)

#### Defined in

main.ts:147989

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[MerchantTaskRequestInfo](MerchantTaskRequestInfo.md).[init](MerchantTaskRequestInfo.md#init)

#### Defined in

main.ts:175763

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[MerchantTaskRequestInfo](MerchantTaskRequestInfo.md).[toJSON](MerchantTaskRequestInfo.md#tojson)

#### Defined in

main.ts:175781

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonProductsTaskPostRequestInfo`](MerchantAmazonProductsTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonProductsTaskPostRequestInfo`](MerchantAmazonProductsTaskPostRequestInfo.md)

#### Overrides

[MerchantTaskRequestInfo](MerchantTaskRequestInfo.md).[fromJS](MerchantTaskRequestInfo.md#fromjs)

#### Defined in

main.ts:175774
