[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ISerpTaskRequestInfo

# Interface: ISerpTaskRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### browser\_screen\_height?

> `optional` **browser\_screen\_height**: `number`

browser screen height
optional field
you can set a custom browser screen height to calculate pixel rankings for a particular device;
by default, the parameter is set to:
1080 for desktop;
640 for mobile on android;
812 for mobile on iOS;
Note: to use this parameter, set calculate_rectangles to true

#### Defined in

<<<<<<< HEAD
main.ts:224851
=======
main.ts:224884
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### browser\_screen\_resolution\_ratio?

> `optional` **browser\_screen\_resolution\_ratio**: `number`

browser screen resolution ratio
optional field
you can set a custom browser screen resolution ratio to calculate pixel rankings for a particular device;
by default, the parameter is set to:
1 for desktop;
3 for mobile on android;
3 for mobile on iOS;
Note: to use this parameter, set calculate_rectangles to true

#### Defined in

<<<<<<< HEAD
main.ts:224860
=======
main.ts:224893
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### browser\_screen\_width?

> `optional` **browser\_screen\_width**: `number`

browser screen width
optional field
you can set a custom browser screen width to calculate pixel rankings for a particular device;
by default, the parameter is set to:
1920 for desktop;
360 for mobile on android;
375 for mobile on iOS;
Note: to use this parameter, set calculate_rectangles to true

#### Defined in

<<<<<<< HEAD
main.ts:224842
=======
main.ts:224875
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### calculate\_rectangles?

> `optional` **calculate\_rectangles**: `boolean`

calcualte pixel rankings for SERP elements in advanced results
optional field
pixel ranking refers to the distance between the result snippet and top left corner of the screen;
Visit Help Center to learn more>>
by default, the parameter is set to false
Note: if set to true, the charge per task will be multiplied by 2

#### Defined in

<<<<<<< HEAD
main.ts:224833
=======
main.ts:224866
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### depth?

> `optional` **depth**: `number`

parsing depth
optional field
number of results in SERP
default value: 100
max value: 700
Note: your account will be billed per each SERP containing up to 100 results;
thus, setting a depth above 100 may result in additional charges if the search engine returns more than 100 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Defined in

<<<<<<< HEAD
main.ts:224756
=======
main.ts:224789
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### device?

> `optional` **device**: `string`

device type
optional field
can take the values:desktop, mobile
default value: desktop

#### Defined in

<<<<<<< HEAD
main.ts:224813
=======
main.ts:224846
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### expand\_ai\_overview?

> `optional` **expand\_ai\_overview**: `boolean`

expand ai overview
optional field
set to true to expand the ai_overview item;
default value: false;
Note: this parameter applies only to HTML task results

#### Defined in

<<<<<<< HEAD
main.ts:224881
=======
main.ts:224914
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### group\_organic\_results?

> `optional` **group\_organic\_results**: `boolean`

display related results
optional field
if set to true, the related_result element in the response will be provided as a snippet of its parent organic result;
if set to false, the related_result element will be provided as a separate organic result;
default value: true

#### Defined in

<<<<<<< HEAD
main.ts:224826
=======
main.ts:224859
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### keyword?

> `optional` **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”;
if this field contains such parameters as ‘allinanchor:’, ‘allintext:’, ‘allintitle:’, ‘allinurl:’, ‘define:’, ‘filetype:’, ‘id:’, ‘inanchor:’, ‘info:’, ‘intext:’, ‘intitle:’, ‘inurl:’, ‘link:’, ‘site:’, the charge per task will be multiplied by 5
Note: queries containing the ‘cache:’ parameter are not supported and will return a validation error

#### Defined in

<<<<<<< HEAD
main.ts:224733
=======
main.ts:224766
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Defined in

<<<<<<< HEAD
main.ts:224801
=======
main.ts:224834
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Defined in

<<<<<<< HEAD
main.ts:224794
=======
main.ts:224827
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### load\_async\_ai\_overview?

> `optional` **load\_async\_ai\_overview**: `boolean`

load asynchronous ai overview
optional field
set to true to obtain ai_overview items is SERPs even if they are loaded asynchronically;
if set to false, you will only obtain ai_overview items from cache;
default value: false
Note your account will be billed $0.0006-$0.0012 extra for each request, depending on the priority;
if the element is absent or contains "asynchronous_ai_overview": false, all extra charges will be returned to your account balance

#### Defined in

<<<<<<< HEAD
main.ts:224875
=======
main.ts:224908
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Defined in

<<<<<<< HEAD
main.ts:224777
=======
main.ts:224810
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9 (mm)
the maximum value for “radius”: 199999 (mm)
example:
53.476225,-2.243572,200

#### Defined in

<<<<<<< HEAD
main.ts:224787
=======
main.ts:224820
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

#### Defined in

<<<<<<< HEAD
main.ts:224770
=======
main.ts:224803
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Defined in

<<<<<<< HEAD
main.ts:224763
=======
main.ts:224796
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### os?

> `optional` **os**: `string`

device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android

#### Defined in

<<<<<<< HEAD
main.ts:224820
=======
main.ts:224853
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### people\_also\_ask\_click\_depth?

> `optional` **people\_also\_ask\_click\_depth**: `number`

clicks on the corresponding element
optional field
specify the click depth on the people_also_ask element to get additional people_also_ask_element items;
Note your account will be billed $0.00015 extra for each click regardless of task priority;
if the element is absent or we perform fewer clicks than you specified, all extra charges will be returned to your account balance
possible values: from 1 to 4

#### Defined in

<<<<<<< HEAD
main.ts:224867
=======
main.ts:224900
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

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

#### Defined in

<<<<<<< HEAD
main.ts:224917
=======
main.ts:224950
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### postback\_data?

> `optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
regular, advanced, html

#### Defined in

<<<<<<< HEAD
main.ts:224907
=======
main.ts:224940
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### postback\_url?

> `optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Defined in

<<<<<<< HEAD
main.ts:224901
=======
main.ts:224934
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### priority?

> `optional` **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default);
2 – high execution priority
You will be additionally charged for the tasks with high execution priority;
The cost can be calculated on the Pricing page

#### Defined in

<<<<<<< HEAD
main.ts:224747
=======
main.ts:224780
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

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

<<<<<<< HEAD
main.ts:224808
=======
main.ts:224841
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### search\_param?

> `optional` **search\_param**: `string`

additional parameters of the search query
optional field
get the list of available parameters and additional details here

#### Defined in

<<<<<<< HEAD
main.ts:224885
=======
main.ts:224918
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

<<<<<<< HEAD
main.ts:224891
=======
main.ts:224924
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### url?

> `optional` **url**: `string`

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://www.google.co.uk/search?q=%20rank%20tracker%20api&hl=en&gl=GB&uule=w+CAIQIFISCXXeIa8LoNhHEZkq1d1aOpZS

#### Defined in

<<<<<<< HEAD
main.ts:224739
=======
main.ts:224772
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be
