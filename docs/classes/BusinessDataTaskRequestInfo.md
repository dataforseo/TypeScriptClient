[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataTaskRequestInfo

# Class: BusinessDataTaskRequestInfo

## Extended by

- [`BusinessDataGoogleMyBusinessUpdatesTaskPostRequestInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostRequestInfo.md)
- [`BusinessDataGoogleHotelSearchesTaskPostRequestInfo`](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)
- [`BusinessDataGoogleHotelInfoTaskPostRequestInfo`](BusinessDataGoogleHotelInfoTaskPostRequestInfo.md)
- [`BusinessDataGoogleReviewsTaskPostRequestInfo`](BusinessDataGoogleReviewsTaskPostRequestInfo.md)
- [`BusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo`](BusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md)

## Implements

- [`IBusinessDataTaskRequestInfo`](../interfaces/IBusinessDataTaskRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTaskRequestInfo()

> **new BusinessDataTaskRequestInfo**(`data`?): [`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTaskRequestInfo`](../interfaces/IBusinessDataTaskRequestInfo.md)

#### Returns

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md)

#### Defined in

<<<<<<< HEAD
main.ts:192923
=======
main.ts:192956
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

## Properties

### keyword?

> `optional` **keyword**: `string`

keyword
required field
the keyword you specify should indicate the name of the local establishment
you can specify up to 700 symbols in the keyword filed
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”; 
this field can also be used to pass the following parameters:
cid – a unique, google-defined id of the business entity;
place_id – an identifier of the business entity in Google Maps;
spp – a unique identifier of local services featured in the local_pack element of Google SERP
example:
cid:194604053573767737
place_id:GhIJQWDl0CIeQUARxks3icF8U8A
spp:CgsvZy8xdGN4cWRraBoUChIJPZDrEzLsZIgRoNrpodC5P30
learn more about the cid and place_id identifiers in this help center article

#### Implementation of

[`IBusinessDataTaskRequestInfo`](../interfaces/IBusinessDataTaskRequestInfo.md).[`keyword`](../interfaces/IBusinessDataTaskRequestInfo.md#keyword)

#### Defined in

<<<<<<< HEAD
main.ts:192847
=======
main.ts:192880
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
en

#### Implementation of

[`IBusinessDataTaskRequestInfo`](../interfaces/IBusinessDataTaskRequestInfo.md).[`language_code`](../interfaces/IBusinessDataTaskRequestInfo.md#language_code)

#### Defined in

<<<<<<< HEAD
main.ts:192893
=======
main.ts:192926
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
English

#### Implementation of

[`IBusinessDataTaskRequestInfo`](../interfaces/IBusinessDataTaskRequestInfo.md).[`language_name`](../interfaces/IBusinessDataTaskRequestInfo.md#language_name)

#### Defined in

<<<<<<< HEAD
main.ts:192886
=======
main.ts:192919
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/google/locations
example:
2840

#### Implementation of

[`IBusinessDataTaskRequestInfo`](../interfaces/IBusinessDataTaskRequestInfo.md).[`location_code`](../interfaces/IBusinessDataTaskRequestInfo.md#location_code)

#### Defined in

<<<<<<< HEAD
main.ts:192869
=======
main.ts:192902
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

#### Implementation of

[`IBusinessDataTaskRequestInfo`](../interfaces/IBusinessDataTaskRequestInfo.md).[`location_coordinate`](../interfaces/IBusinessDataTaskRequestInfo.md#location_coordinate)

#### Defined in

<<<<<<< HEAD
main.ts:192879
=======
main.ts:192912
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`IBusinessDataTaskRequestInfo`](../interfaces/IBusinessDataTaskRequestInfo.md).[`location_name`](../interfaces/IBusinessDataTaskRequestInfo.md#location_name)

#### Defined in

<<<<<<< HEAD
main.ts:192862
=======
main.ts:192895
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

[`IBusinessDataTaskRequestInfo`](../interfaces/IBusinessDataTaskRequestInfo.md).[`pingback_url`](../interfaces/IBusinessDataTaskRequestInfo.md#pingback_url)

#### Defined in

<<<<<<< HEAD
main.ts:192919
=======
main.ts:192952
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

[`IBusinessDataTaskRequestInfo`](../interfaces/IBusinessDataTaskRequestInfo.md).[`postback_url`](../interfaces/IBusinessDataTaskRequestInfo.md#postback_url)

#### Defined in

<<<<<<< HEAD
main.ts:192909
=======
main.ts:192942
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

[`IBusinessDataTaskRequestInfo`](../interfaces/IBusinessDataTaskRequestInfo.md).[`priority`](../interfaces/IBusinessDataTaskRequestInfo.md#priority)

#### Defined in

<<<<<<< HEAD
main.ts:192855
=======
main.ts:192888
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

[`IBusinessDataTaskRequestInfo`](../interfaces/IBusinessDataTaskRequestInfo.md).[`tag`](../interfaces/IBusinessDataTaskRequestInfo.md#tag)

#### Defined in

<<<<<<< HEAD
main.ts:192899
=======
main.ts:192932
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
main.ts:192932
=======
main.ts:192965
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
main.ts:192958
=======
main.ts:192991
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md)

#### Defined in

<<<<<<< HEAD
main.ts:192951
=======
main.ts:192984
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be
