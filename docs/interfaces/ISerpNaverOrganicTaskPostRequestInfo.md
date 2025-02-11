[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpNaverOrganicTaskPostRequestInfo

# Interface: ISerpNaverOrganicTaskPostRequestInfo

Defined in: main.ts:80813

## Indexable

\[`key`: `string`\]: `any`

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:80845

parsing depth
optional field
number of results in SERP
default value: 100
max value: 700
Note: your account will be billed per each SERP containing up to 100 results;
thus, setting a depth above 100 may result in additional charges if the search engine returns more than 100 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:80857

device type
optional field
can take the values:desktop, mobile
default value: desktop

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:80821

keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

***

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

Defined in: main.ts:80852

page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:80864

device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:80909

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

Defined in: main.ts:80898

postback_url datatype
required field if you specify postback_url
corresponds to the function you used for setting a task
possible values:
regular, advanced, html

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:80892

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

Defined in: main.ts:80836

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:80871

search engine domain
optional field
we choose the relevant search engine domain automatically
however, you can set a custom search engine domain in this field
example:
search.naver.com

***

### search\_param?

> `optional` **search\_param**: `string`

Defined in: main.ts:80875

additional parameters of the search query
optional field
get the list of available parameters and additional details here

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:80881

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:80828

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields
in most cases, we wouldn’t recommend using this method;
example:
https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=iphone
