[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppDataTaskRequestInfo

# Class: AppDataTaskRequestInfo

## Implements

- [`IAppDataTaskRequestInfo`](../interfaces/IAppDataTaskRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataTaskRequestInfo()

> **new AppDataTaskRequestInfo**(`data`?): [`AppDataTaskRequestInfo`](AppDataTaskRequestInfo.md)

#### Parameters

• **data?**: [`IAppDataTaskRequestInfo`](../interfaces/IAppDataTaskRequestInfo.md)

#### Returns

[`AppDataTaskRequestInfo`](AppDataTaskRequestInfo.md)

#### Defined in

<<<<<<< HEAD
main.ts:173643
=======
main.ts:173676
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

## Properties

### depth?

> `optional` **depth**: `number`

parsing depth
optional field
number of results to be returned to be returned from the Google Play SERP;
we strongly recommend setting the parsing depth in the multiples of 100, because our system processes 100 results in a row;
Note: your account will be billed per each SERP containing up to 100 results;
thus, setting a depth above 100 may result in additional charges if the search engine returns more than 100 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automatically
default value: 100;
maximum value: 200

#### Implementation of

[`IAppDataTaskRequestInfo`](../interfaces/IAppDataTaskRequestInfo.md).[`depth`](../interfaces/IAppDataTaskRequestInfo.md#depth)

#### Defined in

<<<<<<< HEAD
main.ts:173607
=======
main.ts:173640
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### keyword?

> `optional` **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field;
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character);
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”

#### Implementation of

[`IAppDataTaskRequestInfo`](../interfaces/IAppDataTaskRequestInfo.md).[`keyword`](../interfaces/IAppDataTaskRequestInfo.md#keyword)

#### Defined in

<<<<<<< HEAD
main.ts:173561
=======
main.ts:173594
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/app_data/google/languages
example:
en

#### Implementation of

[`IAppDataTaskRequestInfo`](../interfaces/IAppDataTaskRequestInfo.md).[`language_code`](../interfaces/IAppDataTaskRequestInfo.md#language_code)

#### Defined in

<<<<<<< HEAD
main.ts:173589
=======
main.ts:173622
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/app_data/google/languages
example:
English

#### Implementation of

[`IAppDataTaskRequestInfo`](../interfaces/IAppDataTaskRequestInfo.md).[`language_name`](../interfaces/IAppDataTaskRequestInfo.md#language_name)

#### Defined in

<<<<<<< HEAD
main.ts:173582
=======
main.ts:173615
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engine with their location_code by making a separate request to https://api.dataforseo.com/v3/app_data/google/locations
example:
9061121

#### Implementation of

[`IAppDataTaskRequestInfo`](../interfaces/IAppDataTaskRequestInfo.md).[`location_code`](../interfaces/IAppDataTaskRequestInfo.md#location_code)

#### Defined in

<<<<<<< HEAD
main.ts:173575
=======
main.ts:173608
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/app_data/google/locations
example:
West Los Angeles,California,United States

#### Implementation of

[`IAppDataTaskRequestInfo`](../interfaces/IAppDataTaskRequestInfo.md).[`location_name`](../interfaces/IAppDataTaskRequestInfo.md#location_name)

#### Defined in

<<<<<<< HEAD
main.ts:173568
=======
main.ts:173601
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

#### Implementation of

[`IAppDataTaskRequestInfo`](../interfaces/IAppDataTaskRequestInfo.md).[`pingback_url`](../interfaces/IAppDataTaskRequestInfo.md#pingback_url)

#### Defined in

<<<<<<< HEAD
main.ts:173639
=======
main.ts:173672
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### postback\_data?

> `optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Implementation of

[`IAppDataTaskRequestInfo`](../interfaces/IAppDataTaskRequestInfo.md).[`postback_data`](../interfaces/IAppDataTaskRequestInfo.md#postback_data)

#### Defined in

<<<<<<< HEAD
main.ts:173629
=======
main.ts:173662
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

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

[`IAppDataTaskRequestInfo`](../interfaces/IAppDataTaskRequestInfo.md).[`postback_url`](../interfaces/IAppDataTaskRequestInfo.md#postback_url)

#### Defined in

<<<<<<< HEAD
main.ts:173623
=======
main.ts:173656
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

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

[`IAppDataTaskRequestInfo`](../interfaces/IAppDataTaskRequestInfo.md).[`priority`](../interfaces/IAppDataTaskRequestInfo.md#priority)

#### Defined in

<<<<<<< HEAD
main.ts:173597
=======
main.ts:173630
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IAppDataTaskRequestInfo`](../interfaces/IAppDataTaskRequestInfo.md).[`tag`](../interfaces/IAppDataTaskRequestInfo.md#tag)

#### Defined in

<<<<<<< HEAD
main.ts:173613
=======
main.ts:173646
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
main.ts:173652
=======
main.ts:173685
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

<<<<<<< HEAD
main.ts:173679
=======
main.ts:173712
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataTaskRequestInfo`](AppDataTaskRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataTaskRequestInfo`](AppDataTaskRequestInfo.md)

#### Defined in

<<<<<<< HEAD
main.ts:173672
=======
main.ts:173705
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be
