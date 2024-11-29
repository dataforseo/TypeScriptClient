[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMerchantGoogleProductsTaskPostRequestInfo

# Interface: IMerchantGoogleProductsTaskPostRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

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

#### Defined in

main.ts:185479

***

### keyword?

> `optional` **keyword**: `string`

keyword
required field
you can specify up to 700 characters in the keyword filed
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Defined in

main.ts:185411

***

### language\_code?

> `optional` **language\_code**: `string`

language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available Google Shopping languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/merchant/google/languages
example:
en

#### Defined in

main.ts:185463

***

### language\_name?

> `optional` **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available Google Shopping languages with their language_name by making a separate request to the https://api.dataforseo.com/v3/merchant/google/languages
example:
English

#### Defined in

main.ts:185456

***

### location\_code?

> `optional` **location\_code**: `number`

location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available Google Shopping locations with their location_code by making a separate request to the https://api.dataforseo.com/v3/merchant/google/locations
example:
2840

#### Defined in

main.ts:185440

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

#### Defined in

main.ts:185449

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available Google Shopping locations with their location_name by making a separate request to the https://api.dataforseo.com/v3/merchant/google/locations
example:
London,England,United Kingdom

#### Defined in

main.ts:185433

***

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

page crawl limit
optional field
number of search results pages to crawl
max value: 7
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Defined in

main.ts:185486

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

#### Defined in

main.ts:185555

***

### postback\_data?

> `optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Defined in

main.ts:185544

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

#### Defined in

main.ts:185538

***

### price\_max?

> `optional` **price\_max**: `number`

maximum product price
optional field
maximum price of the returned products listed on Google Shopping for the specified query
example:
100
Note: if you specify price_max, the search_param parameter will be ignored

#### Defined in

main.ts:185513

***

### price\_min?

> `optional` **price\_min**: `number`

minimum product price
optional field
minimum price of the returned products listed on Google Shopping for the specified query
example:
5
Note: if you specify price_min, the search_param parameter will be ignored

#### Defined in

main.ts:185506

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

#### Defined in

main.ts:185426

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

#### Defined in

main.ts:185470

***

### search\_param?

> `optional` **search\_param**: `string`

additional parameters of the search query
optional field
you can use the following search URL parameters for customizing the search;
example:
&tbs=ppr_min:45 – search for products that cost more than 45 USD;
&tbs=ppr_max:50 – search for products that cost less than 50 USD;
&tbs=p_ord:p – sort by ascending price;
&tbs=p_ord:pd – sort by descending price;
&tbs=p_ord:rv – sort by review score;
&tbs=ppr_max:50,p_ord:rv – sort by review score with the maximum price of 50 USD.;
&udm=28 – use new Google Shopping markup with 40 SERP results returned by default (the cost for one SERP is deducted accordingly);the maximum depth is 200; this parameter must be specified without tbm=shop in the url;
Note that search_param values will be ignored if any of the following parameters are used: price_min, price_max, sort_by

#### Defined in

main.ts:185499

***

### sort\_by?

> `optional` **sort\_by**: `string`

results sorting rules
optional field
the following sorting rules are supported:
review_score, price_low_to_high, price_high_to_low
example:
sort_by:"review_score"
Note: if you specify sort_by, the search_param parameter will be ignored

#### Defined in

main.ts:185521

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:185527

***

### url?

> `optional` **url**: `string`

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
Note: you may use the &udm=28 parameter in the direct URL to use the new Google Shopping markup with 40 SERP results returned by default (the cost for one SERP is deducted accordingly);the maximum depth is 200; this parameter must be specified without tbm=shop ;
example:
https://www.google.com/search?q=fish&hl=en&gl=US&gws_rd=cr&uule=w+CAIQIFISCQs2MuSEtepUEUK33kOSuTsc&udm=28

#### Defined in

main.ts:185418
